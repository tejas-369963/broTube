import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";
import { google } from 'googleapis'

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

const getSearchResults = asyncHandler(async (req, res) => {

	try {

		const { q } = req.query
        const pageToken = req.query.pageToken || ""

		console.log("tags", pageToken);

		const suggestionsRes = await youtube.search.list({
			part: "snippet",
			q: q || "",
			type: "video",
			maxResults: 18,
		});
		
		const vIds = suggestionsRes?.data?.items.map(item => item.id.videoId)

		const suggestionsVid = await getVideoById(vIds)

		const data = suggestionsVid.data.items

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
			.json(new ApiResponse(200, { suggestions }, "Got all the search results"))

	} catch (error) {
		throw new ApiError(500, `Something went wrong while fetching search results Error:  ${error.message}`)
	}
})

export {
	getSearchResults
}