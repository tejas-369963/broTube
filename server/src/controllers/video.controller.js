import { google } from 'googleapis'
import { oauth2Client } from '../utils/gApi.js'
import { asyncHandler, ApiError, ApiResponse } from '../utils/index.js'

const youtube = google.youtube({
    version: "v3",
    auth: process.env.API_KEY
})

const getChProfile = async (id) => {
    const response = await youtube.channels.list({
        part: "snippet",
        id: id
    })

    return response
}

const getVideoById = async (id) => {
    const res = await youtube.videos.list({
        part: "snippet, statistics, contentDetails",
        id: id
    })

    return res
}

const getVideos = async (req, res) => {
    
    const pageToken = req.query.pageToken || ""

    try {
        // if (req.cookies?.refresh_token) oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

        // console.log("youtube ...");

        let videos;
        
//         if (req.user) {
//             const subChannels = await youtube.subscriptions.list({
//                 part: "snippet",
//                 mine: true,
//                 maxResults: 21,
//                 auth: oauth2Client
//             })

//             const chIds =  subChannels.data.items.map((item) => item.snippet.resourceId.channelId)
// // console.log(chIds);

//             const chs = await youtube.channels.list({
//                 part: "contentDetails",
//                 id: chIds,
//                 auth: oauth2Client
//             })

//             const chVidIds = chs.data.items.map(item => item.contentDetails.relatedPlaylists.uploads)
            
//             const plIds = await youtube.playlistItems.list({
//                 part: "snippet, contentDetails",
//                 playlistId: chVidIds,
//                 maxResults: 12,
//                 auth: oauth2Client
//             })

//             const vids = plIds.data.items.map((item) => item.contentDetails.videoId)
            
//             videos = await youtube.videos.list({
//                 part: "snippet, statistics, contentDetails",
//                 id: vids,
//                 maxResults: 12,
//                 // pageToken
//             })

//             // console.log(videos.data.items);
            
//         }
        // else {
            videos = await youtube.videos.list({
                part: "snippet, statistics, contentDetails",
                chart: "mostPopular",
                regionCode: "IN",
                maxResults: 12,
                pageToken
            })
        // }

        const data = videos?.data?.items || []

        const chIds = data.map(item => item.snippet.channelId)

        const chRes = await getChProfile(chIds)

        if (!chRes) throw new ApiError(500, "Something went wrong while fetching the cannel's details")

        const channels = chRes.data?.items || []

        const resData = data.map((item) => {
            const ch = channels.find((c) => c.id === item.snippet.channelId)
            return { ...item, chDetails: ch }
        })

        return res
            .status(200)
            .json({ resData, nextPageToken: videos.data.nextPageToken })

    } catch (error) {
        console.log("hey", error.message);
        if (!res.headersSent) {
            return res
                .status(500)
                .json({ "Something went wrong while fetching the videos": error.message })
        }
    }

}

