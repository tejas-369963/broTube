import { oauth2Client } from '../utils/gApi.js';
import { asyncHandler } from '../utils/index.js';

export const isLoggedIn = asyncHandler(async (req, _, next) => {

	const userInfo = req?.cookies?.id_token;
	
	const refreshToken = req?.cookies?.refresh_token

	// console.log("-->",refreshToken === undefined);

	if (!userInfo || !refreshToken) return next()

	req.user = userInfo

	try {
		oauth2Client.setCredentials({refresh_token: refreshToken})
		next()
	} catch (error) {
		console.log("OAuth error:", error.message);
		next()
	}

})