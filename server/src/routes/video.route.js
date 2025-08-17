import { Router } from 'express'
import { isLoggedIn } from '../middlewares/auth.middleware.js'
import { getVideos, getVideo } from '../controllers/video.controller.js'

const router = Router()

router.use(isLoggedIn)

router.route("/").get(getVideos)
router.route("/:vId").get(getVideo)

export default router