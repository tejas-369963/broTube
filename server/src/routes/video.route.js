import { Router } from 'express'
import { getVideos, getVideo } from '../controllers/video.controller.js'
import { isLoggedIn } from '../middlewares/auth.middleware.js'

const router = Router()

router.use(isLoggedIn)

router.route("/").get(getVideos)
router.route("/:vId").get(getVideo)

export default router