import { Router } from 'express'
import { authUrl, getSubs, loggedIn, loginUser, logout } from '../controllers/user.controller.js'
import { isLoggedIn } from '../middlewares/auth.middleware.js'

const router = Router()

router.route("/google").get(authUrl)
router.route("/google/callback").get(loginUser)
router.route("/loggedIn").get(loggedIn)
router.route("/logout").get(logout)
router.route("/subs").get(isLoggedIn, getSubs)

export default router