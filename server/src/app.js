import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "18kb"}))

app.use(express.urlencoded({extended: true, limit: "18kb"}))

app.use(express.static("public"))

app.use(cookieParser())

import refreshRouter from './routes/refreshAccessToken.route.js'
import userRouter from './routes/user.route.js'
import videoRouter from "./routes/video.route.js"
import playlistRouter from "./routes/playlist.route.js"
import exploreRouter from './routes/explore.route.js'

app.use("/api/v1/auth", refreshRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/home", videoRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/explore", exploreRouter)

export { app }