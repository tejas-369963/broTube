import { google } from "googleapis";
import { oauth2Client } from "../utils/gApi.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

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
	const res = await youtube.videos.list({
		part: "snippet, statistics, contentDetails",
		id: id
	})

	return res
}

const getChannelInfo = asyncHandler(async (req, res) => {

	const { channelId } = req.params

	try {
		const channelRes = await youtube.channels.list({
			part: 'snippet, statistics, brandingSettings, contentDetails',
			id: channelId,
			// auth: oauth2Client
		})

		const channelInfo = channelRes.data.items[0]

		return res
			.status(200)
			.json(new ApiResponse(200, { channelInfo }, "Got channel info"))

	} catch (error) {
		throw new ApiError(500, "Something went wrong while fetching channel info")
	}
	// const videosRes = await youtube.playlistItems.list({
	//	 part: "snippet, contentDetails",
	//	 playlistId: uploadsId,
	//	 maxResults: 20,
	//	 // auth: oauth2Client
	// })

	// const playlistsRes = await youtube.playlists.list({
	//	 part: 'snippet,contentDetails',
	//	 channelId: channelId,
	//	 maxResults: 20,
	//	 // auth: oauth2Client
	// });



})

const getChannelVideos = asyncHandler(async (req, res) => {

	const pageToken = req.query.pageToken || ""

	const { id, totalVideos = 12 } = req.body

	try {
		const videosRes = await youtube.playlistItems.list({
			part: "contentDetails",
			playlistId: id,
			maxResults: totalVideos,
			pageToken
		})

		const videosId = videosRes.data.items.map(item => item.contentDetails.videoId)

		const videos = await youtube.videos.list({
			part: "snippet, statistics, contentDetails",
			id: videosId,
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
			.json(new ApiResponse(200, { resData, nextPageToken: videosRes.data.nextPageToken }, "Got channel videos"))

	} catch (error) {
		console.log("Error: ", error.message);
		throw new ApiError(500, "Something went wrong while fetching channel videos")
	}

	// const playlistsRes = await youtube.playlists.list({
	//	 part: 'snippet,contentDetails',
	//	 channelId: channelId,
	//	 maxResults: 20,
	//	 // auth: oauth2Client
	// });



})

const getChannelPlaylists = asyncHandler(async (req, res) => {

	const pageToken = req.query.pageToken || ""

	const { id } = req.body

	try {
		const playlistsRes = await youtube.playlists.list({
			part: 'snippet, contentDetails',
			channelId: id,
			maxResults: 20,
			pageToken
		});

		const resData = playlistsRes.data.items

		return res
			.status(200)
			.json(new ApiResponse(200, { resData, nextPageToken: playlistsRes.data.nextPageToken }, "Got channel playlists"))

	} catch (error) {
		console.log("Error: ", error.message);
		throw new ApiError(500, "Something went wrong while fetching channel playlists")
	}

})

export {
	getChannelInfo,
	getChannelVideos,
	getChannelPlaylists
}