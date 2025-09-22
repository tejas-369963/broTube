import {Router} from 'express'
import {
	gamingVideos,
	musicVideos,
	sportsVideos,
	trendingVideos,
	vlogVideos,
} from '../controllers/explore.controller.js'

const router = Router()

router.route("/").get(trendingVideos)
router.route("/music").get(musicVideos)
router.route("/gaming").get(gamingVideos)
router.route("/sports").get(sportsVideos)
router.route("/vlog").get(vlogVideos)

export default router