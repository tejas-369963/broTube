import { Router } from 'express'
import { 
	getChannelInfo, 
	getChannelPlaylists, 
	getChannelVideos,  
} from '../controllers/channel.controller.js'

const router = Router()

router.route("/:channelId").get(getChannelInfo)
router.route("/").post(getChannelVideos)
router.route("/videos").post(getChannelVideos)
router.route("/playlists").post(getChannelPlaylists)

export default router