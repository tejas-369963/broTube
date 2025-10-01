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

		const { tags } = req.body

		const suggestionsRes = await youtube.search.list({
			part: "snippet",
			q: tags || "trending",
			type: "video",
			maxResults: 9,
		});

		// const suggestionsRes = {
		//	 "size": 0,
		//	 "data": {
		//		 "kind": "youtube#searchListResponse",
		//		 "etag": "3A3gf9G9YU-iKOvq7xNnld9sHyE",
		//		 "nextPageToken": "CAoQAA",
		//		 "regionCode": "IN",
		//		 "pageInfo": {
		//			 "totalResults": 1000000,
		//			 "resultsPerPage": 10
		//		 },
		//		 "items": [
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "1yt3or04FQt8lgD1IsS5Slr_weY",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "hSBwq8yrXf0"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2025-08-19T05:40:07Z",
		//					 "channelId": "UC-LOdiPoxninevJ0DkleCLg",
		//					 "title": "World of Thama | Official Teaser | Ayushmann, Rashmika, Paresh, Nawazuddin | Dinesh V | This Diwali",
		//					 "description": "Na darr kabhi itna shaktishaali tha, aur na pyaar kabhi itna BLOODY!   Brace yourself this Diwali to witness the first love story in ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/hSBwq8yrXf0/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/hSBwq8yrXf0/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/hSBwq8yrXf0/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "Maddock Films",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2025-08-19T05:40:07Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "gQGOWFDZj78_iL0W_IThLy6p9IM",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "2CeoFnb16l4"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2015-03-13T12:32:59Z",
		//					 "channelId": "UCbTLwN10NoCU4WDzLf1JMOA",
		//					 "title": "Dard Karaara | Full Song | Dum Laga Ke Haisha, Ayushmann Khurrana, Bhumi, Kumar Sanu, Sadhana Sargam",
		//					 "description": "Trending Moments: 00:48 - Tu Meri Hai Prem Ki Bhasha, Likhta Hun Tujhe Roz Zara Sa 03:03 - Abhi Abhi Dhoop Thi ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/2CeoFnb16l4/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/2CeoFnb16l4/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/2CeoFnb16l4/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "YRF",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2015-03-13T12:32:59Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "Lu-xV-XHeL5t1F_aLg7zz4THops",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "_hRnWA0A20E"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2012-11-29T13:44:42Z",
		//					 "channelId": "UCX52tYZiEh_mHoFja3Veciw",
		//					 "title": "Pani Da Rang (Reprised Version) | Vicky Donor | Ayushmann Khurrana &amp; Yami Gautam",
		//					 "description": "Stream & watch back to back Full Movies only on Eros Now - https://goo.gl/GfuYux For unlimited Bollywood hit songs click here: ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/_hRnWA0A20E/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/_hRnWA0A20E/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/_hRnWA0A20E/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "Eros Now Music",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2012-11-29T13:44:42Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "Uv0wnUQJN7b6DLXPcl3vLsq0r2A",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "PzesXq1s6Ms"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2025-08-19T06:35:54Z",
		//					 "channelId": "UCQAGGxDiY8mCBvorddZFymQ",
		//					 "title": "World of Thama - Official Teaser | Releasing at PVR INOX this Diwali",
		//					 "description": "Na darr kabhi itna shaktishaali tha, aur na pyaar kabhi itna BLOODY! Step into the World of Thama, where love bites harder than ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/PzesXq1s6Ms/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/PzesXq1s6Ms/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/PzesXq1s6Ms/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "PVR",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2025-08-19T06:35:54Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "ooqJ7Dnx40TJdWc8cS3S2e8_vRY",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "cU3IO6Am65o"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2013-04-23T07:28:07Z",
		//					 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
		//					 "title": "&quot;Sadi Gali Full Song&quot; Nautanki Saala ★ Ayushmann Khurrana, Pooja Salvi",
		//					 "description": "Enjoy the full video song \"Sadi Gali\" from fun comic film Nautanki Saala produced by T-Series Films & Ramesh Sippy ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/cU3IO6Am65o/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/cU3IO6Am65o/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/cU3IO6Am65o/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "T-Series",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2013-04-23T07:28:07Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "z8LhMZBWC7ZKaTzyuKo7foM4o30",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "FS9xWZpJ7Rg"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2024-02-19T06:30:08Z",
		//					 "channelId": "UCe8GMzGI_8fBfQYgOe3tBKA",
		//					 "title": "Ayushman ke multiple talents",
		//					 "description": "iifa #iifa2013 #iifa2013performance #dance #bollywood #bollywoodsongs #bollywoodnews #bollywoodmovies ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/FS9xWZpJ7Rg/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/FS9xWZpJ7Rg/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/FS9xWZpJ7Rg/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "IIFA Awards",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2024-02-19T06:30:08Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "YIc1XrmQMyKYObUjs0rp4HJZbLI",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "7KwcWp2O5mU"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2025-03-07T06:30:05Z",
		//					 "channelId": "UCQs6bbnYiC1f36Iy5Vy1jwQ",
		//					 "title": "The Heartbreak Chhora | Official Music Video | Ayushmann Khurrana |Gourov Dasgupta Feat Jaya Rohilla",
		//					 "description": "TheHeartbreakChorra #AyushmannKhurran Main Haryanvi gaane kaafi follow karta hoon. Katayi endy hoya karein se.",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/7KwcWp2O5mU/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/7KwcWp2O5mU/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/7KwcWp2O5mU/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "Ayushmann Khurrana",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2025-03-07T06:30:05Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "5V4CMTVsnNvHYujPLp-ZTbqPwc0",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "8uJ-wOljP_s"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2014-10-08T13:26:35Z",
		//					 "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
		//					 "title": "OFFICIAL: &#39;Mitti Di Khushboo&#39; FULL VIDEO Song | Ayushmann Khurrana | Rochak Kohli",
		//					 "description": "Jadon Ambara Barasya Paani.....Mitti Di Khushboo Aayi... Click to share it on Facebook - http://bit.ly/MittiDiKhushboo Click to ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/8uJ-wOljP_s/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/8uJ-wOljP_s/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/8uJ-wOljP_s/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "T-Series",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2014-10-08T13:26:35Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "hlpN4YaUCIYMhHTZIYB9MXBTeqI",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "zRzD3-a9_qc"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2025-04-17T10:30:43Z",
		//					 "channelId": "UCX52tYZiEh_mHoFja3Veciw",
		//					 "title": "Pani Da Rang - Lyrical Video | Vicky Donor | Ayushmann Khurrana | Yami Gautam | Rochak Kohli",
		//					 "description": "Enjoy the soul-stirring lyrical version of \"Pani Da Rang\", a heartfelt melody from the movie Vicky Donor. Sung and composed by ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/zRzD3-a9_qc/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/zRzD3-a9_qc/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/zRzD3-a9_qc/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "Eros Now Music",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2025-04-17T10:30:43Z"
		//				 }
		//			 },
		//			 {
		//				 "kind": "youtube#searchResult",
		//				 "etag": "gcXPg2EcuSmxhJph9SxqMcHR3MY",
		//				 "id": {
		//					 "kind": "youtube#video",
		//					 "videoId": "GBFOdUsKsRI"
		//				 },
		//				 "snippet": {
		//					 "publishedAt": "2024-08-20T05:30:03Z",
		//					 "channelId": "UCim0ZIz8SAQGPvg4mJHG3JA",
		//					 "title": "Ananya Panday BREAKS Ayushmann Khurrana’s HEART 🥺 #DreamGirl2",
		//					 "description": "Watch Dream Girl 2, on Netflix. Watch on Netflix: https://www.netflix.com Follow Netflix India on: Website: https://www.netflix.com/ ...",
		//					 "thumbnails": {
		//						 "default": {
		//							 "url": "https://i.ytimg.com/vi/GBFOdUsKsRI/default.jpg",
		//							 "width": 120,
		//							 "height": 90
		//						 },
		//						 "medium": {
		//							 "url": "https://i.ytimg.com/vi/GBFOdUsKsRI/mqdefault.jpg",
		//							 "width": 320,
		//							 "height": 180
		//						 },
		//						 "high": {
		//							 "url": "https://i.ytimg.com/vi/GBFOdUsKsRI/hqdefault.jpg",
		//							 "width": 480,
		//							 "height": 360
		//						 }
		//					 },
		//					 "channelTitle": "Netflix India Shorts",
		//					 "liveBroadcastContent": "none",
		//					 "publishTime": "2024-08-20T05:30:03Z"
		//				 }
		//			 }
		//		 ]
		//	 },
		//	 "config": {
		//		 "url": "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=Ayushmann%20Khurrana&type=video&maxResults=10&pageToken=&key=AIzaSyBB8ICnyEEUgZmkm1RdFPh7tG2ttOPnINY",
		//		 "method": "GET",
		//		 "apiVersion": "",
		//		 "userAgentDirectives": [
		//			 {
		//				 "product": "google-api-nodejs-client",
		//				 "version": "8.0.2-rc.0",
		//				 "comment": "gzip"
		//			 }
		//		 ],
		//		 "headers": {},
		//		 "params": {
		//			 "part": "snippet",
		//			 "q": "Ayushmann Khurrana",
		//			 "type": "video",
		//			 "maxResults": 10,
		//			 "pageToken": "",
		//			 "key": "AIzaSyBB8ICnyEEUgZmkm1RdFPh7tG2ttOPnINY"
		//		 },
		//		 "retry": true,
		//		 "responseType": "unknown"
		//	 },
		//	 "headers": {}
		// }

		const vIds = suggestionsRes?.data?.items.map(item => item.id.videoId)

		const suggestionsVid = await getVideoById(vIds)

		const suggestions = suggestionsVid.data.items

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