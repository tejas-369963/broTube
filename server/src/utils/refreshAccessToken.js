import { oauth2Client } from './gApi.js'

export const refreshAccessToken = async (refreshToken) => {

	oauth2Client.setCredentials({ refresh_token: refreshToken })
	const { token } = await oauth2Client.getAccessToken()

	if (!token) return null

	return token

}