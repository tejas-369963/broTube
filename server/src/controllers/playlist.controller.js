import { google } from 'googleapis'
import { oauth2Client } from '../utils/gApi.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const youtube = google.youtube({
	version: "v3",
	auth: process.env.API_KEY
})

const getChProfile = async (id) => {
	const res = await youtube.channels.list({
		part: "snippet",
		id: id
	})

	return res
}

const getVideoById = async (id) => {
	const res = await youtube.videos.list({
		part: "snippet, statistics, contentDetails",
		id: id
	})

	return res
}

const getAllPlaylists = asyncHandler(async (req, res) => {
	if (req.user) {

		const pageToken = req.query.pageToken || ""

		try {
			// oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

			const playlistsInfo = await youtube.playlists.list({
				part: "snippet, contentDetails",
				mine: true,
				maxResults: 12,
				auth: oauth2Client,
				pageToken
			})

			const resData = playlistsInfo.data.items

			return res
				.status(200)
				.json(new ApiResponse(200, { resData, nextPageToken: playlistsInfo.data.nextPageToken }, "Got channel videos"))

		} catch (error) {
			console.log(error.message);
			return res.status(500).send("Something went wrong while fetching playlists")
		}
	}

	throw new ApiError(401, "Unauthorized request")

})

const getAllPlaylistVideos = async (req, res) => {

	if (req.user) {

		const pageToken = req.query.pageToken || ""

		try {

			const {pId} = req.body

			const playlist = await youtube.playlistItems.list({
				part: "snippet, contentDetails",
				playlistId: pId,
				maxResults: 12,
				auth: oauth2Client,
				pageToken
			})

			const data = playlist.data?.items

			const chIds = []
			const vIds = []

			data.map((item) => {
				const chId = item.snippet?.videoOwnerChannelId
				const vId = item.snippet?.resourceId?.videoId
				chIds.push(chId)
				vIds.push(vId)
			})

			const chRes = await getChProfile(chIds)
			const vRes = await getVideoById(vIds)

			const resData = []

			data.map((item) => {
				const chId = item.snippet?.videoOwnerChannelId
				const vId = item.snippet?.resourceId?.videoId
				const ch = chRes.data.items.filter((item) => item.id === chId)
				const v = vRes.data.items.filter((item) => item.id === vId)
				resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
			})

			return res
				.status(200)
				.json(new ApiResponse(200, { resData, nextPageToken: playlist.data.nextPageToken }, "Got channel videos"))

		} catch (error) {
			console.log(error.message);
			return res.status(500).send("Something went wrong while fetching playlist videos")
		}
	}

	throw new ApiError(401, "Unauthorized request")

}

const getLikedVideos = async (req, res) => {

	if (req.user) {

		try {
			// oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

			const pageToken = req.query.pageToken || ""

			const videos = await youtube.playlistItems.list({
				part: "snippet, contentDetails",
				playlistId: 'LL',
				maxResults: 12,
				auth: oauth2Client,
				pageToken
			})

			const data = videos.data?.items

			const chIds = []
			const vIds = []

			data.map((item) => {
				const chId = item.snippet?.videoOwnerChannelId
				const vId = item.snippet?.resourceId?.videoId
				chIds.push(chId)
				vIds.push(vId)
			})

			const chRes = await getChProfile(chIds)
			const vRes = await getVideoById(vIds)

			const resData = []

			data.map((item) => {
				const chId = item.snippet?.videoOwnerChannelId
				const vId = item.snippet?.resourceId?.videoId
				const ch = chRes.data.items.filter((item) => item.id === chId)
				const v = vRes.data.items.filter((item) => item.id === vId)
				resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
			})
			
			return res
				.status(200)
				.json(new ApiResponse(200, { resData, nextPageToken: videos.data.nextPageToken }, "Got all liked videos"))

		} catch (error) {
			console.log(error.message);
			return res.status(500).send("Something went wrong while fetching videos")
		}
	}

}

const getWatchLaterVideos = async (req, res) => {

	if (req.user) {

		try {
			// oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token, access_token: req.cookies?.access_token })

			// const videos = await youtube.playlistItems.list({
			//	 part: "snippet, contentDetails",
			//	 playlistId: "WL",
			//	 maxResults: 12,
			//	 auth: oauth2Client,
			// })

			// const data = videos.data?.items

			// const chIds = []
			// const vIds = []

			// data.map((item) => {
			//	 const chId = item.snippet?.videoOwnerChannelId
			//	 const vId = item.snippet?.resourceId?.videoId
			//	 chIds.push(chId)
			//	 vIds.push(vId)
			// })

			// const chRes = await getChProfile(chIds)
			// const vRes = await getVideoById(vIds)

			// const resData = []

			// data.map((item) => {
			//	 const chId = item.snippet?.videoOwnerChannelId
			//	 const vId = item.snippet?.resourceId?.videoId
			//	 const ch = chRes.data.items.filter((item) => item.id === chId)
			//	 const v = vRes.data.items.filter((item) => item.id === vId)
			//	 resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
			// })

			const resData = ""

			return res
				.status(200)
				.json(resData)

		} catch (error) {
			console.log(error.message);
			return res.status(500).send("Something went wrong while fetching videos")
		}
	}

}

export {
	getAllPlaylists,
	getAllPlaylistVideos,
	getLikedVideos,
	getWatchLaterVideos
}