import { oauth2Client } from '../utils/gApi.js';
import { asyncHandler } from '../utils/index.js';

export const isLoggedIn = asyncHandler(async (req, _, next) => {

	const userInfo = req?.cookies?.id_token;
	
	const refreshToken = req?.cookies?.refresh_token

	if (!userInfo || !refreshToken) next()

	req.user = userInfo

	oauth2Client.setCredentials({refresh_token: refreshToken})

	next()

})