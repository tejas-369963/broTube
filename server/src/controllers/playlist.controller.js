import { google } from 'googleapis'
import { oauth2Client } from '../utils/gApi.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'

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

		try {
			// oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

			const playlistsInfo = await youtube.playlists.list({
				part: "snippet, contentDetails",
				mine: true,
				maxResults: 12,
				auth: oauth2Client,
			})

			const resData = playlistsInfo.data.items

			return res
				.status(200)
				.json(resData)

		} catch (error) {
			console.log(error.message);
			return res.status(500).send("Something went wrong while fetching playlists")
		}
	}

	throw new ApiError(401, "Unauthorized request")

})

const getAllPlaylistVideos = async (req, res) => {

	if (req.user) {

		try {

			const {pId} = req.body

			const playlists = await youtube.playlistItems.list({
				part: "snippet, contentDetails",
				playlistId: pId,
				maxResults: 12,
				auth: oauth2Client,
			})

			const data = playlists.data?.items

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
				.json(resData)

		} catch (error) {
			console.log(error.message);
			return res.status(500).send("Something went wrong while fetching playlists")
		}
	}

	throw new ApiError(401, "Unauthorized request")

}

const getLikedVideos = async (req, res) => {

	if (req.user) {

		try {
			// oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

			const videos = await youtube.playlistItems.list({
				part: "snippet, contentDetails",
				playlistId: 'LL',
				maxResults: 12,
				auth: oauth2Client,
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

			// const resData = [
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "VPwgYEyZJCpMVFf-K-fFDARX_hU",
			//		 "id": "TEwucF8tWEtmSnpKaDA",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-28T03:57:24Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "WHY so much DRaMa? 🤷 | Sunday Show",
			//			 "description": "Namaskar, Aadab! Iss hafte The Sunday Show mein — Bharat ki sabse entertaining news bulletin — aapke liye lekar aaye hain:\n\nViral Video Alert: Aniruddh Acharya’s controversial clip sparks outrage.\nSaiyaara breaks records and hearts — IV lagake log dekh rahe hain!\nTanushree Dutta's emotional video reignites #MeToo conversations.\nUorfi Javed dissolves her lip fillers — 200M views and counting!\nVP Jagdeep Dhankhar resigns amidst political pressure — was he pushed?\nCan courts put a timer on the President?\nThis week’s SPOTLIGHT: Governors of India.\nIndia-UK Free Trade Agreement signed! Scotch whiskies to get cheaper!\nNumbeo Safety Index: UAE safest, India outranks US & UK — but can we trust the rankings?\nSalt Epidemic in India? ICMR warns of dangerously high sodium intake.\nDowry de*ths: 7,000+ cases a year, less than 2% conviction rate. India’s dark reality exposed.\nNew Sports Bill: BCCI may come under RTI. Kya sach mein transparency aayegi?\nForest land diverted: 1.73 lakh hectares gone for infra — Delhi, Mumbai, Bengaluru combined!\nIndia finally opens up visas for Chinese nationals\n\nSubscribe for weekly takedowns of politics, pop culture, policies and more.\nLike, Comment, Share karo — kyunki Democracy mein sabka haq banta hai… joke bhi, joke pe soch bhi.\n\nChapters:\n00:00 - Intro\n01:03 - Pookie Baba Controversy\n02:41 - OTT Platforms Ban\n03:12 - Saiyaara\n04:00 - Tanushree Dutta\n04:37 - Uorfi Javed Lip Filler\n05:17 - Jagdeep Dhankar Resigns\n06:38 - Spotlight\n12:58 - Sunday Samachar\n25:09 - Positive News \n26:26 - Share Bazaar\n30:50 - Nonsense News\n35:32 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\nFor Collaborations: connect@sarthakgoswami.com\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/Vml7e\n\nSee you, in the next Episode!",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 0,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "p_-XKfJzJh0"
			//			 },
			//			 "videoOwnerChannelTitle": "Sarthak Goswami",
			//			 "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "p_-XKfJzJh0",
			//			 "videoPublishedAt": "2025-07-27T04:30:27Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
			//			 "id": "UC5fcjujOsqD-126Chn_BAuA",
			//			 "snippet": {
			//				 "title": "Sarthak Goswami",
			//				 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
			//				 "customUrl": "@sundaysarthak",
			//				 "publishedAt": "2018-01-02T14:18:23Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Sarthak Goswami",
			//					 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "LGHrfqbHKWHI-EfiGcxo3p2W1rE",
			//			 "id": "p_-XKfJzJh0",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-27T04:30:27Z",
			//				 "channelId": "UC5fcjujOsqD-126Chn_BAuA",
			//				 "title": "WHY so much DRaMa? 🤷 | Sunday Show",
			//				 "description": "Namaskar, Aadab! Iss hafte The Sunday Show mein — Bharat ki sabse entertaining news bulletin — aapke liye lekar aaye hain:\n\nViral Video Alert: Aniruddh Acharya’s controversial clip sparks outrage.\nSaiyaara breaks records and hearts — IV lagake log dekh rahe hain!\nTanushree Dutta's emotional video reignites #MeToo conversations.\nUorfi Javed dissolves her lip fillers — 200M views and counting!\nVP Jagdeep Dhankhar resigns amidst political pressure — was he pushed?\nCan courts put a timer on the President?\nThis week’s SPOTLIGHT: Governors of India.\nIndia-UK Free Trade Agreement signed! Scotch whiskies to get cheaper!\nNumbeo Safety Index: UAE safest, India outranks US & UK — but can we trust the rankings?\nSalt Epidemic in India? ICMR warns of dangerously high sodium intake.\nDowry de*ths: 7,000+ cases a year, less than 2% conviction rate. India’s dark reality exposed.\nNew Sports Bill: BCCI may come under RTI. Kya sach mein transparency aayegi?\nForest land diverted: 1.73 lakh hectares gone for infra — Delhi, Mumbai, Bengaluru combined!\nIndia finally opens up visas for Chinese nationals\n\nSubscribe for weekly takedowns of politics, pop culture, policies and more.\nLike, Comment, Share karo — kyunki Democracy mein sabka haq banta hai… joke bhi, joke pe soch bhi.\n\nChapters:\n00:00 - Intro\n01:03 - Pookie Baba Controversy\n02:41 - OTT Platforms Ban\n03:12 - Saiyaara\n04:00 - Tanushree Dutta\n04:37 - Uorfi Javed Lip Filler\n05:17 - Jagdeep Dhankar Resigns\n06:38 - Spotlight\n12:58 - Sunday Samachar\n25:09 - Positive News \n26:26 - Share Bazaar\n30:50 - Nonsense News\n35:32 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\nFor Collaborations: connect@sarthakgoswami.com\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/Vml7e\n\nSee you, in the next Episode!",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Sarthak Goswami",
			//				 "tags": [
			//					 "sarthak goswami",
			//					 "india news",
			//					 "sunday show",
			//					 "controversy",
			//					 "breaking news",
			//					 "top news",
			//					 "latest",
			//					 "satire",
			//					 "viral"
			//				 ],
			//				 "categoryId": "24",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "WHY so much DRaMa? 🤷 | Sunday Show",
			//					 "description": "Namaskar, Aadab! Iss hafte The Sunday Show mein — Bharat ki sabse entertaining news bulletin — aapke liye lekar aaye hain:\n\nViral Video Alert: Aniruddh Acharya’s controversial clip sparks outrage.\nSaiyaara breaks records and hearts — IV lagake log dekh rahe hain!\nTanushree Dutta's emotional video reignites #MeToo conversations.\nUorfi Javed dissolves her lip fillers — 200M views and counting!\nVP Jagdeep Dhankhar resigns amidst political pressure — was he pushed?\nCan courts put a timer on the President?\nThis week’s SPOTLIGHT: Governors of India.\nIndia-UK Free Trade Agreement signed! Scotch whiskies to get cheaper!\nNumbeo Safety Index: UAE safest, India outranks US & UK — but can we trust the rankings?\nSalt Epidemic in India? ICMR warns of dangerously high sodium intake.\nDowry de*ths: 7,000+ cases a year, less than 2% conviction rate. India’s dark reality exposed.\nNew Sports Bill: BCCI may come under RTI. Kya sach mein transparency aayegi?\nForest land diverted: 1.73 lakh hectares gone for infra — Delhi, Mumbai, Bengaluru combined!\nIndia finally opens up visas for Chinese nationals\n\nSubscribe for weekly takedowns of politics, pop culture, policies and more.\nLike, Comment, Share karo — kyunki Democracy mein sabka haq banta hai… joke bhi, joke pe soch bhi.\n\nChapters:\n00:00 - Intro\n01:03 - Pookie Baba Controversy\n02:41 - OTT Platforms Ban\n03:12 - Saiyaara\n04:00 - Tanushree Dutta\n04:37 - Uorfi Javed Lip Filler\n05:17 - Jagdeep Dhankar Resigns\n06:38 - Spotlight\n12:58 - Sunday Samachar\n25:09 - Positive News \n26:26 - Share Bazaar\n30:50 - Nonsense News\n35:32 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\nFor Collaborations: connect@sarthakgoswami.com\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/Vml7e\n\nSee you, in the next Episode!"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT42M36S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "true",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "666721",
			//				 "likeCount": "50078",
			//				 "favoriteCount": "0",
			//				 "commentCount": "2637"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "cXoS9DqEhzXgyEwTvDyjOv54H8M",
			//		 "id": "TEwuUTF6bk1kZGxOWFE",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-27T13:35:42Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Ullu banaya bada maza aaya - War 2, Fantastic four ||  Men of Culture 190",
			//			 "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps:-\n0:00 - Aa gaye Hum \n3:23 - Narsimha Mahavatar \n4:45 - Ajay Paji ka Aura \n5:40 - Predator badlands \n8:04 - Noval Vyaad Released \n8:29 - Odyssey & Avatar Fire And Ashe \n11:38 - Badal ka Chashma lag gaya \n15:40 - Saiyyara Fans ka drama \n16:52 - Badal On MahaAvtar Narsimha \n21:35 - F4 Me Saiyyara Fans \n22:42 - Discuss MahaAvtar Narsimha \n27:31 - Saiyyara ka Craze \n32:51 - Discuss Fantastic 4 Spoiler Alert \n1:06:40 - Rdj As Dr Doom Right Or Wrong \n1:10:22 - Marvel Upcoming Movies \n1:11:20 - Fantastic 4 Post Credit Scene \n1:17:24 - Marvel Leak Strategy \n1:21:59 - F4 Favourite Scenes \n1:26:53 - Fantastic 4 Vs Superman \n1:30:17 -  F4 Johnny Storm \n1:31:55 - Fantastic 4 3D Experience \n1:33:56 - Marvel Reboot Plan \n1:36:01 - F4 Mid Credit And Theory \n1:45:45 - Marvel Ki tezi \n1:48:55 - Fantastic 4 Cast \n1:50:21 - War 2 Trailer \n1:59:51  - Coolie Trailer Kabh \n2:00:56 - War 2 Action Sequences \n2:02:17 - Baaghi 3 Teaser \n2:03:34 - Creators Vs Indian Film Prod \n2:08:35 - War 2 Ntr fake body \n2:11:46 - War 2 And Imax Benifits \n2:13:45 - Pune Dolby Cinema \n2:15:24 - Tron Ares trailer \n2:16:36 - SuperChat Reading",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 1,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "Q1znMddlNXQ"
			//			 },
			//			 "videoOwnerChannelTitle": "Men of culture",
			//			 "videoOwnerChannelId": "UC9CROGyC9hgIB1mnBuMpeoQ"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "Q1znMddlNXQ",
			//			 "videoPublishedAt": "2025-07-26T19:13:05Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "PNZWNsOf7GM7c6uDYi9Noz8LOgw",
			//			 "id": "UC9CROGyC9hgIB1mnBuMpeoQ",
			//			 "snippet": {
			//				 "title": "Men of culture",
			//				 "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n",
			//				 "customUrl": "@menofculturepodcast",
			//				 "publishedAt": "2021-11-30T11:18:37.30403Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Men of culture",
			//					 "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "vAbjbGl_Vix0LeXPUcUSnQxkwww",
			//			 "id": "Q1znMddlNXQ",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-26T19:13:05Z",
			//				 "channelId": "UC9CROGyC9hgIB1mnBuMpeoQ",
			//				 "title": "Ullu banaya bada maza aaya - War 2, Fantastic four ||  Men of Culture 190",
			//				 "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps:-\n0:00 - Aa gaye Hum \n3:23 - Narsimha Mahavatar \n4:45 - Ajay Paji ka Aura \n5:40 - Predator badlands \n8:04 - Noval Vyaad Released \n8:29 - Odyssey & Avatar Fire And Ashe \n11:38 - Badal ka Chashma lag gaya \n15:40 - Saiyyara Fans ka drama \n16:52 - Badal On MahaAvtar Narsimha \n21:35 - F4 Me Saiyyara Fans \n22:42 - Discuss MahaAvtar Narsimha \n27:31 - Saiyyara ka Craze \n32:51 - Discuss Fantastic 4 Spoiler Alert \n1:06:40 - Rdj As Dr Doom Right Or Wrong \n1:10:22 - Marvel Upcoming Movies \n1:11:20 - Fantastic 4 Post Credit Scene \n1:17:24 - Marvel Leak Strategy \n1:21:59 - F4 Favourite Scenes \n1:26:53 - Fantastic 4 Vs Superman \n1:30:17 -  F4 Johnny Storm \n1:31:55 - Fantastic 4 3D Experience \n1:33:56 - Marvel Reboot Plan \n1:36:01 - F4 Mid Credit And Theory \n1:45:45 - Marvel Ki tezi \n1:48:55 - Fantastic 4 Cast \n1:50:21 - War 2 Trailer \n1:59:51  - Coolie Trailer Kabh \n2:00:56 - War 2 Action Sequences \n2:02:17 - Baaghi 3 Teaser \n2:03:34 - Creators Vs Indian Film Prod \n2:08:35 - War 2 Ntr fake body \n2:11:46 - War 2 And Imax Benifits \n2:13:45 - Pune Dolby Cinema \n2:15:24 - Tron Ares trailer \n2:16:36 - SuperChat Reading",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Men of culture",
			//				 "tags": [
			//					 "men of culture",
			//					 "men of culture podcast",
			//					 "podcast",
			//					 "bnftv",
			//					 "Badal Yadav",
			//					 "Comicverse",
			//					 "Comic Verse",
			//					 "PJ Explained",
			//					 "thePJ",
			//					 "FlickVerse"
			//				 ],
			//				 "categoryId": "22",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Ullu banaya bada maza aaya - War 2, Fantastic four ||  Men of Culture 190",
			//					 "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps:-\n0:00 - Aa gaye Hum \n3:23 - Narsimha Mahavatar \n4:45 - Ajay Paji ka Aura \n5:40 - Predator badlands \n8:04 - Noval Vyaad Released \n8:29 - Odyssey & Avatar Fire And Ashe \n11:38 - Badal ka Chashma lag gaya \n15:40 - Saiyyara Fans ka drama \n16:52 - Badal On MahaAvtar Narsimha \n21:35 - F4 Me Saiyyara Fans \n22:42 - Discuss MahaAvtar Narsimha \n27:31 - Saiyyara ka Craze \n32:51 - Discuss Fantastic 4 Spoiler Alert \n1:06:40 - Rdj As Dr Doom Right Or Wrong \n1:10:22 - Marvel Upcoming Movies \n1:11:20 - Fantastic 4 Post Credit Scene \n1:17:24 - Marvel Leak Strategy \n1:21:59 - F4 Favourite Scenes \n1:26:53 - Fantastic 4 Vs Superman \n1:30:17 -  F4 Johnny Storm \n1:31:55 - Fantastic 4 3D Experience \n1:33:56 - Marvel Reboot Plan \n1:36:01 - F4 Mid Credit And Theory \n1:45:45 - Marvel Ki tezi \n1:48:55 - Fantastic 4 Cast \n1:50:21 - War 2 Trailer \n1:59:51  - Coolie Trailer Kabh \n2:00:56 - War 2 Action Sequences \n2:02:17 - Baaghi 3 Teaser \n2:03:34 - Creators Vs Indian Film Prod \n2:08:35 - War 2 Ntr fake body \n2:11:46 - War 2 And Imax Benifits \n2:13:45 - Pune Dolby Cinema \n2:15:24 - Tron Ares trailer \n2:16:36 - SuperChat Reading"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT4h28M3S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "236705",
			//				 "likeCount": "9242",
			//				 "favoriteCount": "0",
			//				 "commentCount": "505"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "DlOLi7nn3ISu4jLAUkDiUbe5Kag",
			//		 "id": "TEwuRUp6WjNmdGt5dDA",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-25T12:20:18Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "LIE HARD Ep. 5 ft @AakashGupta @KennySebastian @TheRahulDua @ShreejaChaturvedi",
			//			 "description": "Cashify Presents Lie Hard | Episode 5\n\nWelcome to Lie Hard, where comedians turn bluffing into an art form.\nThey will lie so hard that it will make it hard for you to trust yourself.\nSome lies are obvious. Some are not. Some are just weird.\n\nPresented by Cashify.\nSell Your Old Phone:\nhttps://www.cashify.in/sell-old-mobile-phone?utm_source=YT_Campaign&utm_medium=cpv&utm_campaign=YT_Lh2&__utmrg=YT_Lh2\n\nFt: \nKenny Sebastian // https://www.instagram.com/kennethseb/\nAakash Gupta // https://www.instagram.com/theskygupta/\nShreeja Chaturvedi // https://www.instagram.com/shreejachaturvedi/\nRahul Dua  // https://www.instagram.com/therahuldua/\nFor Lie Hard Instagram link // https://www.instagram.com/liehardofficial/\n\nChapters:\n00:00 Intro and Explainer\n02:00 Game 1 : Better Call Bluff\n02:57 Rahul Dua’s Statement\n12:42 Aakash Gupta’s Statement\n20:06 Shreeja’s Statement\n28:28 Kenny’s Statements\n39:36 Game 2: Phones Out - Cash In\n44:15 Game 3: Catch Me If You Can\n44:49 Kenny’s Statements\n56:02 Shreeja’s Statements\n1:05:00 Rahul Dua’s Statements \n1:14:36 Aakash Gupta’s Statements \n1:29:25 Game 4: Faking Bad\n1:41:37 Results\n1:43:08 BTS & Credits\n\nInspired By: WILTY, MAFIA, POKER, BLUFF, BULLSH*T GAME SHOW and more",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 2,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "EJzZ3ftkyt0"
			//			 },
			//			 "videoOwnerChannelTitle": "Gaurav Kapoor",
			//			 "videoOwnerChannelId": "UCeP5_FL11TnvXuvrFvALJyA"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "EJzZ3ftkyt0",
			//			 "videoPublishedAt": "2025-07-25T03:07:18Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "bjjYHjqrVdtvG9WCIFM7UufK81E",
			//			 "id": "UCeP5_FL11TnvXuvrFvALJyA",
			//			 "snippet": {
			//				 "title": "Gaurav Kapoor",
			//				 "description": "Stand-Up Comedy videos by Gaurav Kapoor",
			//				 "customUrl": "@gauravkapoor",
			//				 "publishedAt": "2012-07-14T08:58:21Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/ytc/AIdro_nxl_qeW3ipdZJfbufwAS1L6-gtrDt54YfEGcw84QBPqQ=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/ytc/AIdro_nxl_qeW3ipdZJfbufwAS1L6-gtrDt54YfEGcw84QBPqQ=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/ytc/AIdro_nxl_qeW3ipdZJfbufwAS1L6-gtrDt54YfEGcw84QBPqQ=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Gaurav Kapoor",
			//					 "description": "Stand-Up Comedy videos by Gaurav Kapoor"
			//				 }
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "_glJssVbNWPry09Wb3_YbHgVB2c",
			//			 "id": "EJzZ3ftkyt0",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-25T03:07:18Z",
			//				 "channelId": "UCeP5_FL11TnvXuvrFvALJyA",
			//				 "title": "LIE HARD Ep. 5 ft @AakashGupta @KennySebastian @TheRahulDua @ShreejaChaturvedi",
			//				 "description": "Cashify Presents Lie Hard | Episode 5\n\nWelcome to Lie Hard, where comedians turn bluffing into an art form.\nThey will lie so hard that it will make it hard for you to trust yourself.\nSome lies are obvious. Some are not. Some are just weird.\n\nPresented by Cashify.\nSell Your Old Phone:\nhttps://www.cashify.in/sell-old-mobile-phone?utm_source=YT_Campaign&utm_medium=cpv&utm_campaign=YT_Lh2&__utmrg=YT_Lh2\n\nFt: \nKenny Sebastian // https://www.instagram.com/kennethseb/\nAakash Gupta // https://www.instagram.com/theskygupta/\nShreeja Chaturvedi // https://www.instagram.com/shreejachaturvedi/\nRahul Dua  // https://www.instagram.com/therahuldua/\nFor Lie Hard Instagram link // https://www.instagram.com/liehardofficial/\n\nChapters:\n00:00 Intro and Explainer\n02:00 Game 1 : Better Call Bluff\n02:57 Rahul Dua’s Statement\n12:42 Aakash Gupta’s Statement\n20:06 Shreeja’s Statement\n28:28 Kenny’s Statements\n39:36 Game 2: Phones Out - Cash In\n44:15 Game 3: Catch Me If You Can\n44:49 Kenny’s Statements\n56:02 Shreeja’s Statements\n1:05:00 Rahul Dua’s Statements \n1:14:36 Aakash Gupta’s Statements \n1:29:25 Game 4: Faking Bad\n1:41:37 Results\n1:43:08 BTS & Credits\n\nInspired By: WILTY, MAFIA, POKER, BLUFF, BULLSH*T GAME SHOW and more",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Gaurav Kapoor",
			//				 "categoryId": "23",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "LIE HARD Ep. 5 ft @AakashGupta @KennySebastian @TheRahulDua @ShreejaChaturvedi",
			//					 "description": "Cashify Presents Lie Hard | Episode 5\n\nWelcome to Lie Hard, where comedians turn bluffing into an art form.\nThey will lie so hard that it will make it hard for you to trust yourself.\nSome lies are obvious. Some are not. Some are just weird.\n\nPresented by Cashify.\nSell Your Old Phone:\nhttps://www.cashify.in/sell-old-mobile-phone?utm_source=YT_Campaign&utm_medium=cpv&utm_campaign=YT_Lh2&__utmrg=YT_Lh2\n\nFt: \nKenny Sebastian // https://www.instagram.com/kennethseb/\nAakash Gupta // https://www.instagram.com/theskygupta/\nShreeja Chaturvedi // https://www.instagram.com/shreejachaturvedi/\nRahul Dua  // https://www.instagram.com/therahuldua/\nFor Lie Hard Instagram link // https://www.instagram.com/liehardofficial/\n\nChapters:\n00:00 Intro and Explainer\n02:00 Game 1 : Better Call Bluff\n02:57 Rahul Dua’s Statement\n12:42 Aakash Gupta’s Statement\n20:06 Shreeja’s Statement\n28:28 Kenny’s Statements\n39:36 Game 2: Phones Out - Cash In\n44:15 Game 3: Catch Me If You Can\n44:49 Kenny’s Statements\n56:02 Shreeja’s Statements\n1:05:00 Rahul Dua’s Statements \n1:14:36 Aakash Gupta’s Statements \n1:29:25 Game 4: Faking Bad\n1:41:37 Results\n1:43:08 BTS & Credits\n\nInspired By: WILTY, MAFIA, POKER, BLUFF, BULLSH*T GAME SHOW and more"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT1H44M30S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "840047",
			//				 "likeCount": "27115",
			//				 "favoriteCount": "0",
			//				 "commentCount": "1988"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "NcK1LW3J3dyfxZ3QK7qXvGbrvD0",
			//		 "id": "TEwuUmxUVk1pNEp6WkE",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-21T11:38:56Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Why Performance Actually Matters (The Standup)",
			//			 "description": "Watch the https://bolt.new Reward Ceremony Live!\nJuly 26th 10AM PST on   / theprimeagen\n#sponsored  https://balls.yoga\n\n📌 Chapters:\n\n00:00:00 - Intro\n00:01:55 - The downward trend of performance expectations\n00:07:10 - The internet isn't to blame for slow speeds anymore\n00:11:27 - Dial up\n00:12:50 - School day routines and the reason behind modem sounds\n00:18:00 - Trash was a Catfish \n00:20:25 - Primes School Habits and his Moms prophetic Internet dream\n00:23:58 - Teej's highschool experience\n00:27:24 - Back on topic (its performance btw) WHO/WHAT is to blame\n00:39:38 - Speed = Sales and WHERE is the problem\n00:43:46 - Netflix BTW and WHEN performance is important\n00:48:35 - Too performant and waste\n00:53:14 - 'Hardware will catch up'\n01:01:13 - GPU vs CPU \n01:06:00 - Wrap up and closing thoughts \n\nLinks:\n- Casey's Performance Course: https://computerenhance.com\n\nFeaturing: \nPrime: https://x.com/ThePrimeagen \nTeej: https://x.com/teej_dv\nCasey Muratori: https://x.com/cmuratori\nTrash Dev: https://x.com/trashh_dev\n\n---\n\nIn this episode of The Standup, we tackle one of the most frustrating aspects of modern computing: why everything feels so sluggish despite having incredibly powerful hardware. Casey Muratori joins us to share his perspective on performance culture and how we've collectively lowered our standards over the past two decades.\n\nFrom nostalgic stories about dial-up internet and modem sounds to serious discussions about software architecture, this conversation covers the technical, cultural, and business factors that have led to today's performance problems. We explore real-world examples from Netflix, discuss the impact of layered abstractions, and examine how corporate development pressures contribute to the problem.\n\nKey topics include:\n- How performance standards have declined while hardware has improved exponentially\n- The role of abstractions and frameworks in creating performance bottlenecks\n- Real Netflix case studies showing the complex relationship between performance and user behavior\n- Why the \"hardware will catch up\" mentality is fundamentally flawed\n- The difference between GPU and CPU performance paradigms\n- How AI might make performance problems even worse\n- Potential solutions through better substrate design\n\nWhether you're a developer frustrated with slow tools, a user wondering why your powerful computer still feels sluggish, or someone interested in the intersection of technology and culture, this discussion offers valuable insights into one of computing's most persistent challenges.",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 3,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "RlTVMi4JzZA"
			//			 },
			//			 "videoOwnerChannelTitle": "ThePrimeTime",
			//			 "videoOwnerChannelId": "UCUyeluBRhGPCW4rPe_UvBZQ"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "RlTVMi4JzZA",
			//			 "videoPublishedAt": "2025-07-20T13:30:19Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "Qh99WELeqXLaY-RHFeQ90VdThNQ",
			//			 "id": "UCUyeluBRhGPCW4rPe_UvBZQ",
			//			 "snippet": {
			//				 "title": "ThePrimeTime",
			//				 "description": "This is a place for all the things that are awesome on stream. ",
			//				 "customUrl": "@theprimetimeagen",
			//				 "publishedAt": "2021-03-05T17:02:28.224517Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "ThePrimeTime",
			//					 "description": "This is a place for all the things that are awesome on stream. "
			//				 },
			//				 "country": "US"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "PFCSynMCbvxUoXvLEgxhU0JJHfQ",
			//			 "id": "RlTVMi4JzZA",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-20T13:30:19Z",
			//				 "channelId": "UCUyeluBRhGPCW4rPe_UvBZQ",
			//				 "title": "Why Performance Actually Matters (The Standup)",
			//				 "description": "Watch the https://bolt.new Reward Ceremony Live!\nJuly 26th 10AM PST on   / theprimeagen\n#sponsored  https://balls.yoga\n\n📌 Chapters:\n\n00:00:00 - Intro\n00:01:55 - The downward trend of performance expectations\n00:07:10 - The internet isn't to blame for slow speeds anymore\n00:11:27 - Dial up\n00:12:50 - School day routines and the reason behind modem sounds\n00:18:00 - Trash was a Catfish \n00:20:25 - Primes School Habits and his Moms prophetic Internet dream\n00:23:58 - Teej's highschool experience\n00:27:24 - Back on topic (its performance btw) WHO/WHAT is to blame\n00:39:38 - Speed = Sales and WHERE is the problem\n00:43:46 - Netflix BTW and WHEN performance is important\n00:48:35 - Too performant and waste\n00:53:14 - 'Hardware will catch up'\n01:01:13 - GPU vs CPU \n01:06:00 - Wrap up and closing thoughts \n\nLinks:\n- Casey's Performance Course: https://computerenhance.com\n\nFeaturing: \nPrime: https://x.com/ThePrimeagen \nTeej: https://x.com/teej_dv\nCasey Muratori: https://x.com/cmuratori\nTrash Dev: https://x.com/trashh_dev\n\n---\n\nIn this episode of The Standup, we tackle one of the most frustrating aspects of modern computing: why everything feels so sluggish despite having incredibly powerful hardware. Casey Muratori joins us to share his perspective on performance culture and how we've collectively lowered our standards over the past two decades.\n\nFrom nostalgic stories about dial-up internet and modem sounds to serious discussions about software architecture, this conversation covers the technical, cultural, and business factors that have led to today's performance problems. We explore real-world examples from Netflix, discuss the impact of layered abstractions, and examine how corporate development pressures contribute to the problem.\n\nKey topics include:\n- How performance standards have declined while hardware has improved exponentially\n- The role of abstractions and frameworks in creating performance bottlenecks\n- Real Netflix case studies showing the complex relationship between performance and user behavior\n- Why the \"hardware will catch up\" mentality is fundamentally flawed\n- The difference between GPU and CPU performance paradigms\n- How AI might make performance problems even worse\n- Potential solutions through better substrate design\n\nWhether you're a developer frustrated with slow tools, a user wondering why your powerful computer still feels sluggish, or someone interested in the intersection of technology and culture, this discussion offers valuable insights into one of computing's most persistent challenges.",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "ThePrimeTime",
			//				 "tags": [
			//					 "programming",
			//					 "software engineer",
			//					 "software engineering",
			//					 "developer",
			//					 "web design",
			//					 "web development",
			//					 "programmer humor"
			//				 ],
			//				 "categoryId": "28",
			//				 "liveBroadcastContent": "none",
			//				 "defaultLanguage": "en-US",
			//				 "localized": {
			//					 "title": "Why Performance Actually Matters (The Standup)",
			//					 "description": "Watch the https://bolt.new Reward Ceremony Live!\nJuly 26th 10AM PST on   / theprimeagen\n#sponsored  https://balls.yoga\n\n📌 Chapters:\n\n00:00:00 - Intro\n00:01:55 - The downward trend of performance expectations\n00:07:10 - The internet isn't to blame for slow speeds anymore\n00:11:27 - Dial up\n00:12:50 - School day routines and the reason behind modem sounds\n00:18:00 - Trash was a Catfish \n00:20:25 - Primes School Habits and his Moms prophetic Internet dream\n00:23:58 - Teej's highschool experience\n00:27:24 - Back on topic (its performance btw) WHO/WHAT is to blame\n00:39:38 - Speed = Sales and WHERE is the problem\n00:43:46 - Netflix BTW and WHEN performance is important\n00:48:35 - Too performant and waste\n00:53:14 - 'Hardware will catch up'\n01:01:13 - GPU vs CPU \n01:06:00 - Wrap up and closing thoughts \n\nLinks:\n- Casey's Performance Course: https://computerenhance.com\n\nFeaturing: \nPrime: https://x.com/ThePrimeagen \nTeej: https://x.com/teej_dv\nCasey Muratori: https://x.com/cmuratori\nTrash Dev: https://x.com/trashh_dev\n\n---\n\nIn this episode of The Standup, we tackle one of the most frustrating aspects of modern computing: why everything feels so sluggish despite having incredibly powerful hardware. Casey Muratori joins us to share his perspective on performance culture and how we've collectively lowered our standards over the past two decades.\n\nFrom nostalgic stories about dial-up internet and modem sounds to serious discussions about software architecture, this conversation covers the technical, cultural, and business factors that have led to today's performance problems. We explore real-world examples from Netflix, discuss the impact of layered abstractions, and examine how corporate development pressures contribute to the problem.\n\nKey topics include:\n- How performance standards have declined while hardware has improved exponentially\n- The role of abstractions and frameworks in creating performance bottlenecks\n- Real Netflix case studies showing the complex relationship between performance and user behavior\n- Why the \"hardware will catch up\" mentality is fundamentally flawed\n- The difference between GPU and CPU performance paradigms\n- How AI might make performance problems even worse\n- Potential solutions through better substrate design\n\nWhether you're a developer frustrated with slow tools, a user wondering why your powerful computer still feels sluggish, or someone interested in the intersection of technology and culture, this discussion offers valuable insights into one of computing's most persistent challenges."
			//				 },
			//				 "defaultAudioLanguage": "en-US"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT1H11M54S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "81098",
			//				 "likeCount": "2727",
			//				 "favoriteCount": "0",
			//				 "commentCount": "440"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "WVfAfHganEOG61fXrOD7wywLuEY",
			//		 "id": "TEwub005SkhrS1NXY3M",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-20T13:47:44Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Who Got 'Cold-Played'? 🫤 | Sunday Show",
			//			 "description": "Sign up for Nation Skill Up by Geeks for Geeks -\nhttps://gfgcdn.com/tu/VR6/\n\n**\n\n\n\n\nJoin this channel\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nSupreme Court, Tesla Tax & Deepfakes | The Sunday Show\n News ki baat, entertainment ke saath 📰🎭\nThis week on The Sunday Show:\n\n🧑‍⚖️ Samay Raina’s mic drop moment outside court. (Hint : he supports Mohak Mangal)\n 👧 Apoorva “The Rebel Kid” Makhija in controversy again over her comments.\n ⚠️ Indonesia’s 11-year-old viral star inspires everyone from cops to F1. Aura Farming legend.\n 🤖 Assam influencer Archita Phukan targeted by her own ex. AI-generated filth is real.\n 💔 ColdplayGate – CEO caught cheating on kiss cam. Live. Viral. Awkward.\n🔥 SPOTLIGHT: Why Tesla Costs ₹70 Lakh in India\n TaxLA is real. Tariffs, protectionism, and policy absurdities explained.\n🧼 Cleanest Cities 2025 – Indore tops again. But now there’s a “Swachh League”!\n 🥟 Jalebi Ban? – Viral fake news debunked. The Health Ministry clarifies.\n 🐄 Non-Veg Doodh? – India-US trade stuck over cow feed. Yes, seriously.\n 📖 Anti-Sacrilege Bill – Punjab proposes life term for hurting religious sentiments.\n 🐕 SC on Stray Dogs – Love them? Feed them at home, says Supreme Court.\n 💨 Coal Plants Exempt – Govt drops pollution tech mandate for 78% plants. Why?\n📉 SHARE BAZAAR: Viral of the Week\n 📱 Influencers Pari and Mahak arrested for obscene reels\n 🛒 NRI aunty caught shoplifting ₹1L worth at Target in USA\n 🥚 Eggs thrown at Rath Yatra in Toronto\n 🌊 Ganga Aarti... in Canada... without Ganga.\n\nChapters:\n00:00 - Intro\n01:05 - Samay Raina in Supreme Court\n01:48 - Aura Farming\n02:32 - Apoorva Mukhija Controversy\n04:05 - ColdPlay Bawal\n08:12 - Archita Phukan Controversy\n11:00 - Sunday Samachar\n28:19 - News From Newspapers\n30:19 - Spotlight - Tesla in India\n36:57 - Share Bazaar\n42:50 - Nonsense News\n45:05 - Reddit Reviews\n\n******************************************************************************\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/35ac3n5n\n\nSee you, in the next Episode!",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 4,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "oM9JHkKSWcs"
			//			 },
			//			 "videoOwnerChannelTitle": "Sarthak Goswami",
			//			 "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "oM9JHkKSWcs",
			//			 "videoPublishedAt": "2025-07-20T04:30:29Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
			//			 "id": "UC5fcjujOsqD-126Chn_BAuA",
			//			 "snippet": {
			//				 "title": "Sarthak Goswami",
			//				 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
			//				 "customUrl": "@sundaysarthak",
			//				 "publishedAt": "2018-01-02T14:18:23Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Sarthak Goswami",
			//					 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "bir2xJ3zqV1PJcOtWHeQQjMysfY",
			//			 "id": "oM9JHkKSWcs",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-20T04:30:29Z",
			//				 "channelId": "UC5fcjujOsqD-126Chn_BAuA",
			//				 "title": "Who Got 'Cold-Played'? 🫤 | Sunday Show",
			//				 "description": "Sign up for Nation Skill Up by Geeks for Geeks -\nhttps://gfgcdn.com/tu/VR6/\n\n**\n\n\n\n\nJoin this channel\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nSupreme Court, Tesla Tax & Deepfakes | The Sunday Show\n News ki baat, entertainment ke saath 📰🎭\nThis week on The Sunday Show:\n\n🧑‍⚖️ Samay Raina’s mic drop moment outside court. (Hint : he supports Mohak Mangal)\n 👧 Apoorva “The Rebel Kid” Makhija in controversy again over her comments.\n ⚠️ Indonesia’s 11-year-old viral star inspires everyone from cops to F1. Aura Farming legend.\n 🤖 Assam influencer Archita Phukan targeted by her own ex. AI-generated filth is real.\n 💔 ColdplayGate – CEO caught cheating on kiss cam. Live. Viral. Awkward.\n🔥 SPOTLIGHT: Why Tesla Costs ₹70 Lakh in India\n TaxLA is real. Tariffs, protectionism, and policy absurdities explained.\n🧼 Cleanest Cities 2025 – Indore tops again. But now there’s a “Swachh League”!\n 🥟 Jalebi Ban? – Viral fake news debunked. The Health Ministry clarifies.\n 🐄 Non-Veg Doodh? – India-US trade stuck over cow feed. Yes, seriously.\n 📖 Anti-Sacrilege Bill – Punjab proposes life term for hurting religious sentiments.\n 🐕 SC on Stray Dogs – Love them? Feed them at home, says Supreme Court.\n 💨 Coal Plants Exempt – Govt drops pollution tech mandate for 78% plants. Why?\n📉 SHARE BAZAAR: Viral of the Week\n 📱 Influencers Pari and Mahak arrested for obscene reels\n 🛒 NRI aunty caught shoplifting ₹1L worth at Target in USA\n 🥚 Eggs thrown at Rath Yatra in Toronto\n 🌊 Ganga Aarti... in Canada... without Ganga.\n\nChapters:\n00:00 - Intro\n01:05 - Samay Raina in Supreme Court\n01:48 - Aura Farming\n02:32 - Apoorva Mukhija Controversy\n04:05 - ColdPlay Bawal\n08:12 - Archita Phukan Controversy\n11:00 - Sunday Samachar\n28:19 - News From Newspapers\n30:19 - Spotlight - Tesla in India\n36:57 - Share Bazaar\n42:50 - Nonsense News\n45:05 - Reddit Reviews\n\n******************************************************************************\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/35ac3n5n\n\nSee you, in the next Episode!",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Sarthak Goswami",
			//				 "tags": [
			//					 "sarthak goswami",
			//					 "india news",
			//					 "sunday show",
			//					 "controversy",
			//					 "breaking news",
			//					 "top news",
			//					 "latest",
			//					 "satire",
			//					 "viral",
			//					 "Samay Raina",
			//					 "Apoorva Makhija",
			//					 "The Rebel Kid",
			//					 "Coldplayed",
			//					 "Coldplay Concert",
			//					 "ColdplayGate",
			//					 "Astronomer CEO",
			//					 "Tesla India",
			//					 "Tesla India Price",
			//					 "Tesla in India",
			//					 "deepfake scandal",
			//					 "deepfake danger",
			//					 "Assam deepfake",
			//					 "AI deepfake",
			//					 "Archita Phukan deepfake",
			//					 "Archita Phukan Scandal sacrilege law punjab",
			//					 "odisha news",
			//					 "swachh bharat",
			//					 "fake news india",
			//					 "india viral video",
			//					 "india memes"
			//				 ],
			//				 "categoryId": "25",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Who Got 'Cold-Played'? 🫤 | Sunday Show",
			//					 "description": "Sign up for Nation Skill Up by Geeks for Geeks -\nhttps://gfgcdn.com/tu/VR6/\n\n**\n\n\n\n\nJoin this channel\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nSupreme Court, Tesla Tax & Deepfakes | The Sunday Show\n News ki baat, entertainment ke saath 📰🎭\nThis week on The Sunday Show:\n\n🧑‍⚖️ Samay Raina’s mic drop moment outside court. (Hint : he supports Mohak Mangal)\n 👧 Apoorva “The Rebel Kid” Makhija in controversy again over her comments.\n ⚠️ Indonesia’s 11-year-old viral star inspires everyone from cops to F1. Aura Farming legend.\n 🤖 Assam influencer Archita Phukan targeted by her own ex. AI-generated filth is real.\n 💔 ColdplayGate – CEO caught cheating on kiss cam. Live. Viral. Awkward.\n🔥 SPOTLIGHT: Why Tesla Costs ₹70 Lakh in India\n TaxLA is real. Tariffs, protectionism, and policy absurdities explained.\n🧼 Cleanest Cities 2025 – Indore tops again. But now there’s a “Swachh League”!\n 🥟 Jalebi Ban? – Viral fake news debunked. The Health Ministry clarifies.\n 🐄 Non-Veg Doodh? – India-US trade stuck over cow feed. Yes, seriously.\n 📖 Anti-Sacrilege Bill – Punjab proposes life term for hurting religious sentiments.\n 🐕 SC on Stray Dogs – Love them? Feed them at home, says Supreme Court.\n 💨 Coal Plants Exempt – Govt drops pollution tech mandate for 78% plants. Why?\n📉 SHARE BAZAAR: Viral of the Week\n 📱 Influencers Pari and Mahak arrested for obscene reels\n 🛒 NRI aunty caught shoplifting ₹1L worth at Target in USA\n 🥚 Eggs thrown at Rath Yatra in Toronto\n 🌊 Ganga Aarti... in Canada... without Ganga.\n\nChapters:\n00:00 - Intro\n01:05 - Samay Raina in Supreme Court\n01:48 - Aura Farming\n02:32 - Apoorva Mukhija Controversy\n04:05 - ColdPlay Bawal\n08:12 - Archita Phukan Controversy\n11:00 - Sunday Samachar\n28:19 - News From Newspapers\n30:19 - Spotlight - Tesla in India\n36:57 - Share Bazaar\n42:50 - Nonsense News\n45:05 - Reddit Reviews\n\n******************************************************************************\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/35ac3n5n\n\nSee you, in the next Episode!"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT50M31S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "true",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "896139",
			//				 "likeCount": "42582",
			//				 "favoriteCount": "0",
			//				 "commentCount": "4041"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "Lw_WsiBxHGlTx0WQfqMtts3aSck",
			//		 "id": "TEwuNTBJc2l4Mk9Odm8",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-19T10:28:44Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "How Indian Media Is FAILING Us? | Fixing News  Ep. 03 | ft. Manisha Pande @newslaundry  ​",
			//			 "description": "Welcome to the latest episode of Fixing News – the podcast for everyone tired of \"breaking\" news that only breaks logic.\n\nIn this episode, hosts Sarthak Goswami and Rishabh Srivastava are joined by Manisha Pande (Host- Newsance, Managing Editor at Newslaundry) for an honest, hilarious, and hard-hitting conversation about the state of Indian media. From her personal journey in journalism to exposing fake news, newsroom politics, legal battles, and the toxic nature of prime-time debates- this podcast goes deep. We also unpack Newslaundry’s ad-free revenue model, why real journalism matters, and the challenges faced by YouTubers and independent reporters in today’s media landscape.\n\nIf you're interested in Indian news, digital journalism, or media critique with a dose of humor- this episode is for you.\n\n#FixingNews #ManishaPande #Newslaundry #FakeNews #IndianMedia #YouTubePodcast #JournalismInIndia #SarthakGoswami #NewsPodcast #mediacritique \n\nHelp us decide who sits on the other side of the mic :studio_microphone: https://forms.gle/rMANoV1pHCRHGsry5 Drop your suggestions, tell us why they matter, and maybe your favorite creator ends up on a couch with us.\n\n******************************************************************************************************\nSupport Newslaundry: rzp.io/rzp/nlsm\n\nCOMMENT/SHARE the Video -- Make these stories reach maximum people by engaging with video. Let's do it!\n\nSay yes to us forever, become a member of The Sunday Sarthak YouTube fam and get exclusive content:\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n******************************************************************************************************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nHosts: Sarthak Goswami and Rishabh Srivastava\nEdits: Vishal, Shubham\nProducers: Rishabh Srivastava\n\nSee you, in the next Episode!",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/50Isix2ONvo/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/50Isix2ONvo/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/50Isix2ONvo/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/50Isix2ONvo/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/50Isix2ONvo/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 5,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "50Isix2ONvo"
			//			 },
			//			 "videoOwnerChannelTitle": "Sarthak Goswami",
			//			 "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "50Isix2ONvo",
			//			 "videoPublishedAt": "2025-07-19T08:03:04Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
			//			 "id": "UC5fcjujOsqD-126Chn_BAuA",
			//			 "snippet": {
			//				 "title": "Sarthak Goswami",
			//				 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
			//				 "customUrl": "@sundaysarthak",
			//				 "publishedAt": "2018-01-02T14:18:23Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Sarthak Goswami",
			//					 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "OJA8pDb1k9H55oXQF2_egZiFj2c",
			//			 "id": "50Isix2ONvo",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-19T08:03:04Z",
			//				 "channelId": "UC5fcjujOsqD-126Chn_BAuA",
			//				 "title": "How Indian Media Is FAILING Us? | Fixing News  Ep. 03 | ft. Manisha Pande @newslaundry  ​",
			//				 "description": "Welcome to the latest episode of Fixing News – the podcast for everyone tired of \"breaking\" news that only breaks logic.\n\nIn this episode, hosts Sarthak Goswami and Rishabh Srivastava are joined by Manisha Pande (Host- Newsance, Managing Editor at Newslaundry) for an honest, hilarious, and hard-hitting conversation about the state of Indian media. From her personal journey in journalism to exposing fake news, newsroom politics, legal battles, and the toxic nature of prime-time debates- this podcast goes deep. We also unpack Newslaundry’s ad-free revenue model, why real journalism matters, and the challenges faced by YouTubers and independent reporters in today’s media landscape.\n\nIf you're interested in Indian news, digital journalism, or media critique with a dose of humor- this episode is for you.\n\n#FixingNews #ManishaPande #Newslaundry #FakeNews #IndianMedia #YouTubePodcast #JournalismInIndia #SarthakGoswami #NewsPodcast #mediacritique \n\nHelp us decide who sits on the other side of the mic :studio_microphone: https://forms.gle/rMANoV1pHCRHGsry5 Drop your suggestions, tell us why they matter, and maybe your favorite creator ends up on a couch with us.\n\n******************************************************************************************************\nSupport Newslaundry: rzp.io/rzp/nlsm\n\nCOMMENT/SHARE the Video -- Make these stories reach maximum people by engaging with video. Let's do it!\n\nSay yes to us forever, become a member of The Sunday Sarthak YouTube fam and get exclusive content:\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n******************************************************************************************************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nHosts: Sarthak Goswami and Rishabh Srivastava\nEdits: Vishal, Shubham\nProducers: Rishabh Srivastava\n\nSee you, in the next Episode!",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/50Isix2ONvo/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/50Isix2ONvo/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/50Isix2ONvo/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/50Isix2ONvo/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/50Isix2ONvo/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Sarthak Goswami",
			//				 "tags": [
			//					 "sarthak goswami",
			//					 "india news",
			//					 "sunday show",
			//					 "latest",
			//					 "viral",
			//					 "Indian Journalism",
			//					 "Indian News Media",
			//					 "Godi Media",
			//					 "Fake News India",
			//					 "TV News India",
			//					 "Newslaundry Podcast",
			//					 "Manisha Pande Interview",
			//					 "Newsance Newslaundry",
			//					 "Arnab Goswami Debate",
			//					 "Rahul Shivshankar News",
			//					 "Sudhir Chaudhary Latest",
			//					 "Navika Kumar Debate",
			//					 "India vs Pakistan News",
			//					 "Nirbhaya Delhi Case",
			//					 "Amish Devgan Controversy",
			//					 "News Anchor Roast",
			//					 "Media Bias in India",
			//					 "Journalism in India 2025",
			//					 "Hindi News Anchors",
			//					 "Manisha Pande"
			//				 ],
			//				 "categoryId": "25",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "How Indian Media Is FAILING Us? | Fixing News  Ep. 03 | ft. Manisha Pande @newslaundry  ​",
			//					 "description": "Welcome to the latest episode of Fixing News – the podcast for everyone tired of \"breaking\" news that only breaks logic.\n\nIn this episode, hosts Sarthak Goswami and Rishabh Srivastava are joined by Manisha Pande (Host- Newsance, Managing Editor at Newslaundry) for an honest, hilarious, and hard-hitting conversation about the state of Indian media. From her personal journey in journalism to exposing fake news, newsroom politics, legal battles, and the toxic nature of prime-time debates- this podcast goes deep. We also unpack Newslaundry’s ad-free revenue model, why real journalism matters, and the challenges faced by YouTubers and independent reporters in today’s media landscape.\n\nIf you're interested in Indian news, digital journalism, or media critique with a dose of humor- this episode is for you.\n\n#FixingNews #ManishaPande #Newslaundry #FakeNews #IndianMedia #YouTubePodcast #JournalismInIndia #SarthakGoswami #NewsPodcast #mediacritique \n\nHelp us decide who sits on the other side of the mic :studio_microphone: https://forms.gle/rMANoV1pHCRHGsry5 Drop your suggestions, tell us why they matter, and maybe your favorite creator ends up on a couch with us.\n\n******************************************************************************************************\nSupport Newslaundry: rzp.io/rzp/nlsm\n\nCOMMENT/SHARE the Video -- Make these stories reach maximum people by engaging with video. Let's do it!\n\nSay yes to us forever, become a member of The Sunday Sarthak YouTube fam and get exclusive content:\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n******************************************************************************************************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nHosts: Sarthak Goswami and Rishabh Srivastava\nEdits: Vishal, Shubham\nProducers: Rishabh Srivastava\n\nSee you, in the next Episode!"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT1H15M14S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "188051",
			//				 "likeCount": "7599",
			//				 "favoriteCount": "0",
			//				 "commentCount": "712"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "_9-vBoGVt2rBFja7VPMLYu6YE-g",
			//		 "id": "TEwuRlRGRXprbHRRTDQ",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-15T13:34:05Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Ab To PJ Explained Bhi Chalega || Men Of Culture || Meme ep.45",
			//			 "description": "Share Your memes Here👇\nJoin Our Official discord - https://discord.gg/GAnTMVurm4\n\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nThis is a Discord meme reaction episode with the most savage and funny memes on the internet. Sit back and enjoy and don't forget to comment your fav parts about the episode✌️.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE  For Weekly Podcasts👇\nhttps://www.youtube.com/ @menofculturepodcast  \n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal https://www.youtube.com/ @BnfTV  \nMohit  https://www.youtube.com/ @comicverseog  \nthePJ  https://www.youtube.com/ @PJExplained",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 6,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "FTFEzkltQL4"
			//			 },
			//			 "videoOwnerChannelTitle": "Men of Culture Ultra",
			//			 "videoOwnerChannelId": "UCQwh4aoymaFf4gXv7MSxpMw"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "FTFEzkltQL4",
			//			 "videoPublishedAt": "2025-07-15T13:30:06Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "ZenrXTfibVsprOjUhVlp8KHvu4A",
			//			 "id": "UCQwh4aoymaFf4gXv7MSxpMw",
			//			 "snippet": {
			//				 "title": "Men of Culture Ultra",
			//				 "description": "Sister channel - Men of Culture\n\nfor business contact - business.menofcultureyt@gmail.com\n",
			//				 "customUrl": "@menofcultureultra",
			//				 "publishedAt": "2024-08-23T15:23:35.245187Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Men of Culture Ultra",
			//					 "description": "Sister channel - Men of Culture\n\nfor business contact - business.menofcultureyt@gmail.com\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "Om9o3OoHqtYvO5oB0yscM47djV8",
			//			 "id": "FTFEzkltQL4",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-15T13:30:06Z",
			//				 "channelId": "UCQwh4aoymaFf4gXv7MSxpMw",
			//				 "title": "Ab To PJ Explained Bhi Chalega || Men Of Culture || Meme ep.45",
			//				 "description": "Share Your memes Here👇\nJoin Our Official discord - https://discord.gg/GAnTMVurm4\n\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nThis is a Discord meme reaction episode with the most savage and funny memes on the internet. Sit back and enjoy and don't forget to comment your fav parts about the episode✌️.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE  For Weekly Podcasts👇\nhttps://www.youtube.com/ @menofculturepodcast  \n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal https://www.youtube.com/ @BnfTV  \nMohit  https://www.youtube.com/ @comicverseog  \nthePJ  https://www.youtube.com/ @PJExplained",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/FTFEzkltQL4/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Men of Culture Ultra",
			//				 "tags": [
			//					 "#memes",
			//					 "#memereaction",
			//					 "#vlogs",
			//					 "#fun",
			//					 "#menofculture",
			//					 "#reactionvideos",
			//					 "#comedy",
			//					 "#pjexplained",
			//					 "#bnftv",
			//					 "#comicverse",
			//					 "#freinds",
			//					 "#games",
			//					 "#laughter",
			//					 "#enjoy",
			//					 "#love",
			//					 "#podcast",
			//					 "#cinema",
			//					 "#moc",
			//					 "#movies",
			//					 "#marvel"
			//				 ],
			//				 "categoryId": "22",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Ab To PJ Explained Bhi Chalega || Men Of Culture || Meme ep.45",
			//					 "description": "Share Your memes Here👇\nJoin Our Official discord - https://discord.gg/GAnTMVurm4\n\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nThis is a Discord meme reaction episode with the most savage and funny memes on the internet. Sit back and enjoy and don't forget to comment your fav parts about the episode✌️.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE  For Weekly Podcasts👇\nhttps://www.youtube.com/ @menofculturepodcast  \n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal https://www.youtube.com/ @BnfTV  \nMohit  https://www.youtube.com/ @comicverseog  \nthePJ  https://www.youtube.com/ @PJExplained"
			//				 }
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT11M31S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "227765",
			//				 "likeCount": "15184",
			//				 "favoriteCount": "0",
			//				 "commentCount": "412"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "DgOvcnL5skqY5nlaVIfHUBxDp5w",
			//		 "id": "TEwuRGFxbTlRUGtjS00",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-13T13:07:51Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Lies EXPOSED? 😱| Sunday Show",
			//			 "description": "Try Odoo: https://www.odoo.com/r/H90R\n \nThis week was one big emotional rollercoaster. Air India Plane crash investigations, bots stole Tatkal tickets, Kapil ke café pe dhayein dhayein, aur Bihar ne bola: “Kaagaz dikhao, warna vote mat do!”\n Highlights from this chaotic week:\n✈️ Air India Crash Report is out — no bird hits, no pilot errors… toh crash kyun hua? Fuel cutoff ka twist?\n📜 Bihar’s Voter Verification drive sparks controversy — kaagaz dikhao, warna naam cut\n🎭 Kunal Kamra vs Eknath Shinde – joke pe motion, daadhi pe emotion\n🩸 Rahul Gandhi’s sanitary pad video goes viral — FIR, fake edit aur full drama\n🏏 Tatkal Ticket Scam 2.0 – Aadhaar verification useless, Tatkal bots return – Agents 1, IRCTC 0\n🚺 Radhika Yadav m**der – National tennis player, un-alived by her father over “log kya kahenge”\n🌧️ Himachal Floods & Kangana’s helplessness – sans funds, sans power, but full Twitter\n☕ Kapil Sharma’s Canada café - Literally under fire\n🕉️ Chhangur Baba Conversion Racket – ₹106 crore ka scam, caste-based rate card\n🚶‍♂️ Kawad Yatra tensions again - viral videos, vandalism fears, and the annual debate\n\n\n🗳️ Today’s SPOTLIGHT: SIR in Bihar = NRC 2.0? Citizenship proof ke naam pe voter list se cleansing? \n\n🕒 Timestamps:\n00:00 – Intro\n01:00 – Air India 171: What Really Happened?\n03:07 – Kunal Kamra’s Joke Trouble\n04:08 – Rahul Gandhi’s Pad Controversy\n05:49 – Kapil Sharma Café Firing\n06:34 – Himachal Floods & Kangana’s Response\n08:24 – Chhangur Baba Scam\n09:28 – Kawad Yatra Tensions\n11:10 – IRCTC Tatkal Ticket Scam\n15:47 – Radhika Yadav M**der Case\n16:35 – India’s Children Still Behind in School\n18:21 – SPOTLIGHT: Bihar Voter List Drama – CAA/NRC Lite?\n23:23 – Share Bazaar\n29:40 – Nonsense News\n33:14 – Sunday Sabha (MEMES)\n40:15 – Outro\n\n🧠 Weekly news, without the noise.\n😂 Politics, policies aur punches – sab milega iss Sunday Show pe.\n📣 Comment below:\n Is asking for kaagaz the same as NRC-lite?\n Kya IRCTC kabhi sudhrega?\n📍 Join our member fam:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/4b43ynnz\n\nSee you, in the next Episode!",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 7,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "Daqm9QPkcKM"
			//			 },
			//			 "videoOwnerChannelTitle": "Sarthak Goswami",
			//			 "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "Daqm9QPkcKM",
			//			 "videoPublishedAt": "2025-07-13T04:30:08Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
			//			 "id": "UC5fcjujOsqD-126Chn_BAuA",
			//			 "snippet": {
			//				 "title": "Sarthak Goswami",
			//				 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
			//				 "customUrl": "@sundaysarthak",
			//				 "publishedAt": "2018-01-02T14:18:23Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Sarthak Goswami",
			//					 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "Tgncb0ZshZQRtX25EG-AwfBoP8c",
			//			 "id": "Daqm9QPkcKM",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-13T04:30:08Z",
			//				 "channelId": "UC5fcjujOsqD-126Chn_BAuA",
			//				 "title": "Lies EXPOSED? 😱| Sunday Show",
			//				 "description": "Try Odoo: https://www.odoo.com/r/H90R\n \nThis week was one big emotional rollercoaster. Air India Plane crash investigations, bots stole Tatkal tickets, Kapil ke café pe dhayein dhayein, aur Bihar ne bola: “Kaagaz dikhao, warna vote mat do!”\n Highlights from this chaotic week:\n✈️ Air India Crash Report is out — no bird hits, no pilot errors… toh crash kyun hua? Fuel cutoff ka twist?\n📜 Bihar’s Voter Verification drive sparks controversy — kaagaz dikhao, warna naam cut\n🎭 Kunal Kamra vs Eknath Shinde – joke pe motion, daadhi pe emotion\n🩸 Rahul Gandhi’s sanitary pad video goes viral — FIR, fake edit aur full drama\n🏏 Tatkal Ticket Scam 2.0 – Aadhaar verification useless, Tatkal bots return – Agents 1, IRCTC 0\n🚺 Radhika Yadav m**der – National tennis player, un-alived by her father over “log kya kahenge”\n🌧️ Himachal Floods & Kangana’s helplessness – sans funds, sans power, but full Twitter\n☕ Kapil Sharma’s Canada café - Literally under fire\n🕉️ Chhangur Baba Conversion Racket – ₹106 crore ka scam, caste-based rate card\n🚶‍♂️ Kawad Yatra tensions again - viral videos, vandalism fears, and the annual debate\n\n\n🗳️ Today’s SPOTLIGHT: SIR in Bihar = NRC 2.0? Citizenship proof ke naam pe voter list se cleansing? \n\n🕒 Timestamps:\n00:00 – Intro\n01:00 – Air India 171: What Really Happened?\n03:07 – Kunal Kamra’s Joke Trouble\n04:08 – Rahul Gandhi’s Pad Controversy\n05:49 – Kapil Sharma Café Firing\n06:34 – Himachal Floods & Kangana’s Response\n08:24 – Chhangur Baba Scam\n09:28 – Kawad Yatra Tensions\n11:10 – IRCTC Tatkal Ticket Scam\n15:47 – Radhika Yadav M**der Case\n16:35 – India’s Children Still Behind in School\n18:21 – SPOTLIGHT: Bihar Voter List Drama – CAA/NRC Lite?\n23:23 – Share Bazaar\n29:40 – Nonsense News\n33:14 – Sunday Sabha (MEMES)\n40:15 – Outro\n\n🧠 Weekly news, without the noise.\n😂 Politics, policies aur punches – sab milega iss Sunday Show pe.\n📣 Comment below:\n Is asking for kaagaz the same as NRC-lite?\n Kya IRCTC kabhi sudhrega?\n📍 Join our member fam:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/4b43ynnz\n\nSee you, in the next Episode!",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Sarthak Goswami",
			//				 "tags": [
			//					 "sarthak goswami",
			//					 "india news",
			//					 "sunday show",
			//					 "controversy",
			//					 "breaking news",
			//					 "top news",
			//					 "latest",
			//					 "satire",
			//					 "viral",
			//					 "Air India Crash",
			//					 "Bihar Voter List",
			//					 "Tatkal Scam",
			//					 "Tatkal Ticket Scam",
			//					 "Kunal Kamra",
			//					 "Radhika Yadav",
			//					 "Kapil Sharma Cafe",
			//					 "Chhangur Baba",
			//					 "Kangana Ranaut",
			//					 "Education Survey India",
			//					 "CAA NRC",
			//					 "News Satire",
			//					 "The Sunday Show",
			//					 "Indian Politics",
			//					 "Bihar Elections 2025",
			//					 "Air India crash report",
			//					 "Air India Flight 171",
			//					 "IRCTC Tatkal scam",
			//					 "Bihar voter list",
			//					 "Rahul gandhi",
			//					 "rahul gandhi pad"
			//				 ],
			//				 "categoryId": "25",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Lies EXPOSED? 😱| Sunday Show",
			//					 "description": "Try Odoo: https://www.odoo.com/r/H90R\n \nThis week was one big emotional rollercoaster. Air India Plane crash investigations, bots stole Tatkal tickets, Kapil ke café pe dhayein dhayein, aur Bihar ne bola: “Kaagaz dikhao, warna vote mat do!”\n Highlights from this chaotic week:\n✈️ Air India Crash Report is out — no bird hits, no pilot errors… toh crash kyun hua? Fuel cutoff ka twist?\n📜 Bihar’s Voter Verification drive sparks controversy — kaagaz dikhao, warna naam cut\n🎭 Kunal Kamra vs Eknath Shinde – joke pe motion, daadhi pe emotion\n🩸 Rahul Gandhi’s sanitary pad video goes viral — FIR, fake edit aur full drama\n🏏 Tatkal Ticket Scam 2.0 – Aadhaar verification useless, Tatkal bots return – Agents 1, IRCTC 0\n🚺 Radhika Yadav m**der – National tennis player, un-alived by her father over “log kya kahenge”\n🌧️ Himachal Floods & Kangana’s helplessness – sans funds, sans power, but full Twitter\n☕ Kapil Sharma’s Canada café - Literally under fire\n🕉️ Chhangur Baba Conversion Racket – ₹106 crore ka scam, caste-based rate card\n🚶‍♂️ Kawad Yatra tensions again - viral videos, vandalism fears, and the annual debate\n\n\n🗳️ Today’s SPOTLIGHT: SIR in Bihar = NRC 2.0? Citizenship proof ke naam pe voter list se cleansing? \n\n🕒 Timestamps:\n00:00 – Intro\n01:00 – Air India 171: What Really Happened?\n03:07 – Kunal Kamra’s Joke Trouble\n04:08 – Rahul Gandhi’s Pad Controversy\n05:49 – Kapil Sharma Café Firing\n06:34 – Himachal Floods & Kangana’s Response\n08:24 – Chhangur Baba Scam\n09:28 – Kawad Yatra Tensions\n11:10 – IRCTC Tatkal Ticket Scam\n15:47 – Radhika Yadav M**der Case\n16:35 – India’s Children Still Behind in School\n18:21 – SPOTLIGHT: Bihar Voter List Drama – CAA/NRC Lite?\n23:23 – Share Bazaar\n29:40 – Nonsense News\n33:14 – Sunday Sabha (MEMES)\n40:15 – Outro\n\n🧠 Weekly news, without the noise.\n😂 Politics, policies aur punches – sab milega iss Sunday Show pe.\n📣 Comment below:\n Is asking for kaagaz the same as NRC-lite?\n Kya IRCTC kabhi sudhrega?\n📍 Join our member fam:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/4b43ynnz\n\nSee you, in the next Episode!"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT41M4S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "true",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "849452",
			//				 "likeCount": "65184",
			//				 "favoriteCount": "0",
			//				 "commentCount": "2427"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "JurdJ4lwo3cbs9Aery5-jKdw1A8",
			//		 "id": "TEwub0VYNVNVdGl5cmM",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-11T13:47:19Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Can Ramayana heal us from Adipurush?  |  Men of Culture 187",
			//			 "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps :\n0:00 - Kaise Ho bhaiyo \n1:17 - Pj Babu Ki Story \n2:05 - Josh Bhara Intro \n3:35 - Discuss Ramayana Teaser \n29:47 - Exited For 2026 \n31:13 - Edited For Odyssey\n32:31 - Odyssey Leaks & Update \n35:44 - Next Year Ki Films \n37:51 -  Discuss Jurassic World RB \n57:33 - Vin Diesel And Fast & Furious\n1:02:38 - Badal On Metro Inn dino \n1:08:00 - George Clooney Ka Charm \n1:09:39 - Back On Metro Inn dino \n1:13:49 - Hera pheri 3 Is back \n1:18:29 - Discuss Iron Heart \n1:35:02 - Squide Game S3 \n1:49:35 - Battle Of Galwan First Look \n1:50:33 - ChainsawMan Movie Trailer \n1:52:31 - Jujutsu Kaisen S3 \n1:54:17 - Demon Slayer Infinity Castle \n1:56:16 - Pj Anime Event Experience \n1:57:02 - ChainsawMan And Manga\n1:59:21 - Project hail Mary \n1:59:39 - Diego Is No more \n1:59:59 - Coolie Amir Look \n2:01:03 - Revisit SnyderVerse Films \n2:07:18 - Superman Early Review \n2:08:16 - The Battle Of Galwan \n2:08:40 - Pj See Srk House \n2:12:00 - SuperChat Reading",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 8,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "oEX5SUtiyrc"
			//			 },
			//			 "videoOwnerChannelTitle": "Men of culture",
			//			 "videoOwnerChannelId": "UC9CROGyC9hgIB1mnBuMpeoQ"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "oEX5SUtiyrc",
			//			 "videoPublishedAt": "2025-07-05T19:04:55Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "PNZWNsOf7GM7c6uDYi9Noz8LOgw",
			//			 "id": "UC9CROGyC9hgIB1mnBuMpeoQ",
			//			 "snippet": {
			//				 "title": "Men of culture",
			//				 "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n",
			//				 "customUrl": "@menofculturepodcast",
			//				 "publishedAt": "2021-11-30T11:18:37.30403Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Men of culture",
			//					 "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "wI6Kj5LfODjUrH0GOnZaknooGJc",
			//			 "id": "oEX5SUtiyrc",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-05T19:04:55Z",
			//				 "channelId": "UC9CROGyC9hgIB1mnBuMpeoQ",
			//				 "title": "Can Ramayana heal us from Adipurush?  |  Men of Culture 187",
			//				 "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps :\n0:00 - Kaise Ho bhaiyo \n1:17 - Pj Babu Ki Story \n2:05 - Josh Bhara Intro \n3:35 - Discuss Ramayana Teaser \n29:47 - Exited For 2026 \n31:13 - Edited For Odyssey\n32:31 - Odyssey Leaks & Update \n35:44 - Next Year Ki Films \n37:51 -  Discuss Jurassic World RB \n57:33 - Vin Diesel And Fast & Furious\n1:02:38 - Badal On Metro Inn dino \n1:08:00 - George Clooney Ka Charm \n1:09:39 - Back On Metro Inn dino \n1:13:49 - Hera pheri 3 Is back \n1:18:29 - Discuss Iron Heart \n1:35:02 - Squide Game S3 \n1:49:35 - Battle Of Galwan First Look \n1:50:33 - ChainsawMan Movie Trailer \n1:52:31 - Jujutsu Kaisen S3 \n1:54:17 - Demon Slayer Infinity Castle \n1:56:16 - Pj Anime Event Experience \n1:57:02 - ChainsawMan And Manga\n1:59:21 - Project hail Mary \n1:59:39 - Diego Is No more \n1:59:59 - Coolie Amir Look \n2:01:03 - Revisit SnyderVerse Films \n2:07:18 - Superman Early Review \n2:08:16 - The Battle Of Galwan \n2:08:40 - Pj See Srk House \n2:12:00 - SuperChat Reading",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Men of culture",
			//				 "tags": [
			//					 "men of culture",
			//					 "men of culture podcast",
			//					 "podcast",
			//					 "bnftv",
			//					 "Badal Yadav",
			//					 "Comicverse",
			//					 "Comic Verse",
			//					 "PJ Explained",
			//					 "thePJ",
			//					 "FlickVerse"
			//				 ],
			//				 "categoryId": "22",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Can Ramayana heal us from Adipurush?  |  Men of Culture 187",
			//					 "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps :\n0:00 - Kaise Ho bhaiyo \n1:17 - Pj Babu Ki Story \n2:05 - Josh Bhara Intro \n3:35 - Discuss Ramayana Teaser \n29:47 - Exited For 2026 \n31:13 - Edited For Odyssey\n32:31 - Odyssey Leaks & Update \n35:44 - Next Year Ki Films \n37:51 -  Discuss Jurassic World RB \n57:33 - Vin Diesel And Fast & Furious\n1:02:38 - Badal On Metro Inn dino \n1:08:00 - George Clooney Ka Charm \n1:09:39 - Back On Metro Inn dino \n1:13:49 - Hera pheri 3 Is back \n1:18:29 - Discuss Iron Heart \n1:35:02 - Squide Game S3 \n1:49:35 - Battle Of Galwan First Look \n1:50:33 - ChainsawMan Movie Trailer \n1:52:31 - Jujutsu Kaisen S3 \n1:54:17 - Demon Slayer Infinity Castle \n1:56:16 - Pj Anime Event Experience \n1:57:02 - ChainsawMan And Manga\n1:59:21 - Project hail Mary \n1:59:39 - Diego Is No more \n1:59:59 - Coolie Amir Look \n2:01:03 - Revisit SnyderVerse Films \n2:07:18 - Superman Early Review \n2:08:16 - The Battle Of Galwan \n2:08:40 - Pj See Srk House \n2:12:00 - SuperChat Reading"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT4H19M16S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "375102",
			//				 "likeCount": "12012",
			//				 "favoriteCount": "0",
			//				 "commentCount": "602"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "WLAuvWmXdBWVAJbQahau3KfYu_0",
			//		 "id": "TEwuekQ4emI0dzViUG8",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-10T12:12:49Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Ramayana teaser made 1000cr Profit? Prabhas vs Ranveer Clash confirmed",
			//			 "description": "suskribssssuuu\n\nJoin Bnftv Whatsapp channel - https://whatsapp.com/channel/0029VahMzDw545uveedFpV3T\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 9,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "zD8zb4w5bPo"
			//			 },
			//			 "videoOwnerChannelTitle": "BnfTV",
			//			 "videoOwnerChannelId": "UCUinnqDgIsNFleLdkZKbP-w"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "zD8zb4w5bPo",
			//			 "videoPublishedAt": "2025-07-09T14:15:23Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "8uO1Q4iH0wqu3lSdEdqk6dwjjbE",
			//			 "id": "UCUinnqDgIsNFleLdkZKbP-w",
			//			 "snippet": {
			//				 "title": "BnfTV",
			//				 "description": "No baat, only bakwaas 🙂 aisa kisi ne bola to paap lagega\n\nFor business enquiry: business.bnftv@gmail.com",
			//				 "customUrl": "@bnftv",
			//				 "publishedAt": "2016-10-28T04:18:16Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/AgJU9IXiiu0NSlOiXp1onAiFAI6XeZHWiRI232hgW_5WUnsNvW7dteK-H7Pq2brWM_zJEC8KJKE=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/AgJU9IXiiu0NSlOiXp1onAiFAI6XeZHWiRI232hgW_5WUnsNvW7dteK-H7Pq2brWM_zJEC8KJKE=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/AgJU9IXiiu0NSlOiXp1onAiFAI6XeZHWiRI232hgW_5WUnsNvW7dteK-H7Pq2brWM_zJEC8KJKE=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "BnfTV",
			//					 "description": "No baat, only bakwaas 🙂 aisa kisi ne bola to paap lagega\n\nFor business enquiry: business.bnftv@gmail.com"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "2r0ztF8hU2zV3D23cpX7cuI2tdY",
			//			 "id": "zD8zb4w5bPo",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-09T14:15:23Z",
			//				 "channelId": "UCUinnqDgIsNFleLdkZKbP-w",
			//				 "title": "Ramayana teaser made 1000cr Profit? Prabhas vs Ranveer Clash confirmed",
			//				 "description": "suskribssssuuu\n\nJoin Bnftv Whatsapp channel - https://whatsapp.com/channel/0029VahMzDw545uveedFpV3T\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "BnfTV",
			//				 "categoryId": "24",
			//				 "liveBroadcastContent": "none",
			//				 "defaultLanguage": "en-IN",
			//				 "localized": {
			//					 "title": "Ramayana teaser made 1000cr Profit? Prabhas vs Ranveer Clash confirmed",
			//					 "description": "suskribssssuuu\n\nJoin Bnftv Whatsapp channel - https://whatsapp.com/channel/0029VahMzDw545uveedFpV3T\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT9M28S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "542716",
			//				 "likeCount": "30240",
			//				 "favoriteCount": "0",
			//				 "commentCount": "1005"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "52k_OV03KPeiUIxFqbxPsada01E",
			//		 "id": "TEwud29zQzNVbjBBQUE",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-06T13:49:14Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Kaisi hogi Second Innings?🧐 | Sunday Show",
			//			 "description": "Is baar Dilli ne gaadi nahi, law hi reverse gear mein daal diya!\nFrom scrapping the scrappage policy to Pakistani actors popping up again online — this week was full of political U-turns, legal burns, and emotional churns.\n💥 Highlights this week:\n 🚗 Delhi’s scrap policy scrapped after outrage — gaadi tera bhai shayad chala payega!\n 🇵🇰 Banned Pakistani celeb accounts reappeared (aur fir se gayab) — Inka ban button bhi trial version lagta hai\n ⚖️ Mohammad Shami ordered to pay ₹4 lakh/month alimony — Hasin Jahan demands more\n 🏏 Rinku Singh gets govt job in UP Education Dept. — UPSC nahi khela, IPL khel liya\n 🔥 Shubman Gill breaks 13 records with a legendary 269 in Tests\n 👕 MS Dhoni trademarks ‘Captain Cool’ – chalo branding toh sahi hai\n 💃 Kerala Zumba ban protest — log soch rahe kids ne salsa shuru kar diya kya?\n 🗳️ Bihar allows voting by mobile phone — app ka naam SECBHR tho chunaav jitega nahi\n 💸 India gets record $135B in remittances + GST at ₹22 lakh crore\n 📈 Tata tops India’s most valuable brands list – Amul, Infosys, LIC, Reliance close behind\n 💔 Bombay HC says “I love you” ≠ sexual intent – kya love legal ho gaya?\n 💉 COV*D vaccines don’t cause premature d**ths – confirmed by ICMR\n 😔 WHO says loneliness is killing 100 people/hour globally – and you thought Monday was bad\nToday’s SPOTLIGHT - 🥗 India is eating more, but still not right — cereals are still king, protein abhi bhi praja hai.\n\n🧠 Subscribe for your weekly dose of smart satire & serious LOLs.\n\n📢 Comment below:\nWhich U-turn, outrage or update shocked you the most this week?  \n\nChapters:\n00:00 – Intro\n01:10 – Delhi fuel ban U-turn\n02:15 – Pakistani actor accounts drama\n04:01 – Shami vs Hasin Jahan\n06:19 – Rinku Singh gets govt job\n07:26 – Shubman Gill’s 269-run record\n08:14 – Captain Cool™ is now official\n09:12 - Sunday Samachar\n21:39 - Spotlight \n25:29 - Share Bazaar\n32:18 - Nonsense News\n37:00 - Positive News\n38:38 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/9yAuU\n\nSee you, in the next Episode!",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 10,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "wosC3Un0AAA"
			//			 },
			//			 "videoOwnerChannelTitle": "Sarthak Goswami",
			//			 "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "wosC3Un0AAA",
			//			 "videoPublishedAt": "2025-07-06T04:30:52Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
			//			 "id": "UC5fcjujOsqD-126Chn_BAuA",
			//			 "snippet": {
			//				 "title": "Sarthak Goswami",
			//				 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
			//				 "customUrl": "@sundaysarthak",
			//				 "publishedAt": "2018-01-02T14:18:23Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Sarthak Goswami",
			//					 "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "uNaWHhqe_uURg0E_pZz8HUga6eQ",
			//			 "id": "wosC3Un0AAA",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-06T04:30:52Z",
			//				 "channelId": "UC5fcjujOsqD-126Chn_BAuA",
			//				 "title": "Kaisi hogi Second Innings?🧐 | Sunday Show",
			//				 "description": "Is baar Dilli ne gaadi nahi, law hi reverse gear mein daal diya!\nFrom scrapping the scrappage policy to Pakistani actors popping up again online — this week was full of political U-turns, legal burns, and emotional churns.\n💥 Highlights this week:\n 🚗 Delhi’s scrap policy scrapped after outrage — gaadi tera bhai shayad chala payega!\n 🇵🇰 Banned Pakistani celeb accounts reappeared (aur fir se gayab) — Inka ban button bhi trial version lagta hai\n ⚖️ Mohammad Shami ordered to pay ₹4 lakh/month alimony — Hasin Jahan demands more\n 🏏 Rinku Singh gets govt job in UP Education Dept. — UPSC nahi khela, IPL khel liya\n 🔥 Shubman Gill breaks 13 records with a legendary 269 in Tests\n 👕 MS Dhoni trademarks ‘Captain Cool’ – chalo branding toh sahi hai\n 💃 Kerala Zumba ban protest — log soch rahe kids ne salsa shuru kar diya kya?\n 🗳️ Bihar allows voting by mobile phone — app ka naam SECBHR tho chunaav jitega nahi\n 💸 India gets record $135B in remittances + GST at ₹22 lakh crore\n 📈 Tata tops India’s most valuable brands list – Amul, Infosys, LIC, Reliance close behind\n 💔 Bombay HC says “I love you” ≠ sexual intent – kya love legal ho gaya?\n 💉 COV*D vaccines don’t cause premature d**ths – confirmed by ICMR\n 😔 WHO says loneliness is killing 100 people/hour globally – and you thought Monday was bad\nToday’s SPOTLIGHT - 🥗 India is eating more, but still not right — cereals are still king, protein abhi bhi praja hai.\n\n🧠 Subscribe for your weekly dose of smart satire & serious LOLs.\n\n📢 Comment below:\nWhich U-turn, outrage or update shocked you the most this week?  \n\nChapters:\n00:00 – Intro\n01:10 – Delhi fuel ban U-turn\n02:15 – Pakistani actor accounts drama\n04:01 – Shami vs Hasin Jahan\n06:19 – Rinku Singh gets govt job\n07:26 – Shubman Gill’s 269-run record\n08:14 – Captain Cool™ is now official\n09:12 - Sunday Samachar\n21:39 - Spotlight \n25:29 - Share Bazaar\n32:18 - Nonsense News\n37:00 - Positive News\n38:38 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/9yAuU\n\nSee you, in the next Episode!",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/wosC3Un0AAA/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Sarthak Goswami",
			//				 "tags": [
			//					 "sarthak goswami",
			//					 "india news",
			//					 "sunday show",
			//					 "controversy",
			//					 "breaking news",
			//					 "top news",
			//					 "latest",
			//					 "satire",
			//					 "viral",
			//					 "The Sunday Show",
			//					 "Delhi Fuel Ban",
			//					 "delhi fuel ban old vehicles",
			//					 "Mohammad Shami",
			//					 "Hasin Jahan",
			//					 "Shami divorce",
			//					 "Shubman Gill",
			//					 "Captain Cool",
			//					 "Dhoni",
			//					 "Kerala Zumba",
			//					 "RinkuSingh",
			//					 "Pakistani Celebs",
			//					 "GST India",
			//					 "Indian News Satire",
			//					 "Bihar Elections",
			//					 "Bihar evoting",
			//					 "India top brand",
			//					 "top brand in india",
			//					 "tata brand",
			//					 "Test Series",
			//					 "India vs england test"
			//				 ],
			//				 "categoryId": "25",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Kaisi hogi Second Innings?🧐 | Sunday Show",
			//					 "description": "Is baar Dilli ne gaadi nahi, law hi reverse gear mein daal diya!\nFrom scrapping the scrappage policy to Pakistani actors popping up again online — this week was full of political U-turns, legal burns, and emotional churns.\n💥 Highlights this week:\n 🚗 Delhi’s scrap policy scrapped after outrage — gaadi tera bhai shayad chala payega!\n 🇵🇰 Banned Pakistani celeb accounts reappeared (aur fir se gayab) — Inka ban button bhi trial version lagta hai\n ⚖️ Mohammad Shami ordered to pay ₹4 lakh/month alimony — Hasin Jahan demands more\n 🏏 Rinku Singh gets govt job in UP Education Dept. — UPSC nahi khela, IPL khel liya\n 🔥 Shubman Gill breaks 13 records with a legendary 269 in Tests\n 👕 MS Dhoni trademarks ‘Captain Cool’ – chalo branding toh sahi hai\n 💃 Kerala Zumba ban protest — log soch rahe kids ne salsa shuru kar diya kya?\n 🗳️ Bihar allows voting by mobile phone — app ka naam SECBHR tho chunaav jitega nahi\n 💸 India gets record $135B in remittances + GST at ₹22 lakh crore\n 📈 Tata tops India’s most valuable brands list – Amul, Infosys, LIC, Reliance close behind\n 💔 Bombay HC says “I love you” ≠ sexual intent – kya love legal ho gaya?\n 💉 COV*D vaccines don’t cause premature d**ths – confirmed by ICMR\n 😔 WHO says loneliness is killing 100 people/hour globally – and you thought Monday was bad\nToday’s SPOTLIGHT - 🥗 India is eating more, but still not right — cereals are still king, protein abhi bhi praja hai.\n\n🧠 Subscribe for your weekly dose of smart satire & serious LOLs.\n\n📢 Comment below:\nWhich U-turn, outrage or update shocked you the most this week?  \n\nChapters:\n00:00 – Intro\n01:10 – Delhi fuel ban U-turn\n02:15 – Pakistani actor accounts drama\n04:01 – Shami vs Hasin Jahan\n06:19 – Rinku Singh gets govt job\n07:26 – Shubman Gill’s 269-run record\n08:14 – Captain Cool™ is now official\n09:12 - Sunday Samachar\n21:39 - Spotlight \n25:29 - Share Bazaar\n32:18 - Nonsense News\n37:00 - Positive News\n38:38 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/9yAuU\n\nSee you, in the next Episode!"
			//				 },
			//				 "defaultAudioLanguage": "hi"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT46M6S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "true",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "858925",
			//				 "likeCount": "64777",
			//				 "favoriteCount": "0",
			//				 "commentCount": "2586"
			//			 }
			//		 }
			//	 },
			//	 {
			//		 "kind": "youtube#playlistItem",
			//		 "etag": "B8-FEWNgi6l6j1rRPIaERWSZq9E",
			//		 "id": "TEwuZ3pVdS1GSjdzLVk",
			//		 "snippet": {
			//			 "publishedAt": "2025-07-03T10:13:23Z",
			//			 "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
			//			 "title": "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
			//			 "description": "An outcome through a collaboration of some of the world’s best to ensure that Ramayana is presented with the greatest amount of Reverence and Respect. \n\nWelcome to the Beginning. \n\nLet’s celebrate the IMMORTAL story of Rama v/s Ravana. \n\nOur Truth. Our History.\n\nDirected by Nitesh Tiwari, Produced by Namit Malhotra’s Prime Focus Studios and 8-time Oscar winning VFX studio DNEG in association with Yash’s Monster Mind Creations; Ramayana is being filmed for IMAX and will release worldwide: Part 1 on Diwali 2026 and Part 2 on Diwali 2027.\n\nNamit Malhotra’s Ramayana\n\nStarring:\nRanbir Kapoor as Rama\nYash as Ravana\nSai Pallavi as Sita\nRavie Dubey as Lakshman\nSunny Deol as Hanuman\n\nCo-Produced by Yash\nWritten by Shridhar Raghavan\nDirected by Nitesh Tiwari\n\nMusic by Hans Zimmer & AR Rahman\nLyrics by Kumar Vishwas\n\nVFX by DNEG (8-time Academy Award winners)\n\nFilmed for IMAX\n\nPresented by Prime Focus Studios in association with Monster Mind Creations\n\nAudio on Sony Music Entertainment India Pvt. Ltd (C) 2025\n👉 Subscribe To Sony Music India YouTube - http://bit.ly/SonyMusic_YouTube\n👉 Like us : Facebook - https://www.facebook.com/SonyMusicIndia \n👉 Follow us : Instagram - https://www.instagram.com/sonymusicindia\n👉 Follow us : Twitter - https://twitter.com/sonymusicindia\n\n#HansZimmer #ARRahman #RanbirKapoor #Yash #NamitMalhotra #SaiPallavi #WorldOfRamayana",
			//			 "thumbnails": {
			//				 "default": {
			//					 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/default.jpg",
			//					 "width": 120,
			//					 "height": 90
			//				 },
			//				 "medium": {
			//					 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/mqdefault.jpg",
			//					 "width": 320,
			//					 "height": 180
			//				 },
			//				 "high": {
			//					 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/hqdefault.jpg",
			//					 "width": 480,
			//					 "height": 360
			//				 },
			//				 "standard": {
			//					 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/sddefault.jpg",
			//					 "width": 640,
			//					 "height": 480
			//				 },
			//				 "maxres": {
			//					 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/maxresdefault.jpg",
			//					 "width": 1280,
			//					 "height": 720
			//				 }
			//			 },
			//			 "channelTitle": "Tejas Prajapati",
			//			 "playlistId": "LL",
			//			 "position": 11,
			//			 "resourceId": {
			//				 "kind": "youtube#video",
			//				 "videoId": "gzUu-FJ7s-Y"
			//			 },
			//			 "videoOwnerChannelTitle": "Sony Music India",
			//			 "videoOwnerChannelId": "UC56gTxNs4f9xZ7Pa2i5xNzg"
			//		 },
			//		 "contentDetails": {
			//			 "videoId": "gzUu-FJ7s-Y",
			//			 "videoPublishedAt": "2025-07-03T09:30:34Z"
			//		 },
			//		 "chDetails": {
			//			 "kind": "youtube#channel",
			//			 "etag": "UC5hcU_J0AFe1LBB1WI754SnXFI",
			//			 "id": "UC56gTxNs4f9xZ7Pa2i5xNzg",
			//			 "snippet": {
			//				 "title": "Sony Music India",
			//				 "description": "Welcome to Sony Music India's official YouTube channel, the ultimate destination for music enthusiasts and fans of the Indian music scene. Immerse yourself in a world of melodies, rhythms, and harmonies as we proudly present \"Sony Music India - Home To India's Biggest Music Hits.\"\n\nStep into a realm where musical brilliance knows no bounds, and every beat resonates with the heartbeat of a nation. With a legacy that spans genres and generations, our channel is a testament to the power of music to unite, inspire, and captivate. From timeless classics to contemporary chart-toppers, we curate a diverse range of sounds that cater to every palate.\n\nhit that subscribe button and become a part of our musical family. Tune in daily to satiate your cravings for remarkable tunes, captivating visuals, and the sheer joy that great music brings. \n\n👉 Subscribe: - https://www.youtube.com/@SonyMusicIndia/videos\n",
			//				 "customUrl": "@sonymusicindia",
			//				 "publishedAt": "2009-09-02T23:16:22Z",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://yt3.ggpht.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s88-c-k-c0x00ffffff-no-rj",
			//						 "width": 88,
			//						 "height": 88
			//					 },
			//					 "medium": {
			//						 "url": "https://yt3.ggpht.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s240-c-k-c0x00ffffff-no-rj",
			//						 "width": 240,
			//						 "height": 240
			//					 },
			//					 "high": {
			//						 "url": "https://yt3.ggpht.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s800-c-k-c0x00ffffff-no-rj",
			//						 "width": 800,
			//						 "height": 800
			//					 }
			//				 },
			//				 "localized": {
			//					 "title": "Sony Music India",
			//					 "description": "Welcome to Sony Music India's official YouTube channel, the ultimate destination for music enthusiasts and fans of the Indian music scene. Immerse yourself in a world of melodies, rhythms, and harmonies as we proudly present \"Sony Music India - Home To India's Biggest Music Hits.\"\n\nStep into a realm where musical brilliance knows no bounds, and every beat resonates with the heartbeat of a nation. With a legacy that spans genres and generations, our channel is a testament to the power of music to unite, inspire, and captivate. From timeless classics to contemporary chart-toppers, we curate a diverse range of sounds that cater to every palate.\n\nhit that subscribe button and become a part of our musical family. Tune in daily to satiate your cravings for remarkable tunes, captivating visuals, and the sheer joy that great music brings. \n\n👉 Subscribe: - https://www.youtube.com/@SonyMusicIndia/videos\n"
			//				 },
			//				 "country": "IN"
			//			 }
			//		 },
			//		 "vDetails": {
			//			 "kind": "youtube#video",
			//			 "etag": "9m8xMTCnkLfiquY-3S1sqSBQ5Ro",
			//			 "id": "gzUu-FJ7s-Y",
			//			 "snippet": {
			//				 "publishedAt": "2025-07-03T09:30:34Z",
			//				 "channelId": "UC56gTxNs4f9xZ7Pa2i5xNzg",
			//				 "title": "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
			//				 "description": "An outcome through a collaboration of some of the world’s best to ensure that Ramayana is presented with the greatest amount of Reverence and Respect. \n\nWelcome to the Beginning. \n\nLet’s celebrate the IMMORTAL story of Rama v/s Ravana. \n\nOur Truth. Our History.\n\nDirected by Nitesh Tiwari, Produced by Namit Malhotra’s Prime Focus Studios and 8-time Oscar winning VFX studio DNEG in association with Yash’s Monster Mind Creations; Ramayana is being filmed for IMAX and will release worldwide: Part 1 on Diwali 2026 and Part 2 on Diwali 2027.\n\nNamit Malhotra’s Ramayana\n\nStarring:\nRanbir Kapoor as Rama\nYash as Ravana\nSai Pallavi as Sita\nRavie Dubey as Lakshman\nSunny Deol as Hanuman\n\nCo-Produced by Yash\nWritten by Shridhar Raghavan\nDirected by Nitesh Tiwari\n\nMusic by Hans Zimmer & AR Rahman\nLyrics by Kumar Vishwas\n\nVFX by DNEG (8-time Academy Award winners)\n\nFilmed for IMAX\n\nPresented by Prime Focus Studios in association with Monster Mind Creations\n\nAudio on Sony Music Entertainment India Pvt. Ltd (C) 2025\n👉 Subscribe To Sony Music India YouTube - http://bit.ly/SonyMusic_YouTube\n👉 Like us : Facebook - https://www.facebook.com/SonyMusicIndia \n👉 Follow us : Instagram - https://www.instagram.com/sonymusicindia\n👉 Follow us : Twitter - https://twitter.com/sonymusicindia\n\n#HansZimmer #ARRahman #RanbirKapoor #Yash #NamitMalhotra #SaiPallavi #WorldOfRamayana",
			//				 "thumbnails": {
			//					 "default": {
			//						 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/default.jpg",
			//						 "width": 120,
			//						 "height": 90
			//					 },
			//					 "medium": {
			//						 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/mqdefault.jpg",
			//						 "width": 320,
			//						 "height": 180
			//					 },
			//					 "high": {
			//						 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/hqdefault.jpg",
			//						 "width": 480,
			//						 "height": 360
			//					 },
			//					 "standard": {
			//						 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/sddefault.jpg",
			//						 "width": 640,
			//						 "height": 480
			//					 },
			//					 "maxres": {
			//						 "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/maxresdefault.jpg",
			//						 "width": 1280,
			//						 "height": 720
			//					 }
			//				 },
			//				 "channelTitle": "Sony Music India",
			//				 "tags": [
			//					 "sony music india",
			//					 "ramayan",
			//					 "ramayana",
			//					 "ramayana teaser",
			//					 "ramayana trailer",
			//					 "ramayan introduction",
			//					 "ramayana song",
			//					 "ramayan trailer",
			//					 "ranbir kapoor",
			//					 "yash",
			//					 "hans zimmer",
			//					 "ar rahman",
			//					 "hans zimmer ar rahman",
			//					 "ar rahman hans zimmer",
			//					 "hans zimmer soundtrack",
			//					 "hans zimmer songs",
			//					 "ravan",
			//					 "ram",
			//					 "rama vs ravan",
			//					 "ranbir kapoor songs",
			//					 "sai pallavi",
			//					 "sai pallavi movies",
			//					 "ramayan song",
			//					 "namit malhotras ramayana",
			//					 "ramayana movie",
			//					 "namit malhotra",
			//					 "ranbir kapoor ramayan",
			//					 "World Of Ramayana",
			//					 "nitesh tiwari ramayan"
			//				 ],
			//				 "categoryId": "10",
			//				 "liveBroadcastContent": "none",
			//				 "localized": {
			//					 "title": "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
			//					 "description": "An outcome through a collaboration of some of the world’s best to ensure that Ramayana is presented with the greatest amount of Reverence and Respect. \n\nWelcome to the Beginning. \n\nLet’s celebrate the IMMORTAL story of Rama v/s Ravana. \n\nOur Truth. Our History.\n\nDirected by Nitesh Tiwari, Produced by Namit Malhotra’s Prime Focus Studios and 8-time Oscar winning VFX studio DNEG in association with Yash’s Monster Mind Creations; Ramayana is being filmed for IMAX and will release worldwide: Part 1 on Diwali 2026 and Part 2 on Diwali 2027.\n\nNamit Malhotra’s Ramayana\n\nStarring:\nRanbir Kapoor as Rama\nYash as Ravana\nSai Pallavi as Sita\nRavie Dubey as Lakshman\nSunny Deol as Hanuman\n\nCo-Produced by Yash\nWritten by Shridhar Raghavan\nDirected by Nitesh Tiwari\n\nMusic by Hans Zimmer & AR Rahman\nLyrics by Kumar Vishwas\n\nVFX by DNEG (8-time Academy Award winners)\n\nFilmed for IMAX\n\nPresented by Prime Focus Studios in association with Monster Mind Creations\n\nAudio on Sony Music Entertainment India Pvt. Ltd (C) 2025\n👉 Subscribe To Sony Music India YouTube - http://bit.ly/SonyMusic_YouTube\n👉 Like us : Facebook - https://www.facebook.com/SonyMusicIndia \n👉 Follow us : Instagram - https://www.instagram.com/sonymusicindia\n👉 Follow us : Twitter - https://twitter.com/sonymusicindia\n\n#HansZimmer #ARRahman #RanbirKapoor #Yash #NamitMalhotra #SaiPallavi #WorldOfRamayana"
			//				 },
			//				 "defaultAudioLanguage": "en"
			//			 },
			//			 "contentDetails": {
			//				 "duration": "PT3M4S",
			//				 "dimension": "2d",
			//				 "definition": "hd",
			//				 "caption": "false",
			//				 "licensedContent": true,
			//				 "contentRating": {},
			//				 "projection": "rectangular"
			//			 },
			//			 "statistics": {
			//				 "viewCount": "18512748",
			//				 "likeCount": "589160",
			//				 "favoriteCount": "0",
			//				 "commentCount": "29100"
			//			 }
			//		 }
			//	 }
			// ]

			return res
				.status(200)
				.json(resData)

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