const getVideo = async (req, res) => {
    if (req.user) {
        try {
            // const { vId } = req.params

            // const videoRes = await youtube.videos.list({
            //     part: "snippet, statistics, contentDetails",
            //     id: vId
            // })

            // const video = videoRes?.data?.items

            // const channelRes = await youtube.channels.list({
            //     part: "snippet, statistics",
            //     id: video[0]?.snippet?.channelId
            // })

            // const channel = channelRes?.data?.items

            // const commentsRes = await youtube.commentThreads.list({
            //     part: "snippet",
            //     videoId: vId,
            //     maxResults: 12
            // })

            // const comments = commentsRes?.data?.items

            // const suggestionsRes = await youtube.search.list({
            //     part: "snippet",
            //     q: video[0]?.snippet.tags?.[0] || "",
            //     type: "video",
            //     maxResults: 10,
            // });

            // const suggestions = suggestionsRes?.data?.items

            // const data = {video, channel, comments, suggestions}

            return res
                .status(200)
                .json(data)

        } catch (error) {
            throw new ApiError(500, `Something went wrong while fetching videos Error:  ${error.message}`)
        }
    }
    else {
        try {
            const { vId } = req.params

            const videoRes = await youtube.videos.list({
                part: "snippet, statistics, contentDetails",
                id: vId
            })

            const video = videoRes?.data?.items

            const channelRes = await youtube.channels.list({
                part: "snippet, statistics",
                id: video[0]?.snippet?.channelId
            })

            const channel = channelRes?.data?.items

            const commentsRes = await youtube.commentThreads.list({
                part: "snippet",
                videoId: vId,
                maxResults: 12
            })

            const comments = commentsRes?.data?.items

            // const suggestionsRes = await youtube.search.list({
            //     part: "snippet",
            //     q: video[0]?.snippet.tags?.[0] || "",
            //     type: "video",
            //     maxResults: 10,
            // });

            // const suggestions = suggestionsRes?.data?.items

            const suggestions = [
                    {
                        "kind": "youtube#searchResult",
                        "etag": "i7MJkAwEyZbrZOxyTBVQmVjaNgQ",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "9wBLwneASnw"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T12:27:51Z",
                            "channelId": "UC_gUM8rL-Lrg6O3adPW9K1g",
                            "title": "Israel-Iran Tensions: Major Damage Reported In Haifa After Latest Iranian Attacks | WION",
                            "description": "In its first direct response to U.S. strikes, Iran launched a retaliatory attack causing significant damage across several Israeli cities, ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/9wBLwneASnw/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/9wBLwneASnw/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/9wBLwneASnw/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "WION",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T12:27:51Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "ylj9xVUyYNpBqgoQ54YAUZU7Vlo",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "EW67Uyzwrxc"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T13:03:28Z",
                            "channelId": "UCWUFwrNEs9MnFTc8LcQh8Pg",
                            "title": "Indian Defence Updates : India Warns PAK,Hypersonic Rocket Force,B-2 Bombs Iran,10KW DEW Order",
                            "description": "Top 19 Latest Indian Defence News Headlines on today's “Indian Defence Updates” episode 22-6-2025 are as follows : FAST ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/EW67Uyzwrxc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/EW67Uyzwrxc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/EW67Uyzwrxc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Indian Defence Updates",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T13:03:28Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "KYdyGFDrgXHs4Vu7cTPBK-6Iddg",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "qBCQjnf5bHk"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T04:35:45Z",
                            "channelId": "UCzQtGpWcgOyG0iCc-si1MWw",
                            "title": "Non skincare tips for healthy skin✨ #skin #skincare #glowyskin #beautytips",
                            "description": "",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/qBCQjnf5bHk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/qBCQjnf5bHk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/qBCQjnf5bHk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Aylen Park",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T04:35:45Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "soWjd_Dtp0xn3rPau7fo29rw8Zc",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "-fv559KX6AQ"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T11:11:48Z",
                            "channelId": "UC9xNfAZMDfLfuBP7gsRGhGw",
                            "title": "Engineer vip 704 #adamrose #construction #engineering #workers",
                            "description": "",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/-fv559KX6AQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/-fv559KX6AQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/-fv559KX6AQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Engineer Reaction",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T11:11:48Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "tLhgLMgEEoLtU9OU3YpZcBWB6KY",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "3I2WIMpoYnU"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T01:56:53Z",
                            "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                            "title": "How the 30,000-pound &quot;bunker buster&quot; bomb works",
                            "description": "ABC News contributor and retired Col. Steve Ganyard explains how the 30000-pound \"bunker buster\" bomb works; the bomb can ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/3I2WIMpoYnU/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/3I2WIMpoYnU/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/3I2WIMpoYnU/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "ABC News",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T01:56:53Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "_SQLS5Ykz4oQKe6fiaKLDiGbcEg",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "Wd28aoItEsA"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T09:00:47Z",
                            "channelId": "UCEq0KM_11rCTFee-ummB3Vw",
                            "title": "Khalil Rountree Jr. dropped Jamahal Hill multiple times! 💥 #UFC #UFCIndia",
                            "description": "Khalil Rountree Jr. takes home the unanimous decision win. Connect with UFC India online on Social: Instagram: ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/Wd28aoItEsA/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/Wd28aoItEsA/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/Wd28aoItEsA/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "UFC India",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T09:00:47Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "w4sZ7K7ca1sYpRJyt54q4F8SLt8",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "3RWuIINwMBk"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-21T17:45:59Z",
                            "channelId": "UCGaO3wLV8_N1YFbMOtuaYqw",
                            "title": "Siobhan Started Solving Brennan&#39;s Big Riddle Way Too Fast 📝",
                            "description": "Siobhan is too smart for Brennan's puzzles #shorts #dimension20 #cloudwardho To watch EVERY season of Dimension 20, every ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/3RWuIINwMBk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/3RWuIINwMBk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/3RWuIINwMBk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Dimension 20 Shorts",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-21T17:45:59Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "GhgGrOnkUeZx9sL4Y5HpE_WHeuk",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "jizVvr-3Vmk"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T03:29:00Z",
                            "channelId": "UCBnxEdpoZwstJqC1yZpOjRA",
                            "title": "Happy Birthday Thalapathy Vijay  | Sun Pictures",
                            "description": "From lighting up the screen to living in our hearts, the man who owns it all❤️ Happy Birthday, Thalapathy Vijay #ThalapathyVijay ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/jizVvr-3Vmk/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/jizVvr-3Vmk/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/jizVvr-3Vmk/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Sun TV",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T03:29:00Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "snV9_O9fR9uianWloKjN4ujLqOU",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "tmeRC6PSBaI"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T10:30:41Z",
                            "channelId": "UCyGa1YEx9ST66rYrJTGIKOw",
                            "title": "Muslera’s REMARKABLE save 😮‍💨",
                            "description": "championsleague #uefa #soccer -- Watch more at: https://www.uefa.tv/ ▶️ Subscribe to UEFA on YouTube at: ...",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/tmeRC6PSBaI/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/tmeRC6PSBaI/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/tmeRC6PSBaI/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "UEFA",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T10:30:41Z"
                        }
                    },
                    {
                        "kind": "youtube#searchResult",
                        "etag": "TzBKT_dJBid-iGa7FERATLArOiQ",
                        "id": {
                            "kind": "youtube#video",
                            "videoId": "Vi9YarhbgpU"
                        },
                        "snippet": {
                            "publishedAt": "2025-06-22T04:09:58Z",
                            "channelId": "UCS9cjn1lKuz4S5nDJ2JCQeQ",
                            "title": "24 hours feels like 24 days with her⏳#india #dayinmylife #nyc #indianfood",
                            "description": "",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/Vi9YarhbgpU/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/Vi9YarhbgpU/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/Vi9YarhbgpU/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                }
                            },
                            "channelTitle": "Jully Patel",
                            "liveBroadcastContent": "none",
                            "publishTime": "2025-06-22T04:09:58Z"
                        }
                    }
                ]

            const data = {video, channel, comments, suggestions}

            return res
                .status(200)
                .json(data)

        } catch (error) {
            throw new ApiError(500, `Something went wrong while fetching videos Error:  ${error.message}`)
        }
    }
}

export {
    getVideos,
    getVideo,
}