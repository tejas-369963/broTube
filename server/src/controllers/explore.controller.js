import { google } from 'googleapis'
import {
    asyncHandler,
    ApiResponse,
    ApiError
} from '../utils/index.js'

const youtube = google.youtube({
    version: "v3",
    auth: process.env.API_KEY
})

const getChProfile = async (id) => {
    const res = await youtube.channels.list({
        part: "snippet",
        id: id
    })

    return res
}

const videosFetcher = async (cat) => {
    try {

        const videos = await youtube.videos.list({
            part: "snippet, statistics, contentDetails",
            chart: "mostPopular",
            videoCategoryId: cat,
            regionCode: "IN",
            maxResults: 20
        })

        const data = videos?.data?.items

        let chIds = []

        data.map((item) => {
            const chId = item.snippet.channelId
            chIds.push(chId)
        })

        const chRes = await getChProfile(chIds)

        let resData = []

        data.map((item) => {
            const chId = item.snippet.channelId
            const ch = chRes.data.items.filter((item) => item.id === chId)
            resData.push({ ...item, chDetails: ch[0] })
        })

        return resData

    } catch (error) {
        console.log(error.message);
        return null
    }
}

const trendingVideos = asyncHandler(async (req, res) => {

    try {

        const data = await videosFetcher()

        if (!data) throw new ApiError(500, "Something went wrong while fetching videos to explore")

        return res
            .status(200)
            .json(new ApiResponse(200, data, "Got all trending videos to explore"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching trending videos to explore")
    }

})

const musicVideos = asyncHandler(async (req, res) => {

    try {
        
        const data = await videosFetcher(10)

        if (!data) throw new ApiError(500, "Something went wrong while fetching videos to explore")

        return res
            .status(200)
            .json(new ApiResponse(200, data, "Got all music videos to explore"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching music videos to explore")
    }

})

const gamingVideos = asyncHandler(async (req, res) => {

    try {
        const data = await videosFetcher(20)

        if (!data) throw new ApiError(500, "Something went wrong while fetching videos to explore")

        return res
            .status(200)
            .json(new ApiResponse(200, data, "Got all gaming videos to explore"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching gaming videos to explore")
    }

})

const sportsVideos = asyncHandler(async (req, res) => {

    try {
        const data = await videosFetcher(17)

        if (!data) throw new ApiError(500, "Something went wrong while fetching videos to explore")

        return res
            .status(200)
            .json(new ApiResponse(200, data, "Got all sports videos to explore"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching sports videos to explore")
    }

})

const vlogVideos = asyncHandler(async (req, res) => {

    try {
        const data = await videosFetcher(22)

        if (!data) throw new ApiError(500, "Something went wrong while fetching videos to explore")

        return res
            .status(200)
            .json(new ApiResponse(200, data, "Got all comedy videos to explore"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching comedy videos to explore")
    }

})

export {
    trendingVideos,
    musicVideos,
    gamingVideos,
    sportsVideos,
    vlogVideos
}