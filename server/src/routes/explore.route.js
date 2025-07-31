import {Router} from 'express'
import {exploreVideos, hv} from '../controllers/explore.controller.js'

const router = Router()

router.route("/").get(exploreVideos)
router.route("/h").get(hv)

export default router