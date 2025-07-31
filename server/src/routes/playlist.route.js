import { Router } from 'express'
import { isLoggedIn } from '../middlewares/auth.middleware.js'
import { getAllPlaylists, getAllPlaylistVideos, getLikedVideos, getWatchLaterVideos } from '../controllers/playlist.controller.js'

const router = Router()

router.use(isLoggedIn)

router.route("/").get(getAllPlaylists)
router.route("/p").post(getAllPlaylistVideos)
router.route("/LL").get(getLikedVideos)
router.route("/WL").get(getWatchLaterVideos)

export default router