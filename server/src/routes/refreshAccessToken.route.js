import { Router } from 'express'
import {refreshAccessToken} from '../utils/refreshAccessToken.js'

const router = Router()

router.route("/refreshAccessToken").get(refreshAccessToken)

export default router