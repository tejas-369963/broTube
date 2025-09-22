import { Router } from 'express'
import { isLoggedIn } from '../middlewares/auth.middleware.js'
import { getVideos, getVideo, getSuggestions, getComments } from '../controllers/video.controller.js'

const router = Router()

router.use(isLoggedIn)

router.route("/").get(getVideos)
router.route("/sug").post(getSuggestions)
router.route("/com").post(getComments)
router.route("/:vId").get(getVideo)

export default router