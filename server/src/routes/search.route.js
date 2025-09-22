import { Router } from 'express'
import { getSearchResults } from '../controllers/search.controller.js'

const router = Router()

router.route("/").get(getSearchResults)

export default router