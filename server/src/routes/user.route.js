import { Router } from 'express'
import { authUrl, loggedIn, loginUser, logout } from '../controllers/user.controller.js'

const router = Router()

router.route("/google").get(authUrl)
router.route("/google/callback").get(loginUser)
router.route("/loggedIn").get(loggedIn)
router.route("/logout").get(logout)

export default router