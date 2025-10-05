import { google } from 'googleapis'
import { asyncHandler, ApiError, ApiResponse } from '../utils/index.js'

const youtube = google.youtube({
	version: "v3",
	auth: process.env.API_KEY
})

const getChProfile = async (id) => {
	const response = await youtube.channels.list({
		part: "snippet",
		id: id
	})

	return response
}

const getVideoById = async (id) => {
	try {
		const res = await youtube.videos.list({
			part: "snippet, statistics, contentDetails",
			id: id
		})

		return res

	} catch (error) {
		console.log(error.message);
	}
}

const getVideos = async (req, res) => {

	const pageToken = req.query.pageToken || ""

	try {

		const videos = await youtube.videos.list({
			part: "snippet, statistics, contentDetails",
			chart: "mostPopular",
			regionCode: "IN",
			maxResults: 12,
			pageToken
		})

		const data = videos?.data?.items || []

		const chIds = data.map(item => item.snippet.channelId)

		const chRes = await getChProfile(chIds)

		if (!chRes) throw new ApiError(500, "Something went wrong while fetching the cannel's details")

		const channels = chRes.data?.items || []

		const resData = data.map((item) => {
			const ch = channels.find((c) => c.id === item.snippet.channelId)
			return { ...item, chDetails: ch }
		})

		return res
			.status(200)
			.json({ resData, nextPageToken: videos.data.nextPageToken })

	} catch (error) {
		console.log("hey", error.message);
		if (!res.headersSent) {
			return res
				.status(500)
				.json({ "Something went wrong while fetching the videos": error.message })
		}
	}

}

const getVideo = async (req, res) => {

	try {

		const { vId } = req.params

		const videoRes = await youtube.videos.list({
			part: "snippet, statistics, contentDetails",
			id: vId
		})

		const video = videoRes?.data?.items

		const channelRes = await youtube.channels.list({
			part: "snippet, statistics",
			id: video[0]?.snippet?.channelId
		})

		const channel = channelRes?.data?.items

		const data = { video, channel }

		return res
			.status(200)
			.json(data)

	} catch (error) {
		throw new ApiError(500, `Something went wrong while fetching videos Error:  ${error.message}`)
	}
}

const getSuggestions = asyncHandler(async (req, res) => {

	try {

		const suggestionsRes = await youtube.videos.list({
			part: "snippet, statistics, contentDetails",
			chart: "mostPopular",
			regionCode: "IN",
			maxResults: 18
		})

		const data = suggestionsRes?.data?.items || []

		const chIds = data.map(item => item.snippet.channelId)

		const chRes = await getChProfile(chIds)

		if (!chRes) throw new ApiError(500, "Something went wrong while fetching the cannel's details")

		const channels = chRes.data?.items || []

		const suggestions = data.map((item) => {
			const ch = channels.find((c) => c.id === item.snippet.channelId)
			return { ...item, chDetails: ch }
		})

		return res
			.status(200)
			.json(new ApiResponse(200, { suggestions }, "Got all the suggestions"))

	} catch (error) {
		throw new ApiError(500, `Something went wrong while fetching suggestions Error:  ${error.message}`)
	}
})

const getComments = asyncHandler(async (req, res) => {

	try {

		const pageToken = req.query.pageToken || ""

		const { vId } = req.body

		const commentsRes = await youtube.commentThreads.list({
			part: "snippet",
			videoId: vId,
			maxResults: 12,
			pageToken
		})

		const comments = commentsRes?.data?.items

		const nextPageToken = commentsRes.data.nextPageToken

		return res
			.status(200)
			.json(new ApiResponse(200, { comments, nextPageToken }, "Got all the comments"))

	} catch (error) {
		throw new ApiError(500, `Something went wrong while fetching comments Error:  ${error.message}`)
	}
})

export {
	getVideos,
	getVideo,
	getSuggestions,
	getComments
}