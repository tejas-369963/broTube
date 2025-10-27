import { google } from 'googleapis'
import {
	asyncHandler,
	ApiError,
	ApiResponse
} from '../utils/index.js'
import { oauth2Client } from '../utils/gApi.js'
import { refreshAccessToken } from '../utils/refreshAccessToken.js'

const youtube = google.youtube({
	version: "v3",
	auth: process.env.API_KEY
})

const options = {
	httpOnly: true,
	secure: true,
	sameSite: "None"
}

const authUrl = (req, res) => {

	try {
		const url = oauth2Client.generateAuthUrl({
			access_type: "offline",
			prompt: "consent",
			scope: [
				"https://www.googleapis.com/auth/youtube.readonly",
				"https://www.googleapis.com/auth/youtube.force-ssl",
				"https://www.googleapis.com/auth/userinfo.email",
				"https://www.googleapis.com/auth/userinfo.profile",
				"openid"
			]
		})

		res.redirect(url)
	} catch (error) {
		throw new ApiError(500, "SomeThing went wrong while logging the user,  ERROR: " + error.message)
	}
}

const loginUser = asyncHandler(async (req, res) => {

	const { code } = req.query
	if (!code) throw new ApiError(400, "No code provided by googleApi");

	try {

		const { tokens } = await oauth2Client.getToken(code)
		oauth2Client.setCredentials(tokens)

		const now = Date.now()

		const accessMaxAge = tokens?.expiry_date - now
		const refreshMaxAge = tokens.refresh_token_expires_in * 1000

		return res
			.cookie("access_token", tokens.access_token, { ...options, maxAge: accessMaxAge })
			// .cookie("access_token_exp", tokens.expiry_date, { ...options, maxAge: accessMaxAge })
			.cookie("refresh_token", tokens.refresh_token, { ...options, maxAge: refreshMaxAge })
			.cookie("id_token", tokens.id_token, { ...options, maxAge: refreshMaxAge })
			.redirect(`${process.env.CORS_ORIGIN}`)

	} catch (error) {
		throw new ApiError(500, "SomeThing went wrong while logging the user,  ERROR: " + error.message)
	}
})

const logout = asyncHandler(async (req, res) => {
	try {
		Object.keys(req.cookies).forEach((cookieName) => {
			res.clearCookie(cookieName);
		})
		return res
			.json(new ApiResponse(200, {}, "User Logged out"))
			.redirect(`${process.env.CORS_ORIGIN}`)

	} catch (error) {
		throw new ApiError(500, "SomeThing went wrong while logging out the user,  ERROR: " + error.message)
	}
})

const loggedIn = asyncHandler(async (req, res) => {

	const userInfo = req.cookies?.id_token
	const refreshToken = req.cookies?.refresh_token

	if (!userInfo || !refreshToken) throw new ApiError(401, "Not logged in")

	if (req?.cookies?.access_token) {

		oauth2Client.setCredentials({ refresh_token: refreshToken })
		const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client })
		const { data: user } = await oauth2.userinfo.get()

		const youtube = google.youtube({
			version: "v3",
			auth: oauth2Client,
		});

		const response = await youtube.channels.list({
			part: "snippet",
			mine: true,
		});

		const customUrl = response.data?.items[0]?.snippet?.customUrl

		return res
			.status(200)
			.json(new ApiResponse(200, { userLoggedIn: true, userInfo: { name: user.name, customUrl, email: user.email, picture: user.picture } }, "Is Logged in"))
	}
	else {
		try {

			const accessToken = await refreshAccessToken(refreshToken)

			const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client })
			const { data: user } = await oauth2.userinfo.get()

			const youtube = google.youtube({
				version: "v3",
				auth: oauth2Client,
			});

			const response = await youtube.channels.list({
				part: "snippet",
				mine: true,
			});

			const customUrl = response.data?.items[0]?.snippet?.customUrl

			const now = Date.now()

			// const accessMaxAge = accessToken?.expiry_date - now 
			const accessMaxAge = 3600000

			return res
				.cookie("access_token", accessToken, { ...options, maxAge: accessMaxAge })
				.json(new ApiResponse(200, { userLoggedIn: accessToken ? true : false, userInfo: { name: user.name, customUrl, email: user.email, picture: user.picture } }, "Refreshed Access Token"))

		} catch (error) {
			throw new ApiError(500, "Something went wrong while refreshing the access token ERROR: " + error.message)
		}
	}
})

const getSubs = async (req, res) => {

	const pageToken = req.query.pageToken || ""

	try {

		const user = req.user

		if (!user)
			throw new ApiError(500, `Unauthorize request`)

		const subsRes = await youtube.subscriptions.list({
			part: "snippet",
			mine: true,
			maxResults: 9,
			auth: oauth2Client,
			pageToken
		})

		const subsInfo = subsRes?.data.items

		const subsIds = subsInfo.map(e => (e.snippet?.resourceId?.channelId))

		const channelRes = await youtube.channels.list({
			part: "statistics, contentDetails",
			id: subsIds
		})

		const channels = channelRes?.data?.items
		
		const subs = subsInfo.map((item) => {
			const ch = channels.find((c) => c.id === item.snippet.resourceId.channelId)
			return { ...item, chDetails: ch}
		})

		return res
			.status(200)
			.json({subs, totalSubs: subsRes.data.pageInfo.totalResults, nextPageToken: subsRes.data.nextPageToken})

	} catch (error) {
		throw new ApiError(500, `Something went wrong while fetching videos Error:  ${error.message}`)
	}
}

export {
	authUrl,
	loginUser,
	logout,
	loggedIn,
	getSubs
}