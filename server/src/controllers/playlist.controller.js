import { google } from 'googleapis'
import { oauth2Client } from '../utils/gApi.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'

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

const getVideoById = async (id) => {
    const res = await youtube.videos.list({
        part: "snippet, statistics, contentDetails",
        id: id
    })

    return res
}

const getAllPlaylists = asyncHandler(async (req, res) => {
    if (req.user) {

        try {
            // oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

            // const playlists = await youtube.playlists.list({
            //     part: "snippet, contentDetails",
            //     mine: true,
            //     maxResults: 12,
            //     auth: oauth2Client,
            // })

            // const data = playlists.data?.items

            // const chIds = []
            // const vIds = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     chIds.push(chId)
            //     vIds.push(vId)
            // })

            // const chRes = await getChProfile(chIds)
            // const vRes = await getVideoById(vIds)

            // const resData = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     const ch = chRes.data.items.filter((item) => item.id === chId)
            //     const v = vRes.data.items.filter((item) => item.id === vId)
            //     resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
            // })

            const resData = [
                {
                    "kind": "youtube#playlist",
                    "etag": "hJlI6Tbftt0ktwL9v2Lw60F2mm8",
                    "id": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                    "snippet": {
                        "publishedAt": "2024-12-24T08:50:52.087527Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "S",
                        "description": "",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "localized": {
                            "title": "S",
                            "description": ""
                        }
                    },
                    "contentDetails": {
                        "itemCount": 81
                    }
                }
            ]

            return res
                .status(200)
                .json(resData)

        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Something went wrong while fetching playlists")
        }
    }

    throw new ApiError(401, "Unauthorized request")

})

const getAllPlaylistVideos = async (req, res) => {

    if (req.user) {

        try {

            // const {pId} = req.body

            // const playlists = await youtube.playlistItems.list({
            //     part: "snippet, contentDetails",
            //     playlistId: pId,
            //     maxResults: 12,
            //     auth: oauth2Client,
            // })

            // const data = playlists.data?.items

            // const chIds = []
            // const vIds = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     chIds.push(chId)
            //     vIds.push(vId)
            // })

            // const chRes = await getChProfile(chIds)
            // const vRes = await getVideoById(vIds)

            // const resData = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     const ch = chRes.data.items.filter((item) => item.id === chId)
            //     const v = vRes.data.items.filter((item) => item.id === vId)
            //     resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
            // })

            const resData = [
                {
                    "kind": "youtube#playlistItem",
                    "etag": "rh5F72cr0SkpLldDhP7qWalZBdY",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS45NDlDQUFFOThDMTAxQjUw",
                    "snippet": {
                        "publishedAt": "2025-06-27T07:25:51Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "16 Cool GitHub Repos You WILL Use (no pressure)",
                        "description": "Check out CodeRabbit: https://www.coderabbit.ai/?utm_source=coding_sloth\n\n// GITHUB REPOS MENTIONED //\n1. Awesome lists: https://github.com/sindresorhus/awesome\n2. The Algorithms: https://github.com/thealgorithms\n3. Build Your Own X: https://github.com/codecrafters-io/build-your-own-x\n4. Free For Dev: https://github.com/ripienaar/free-for-dev\n5. Free Programming Books: https://github.com/EbookFoundation/free-programming-books\n6. Roadmap.sh: https://github.com/kamranahmedse/developer-roadmap\n7. Computer Science: https://github.com/ossu/computer-science\n8. Engineering Blogs: https://github.com/kilimchoi/engineering-blogs\n9. System Design Primer: https://github.com/donnemartin/system-design-primer\n10. Public APIs: https://github.com/public-apis/public-apis\n11. Open Source Alternatives: https://github.com/btw-so/open-source-alternatives\n12. Papers We Love: https://github.com/papers-we-love/papers-we-love\n13. Best Websites A Programmer Should Visit: https://github.com/sdmg15/Best-websites-a-programmer-should-visit\n14. LLMs From Scratch: https://github.com/rasbt/LLMs-from-scratch\n15. ML From Scratch: https://github.com/eriklindernoren/ML-From-Scratch\n16. Made With ML: https://github.com/GokuMohandas/Made-With-ML\n\nCheck out those GitHub Repos please bro. please.\n\nJobs bro. Jobs.\n\n// SLOTH ARTISTS //\nPixel Art Sloth: https://www.behance.net/harveydentmustdie\n\n// NEWSLETTER //\nSloth Bytes: https://slothbytes.beehiiv.com/subscribe\n\n// BUSINESS INQUIRIES //\nFor business: thecodingsloth@smoothmedia.co\nFor brand partnerships: https://tally.so/r/mZVvKa\n\n// SOCIALS //\nTwitter: https://twitter.com/TheCodingSloth1\nTikTok: https://www.tiktok.com/@thecodingsloth\nDiscord: https://discord.gg/2ByMHqTNca\n\n// TOOLS/THINGS I REALLY LIKE //\nIf you wanna build 10x developer level projects check out CodeCrafters (40% off): https://app.codecrafters.io/join?via=TheCodingSloth\nIf you want to build an awesome newsletter like Sloth Bytes I use beehiiv (20% off): https://www.beehiiv.com?via=the-coding-sloth\nIf you want to make nice looking apps (20% off): https://mobbin.com/sloth\n\n(some of these links are affiliates, so I'll earn some money which supports the channel!)",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 0,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "cgOPg5cCr2g"
                        },
                        "videoOwnerChannelTitle": "The Coding Sloth",
                        "videoOwnerChannelId": "UCxVPH8W2ayMey1-b0SY8rBQ"
                    },
                    "contentDetails": {
                        "videoId": "cgOPg5cCr2g",
                        "videoPublishedAt": "2025-06-23T19:00:52Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "FbHQbOZu0rjcFfeCwaRnDSTj2_8",
                        "id": "UCxVPH8W2ayMey1-b0SY8rBQ",
                        "snippet": {
                            "title": "The Coding Sloth",
                            "description": "Videos about software or something like that",
                            "customUrl": "@thecodingsloth",
                            "publishedAt": "2023-07-01T20:13:18.572233Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/vyiVx6-37LFcgsj8vB9ml-LK3PoiedhdVnkSFhPmp9V6EZqLketITjJ8mm2-0WCzjoQc0TOgLw=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/vyiVx6-37LFcgsj8vB9ml-LK3PoiedhdVnkSFhPmp9V6EZqLketITjJ8mm2-0WCzjoQc0TOgLw=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/vyiVx6-37LFcgsj8vB9ml-LK3PoiedhdVnkSFhPmp9V6EZqLketITjJ8mm2-0WCzjoQc0TOgLw=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "The Coding Sloth",
                                "description": "Videos about software or something like that"
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "94Up5afuPezeeRLroZtijJP4y2o",
                        "id": "cgOPg5cCr2g",
                        "snippet": {
                            "publishedAt": "2025-06-23T19:00:52Z",
                            "channelId": "UCxVPH8W2ayMey1-b0SY8rBQ",
                            "title": "16 Cool GitHub Repos You WILL Use (no pressure)",
                            "description": "Check out CodeRabbit: https://www.coderabbit.ai/?utm_source=coding_sloth\n\n// GITHUB REPOS MENTIONED //\n1. Awesome lists: https://github.com/sindresorhus/awesome\n2. The Algorithms: https://github.com/thealgorithms\n3. Build Your Own X: https://github.com/codecrafters-io/build-your-own-x\n4. Free For Dev: https://github.com/ripienaar/free-for-dev\n5. Free Programming Books: https://github.com/EbookFoundation/free-programming-books\n6. Roadmap.sh: https://github.com/kamranahmedse/developer-roadmap\n7. Computer Science: https://github.com/ossu/computer-science\n8. Engineering Blogs: https://github.com/kilimchoi/engineering-blogs\n9. System Design Primer: https://github.com/donnemartin/system-design-primer\n10. Public APIs: https://github.com/public-apis/public-apis\n11. Open Source Alternatives: https://github.com/btw-so/open-source-alternatives\n12. Papers We Love: https://github.com/papers-we-love/papers-we-love\n13. Best Websites A Programmer Should Visit: https://github.com/sdmg15/Best-websites-a-programmer-should-visit\n14. LLMs From Scratch: https://github.com/rasbt/LLMs-from-scratch\n15. ML From Scratch: https://github.com/eriklindernoren/ML-From-Scratch\n16. Made With ML: https://github.com/GokuMohandas/Made-With-ML\n\nCheck out those GitHub Repos please bro. please.\n\nJobs bro. Jobs.\n\n// SLOTH ARTISTS //\nPixel Art Sloth: https://www.behance.net/harveydentmustdie\n\n// NEWSLETTER //\nSloth Bytes: https://slothbytes.beehiiv.com/subscribe\n\n// BUSINESS INQUIRIES //\nFor business: thecodingsloth@smoothmedia.co\nFor brand partnerships: https://tally.so/r/mZVvKa\n\n// SOCIALS //\nTwitter: https://twitter.com/TheCodingSloth1\nTikTok: https://www.tiktok.com/@thecodingsloth\nDiscord: https://discord.gg/2ByMHqTNca\n\n// TOOLS/THINGS I REALLY LIKE //\nIf you wanna build 10x developer level projects check out CodeCrafters (40% off): https://app.codecrafters.io/join?via=TheCodingSloth\nIf you want to build an awesome newsletter like Sloth Bytes I use beehiiv (20% off): https://www.beehiiv.com?via=the-coding-sloth\nIf you want to make nice looking apps (20% off): https://mobbin.com/sloth\n\n(some of these links are affiliates, so I'll earn some money which supports the channel!)",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/cgOPg5cCr2g/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "The Coding Sloth",
                            "tags": [
                                "programming",
                                "beginner tips",
                                "coding advice",
                                "programming journey",
                                "coding mistakes",
                                "programming regrets",
                                "coding lessons",
                                "learning to code",
                                "programming experiences",
                                "software engineering tips",
                                "newbie programmer",
                                "learn programming",
                                "programming essentials",
                                "coding basics",
                                "coding",
                                "how to learn programming",
                                "how to learn programming for beginners",
                                "how to start coding",
                                "coding for beginners",
                                "coding resources",
                                "programming for beginners",
                                "coding tutorials",
                                "coding tips",
                                "free coding resources"
                            ],
                            "categoryId": "27",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "16 Cool GitHub Repos You WILL Use (no pressure)",
                                "description": "Check out CodeRabbit: https://www.coderabbit.ai/?utm_source=coding_sloth\n\n// GITHUB REPOS MENTIONED //\n1. Awesome lists: https://github.com/sindresorhus/awesome\n2. The Algorithms: https://github.com/thealgorithms\n3. Build Your Own X: https://github.com/codecrafters-io/build-your-own-x\n4. Free For Dev: https://github.com/ripienaar/free-for-dev\n5. Free Programming Books: https://github.com/EbookFoundation/free-programming-books\n6. Roadmap.sh: https://github.com/kamranahmedse/developer-roadmap\n7. Computer Science: https://github.com/ossu/computer-science\n8. Engineering Blogs: https://github.com/kilimchoi/engineering-blogs\n9. System Design Primer: https://github.com/donnemartin/system-design-primer\n10. Public APIs: https://github.com/public-apis/public-apis\n11. Open Source Alternatives: https://github.com/btw-so/open-source-alternatives\n12. Papers We Love: https://github.com/papers-we-love/papers-we-love\n13. Best Websites A Programmer Should Visit: https://github.com/sdmg15/Best-websites-a-programmer-should-visit\n14. LLMs From Scratch: https://github.com/rasbt/LLMs-from-scratch\n15. ML From Scratch: https://github.com/eriklindernoren/ML-From-Scratch\n16. Made With ML: https://github.com/GokuMohandas/Made-With-ML\n\nCheck out those GitHub Repos please bro. please.\n\nJobs bro. Jobs.\n\n// SLOTH ARTISTS //\nPixel Art Sloth: https://www.behance.net/harveydentmustdie\n\n// NEWSLETTER //\nSloth Bytes: https://slothbytes.beehiiv.com/subscribe\n\n// BUSINESS INQUIRIES //\nFor business: thecodingsloth@smoothmedia.co\nFor brand partnerships: https://tally.so/r/mZVvKa\n\n// SOCIALS //\nTwitter: https://twitter.com/TheCodingSloth1\nTikTok: https://www.tiktok.com/@thecodingsloth\nDiscord: https://discord.gg/2ByMHqTNca\n\n// TOOLS/THINGS I REALLY LIKE //\nIf you wanna build 10x developer level projects check out CodeCrafters (40% off): https://app.codecrafters.io/join?via=TheCodingSloth\nIf you want to build an awesome newsletter like Sloth Bytes I use beehiiv (20% off): https://www.beehiiv.com?via=the-coding-sloth\nIf you want to make nice looking apps (20% off): https://mobbin.com/sloth\n\n(some of these links are affiliates, so I'll earn some money which supports the channel!)"
                            },
                            "defaultAudioLanguage": "en-US"
                        },
                        "contentDetails": {
                            "duration": "PT8M55S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "158320",
                            "likeCount": "14446",
                            "favoriteCount": "0",
                            "commentCount": "255"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "qTvCg3CmhXKWWeflH0cMcDDfNJ0",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS4zQTkzRjgxRTY0OEU0MkM3",
                    "snippet": {
                        "publishedAt": "2025-07-10T08:54:30Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "How the 1% ACTUALLY Build Apps with Cursor's Context Engineering",
                        "description": "Learn how context engineering is changing AI workflows. In this video we will compare context engineering vs prompt engineering and break down the shift from vibe coding. Perfect for anyone tracking the latest in AI news and context engineering AI trends.\n\nLINKS: \nPrompts: https://docs.google.com/document/d/1IGyUjicRSl2niGbL5tHRWzTZo1rL-oLOfjOdMilDtEk/edit?usp=sharing\n\nIn this video, we dive deeper into using Cursor AI for full-stack development with AI. You'll see a step-by-step Cursor AI tutorial where context engineering powers an entire workflow—from PRD to production-ready apps. This isn't just coding with AI; it's a whole new AI coding system that blends prompt engineering and smart context windows to remove hallucinations and boost productivity. We also explore how this fits into the larger picture of artificial intelligence, agentic AI, and LLM-powered workflows.\n\nYou’ll learn how to structure your documentation, set up workflows, and make Cursor act like a real AI agent—all within modern web development stacks like FastAPI and Next.js. Inspired by Andrej Karpathy and the shift from vibe codingto intelligent context-first coding, this video is part of a bigger trend in AI news, generative AI, and how devs can truly build with AI for business in mind.\n\nWhether you're new to AI 101, or looking to level up your AI workflow, this AI tutorial will show how powerful things can get when tools like Cursor, Claude Code, and OpenAI are used right.\n\nHashtags: \n#ai #aiagents #vibecoding #andrejkarpathy #ainews #promptengineering #artificialintelligence #agenticai #llm #generativeai #aitrends #aitutorial #aiforbusiness #aiworkflow #ai101 #cursorai #usingcursorai #cursoraitutorial #codingwithai #aicoding #cursor #openai #webdevelopment",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/QgA55EnmUp4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/QgA55EnmUp4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/QgA55EnmUp4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/QgA55EnmUp4/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/QgA55EnmUp4/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 1,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "QgA55EnmUp4"
                        },
                        "videoOwnerChannelTitle": "AI LABS",
                        "videoOwnerChannelId": "UCelfWQr9sXVMTvBzviPGlFw"
                    },
                    "contentDetails": {
                        "videoId": "QgA55EnmUp4",
                        "videoPublishedAt": "2025-07-09T12:52:43Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "jT2HdOollkSPaTA1GYsOl5jUp6A",
                        "id": "UCelfWQr9sXVMTvBzviPGlFw",
                        "snippet": {
                            "title": "AI LABS",
                            "description": "Welcome to AI Labs, your go-to source for the latest AI tools and models for coding. We explore how AI can save you time in building full-stack applications, making your development process faster and more efficient. Whether you're a beginner or an experienced developer, we help you discover the best AI tools and models tailored to your needs. Subscribe now and join us as we delve into the future of coding with AI!\n\n🌐  Visit our Website: https://ailabs393.com/\n📞  Book a Discovery Call: https://autometa.dev/booking\n",
                            "customUrl": "@ailabs-393",
                            "publishedAt": "2024-09-01T10:56:04.033068Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/FpY6zUC6_gjeae77J4Gpwz20CaTI4pW-r9Gu9-K-HrGSKlHYoYN0riQ6YXSOYejwMry8voolPw=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/FpY6zUC6_gjeae77J4Gpwz20CaTI4pW-r9Gu9-K-HrGSKlHYoYN0riQ6YXSOYejwMry8voolPw=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/FpY6zUC6_gjeae77J4Gpwz20CaTI4pW-r9Gu9-K-HrGSKlHYoYN0riQ6YXSOYejwMry8voolPw=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "AI LABS",
                                "description": "Welcome to AI Labs, your go-to source for the latest AI tools and models for coding. We explore how AI can save you time in building full-stack applications, making your development process faster and more efficient. Whether you're a beginner or an experienced developer, we help you discover the best AI tools and models tailored to your needs. Subscribe now and join us as we delve into the future of coding with AI!\n\n🌐  Visit our Website: https://ailabs393.com/\n📞  Book a Discovery Call: https://autometa.dev/booking\n"
                            },
                            "country": "GB"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "rjU6OR-B5T_hMEPq8YRAELtmgEM",
                        "id": "QgA55EnmUp4",
                        "snippet": {
                            "publishedAt": "2025-07-09T12:52:43Z",
                            "channelId": "UCelfWQr9sXVMTvBzviPGlFw",
                            "title": "How the 1% ACTUALLY Build Apps with Cursor's Context Engineering",
                            "description": "Learn how context engineering is changing AI workflows. In this video we will compare context engineering vs prompt engineering and break down the shift from vibe coding. Perfect for anyone tracking the latest in AI news and context engineering AI trends.\n\nLINKS: \nPrompts: https://docs.google.com/document/d/1IGyUjicRSl2niGbL5tHRWzTZo1rL-oLOfjOdMilDtEk/edit?usp=sharing\n\nIn this video, we dive deeper into using Cursor AI for full-stack development with AI. You'll see a step-by-step Cursor AI tutorial where context engineering powers an entire workflow—from PRD to production-ready apps. This isn't just coding with AI; it's a whole new AI coding system that blends prompt engineering and smart context windows to remove hallucinations and boost productivity. We also explore how this fits into the larger picture of artificial intelligence, agentic AI, and LLM-powered workflows.\n\nYou’ll learn how to structure your documentation, set up workflows, and make Cursor act like a real AI agent—all within modern web development stacks like FastAPI and Next.js. Inspired by Andrej Karpathy and the shift from vibe codingto intelligent context-first coding, this video is part of a bigger trend in AI news, generative AI, and how devs can truly build with AI for business in mind.\n\nWhether you're new to AI 101, or looking to level up your AI workflow, this AI tutorial will show how powerful things can get when tools like Cursor, Claude Code, and OpenAI are used right.\n\nHashtags: \n#ai #aiagents #vibecoding #andrejkarpathy #ainews #promptengineering #artificialintelligence #agenticai #llm #generativeai #aitrends #aitutorial #aiforbusiness #aiworkflow #ai101 #cursorai #usingcursorai #cursoraitutorial #codingwithai #aicoding #cursor #openai #webdevelopment",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/QgA55EnmUp4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/QgA55EnmUp4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/QgA55EnmUp4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/QgA55EnmUp4/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/QgA55EnmUp4/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "AI LABS",
                            "tags": [
                                "context engineering",
                                "new context engineering",
                                "what is context engineering",
                                "context engineering tutorial",
                                "pillars of context engineering",
                                "prompt engineering vs context engineering",
                                "context engineering versus prompt engineering",
                                "contextengineering",
                                "ai engineering",
                                "prompt engineering",
                                "agentic engineering",
                                "aiengineering",
                                "ai prompt engineering",
                                "ai engineering 2025",
                                "prompt engineering 2025",
                                "software engineering",
                                "chatgpt prompt engineering",
                                "advanced prompt engineering",
                                "context"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en",
                            "localized": {
                                "title": "How the 1% ACTUALLY Build Apps with Cursor's Context Engineering",
                                "description": "Learn how context engineering is changing AI workflows. In this video we will compare context engineering vs prompt engineering and break down the shift from vibe coding. Perfect for anyone tracking the latest in AI news and context engineering AI trends.\n\nLINKS: \nPrompts: https://docs.google.com/document/d/1IGyUjicRSl2niGbL5tHRWzTZo1rL-oLOfjOdMilDtEk/edit?usp=sharing\n\nIn this video, we dive deeper into using Cursor AI for full-stack development with AI. You'll see a step-by-step Cursor AI tutorial where context engineering powers an entire workflow—from PRD to production-ready apps. This isn't just coding with AI; it's a whole new AI coding system that blends prompt engineering and smart context windows to remove hallucinations and boost productivity. We also explore how this fits into the larger picture of artificial intelligence, agentic AI, and LLM-powered workflows.\n\nYou’ll learn how to structure your documentation, set up workflows, and make Cursor act like a real AI agent—all within modern web development stacks like FastAPI and Next.js. Inspired by Andrej Karpathy and the shift from vibe codingto intelligent context-first coding, this video is part of a bigger trend in AI news, generative AI, and how devs can truly build with AI for business in mind.\n\nWhether you're new to AI 101, or looking to level up your AI workflow, this AI tutorial will show how powerful things can get when tools like Cursor, Claude Code, and OpenAI are used right.\n\nHashtags: \n#ai #aiagents #vibecoding #andrejkarpathy #ainews #promptengineering #artificialintelligence #agenticai #llm #generativeai #aitrends #aitutorial #aiforbusiness #aiworkflow #ai101 #cursorai #usingcursorai #cursoraitutorial #codingwithai #aicoding #cursor #openai #webdevelopment"
                            },
                            "defaultAudioLanguage": "en"
                        },
                        "contentDetails": {
                            "duration": "PT13M29S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "43731",
                            "likeCount": "1630",
                            "favoriteCount": "0",
                            "commentCount": "76"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "8pVJJ-yS-Y2xtotW3pWn5TfyAqM",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS44QTY2MEEzNzBFQUJCMUQ2",
                    "snippet": {
                        "publishedAt": "2025-07-08T07:30:27Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Why Latency Could Be Killing Your User Experience",
                        "description": "Enjoy the 1st six month of ManageEngine Site24x7 for free:\nhttps://hitesh.ai/manage-engine\n\nWelcome to a youtube channel dedicated to programming and coding related tutorials. We talk about tech, write code, discuss about cloud and devops. That’s what we do all day, all year.\n\nGet all source code for react application:\nhttps://github.com/hiteshchoudhary/react-english\n\nAll source code is available at my Github account:\n\nhttps://github.com/hiteshchoudhary\n\nOur Open-Source Project is here: https://freeapi.app\n\nJoin me at whatsapp: https://hitesh.ai/whatsapp\n\nfor community discord: https://hitesh.ai/discord\n\nInstagram pe yaha paaye jaate h:\nhttps://www.instagram.com/hiteshchoudharyofficial/\n\nLearn React with 10 projects: https://www.youtube.com/watch?v=eCU7FfMl5WU&list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq\n\nLearn Docker: https://youtu.be/rr9cI4u1_88?si=fSK00PNOt0gqBXp6\n\nLearn Kubernetes: https://www.youtube.com/watch?v=7XDeI5fyj3w\n\nHow does a browser works: https://youtu.be/5rLFYtXHo9s?si=UW1HrwGUzkk4E7qh\n\nHow nodejs works: https://youtu.be/ooBxSg1Cl1w?si=Ks6Wih1smJZSDz4V\n\nLearn Redux-toolkit: https://www.youtube.com/watch?v=pX0SBJF01EU\n\nLearn NextJS: https://www.youtube.com/watch?v=iPGXk-i-VYU&list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE\n\nLearn Typescript: https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW\n\nLearn Javascript: https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD\n\nLearn React Native: https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c\n\nLearn Zustand: https://www.youtube.com/watch?v=KCr-UNsM3vA&list=PLRAV69dS1uWQMXekDgw7fRAsHmsbKWkwu\n\nLearn Golang: https://www.youtube.com/watch?v=X4q1OM0voO0&list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/n7XRWZq4caE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/n7XRWZq4caE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/n7XRWZq4caE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/n7XRWZq4caE/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/n7XRWZq4caE/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 2,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "n7XRWZq4caE"
                        },
                        "videoOwnerChannelTitle": "Hitesh Choudhary",
                        "videoOwnerChannelId": "UCXgGY0wkgOzynnHvSEVmE3A"
                    },
                    "contentDetails": {
                        "videoId": "n7XRWZq4caE",
                        "videoPublishedAt": "2025-07-05T15:00:58Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "Aw1-W-SZ2KDuh4sON5aEDbcHUII",
                        "id": "UCXgGY0wkgOzynnHvSEVmE3A",
                        "snippet": {
                            "title": "Hitesh Choudhary",
                            "description": "Website: https://hiteshchoudhary.com\nHey there everyone, Hitesh here back again with another video!\nThis means I create a lot of videos, every single week. I cover a wide range of subjects like programming, what's latest in tech, new frameworks, open-source products etc. I keep my interest in a wide area of tech like Javascript, Python, PHP, Machine Learning, etc.\n\nFor the Business purpose, Sponsorships and invitation, reach out at team@hiteshchoudhary.com\n\nNOTE: Personal questions and code-related questions are not answered at this email. Post them in the course discussion section or react me out at social platforms.\n\n#iWriteCode\n\nInstagram: https://instagram.com/hiteshchoudharyofficial\nFacebook: www.fb.com/HiteshChoudharyPage",
                            "customUrl": "@hiteshcodelab",
                            "publishedAt": "2011-10-24T10:25:16Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Hitesh Choudhary",
                                "description": "Website: https://hiteshchoudhary.com\nHey there everyone, Hitesh here back again with another video!\nThis means I create a lot of videos, every single week. I cover a wide range of subjects like programming, what's latest in tech, new frameworks, open-source products etc. I keep my interest in a wide area of tech like Javascript, Python, PHP, Machine Learning, etc.\n\nFor the Business purpose, Sponsorships and invitation, reach out at team@hiteshchoudhary.com\n\nNOTE: Personal questions and code-related questions are not answered at this email. Post them in the course discussion section or react me out at social platforms.\n\n#iWriteCode\n\nInstagram: https://instagram.com/hiteshchoudharyofficial\nFacebook: www.fb.com/HiteshChoudharyPage"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "PILHvFSGg8hjfY2Dl00D5qAxGIk",
                        "id": "n7XRWZq4caE",
                        "snippet": {
                            "publishedAt": "2025-07-05T15:00:58Z",
                            "channelId": "UCXgGY0wkgOzynnHvSEVmE3A",
                            "title": "Why Latency Could Be Killing Your User Experience",
                            "description": "Enjoy the 1st six month of ManageEngine Site24x7 for free:\nhttps://hitesh.ai/manage-engine\n\nWelcome to a youtube channel dedicated to programming and coding related tutorials. We talk about tech, write code, discuss about cloud and devops. That’s what we do all day, all year.\n\nGet all source code for react application:\nhttps://github.com/hiteshchoudhary/react-english\n\nAll source code is available at my Github account:\n\nhttps://github.com/hiteshchoudhary\n\nOur Open-Source Project is here: https://freeapi.app\n\nJoin me at whatsapp: https://hitesh.ai/whatsapp\n\nfor community discord: https://hitesh.ai/discord\n\nInstagram pe yaha paaye jaate h:\nhttps://www.instagram.com/hiteshchoudharyofficial/\n\nLearn React with 10 projects: https://www.youtube.com/watch?v=eCU7FfMl5WU&list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq\n\nLearn Docker: https://youtu.be/rr9cI4u1_88?si=fSK00PNOt0gqBXp6\n\nLearn Kubernetes: https://www.youtube.com/watch?v=7XDeI5fyj3w\n\nHow does a browser works: https://youtu.be/5rLFYtXHo9s?si=UW1HrwGUzkk4E7qh\n\nHow nodejs works: https://youtu.be/ooBxSg1Cl1w?si=Ks6Wih1smJZSDz4V\n\nLearn Redux-toolkit: https://www.youtube.com/watch?v=pX0SBJF01EU\n\nLearn NextJS: https://www.youtube.com/watch?v=iPGXk-i-VYU&list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE\n\nLearn Typescript: https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW\n\nLearn Javascript: https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD\n\nLearn React Native: https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c\n\nLearn Zustand: https://www.youtube.com/watch?v=KCr-UNsM3vA&list=PLRAV69dS1uWQMXekDgw7fRAsHmsbKWkwu\n\nLearn Golang: https://www.youtube.com/watch?v=X4q1OM0voO0&list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/n7XRWZq4caE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/n7XRWZq4caE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/n7XRWZq4caE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/n7XRWZq4caE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/n7XRWZq4caE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Hitesh Choudhary",
                            "tags": [
                                "Programming",
                                "javascript",
                                "devops",
                                "cloud",
                                "aws",
                                "reactjs",
                                "nextjs",
                                "MERN",
                                "coding interviews"
                            ],
                            "categoryId": "24",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Why Latency Could Be Killing Your User Experience",
                                "description": "Enjoy the 1st six month of ManageEngine Site24x7 for free:\nhttps://hitesh.ai/manage-engine\n\nWelcome to a youtube channel dedicated to programming and coding related tutorials. We talk about tech, write code, discuss about cloud and devops. That’s what we do all day, all year.\n\nGet all source code for react application:\nhttps://github.com/hiteshchoudhary/react-english\n\nAll source code is available at my Github account:\n\nhttps://github.com/hiteshchoudhary\n\nOur Open-Source Project is here: https://freeapi.app\n\nJoin me at whatsapp: https://hitesh.ai/whatsapp\n\nfor community discord: https://hitesh.ai/discord\n\nInstagram pe yaha paaye jaate h:\nhttps://www.instagram.com/hiteshchoudharyofficial/\n\nLearn React with 10 projects: https://www.youtube.com/watch?v=eCU7FfMl5WU&list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq\n\nLearn Docker: https://youtu.be/rr9cI4u1_88?si=fSK00PNOt0gqBXp6\n\nLearn Kubernetes: https://www.youtube.com/watch?v=7XDeI5fyj3w\n\nHow does a browser works: https://youtu.be/5rLFYtXHo9s?si=UW1HrwGUzkk4E7qh\n\nHow nodejs works: https://youtu.be/ooBxSg1Cl1w?si=Ks6Wih1smJZSDz4V\n\nLearn Redux-toolkit: https://www.youtube.com/watch?v=pX0SBJF01EU\n\nLearn NextJS: https://www.youtube.com/watch?v=iPGXk-i-VYU&list=PLRAV69dS1uWR7KF-zV6YPYtKYEHENETyE\n\nLearn Typescript: https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW\n\nLearn Javascript: https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD\n\nLearn React Native: https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c\n\nLearn Zustand: https://www.youtube.com/watch?v=KCr-UNsM3vA&list=PLRAV69dS1uWQMXekDgw7fRAsHmsbKWkwu\n\nLearn Golang: https://www.youtube.com/watch?v=X4q1OM0voO0&list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N"
                            },
                            "defaultAudioLanguage": "en"
                        },
                        "contentDetails": {
                            "duration": "PT26M55S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "44165",
                            "likeCount": "525",
                            "favoriteCount": "0",
                            "commentCount": "29"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "yeQUsCudz-Jx-ijyx1dVlY9pPQA",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS4xNjIyNEE0MDEyRDlCMjBE",
                    "snippet": {
                        "publishedAt": "2025-07-04T08:59:32Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Software Is Changing (Again) - Andrej Karpathy",
                        "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://www.youtube.com/watch?v=LCEmiRjPEtQ\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 3,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "vDWaKVmqznQ"
                        },
                        "videoOwnerChannelTitle": "ThePrimeTime",
                        "videoOwnerChannelId": "UCUyeluBRhGPCW4rPe_UvBZQ"
                    },
                    "contentDetails": {
                        "videoId": "vDWaKVmqznQ",
                        "videoPublishedAt": "2025-07-03T12:31:14Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "Qh99WELeqXLaY-RHFeQ90VdThNQ",
                        "id": "UCUyeluBRhGPCW4rPe_UvBZQ",
                        "snippet": {
                            "title": "ThePrimeTime",
                            "description": "This is a place for all the things that are awesome on stream. ",
                            "customUrl": "@theprimetimeagen",
                            "publishedAt": "2021-03-05T17:02:28.224517Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "ThePrimeTime",
                                "description": "This is a place for all the things that are awesome on stream. "
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "68kyFFebPIBI6zfjGc7t0MirUA8",
                        "id": "vDWaKVmqznQ",
                        "snippet": {
                            "publishedAt": "2025-07-03T12:31:14Z",
                            "channelId": "UCUyeluBRhGPCW4rPe_UvBZQ",
                            "title": "Software Is Changing (Again) - Andrej Karpathy",
                            "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://www.youtube.com/watch?v=LCEmiRjPEtQ\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/vDWaKVmqznQ/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "ThePrimeTime",
                            "tags": [
                                "programming",
                                "software engineer",
                                "software engineering",
                                "developer",
                                "web design",
                                "web development",
                                "programmer humor"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-US",
                            "localized": {
                                "title": "Software Is Changing (Again) - Andrej Karpathy",
                                "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://www.youtube.com/watch?v=LCEmiRjPEtQ\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis"
                            },
                            "defaultAudioLanguage": "en-US"
                        },
                        "contentDetails": {
                            "duration": "PT2H1M4S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "150102",
                            "likeCount": "2464",
                            "favoriteCount": "0",
                            "commentCount": "611"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "jRa1FBomGr5mVx_NGV0G6-jvBYg",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS5CMEVBRUJERkUyNTBENTkz",
                    "snippet": {
                        "publishedAt": "2025-07-02T13:39:28Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Absolute Beginners Guide to Start Freelancing in 2025 | Step-By-Step | Manu Arora",
                        "description": "In this video, I’ll walk you through a Step-by-step guide to freelancing in 2025 — from picking the right skills, setting up your profile, and building a standout portfolio (even if you're starting from zero) to landing your first client and scaling your income.\n\n🎯 What You’ll Learn: \n- How to get started as a freelancer in 2025  \n- The best platforms to find freelance work  \n- How to price your freelance services right  \n- Tips to stand out and build long-term client relationships  \n\n🔥 Let's make 2025 your breakthrough year.  \n\nSubscribe for more freelancing advice, and hit the like button if this video helps you! 👍\n\n🔔Hit the bell icon to stay updated on new videos!  \n#Freelancing #BeginnersGuide #FreelancingSuccess #upwork #projects #website #client #coding #aceternity #hack #highpaying #techtips \n\n===========================================\n\n🛒 Shop the official AceStitch collection here: https://acestitch.com\n► For more content like this, subscribe to my channel: @manuarora \n\n\n► Follow Me On Social Media\nTwitter: https://x.com/mannupaaji\nInstagram: https://www.instagram.com/maanupaaji",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 4,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "1ymdAY3-DqE"
                        },
                        "videoOwnerChannelTitle": "Manu Arora",
                        "videoOwnerChannelId": "UC7MQDjVfjEPkHMe1lZGkDRA"
                    },
                    "contentDetails": {
                        "videoId": "1ymdAY3-DqE",
                        "videoPublishedAt": "2025-04-12T08:15:00Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "juCQmt9-ZQqLuSSd_9tUnfK-cl4",
                        "id": "UC7MQDjVfjEPkHMe1lZGkDRA",
                        "snippet": {
                            "title": "Manu Arora",
                            "description": "I build stuff and talk about how I do it.",
                            "customUrl": "@manuarora",
                            "publishedAt": "2020-12-13T06:29:33.081401Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/n7G_or_yexSPKjDYTVLw59w0B7DUTWT3mGln3ghAoGQvFCwkd1lxeQTbCE_hV2q7ASJC3PU3dw=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/n7G_or_yexSPKjDYTVLw59w0B7DUTWT3mGln3ghAoGQvFCwkd1lxeQTbCE_hV2q7ASJC3PU3dw=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/n7G_or_yexSPKjDYTVLw59w0B7DUTWT3mGln3ghAoGQvFCwkd1lxeQTbCE_hV2q7ASJC3PU3dw=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Manu Arora",
                                "description": "I build stuff and talk about how I do it."
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "Pkl7iPExdQ9Y9qcy5Z7A3oe2Hi0",
                        "id": "1ymdAY3-DqE",
                        "snippet": {
                            "publishedAt": "2025-04-12T08:15:00Z",
                            "channelId": "UC7MQDjVfjEPkHMe1lZGkDRA",
                            "title": "Absolute Beginners Guide to Start Freelancing in 2025 | Step-By-Step | Manu Arora",
                            "description": "In this video, I’ll walk you through a Step-by-step guide to freelancing in 2025 — from picking the right skills, setting up your profile, and building a standout portfolio (even if you're starting from zero) to landing your first client and scaling your income.\n\n🎯 What You’ll Learn: \n- How to get started as a freelancer in 2025  \n- The best platforms to find freelance work  \n- How to price your freelance services right  \n- Tips to stand out and build long-term client relationships  \n\n🔥 Let's make 2025 your breakthrough year.  \n\nSubscribe for more freelancing advice, and hit the like button if this video helps you! 👍\n\n🔔Hit the bell icon to stay updated on new videos!  \n#Freelancing #BeginnersGuide #FreelancingSuccess #upwork #projects #website #client #coding #aceternity #hack #highpaying #techtips \n\n===========================================\n\n🛒 Shop the official AceStitch collection here: https://acestitch.com\n► For more content like this, subscribe to my channel: @manuarora \n\n\n► Follow Me On Social Media\nTwitter: https://x.com/mannupaaji\nInstagram: https://www.instagram.com/maanupaaji",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/1ymdAY3-DqE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Manu Arora",
                            "tags": [
                                "manu arora",
                                "aceternity",
                                "frontend development",
                                "freelancing india",
                                "freelancing usa",
                                "freelance dev tips",
                                "chatgpt 2025",
                                "freelancing 2025",
                                "how to start freelancing",
                                "make money online",
                                "freelancer guide 2025",
                                "freelance tips",
                                "how to get clients",
                                "freelancing for beginners",
                                "freelance roadmap",
                                "freelancing tutorial",
                                "trending",
                                "viral",
                                "nextjs",
                                "tailwindcss",
                                "trend",
                                "Viral",
                                "Manu Arora",
                                "Aceternity",
                                "Front end",
                                "twitter",
                                "money",
                                "freelance",
                                "client",
                                "hack",
                                "youtube",
                                "youtubeindia",
                                "freelancetips",
                                "viral video",
                                "upwork",
                                "earn"
                            ],
                            "categoryId": "27",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Absolute Beginners Guide to Start Freelancing in 2025 | Step-By-Step | Manu Arora",
                                "description": "In this video, I’ll walk you through a Step-by-step guide to freelancing in 2025 — from picking the right skills, setting up your profile, and building a standout portfolio (even if you're starting from zero) to landing your first client and scaling your income.\n\n🎯 What You’ll Learn: \n- How to get started as a freelancer in 2025  \n- The best platforms to find freelance work  \n- How to price your freelance services right  \n- Tips to stand out and build long-term client relationships  \n\n🔥 Let's make 2025 your breakthrough year.  \n\nSubscribe for more freelancing advice, and hit the like button if this video helps you! 👍\n\n🔔Hit the bell icon to stay updated on new videos!  \n#Freelancing #BeginnersGuide #FreelancingSuccess #upwork #projects #website #client #coding #aceternity #hack #highpaying #techtips \n\n===========================================\n\n🛒 Shop the official AceStitch collection here: https://acestitch.com\n► For more content like this, subscribe to my channel: @manuarora \n\n\n► Follow Me On Social Media\nTwitter: https://x.com/mannupaaji\nInstagram: https://www.instagram.com/maanupaaji"
                            },
                            "defaultAudioLanguage": "en"
                        },
                        "contentDetails": {
                            "duration": "PT29M28S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "19662",
                            "likeCount": "1326",
                            "favoriteCount": "0",
                            "commentCount": "86"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "1b5PpkR6zm5OEPISNIiMF2Ccbqw",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS5FQUY2Qzk4RUFDN0ZFRkZF",
                    "snippet": {
                        "publishedAt": "2025-06-27T08:08:36Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "The Who Cares Era",
                        "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://dansinker.com/posts/2025-05-23-who-cares/\nBy: Dan Sinker | https://x.com/dansinker?lang=en\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 5,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "ILTJPYn_WTs"
                        },
                        "videoOwnerChannelTitle": "ThePrimeTime",
                        "videoOwnerChannelId": "UCUyeluBRhGPCW4rPe_UvBZQ"
                    },
                    "contentDetails": {
                        "videoId": "ILTJPYn_WTs",
                        "videoPublishedAt": "2025-06-24T17:06:48Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "Qh99WELeqXLaY-RHFeQ90VdThNQ",
                        "id": "UCUyeluBRhGPCW4rPe_UvBZQ",
                        "snippet": {
                            "title": "ThePrimeTime",
                            "description": "This is a place for all the things that are awesome on stream. ",
                            "customUrl": "@theprimetimeagen",
                            "publishedAt": "2021-03-05T17:02:28.224517Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "ThePrimeTime",
                                "description": "This is a place for all the things that are awesome on stream. "
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "W1nnPPKLzCg3aEP0WegpfmRcjjQ",
                        "id": "ILTJPYn_WTs",
                        "snippet": {
                            "publishedAt": "2025-06-24T17:06:48Z",
                            "channelId": "UCUyeluBRhGPCW4rPe_UvBZQ",
                            "title": "The Who Cares Era",
                            "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://dansinker.com/posts/2025-05-23-who-cares/\nBy: Dan Sinker | https://x.com/dansinker?lang=en\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/ILTJPYn_WTs/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "ThePrimeTime",
                            "tags": [
                                "programming",
                                "software engineer",
                                "software engineering",
                                "developer",
                                "web design",
                                "web development",
                                "programmer humor"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-US",
                            "localized": {
                                "title": "The Who Cares Era",
                                "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://dansinker.com/posts/2025-05-23-who-cares/\nBy: Dan Sinker | https://x.com/dansinker?lang=en\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis"
                            },
                            "defaultAudioLanguage": "en-US"
                        },
                        "contentDetails": {
                            "duration": "PT26M15S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "134817",
                            "likeCount": "3014",
                            "favoriteCount": "0",
                            "commentCount": "638"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "rupxg7nWdks7k_M3xJT6Hav9Um0",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS4xN0Y2QjVBOEI2MzQ5OUM5",
                    "snippet": {
                        "publishedAt": "2025-06-27T08:00:58Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "4 levels of UI/UX design (and BIG mistakes to avoid)",
                        "description": "✅ Learn proven ways to grow a business with design: \nhttps://zipzap.design/case-studies/signup?video=86PGRyQjdzQ\n\n✅ Get help growing your business with a Free Consultation:\nhttps://zipzap.design/strategy-consultation?video=86PGRyQjdzQ\n\n—\n\nTimecodes\n0:00 – Intro: Why Designers Keep Making the Same Mistakes\n0:27 – The Plan: Redesigning a Real Client Screen at Every Level\n1:01 – Beginner Level: 6 Classic Mistakes That Hold You Back\n3:01 – Color Theory for Beginners: Avoid the Reverse UI Look\n4:00 – Spacing & Structure: Why Random Pixel Values Kill Your Design\n5:56 – Junior Designer: Slightly Better Visuals, Still Copy Fails\n7:14 – Font Sizes and Spacing Mistakes Still Haunt Juniors\n8:03 – Mid-Level Designer: Clearer Copy and Visual Overworking\n10:15 – Senior Designer: Mastery in Visuals, Copy, and Spacing\n13:50 – The Hidden Mistake Even Senior Designers Make\n14:54 – Future of UI: Designing Experiences, Not Just Screens\n\n—\n\nErik's HSB Coloring System:\nhttps://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html\n\nThe 8-pt grid system:\nhttps://www.youtube.com/watch?v=ohF93_k3IMk&t=86s",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 6,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "86PGRyQjdzQ"
                        },
                        "videoOwnerChannelTitle": "Tim Gabe",
                        "videoOwnerChannelId": "UC8WLg9gshrtZA1-swL5D9Kg"
                    },
                    "contentDetails": {
                        "videoId": "86PGRyQjdzQ",
                        "videoPublishedAt": "2025-04-04T10:00:14Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "bL7jzUuw2kKxkxQL1b3fPDl6nqU",
                        "id": "UC8WLg9gshrtZA1-swL5D9Kg",
                        "snippet": {
                            "title": "Tim Gabe",
                            "description": "hey, i'm Tim!\n\ni’m on a mission to help founders grow their businesses through design.\n\ni’ve helped companies raise over $40M, attract tens of thousands of daily active users, and multiply their revenue by focusing on the right design problems.\n\ni’ll make videos that share what i’ve learned about:\n\t1.\thow design directly impacts user acquisition, retention, and revenue\n\t2.\thow to turn your product into something users come back to daily\n\t3.\thow smart design choices can help you raise money more easily\n\t4.\thow to build trust, clarity, and momentum through better UX\n\t5.\thow great products feel obvious, intuitive, and hard to forget\n\ni’ll also share lessons from startups who used design to scale, and unpack the most common mistakes that slow growth down.\n\nif you’re building a business and want to grow through design while looking great in the process, just email me or check out the links below.\n",
                            "customUrl": "@timgabe",
                            "publishedAt": "2018-05-04T05:16:29Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/sYiZcxg09NUv0gJOXG9U-DE57kZ0N_k2jhAEH0E9ociPrVS-XKAN6Uea1Ur0z5h2kHWwrxs-tQg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/sYiZcxg09NUv0gJOXG9U-DE57kZ0N_k2jhAEH0E9ociPrVS-XKAN6Uea1Ur0z5h2kHWwrxs-tQg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/sYiZcxg09NUv0gJOXG9U-DE57kZ0N_k2jhAEH0E9ociPrVS-XKAN6Uea1Ur0z5h2kHWwrxs-tQg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Tim Gabe",
                                "description": "hey, i'm Tim!\n\ni’m on a mission to help founders grow their businesses through design.\n\ni’ve helped companies raise over $40M, attract tens of thousands of daily active users, and multiply their revenue by focusing on the right design problems.\n\ni’ll make videos that share what i’ve learned about:\n\t1.\thow design directly impacts user acquisition, retention, and revenue\n\t2.\thow to turn your product into something users come back to daily\n\t3.\thow smart design choices can help you raise money more easily\n\t4.\thow to build trust, clarity, and momentum through better UX\n\t5.\thow great products feel obvious, intuitive, and hard to forget\n\ni’ll also share lessons from startups who used design to scale, and unpack the most common mistakes that slow growth down.\n\nif you’re building a business and want to grow through design while looking great in the process, just email me or check out the links below.\n"
                            },
                            "country": "SE"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "25rvm8aIS6cCLdnBDlbICZg-aec",
                        "id": "86PGRyQjdzQ",
                        "snippet": {
                            "publishedAt": "2025-04-04T10:00:14Z",
                            "channelId": "UC8WLg9gshrtZA1-swL5D9Kg",
                            "title": "4 levels of UI/UX design (and BIG mistakes to avoid)",
                            "description": "✅ Learn proven ways to grow a business with design: \nhttps://zipzap.design/case-studies/signup?video=86PGRyQjdzQ\n\n✅ Get help growing your business with a Free Consultation:\nhttps://zipzap.design/strategy-consultation?video=86PGRyQjdzQ\n\n—\n\nTimecodes\n0:00 – Intro: Why Designers Keep Making the Same Mistakes\n0:27 – The Plan: Redesigning a Real Client Screen at Every Level\n1:01 – Beginner Level: 6 Classic Mistakes That Hold You Back\n3:01 – Color Theory for Beginners: Avoid the Reverse UI Look\n4:00 – Spacing & Structure: Why Random Pixel Values Kill Your Design\n5:56 – Junior Designer: Slightly Better Visuals, Still Copy Fails\n7:14 – Font Sizes and Spacing Mistakes Still Haunt Juniors\n8:03 – Mid-Level Designer: Clearer Copy and Visual Overworking\n10:15 – Senior Designer: Mastery in Visuals, Copy, and Spacing\n13:50 – The Hidden Mistake Even Senior Designers Make\n14:54 – Future of UI: Designing Experiences, Not Just Screens\n\n—\n\nErik's HSB Coloring System:\nhttps://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html\n\nThe 8-pt grid system:\nhttps://www.youtube.com/watch?v=ohF93_k3IMk&t=86s",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/86PGRyQjdzQ/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Tim Gabe",
                            "tags": [
                                "ui",
                                "ux",
                                "product design",
                                "ui design",
                                "ux design"
                            ],
                            "categoryId": "24",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "4 levels of UI/UX design (and BIG mistakes to avoid)",
                                "description": "✅ Learn proven ways to grow a business with design: \nhttps://zipzap.design/case-studies/signup?video=86PGRyQjdzQ\n\n✅ Get help growing your business with a Free Consultation:\nhttps://zipzap.design/strategy-consultation?video=86PGRyQjdzQ\n\n—\n\nTimecodes\n0:00 – Intro: Why Designers Keep Making the Same Mistakes\n0:27 – The Plan: Redesigning a Real Client Screen at Every Level\n1:01 – Beginner Level: 6 Classic Mistakes That Hold You Back\n3:01 – Color Theory for Beginners: Avoid the Reverse UI Look\n4:00 – Spacing & Structure: Why Random Pixel Values Kill Your Design\n5:56 – Junior Designer: Slightly Better Visuals, Still Copy Fails\n7:14 – Font Sizes and Spacing Mistakes Still Haunt Juniors\n8:03 – Mid-Level Designer: Clearer Copy and Visual Overworking\n10:15 – Senior Designer: Mastery in Visuals, Copy, and Spacing\n13:50 – The Hidden Mistake Even Senior Designers Make\n14:54 – Future of UI: Designing Experiences, Not Just Screens\n\n—\n\nErik's HSB Coloring System:\nhttps://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html\n\nThe 8-pt grid system:\nhttps://www.youtube.com/watch?v=ohF93_k3IMk&t=86s"
                            }
                        },
                        "contentDetails": {
                            "duration": "PT15M34S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "225490",
                            "likeCount": "10823",
                            "favoriteCount": "0",
                            "commentCount": "226"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "e4p0ppgw4xEgnnjImv8nP3jMoDM",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS4yQzk4QTA5QjkzMTFFOEI1",
                    "snippet": {
                        "publishedAt": "2025-06-25T13:58:51Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Watch this if you use shadcn/ui",
                        "description": "Has Radix become a liability? Shadcn is heavily based on Radix, so there's a lot of important stuff to go over here...\n\nThank you Mobbin for sponsoring! Check them out at: https://soydev.link/mobbin\n\nSOURCES\nhttps://x.com/ccccjjjjeeee/status/1935163290998722660\nhttps://x.com/shadcn/status/1936082723904565435\n\nCJE's talk I mentioned:\nhttps://www.youtube.com/watch?v=un3Lu3AKkto\n\nWant to sponsor a video? Learn more here: https://soydev.link/sponsor-me\n\nCheck out my Twitch, Twitter, Discord more at https://t3.gg\n\nS/O Ph4se0n3 for the awesome edit 🙏",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 7,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "vHFZFXtjKNE"
                        },
                        "videoOwnerChannelTitle": "Theo - t3․gg",
                        "videoOwnerChannelId": "UCbRP3c757lWg9M-U7TyEkXA"
                    },
                    "contentDetails": {
                        "videoId": "vHFZFXtjKNE",
                        "videoPublishedAt": "2025-06-25T01:27:13Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "jNPgJDU3bGF8lztfgm0xgM-Hx50",
                        "id": "UCbRP3c757lWg9M-U7TyEkXA",
                        "snippet": {
                            "title": "Theo - t3․gg",
                            "description": "Hi, I'm a software dev nerd mostly known for full stack TypeScript stuff. Check out me and my stack at t3.gg\n",
                            "customUrl": "@t3dotgg",
                            "publishedAt": "2007-01-24T01:57:07Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/Y6jut5A-dhWRlv7W81kGxVFPtZGjZN97IhBP75uLnx2AVV7ZEJUUUxBKHlFw9GcwILxkz1E_cLc=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/Y6jut5A-dhWRlv7W81kGxVFPtZGjZN97IhBP75uLnx2AVV7ZEJUUUxBKHlFw9GcwILxkz1E_cLc=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/Y6jut5A-dhWRlv7W81kGxVFPtZGjZN97IhBP75uLnx2AVV7ZEJUUUxBKHlFw9GcwILxkz1E_cLc=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Theo - t3․gg",
                                "description": "Hi, I'm a software dev nerd mostly known for full stack TypeScript stuff. Check out me and my stack at t3.gg\n"
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "vgD6u0TJZsdI_NDK3W9LBVoev_U",
                        "id": "vHFZFXtjKNE",
                        "snippet": {
                            "publishedAt": "2025-06-25T01:27:13Z",
                            "channelId": "UCbRP3c757lWg9M-U7TyEkXA",
                            "title": "Watch this if you use shadcn/ui",
                            "description": "Has Radix become a liability? Shadcn is heavily based on Radix, so there's a lot of important stuff to go over here...\n\nThank you Mobbin for sponsoring! Check them out at: https://soydev.link/mobbin\n\nSOURCES\nhttps://x.com/ccccjjjjeeee/status/1935163290998722660\nhttps://x.com/shadcn/status/1936082723904565435\n\nCJE's talk I mentioned:\nhttps://www.youtube.com/watch?v=un3Lu3AKkto\n\nWant to sponsor a video? Learn more here: https://soydev.link/sponsor-me\n\nCheck out my Twitch, Twitter, Discord more at https://t3.gg\n\nS/O Ph4se0n3 for the awesome edit 🙏",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/vHFZFXtjKNE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Theo - t3․gg",
                            "tags": [
                                "web development",
                                "full stack",
                                "typescript",
                                "javascript",
                                "react",
                                "programming",
                                "programmer",
                                "theo",
                                "t3 stack",
                                "t3",
                                "t3.gg",
                                "t3dotgg"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-US",
                            "localized": {
                                "title": "Watch this if you use shadcn/ui",
                                "description": "Has Radix become a liability? Shadcn is heavily based on Radix, so there's a lot of important stuff to go over here...\n\nThank you Mobbin for sponsoring! Check them out at: https://soydev.link/mobbin\n\nSOURCES\nhttps://x.com/ccccjjjjeeee/status/1935163290998722660\nhttps://x.com/shadcn/status/1936082723904565435\n\nCJE's talk I mentioned:\nhttps://www.youtube.com/watch?v=un3Lu3AKkto\n\nWant to sponsor a video? Learn more here: https://soydev.link/sponsor-me\n\nCheck out my Twitch, Twitter, Discord more at https://t3.gg\n\nS/O Ph4se0n3 for the awesome edit 🙏"
                            },
                            "defaultAudioLanguage": "en"
                        },
                        "contentDetails": {
                            "duration": "PT24M34S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "175936",
                            "likeCount": "3703",
                            "favoriteCount": "0",
                            "commentCount": "308"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "VakMtn1Rh_Ocz1zklCJ8K0dFwxc",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS43QzNCNkZENzIyMDY2MjZB",
                    "snippet": {
                        "publishedAt": "2025-06-20T08:15:34Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Naughty Meta Was Tracking Users",
                        "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://www.zeropartydata.es/p/localhost-tracking-explained-it-could\nBy: Jorge García Herrero | https://x.com/jgarciaherrero\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 8,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "-dBYjA-v4XQ"
                        },
                        "videoOwnerChannelTitle": "ThePrimeTime",
                        "videoOwnerChannelId": "UCUyeluBRhGPCW4rPe_UvBZQ"
                    },
                    "contentDetails": {
                        "videoId": "-dBYjA-v4XQ",
                        "videoPublishedAt": "2025-06-19T12:19:54Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "Qh99WELeqXLaY-RHFeQ90VdThNQ",
                        "id": "UCUyeluBRhGPCW4rPe_UvBZQ",
                        "snippet": {
                            "title": "ThePrimeTime",
                            "description": "This is a place for all the things that are awesome on stream. ",
                            "customUrl": "@theprimetimeagen",
                            "publishedAt": "2021-03-05T17:02:28.224517Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "ThePrimeTime",
                                "description": "This is a place for all the things that are awesome on stream. "
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "gLeIcCl3Zl4PvHecZxKmC42JKB0",
                        "id": "-dBYjA-v4XQ",
                        "snippet": {
                            "publishedAt": "2025-06-19T12:19:54Z",
                            "channelId": "UCUyeluBRhGPCW4rPe_UvBZQ",
                            "title": "Naughty Meta Was Tracking Users",
                            "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://www.zeropartydata.es/p/localhost-tracking-explained-it-could\nBy: Jorge García Herrero | https://x.com/jgarciaherrero\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/-dBYjA-v4XQ/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "ThePrimeTime",
                            "tags": [
                                "programming",
                                "software engineer",
                                "software engineering",
                                "developer",
                                "web design",
                                "web development",
                                "programmer humor"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-US",
                            "localized": {
                                "title": "Naughty Meta Was Tracking Users",
                                "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://www.zeropartydata.es/p/localhost-tracking-explained-it-could\nBy: Jorge García Herrero | https://x.com/jgarciaherrero\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis"
                            },
                            "defaultAudioLanguage": "en-US"
                        },
                        "contentDetails": {
                            "duration": "PT35M3S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "111603",
                            "likeCount": "2459",
                            "favoriteCount": "0",
                            "commentCount": "440"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "I2fPrIUr8lAs5-YxfFAFze03kqA",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS42RTNCOEMxREI3Q0VDMjU2",
                    "snippet": {
                        "publishedAt": "2025-06-18T03:05:54Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Lets talk about System Design",
                        "description": "Welcome to chai aur code, a coding/programming dedicated channel in Hindi language. Now you can learn best of programming concepts with industry standard practical guide in Hindi language.\n\nAll source code is available at my Github account:\nhttps://github.com/hiteshchoudhary\n\nOur Open-Source Project is here: https://freeapi.app\n\nJoin me at whatsapp: https://hitesh.ai/whatsapp\n\nfor community discord: https://hitesh.ai/discord\n\nInstagram pe yaha paaye jaate h:\nhttps://www.instagram.com/hiteshchoudharyofficial/\n\nHTML video series:  https://www.youtube.com/watch?v=XmLOwJHFHf0&list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI\n\nComplete javascript series: https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37\n\nComplete Reactjs series: https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige\n\nJavascript and react interview series: https://www.youtube.com/watch?v=1wqCyz7XrV4&list=PLu71SKxNbfoCy_MsA98SBfvUKF5eQit6L\n\nBackend development with Javascript: https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW\n\nPython Series: https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/rN6cq8yyCas/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/rN6cq8yyCas/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/rN6cq8yyCas/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/rN6cq8yyCas/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/rN6cq8yyCas/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 9,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "rN6cq8yyCas"
                        },
                        "videoOwnerChannelTitle": "Chai aur Code",
                        "videoOwnerChannelId": "UCNQ6FEtztATuaVhZKCY28Yw"
                    },
                    "contentDetails": {
                        "videoId": "rN6cq8yyCas",
                        "videoPublishedAt": "2024-05-06T14:30:08Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "AQM2ZZo1d_3t-nJQdSsFzXYo-J8",
                        "id": "UCNQ6FEtztATuaVhZKCY28Yw",
                        "snippet": {
                            "title": "Chai aur Code",
                            "description": "A channel dedicated to chai and coding in HINDI. A lot happens over chai and I am a big-time chai lover. Let's sip tea and write some code and some chit-chat.\nAb ye b Hindi me linkne to mat bolna, abhi ke liye itna hi likenge.\nBaaki baad me.\n\nSponsors ka welcome h: team@hiteshchoudhary.com\nSports betting, SKILLS based Games etc apps ka promotion hum lete nhi. \n",
                            "customUrl": "@chaiaurcode",
                            "publishedAt": "2022-11-08T18:36:31.740626Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Chai aur Code",
                                "description": "A channel dedicated to chai and coding in HINDI. A lot happens over chai and I am a big-time chai lover. Let's sip tea and write some code and some chit-chat.\nAb ye b Hindi me linkne to mat bolna, abhi ke liye itna hi likenge.\nBaaki baad me.\n\nSponsors ka welcome h: team@hiteshchoudhary.com\nSports betting, SKILLS based Games etc apps ka promotion hum lete nhi. \n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "sXExAGbChy7YG_ufgt0pdVQ9oN8",
                        "id": "rN6cq8yyCas",
                        "snippet": {
                            "publishedAt": "2024-05-06T14:30:08Z",
                            "channelId": "UCNQ6FEtztATuaVhZKCY28Yw",
                            "title": "Lets talk about System Design",
                            "description": "Welcome to chai aur code, a coding/programming dedicated channel in Hindi language. Now you can learn best of programming concepts with industry standard practical guide in Hindi language.\n\nAll source code is available at my Github account:\nhttps://github.com/hiteshchoudhary\n\nOur Open-Source Project is here: https://freeapi.app\n\nJoin me at whatsapp: https://hitesh.ai/whatsapp\n\nfor community discord: https://hitesh.ai/discord\n\nInstagram pe yaha paaye jaate h:\nhttps://www.instagram.com/hiteshchoudharyofficial/\n\nHTML video series:  https://www.youtube.com/watch?v=XmLOwJHFHf0&list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI\n\nComplete javascript series: https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37\n\nComplete Reactjs series: https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige\n\nJavascript and react interview series: https://www.youtube.com/watch?v=1wqCyz7XrV4&list=PLu71SKxNbfoCy_MsA98SBfvUKF5eQit6L\n\nBackend development with Javascript: https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW\n\nPython Series: https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/rN6cq8yyCas/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/rN6cq8yyCas/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/rN6cq8yyCas/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/rN6cq8yyCas/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/rN6cq8yyCas/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Chai aur Code",
                            "tags": [
                                "coding",
                                "hindi",
                                "javascript",
                                "web developer",
                                "react",
                                "quality",
                                "reactjs",
                                "tech interviews",
                                "coding interviews",
                                "python",
                                "django",
                                "machine learning",
                                "python for beginners",
                                "AI",
                                "Data Science",
                                "system design"
                            ],
                            "categoryId": "24",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Lets talk about System Design",
                                "description": "Welcome to chai aur code, a coding/programming dedicated channel in Hindi language. Now you can learn best of programming concepts with industry standard practical guide in Hindi language.\n\nAll source code is available at my Github account:\nhttps://github.com/hiteshchoudhary\n\nOur Open-Source Project is here: https://freeapi.app\n\nJoin me at whatsapp: https://hitesh.ai/whatsapp\n\nfor community discord: https://hitesh.ai/discord\n\nInstagram pe yaha paaye jaate h:\nhttps://www.instagram.com/hiteshchoudharyofficial/\n\nHTML video series:  https://www.youtube.com/watch?v=XmLOwJHFHf0&list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI\n\nComplete javascript series: https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37\n\nComplete Reactjs series: https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige\n\nJavascript and react interview series: https://www.youtube.com/watch?v=1wqCyz7XrV4&list=PLu71SKxNbfoCy_MsA98SBfvUKF5eQit6L\n\nBackend development with Javascript: https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW\n\nPython Series: https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT12M40S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "132801",
                            "likeCount": "6958",
                            "favoriteCount": "0",
                            "commentCount": "486"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "ueLslk1tX4hi8KGAyLbZgjAc-jc",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS40MDNEMzA0QTBFRThFMzBE",
                    "snippet": {
                        "publishedAt": "2025-06-18T02:59:57Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "System Design Crash Course - Part 2",
                        "description": "Hey everyone, In this video, we are going to discuss System Design for Beginners and all components of a scalable system design. We will see that how traffic patterns work, how serverless systems work and finally, what are modern containerization of apps and how Kubernetes came into the picture.\n\nPart 1 System Design for Beginners: https://youtu.be/lFeYU31TnQ8\nWhat is Kubernetes? | Kubernetes Explained: https://youtu.be/a-nWPre5QYI\n\nQuick Links\nMaster Docker: https://pro.piyushgarg.dev/learn/docker\nWeb Dev Cohort: https://piyushgarg.pro/cohort\nGenAI Course Link: https://piyushgarg.pro/genai\n\nVideo Titles\n- System Design\n- System Design for Beginners\n- AWS And Google Cloud\n- Load Balancers and Reverse Proxy\n- How to Scale a System\n\nHashtags\n#nodejs #javascript #cloudcomputing #systemdesign #systemarchitecture #fullstackwebdevelopment #coding #programming #aws #nginx #loadbalancer #backendwebdevelopment",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 10,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "YuB3OuF3MUE"
                        },
                        "videoOwnerChannelTitle": "Piyush Garg",
                        "videoOwnerChannelId": "UCf9T51_FmMlfhiGpoes0yFA"
                    },
                    "contentDetails": {
                        "videoId": "YuB3OuF3MUE",
                        "videoPublishedAt": "2025-05-24T14:30:20Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "fNqmex0j82790G0ARjzbs4Knon8",
                        "id": "UCf9T51_FmMlfhiGpoes0yFA",
                        "snippet": {
                            "title": "Piyush Garg",
                            "description": "Hi there! My name is Piyush Garg and I'm a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you're a beginner looking to learn the basics or an experienced developer looking to expand your skills, I've got something for you. \n\nSubscribe to my channel to join me on my journey as I explore the exciting world of technology and coding!\n\n#coding #javascript #reactjs #nodejs #mernstack #webdevelopment #tech #programming #developer #coder #softwareengineering #fullstack #webdev #js #frontend #backend #webapp\n",
                            "customUrl": "@piyushgargdev",
                            "publishedAt": "2021-06-12T15:26:41.569115Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/3acddexuFlA5yKRS2--11NeqhCiik-0cntUPjk_QjlsA4ScmQUPWNmeBLweVUQjWXTCLT26lsw=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Piyush Garg",
                                "description": "Hi there! My name is Piyush Garg and I'm a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you're a beginner looking to learn the basics or an experienced developer looking to expand your skills, I've got something for you. \n\nSubscribe to my channel to join me on my journey as I explore the exciting world of technology and coding!\n\n#coding #javascript #reactjs #nodejs #mernstack #webdevelopment #tech #programming #developer #coder #softwareengineering #fullstack #webdev #js #frontend #backend #webapp\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "A-ntM1iEyDtx1BlOtvKFZb0ypQw",
                        "id": "YuB3OuF3MUE",
                        "snippet": {
                            "publishedAt": "2025-05-24T14:30:20Z",
                            "channelId": "UCf9T51_FmMlfhiGpoes0yFA",
                            "title": "System Design Crash Course - Part 2",
                            "description": "Hey everyone, In this video, we are going to discuss System Design for Beginners and all components of a scalable system design. We will see that how traffic patterns work, how serverless systems work and finally, what are modern containerization of apps and how Kubernetes came into the picture.\n\nPart 1 System Design for Beginners: https://youtu.be/lFeYU31TnQ8\nWhat is Kubernetes? | Kubernetes Explained: https://youtu.be/a-nWPre5QYI\n\nQuick Links\nMaster Docker: https://pro.piyushgarg.dev/learn/docker\nWeb Dev Cohort: https://piyushgarg.pro/cohort\nGenAI Course Link: https://piyushgarg.pro/genai\n\nVideo Titles\n- System Design\n- System Design for Beginners\n- AWS And Google Cloud\n- Load Balancers and Reverse Proxy\n- How to Scale a System\n\nHashtags\n#nodejs #javascript #cloudcomputing #systemdesign #systemarchitecture #fullstackwebdevelopment #coding #programming #aws #nginx #loadbalancer #backendwebdevelopment",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/YuB3OuF3MUE/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Piyush Garg",
                            "categoryId": "27",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-IN",
                            "localized": {
                                "title": "System Design Crash Course - Part 2",
                                "description": "Hey everyone, In this video, we are going to discuss System Design for Beginners and all components of a scalable system design. We will see that how traffic patterns work, how serverless systems work and finally, what are modern containerization of apps and how Kubernetes came into the picture.\n\nPart 1 System Design for Beginners: https://youtu.be/lFeYU31TnQ8\nWhat is Kubernetes? | Kubernetes Explained: https://youtu.be/a-nWPre5QYI\n\nQuick Links\nMaster Docker: https://pro.piyushgarg.dev/learn/docker\nWeb Dev Cohort: https://piyushgarg.pro/cohort\nGenAI Course Link: https://piyushgarg.pro/genai\n\nVideo Titles\n- System Design\n- System Design for Beginners\n- AWS And Google Cloud\n- Load Balancers and Reverse Proxy\n- How to Scale a System\n\nHashtags\n#nodejs #javascript #cloudcomputing #systemdesign #systemarchitecture #fullstackwebdevelopment #coding #programming #aws #nginx #loadbalancer #backendwebdevelopment"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT50M9S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "50853",
                            "likeCount": "3018",
                            "favoriteCount": "0",
                            "commentCount": "315"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "Fg2UxlRBmDl-lgHFOsBEXziNUH0",
                    "id": "UExKY0VIa2NJYjE4YjgzbTRoZFY2VDdVcUtDSmZ4Sk1EQS42MjYzMTMyQjA0QURCN0JF",
                    "snippet": {
                        "publishedAt": "2025-06-16T12:27:20Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "AI Skeptic Friends",
                        "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://fly.io/blog/youre-all-nuts/\nBy: Thomas Ptacek | https://x.com/tqbf\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/lDVtXSpm378/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/lDVtXSpm378/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/lDVtXSpm378/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/lDVtXSpm378/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/lDVtXSpm378/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "PLJcEHkcIb18b83m4hdV6T7UqKCJfxJMDA",
                        "position": 11,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "lDVtXSpm378"
                        },
                        "videoOwnerChannelTitle": "ThePrimeTime",
                        "videoOwnerChannelId": "UCUyeluBRhGPCW4rPe_UvBZQ"
                    },
                    "contentDetails": {
                        "videoId": "lDVtXSpm378",
                        "videoPublishedAt": "2025-06-15T14:20:34Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "Qh99WELeqXLaY-RHFeQ90VdThNQ",
                        "id": "UCUyeluBRhGPCW4rPe_UvBZQ",
                        "snippet": {
                            "title": "ThePrimeTime",
                            "description": "This is a place for all the things that are awesome on stream. ",
                            "customUrl": "@theprimetimeagen",
                            "publishedAt": "2021-03-05T17:02:28.224517Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "ThePrimeTime",
                                "description": "This is a place for all the things that are awesome on stream. "
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "gEhX9O-udG34ZCSDY_J-8Jj7Qvk",
                        "id": "lDVtXSpm378",
                        "snippet": {
                            "publishedAt": "2025-06-15T14:20:34Z",
                            "channelId": "UCUyeluBRhGPCW4rPe_UvBZQ",
                            "title": "AI Skeptic Friends",
                            "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://fly.io/blog/youre-all-nuts/\nBy: Thomas Ptacek | https://x.com/tqbf\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/lDVtXSpm378/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/lDVtXSpm378/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/lDVtXSpm378/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/lDVtXSpm378/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/lDVtXSpm378/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "ThePrimeTime",
                            "tags": [
                                "programming",
                                "software engineer",
                                "software engineering",
                                "developer",
                                "web design",
                                "web development",
                                "programmer humor"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-US",
                            "localized": {
                                "title": "AI Skeptic Friends",
                                "description": "Twitch https://twitch.tv/ThePrimeagen\nDiscord https://discord.gg/ThePrimeagen\n\nBecome Backend Dev: https://boot.dev/prime\n(plus i make courses for them)\n\nThis is also the best way to support me is to support yourself becoming a better backend engineer.  \n\n### LINKS \nhttps://fly.io/blog/youre-all-nuts/\nBy: Thomas Ptacek | https://x.com/tqbf\n\nGreat News?  Want me to research and create video????: https://www.reddit.com/r/ThePrimeagen\n\nKinesis Advantage 360: https://bit.ly/Prime-Kinesis"
                            },
                            "defaultAudioLanguage": "en-US"
                        },
                        "contentDetails": {
                            "duration": "PT1H12M48S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "285302",
                            "likeCount": "4593",
                            "favoriteCount": "0",
                            "commentCount": "1362"
                        }
                    }
                }
            ]

            return res
                .status(200)
                .json(resData)

        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Something went wrong while fetching playlists")
        }
    }

    throw new ApiError(401, "Unauthorized request")

}

const getLikedVideos = async (req, res) => {

    if (req.user) {

        try {
            // oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

            // const videos = await youtube.playlistItems.list({
            //     part: "snippet, contentDetails",
            //     playlistId: 'LL',
            //     maxResults: 12,
            //     auth: oauth2Client,
            // })

            // const data = videos.data?.items

            // const chIds = []
            // const vIds = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     chIds.push(chId)
            //     vIds.push(vId)
            // })

            // const chRes = await getChProfile(chIds)
            // const vRes = await getVideoById(vIds)

            // const resData = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     const ch = chRes.data.items.filter((item) => item.id === chId)
            //     const v = vRes.data.items.filter((item) => item.id === vId)
            //     resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
            // })

            const resData = [
                {
                    "kind": "youtube#playlistItem",
                    "etag": "VPwgYEyZJCpMVFf-K-fFDARX_hU",
                    "id": "TEwucF8tWEtmSnpKaDA",
                    "snippet": {
                        "publishedAt": "2025-07-28T03:57:24Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "WHY so much DRaMa? 🤷 | Sunday Show",
                        "description": "Namaskar, Aadab! Iss hafte The Sunday Show mein — Bharat ki sabse entertaining news bulletin — aapke liye lekar aaye hain:\n\nViral Video Alert: Aniruddh Acharya’s controversial clip sparks outrage.\nSaiyaara breaks records and hearts — IV lagake log dekh rahe hain!\nTanushree Dutta's emotional video reignites #MeToo conversations.\nUorfi Javed dissolves her lip fillers — 200M views and counting!\nVP Jagdeep Dhankhar resigns amidst political pressure — was he pushed?\nCan courts put a timer on the President?\nThis week’s SPOTLIGHT: Governors of India.\nIndia-UK Free Trade Agreement signed! Scotch whiskies to get cheaper!\nNumbeo Safety Index: UAE safest, India outranks US & UK — but can we trust the rankings?\nSalt Epidemic in India? ICMR warns of dangerously high sodium intake.\nDowry de*ths: 7,000+ cases a year, less than 2% conviction rate. India’s dark reality exposed.\nNew Sports Bill: BCCI may come under RTI. Kya sach mein transparency aayegi?\nForest land diverted: 1.73 lakh hectares gone for infra — Delhi, Mumbai, Bengaluru combined!\nIndia finally opens up visas for Chinese nationals\n\nSubscribe for weekly takedowns of politics, pop culture, policies and more.\nLike, Comment, Share karo — kyunki Democracy mein sabka haq banta hai… joke bhi, joke pe soch bhi.\n\nChapters:\n00:00 - Intro\n01:03 - Pookie Baba Controversy\n02:41 - OTT Platforms Ban\n03:12 - Saiyaara\n04:00 - Tanushree Dutta\n04:37 - Uorfi Javed Lip Filler\n05:17 - Jagdeep Dhankar Resigns\n06:38 - Spotlight\n12:58 - Sunday Samachar\n25:09 - Positive News \n26:26 - Share Bazaar\n30:50 - Nonsense News\n35:32 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\nFor Collaborations: connect@sarthakgoswami.com\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/Vml7e\n\nSee you, in the next Episode!",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 0,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "p_-XKfJzJh0"
                        },
                        "videoOwnerChannelTitle": "Sarthak Goswami",
                        "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
                    },
                    "contentDetails": {
                        "videoId": "p_-XKfJzJh0",
                        "videoPublishedAt": "2025-07-27T04:30:27Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
                        "id": "UC5fcjujOsqD-126Chn_BAuA",
                        "snippet": {
                            "title": "Sarthak Goswami",
                            "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
                            "customUrl": "@sundaysarthak",
                            "publishedAt": "2018-01-02T14:18:23Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Sarthak Goswami",
                                "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "LGHrfqbHKWHI-EfiGcxo3p2W1rE",
                        "id": "p_-XKfJzJh0",
                        "snippet": {
                            "publishedAt": "2025-07-27T04:30:27Z",
                            "channelId": "UC5fcjujOsqD-126Chn_BAuA",
                            "title": "WHY so much DRaMa? 🤷 | Sunday Show",
                            "description": "Namaskar, Aadab! Iss hafte The Sunday Show mein — Bharat ki sabse entertaining news bulletin — aapke liye lekar aaye hain:\n\nViral Video Alert: Aniruddh Acharya’s controversial clip sparks outrage.\nSaiyaara breaks records and hearts — IV lagake log dekh rahe hain!\nTanushree Dutta's emotional video reignites #MeToo conversations.\nUorfi Javed dissolves her lip fillers — 200M views and counting!\nVP Jagdeep Dhankhar resigns amidst political pressure — was he pushed?\nCan courts put a timer on the President?\nThis week’s SPOTLIGHT: Governors of India.\nIndia-UK Free Trade Agreement signed! Scotch whiskies to get cheaper!\nNumbeo Safety Index: UAE safest, India outranks US & UK — but can we trust the rankings?\nSalt Epidemic in India? ICMR warns of dangerously high sodium intake.\nDowry de*ths: 7,000+ cases a year, less than 2% conviction rate. India’s dark reality exposed.\nNew Sports Bill: BCCI may come under RTI. Kya sach mein transparency aayegi?\nForest land diverted: 1.73 lakh hectares gone for infra — Delhi, Mumbai, Bengaluru combined!\nIndia finally opens up visas for Chinese nationals\n\nSubscribe for weekly takedowns of politics, pop culture, policies and more.\nLike, Comment, Share karo — kyunki Democracy mein sabka haq banta hai… joke bhi, joke pe soch bhi.\n\nChapters:\n00:00 - Intro\n01:03 - Pookie Baba Controversy\n02:41 - OTT Platforms Ban\n03:12 - Saiyaara\n04:00 - Tanushree Dutta\n04:37 - Uorfi Javed Lip Filler\n05:17 - Jagdeep Dhankar Resigns\n06:38 - Spotlight\n12:58 - Sunday Samachar\n25:09 - Positive News \n26:26 - Share Bazaar\n30:50 - Nonsense News\n35:32 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\nFor Collaborations: connect@sarthakgoswami.com\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/Vml7e\n\nSee you, in the next Episode!",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/p_-XKfJzJh0/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Sarthak Goswami",
                            "tags": [
                                "sarthak goswami",
                                "india news",
                                "sunday show",
                                "controversy",
                                "breaking news",
                                "top news",
                                "latest",
                                "satire",
                                "viral"
                            ],
                            "categoryId": "24",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "WHY so much DRaMa? 🤷 | Sunday Show",
                                "description": "Namaskar, Aadab! Iss hafte The Sunday Show mein — Bharat ki sabse entertaining news bulletin — aapke liye lekar aaye hain:\n\nViral Video Alert: Aniruddh Acharya’s controversial clip sparks outrage.\nSaiyaara breaks records and hearts — IV lagake log dekh rahe hain!\nTanushree Dutta's emotional video reignites #MeToo conversations.\nUorfi Javed dissolves her lip fillers — 200M views and counting!\nVP Jagdeep Dhankhar resigns amidst political pressure — was he pushed?\nCan courts put a timer on the President?\nThis week’s SPOTLIGHT: Governors of India.\nIndia-UK Free Trade Agreement signed! Scotch whiskies to get cheaper!\nNumbeo Safety Index: UAE safest, India outranks US & UK — but can we trust the rankings?\nSalt Epidemic in India? ICMR warns of dangerously high sodium intake.\nDowry de*ths: 7,000+ cases a year, less than 2% conviction rate. India’s dark reality exposed.\nNew Sports Bill: BCCI may come under RTI. Kya sach mein transparency aayegi?\nForest land diverted: 1.73 lakh hectares gone for infra — Delhi, Mumbai, Bengaluru combined!\nIndia finally opens up visas for Chinese nationals\n\nSubscribe for weekly takedowns of politics, pop culture, policies and more.\nLike, Comment, Share karo — kyunki Democracy mein sabka haq banta hai… joke bhi, joke pe soch bhi.\n\nChapters:\n00:00 - Intro\n01:03 - Pookie Baba Controversy\n02:41 - OTT Platforms Ban\n03:12 - Saiyaara\n04:00 - Tanushree Dutta\n04:37 - Uorfi Javed Lip Filler\n05:17 - Jagdeep Dhankar Resigns\n06:38 - Spotlight\n12:58 - Sunday Samachar\n25:09 - Positive News \n26:26 - Share Bazaar\n30:50 - Nonsense News\n35:32 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\nFor Collaborations: connect@sarthakgoswami.com\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/Vml7e\n\nSee you, in the next Episode!"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT42M36S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "true",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "666721",
                            "likeCount": "50078",
                            "favoriteCount": "0",
                            "commentCount": "2637"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "cXoS9DqEhzXgyEwTvDyjOv54H8M",
                    "id": "TEwuUTF6bk1kZGxOWFE",
                    "snippet": {
                        "publishedAt": "2025-07-27T13:35:42Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Ullu banaya bada maza aaya - War 2, Fantastic four ||  Men of Culture 190",
                        "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps:-\n0:00 - Aa gaye Hum \n3:23 - Narsimha Mahavatar \n4:45 - Ajay Paji ka Aura \n5:40 - Predator badlands \n8:04 - Noval Vyaad Released \n8:29 - Odyssey & Avatar Fire And Ashe \n11:38 - Badal ka Chashma lag gaya \n15:40 - Saiyyara Fans ka drama \n16:52 - Badal On MahaAvtar Narsimha \n21:35 - F4 Me Saiyyara Fans \n22:42 - Discuss MahaAvtar Narsimha \n27:31 - Saiyyara ka Craze \n32:51 - Discuss Fantastic 4 Spoiler Alert \n1:06:40 - Rdj As Dr Doom Right Or Wrong \n1:10:22 - Marvel Upcoming Movies \n1:11:20 - Fantastic 4 Post Credit Scene \n1:17:24 - Marvel Leak Strategy \n1:21:59 - F4 Favourite Scenes \n1:26:53 - Fantastic 4 Vs Superman \n1:30:17 -  F4 Johnny Storm \n1:31:55 - Fantastic 4 3D Experience \n1:33:56 - Marvel Reboot Plan \n1:36:01 - F4 Mid Credit And Theory \n1:45:45 - Marvel Ki tezi \n1:48:55 - Fantastic 4 Cast \n1:50:21 - War 2 Trailer \n1:59:51  - Coolie Trailer Kabh \n2:00:56 - War 2 Action Sequences \n2:02:17 - Baaghi 3 Teaser \n2:03:34 - Creators Vs Indian Film Prod \n2:08:35 - War 2 Ntr fake body \n2:11:46 - War 2 And Imax Benifits \n2:13:45 - Pune Dolby Cinema \n2:15:24 - Tron Ares trailer \n2:16:36 - SuperChat Reading",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 1,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "Q1znMddlNXQ"
                        },
                        "videoOwnerChannelTitle": "Men of culture",
                        "videoOwnerChannelId": "UC9CROGyC9hgIB1mnBuMpeoQ"
                    },
                    "contentDetails": {
                        "videoId": "Q1znMddlNXQ",
                        "videoPublishedAt": "2025-07-26T19:13:05Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "PNZWNsOf7GM7c6uDYi9Noz8LOgw",
                        "id": "UC9CROGyC9hgIB1mnBuMpeoQ",
                        "snippet": {
                            "title": "Men of culture",
                            "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n",
                            "customUrl": "@menofculturepodcast",
                            "publishedAt": "2021-11-30T11:18:37.30403Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Men of culture",
                                "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "vAbjbGl_Vix0LeXPUcUSnQxkwww",
                        "id": "Q1znMddlNXQ",
                        "snippet": {
                            "publishedAt": "2025-07-26T19:13:05Z",
                            "channelId": "UC9CROGyC9hgIB1mnBuMpeoQ",
                            "title": "Ullu banaya bada maza aaya - War 2, Fantastic four ||  Men of Culture 190",
                            "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps:-\n0:00 - Aa gaye Hum \n3:23 - Narsimha Mahavatar \n4:45 - Ajay Paji ka Aura \n5:40 - Predator badlands \n8:04 - Noval Vyaad Released \n8:29 - Odyssey & Avatar Fire And Ashe \n11:38 - Badal ka Chashma lag gaya \n15:40 - Saiyyara Fans ka drama \n16:52 - Badal On MahaAvtar Narsimha \n21:35 - F4 Me Saiyyara Fans \n22:42 - Discuss MahaAvtar Narsimha \n27:31 - Saiyyara ka Craze \n32:51 - Discuss Fantastic 4 Spoiler Alert \n1:06:40 - Rdj As Dr Doom Right Or Wrong \n1:10:22 - Marvel Upcoming Movies \n1:11:20 - Fantastic 4 Post Credit Scene \n1:17:24 - Marvel Leak Strategy \n1:21:59 - F4 Favourite Scenes \n1:26:53 - Fantastic 4 Vs Superman \n1:30:17 -  F4 Johnny Storm \n1:31:55 - Fantastic 4 3D Experience \n1:33:56 - Marvel Reboot Plan \n1:36:01 - F4 Mid Credit And Theory \n1:45:45 - Marvel Ki tezi \n1:48:55 - Fantastic 4 Cast \n1:50:21 - War 2 Trailer \n1:59:51  - Coolie Trailer Kabh \n2:00:56 - War 2 Action Sequences \n2:02:17 - Baaghi 3 Teaser \n2:03:34 - Creators Vs Indian Film Prod \n2:08:35 - War 2 Ntr fake body \n2:11:46 - War 2 And Imax Benifits \n2:13:45 - Pune Dolby Cinema \n2:15:24 - Tron Ares trailer \n2:16:36 - SuperChat Reading",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/Q1znMddlNXQ/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Men of culture",
                            "tags": [
                                "men of culture",
                                "men of culture podcast",
                                "podcast",
                                "bnftv",
                                "Badal Yadav",
                                "Comicverse",
                                "Comic Verse",
                                "PJ Explained",
                                "thePJ",
                                "FlickVerse"
                            ],
                            "categoryId": "22",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Ullu banaya bada maza aaya - War 2, Fantastic four ||  Men of Culture 190",
                                "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps:-\n0:00 - Aa gaye Hum \n3:23 - Narsimha Mahavatar \n4:45 - Ajay Paji ka Aura \n5:40 - Predator badlands \n8:04 - Noval Vyaad Released \n8:29 - Odyssey & Avatar Fire And Ashe \n11:38 - Badal ka Chashma lag gaya \n15:40 - Saiyyara Fans ka drama \n16:52 - Badal On MahaAvtar Narsimha \n21:35 - F4 Me Saiyyara Fans \n22:42 - Discuss MahaAvtar Narsimha \n27:31 - Saiyyara ka Craze \n32:51 - Discuss Fantastic 4 Spoiler Alert \n1:06:40 - Rdj As Dr Doom Right Or Wrong \n1:10:22 - Marvel Upcoming Movies \n1:11:20 - Fantastic 4 Post Credit Scene \n1:17:24 - Marvel Leak Strategy \n1:21:59 - F4 Favourite Scenes \n1:26:53 - Fantastic 4 Vs Superman \n1:30:17 -  F4 Johnny Storm \n1:31:55 - Fantastic 4 3D Experience \n1:33:56 - Marvel Reboot Plan \n1:36:01 - F4 Mid Credit And Theory \n1:45:45 - Marvel Ki tezi \n1:48:55 - Fantastic 4 Cast \n1:50:21 - War 2 Trailer \n1:59:51  - Coolie Trailer Kabh \n2:00:56 - War 2 Action Sequences \n2:02:17 - Baaghi 3 Teaser \n2:03:34 - Creators Vs Indian Film Prod \n2:08:35 - War 2 Ntr fake body \n2:11:46 - War 2 And Imax Benifits \n2:13:45 - Pune Dolby Cinema \n2:15:24 - Tron Ares trailer \n2:16:36 - SuperChat Reading"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT4H28M3S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "236705",
                            "likeCount": "9242",
                            "favoriteCount": "0",
                            "commentCount": "505"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "DlOLi7nn3ISu4jLAUkDiUbe5Kag",
                    "id": "TEwuRUp6WjNmdGt5dDA",
                    "snippet": {
                        "publishedAt": "2025-07-25T12:20:18Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "LIE HARD Ep. 5 ft @AakashGupta @KennySebastian @TheRahulDua @ShreejaChaturvedi",
                        "description": "Cashify Presents Lie Hard | Episode 5\n\nWelcome to Lie Hard, where comedians turn bluffing into an art form.\nThey will lie so hard that it will make it hard for you to trust yourself.\nSome lies are obvious. Some are not. Some are just weird.\n\nPresented by Cashify.\nSell Your Old Phone:\nhttps://www.cashify.in/sell-old-mobile-phone?utm_source=YT_Campaign&utm_medium=cpv&utm_campaign=YT_LH2&__utmrg=YT_LH2\n\nFt: \nKenny Sebastian // https://www.instagram.com/kennethseb/\nAakash Gupta // https://www.instagram.com/theskygupta/\nShreeja Chaturvedi // https://www.instagram.com/shreejachaturvedi/\nRahul Dua  // https://www.instagram.com/therahuldua/\nFor Lie Hard Instagram link // https://www.instagram.com/liehardofficial/\n\nChapters:\n00:00 Intro and Explainer\n02:00 Game 1 : Better Call Bluff\n02:57 Rahul Dua’s Statement\n12:42 Aakash Gupta’s Statement\n20:06 Shreeja’s Statement\n28:28 Kenny’s Statements\n39:36 Game 2: Phones Out - Cash In\n44:15 Game 3: Catch Me If You Can\n44:49 Kenny’s Statements\n56:02 Shreeja’s Statements\n1:05:00 Rahul Dua’s Statements \n1:14:36 Aakash Gupta’s Statements \n1:29:25 Game 4: Faking Bad\n1:41:37 Results\n1:43:08 BTS & Credits\n\nInspired By: WILTY, MAFIA, POKER, BLUFF, BULLSH*T GAME SHOW and more",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 2,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "EJzZ3ftkyt0"
                        },
                        "videoOwnerChannelTitle": "Gaurav Kapoor",
                        "videoOwnerChannelId": "UCeP5_FL11TnvXuvrFvALJyA"
                    },
                    "contentDetails": {
                        "videoId": "EJzZ3ftkyt0",
                        "videoPublishedAt": "2025-07-25T03:07:18Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "bjjYHjqrVdtvG9WCIFM7UufK81E",
                        "id": "UCeP5_FL11TnvXuvrFvALJyA",
                        "snippet": {
                            "title": "Gaurav Kapoor",
                            "description": "Stand-Up Comedy videos by Gaurav Kapoor",
                            "customUrl": "@gauravkapoor",
                            "publishedAt": "2012-07-14T08:58:21Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_nxl_qeW3ipdZJfbufwAS1L6-gtrDt54YfEGcw84QBPqQ=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_nxl_qeW3ipdZJfbufwAS1L6-gtrDt54YfEGcw84QBPqQ=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_nxl_qeW3ipdZJfbufwAS1L6-gtrDt54YfEGcw84QBPqQ=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Gaurav Kapoor",
                                "description": "Stand-Up Comedy videos by Gaurav Kapoor"
                            }
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "_glJssVbNWPry09Wb3_YbHgVB2c",
                        "id": "EJzZ3ftkyt0",
                        "snippet": {
                            "publishedAt": "2025-07-25T03:07:18Z",
                            "channelId": "UCeP5_FL11TnvXuvrFvALJyA",
                            "title": "LIE HARD Ep. 5 ft @AakashGupta @KennySebastian @TheRahulDua @ShreejaChaturvedi",
                            "description": "Cashify Presents Lie Hard | Episode 5\n\nWelcome to Lie Hard, where comedians turn bluffing into an art form.\nThey will lie so hard that it will make it hard for you to trust yourself.\nSome lies are obvious. Some are not. Some are just weird.\n\nPresented by Cashify.\nSell Your Old Phone:\nhttps://www.cashify.in/sell-old-mobile-phone?utm_source=YT_Campaign&utm_medium=cpv&utm_campaign=YT_LH2&__utmrg=YT_LH2\n\nFt: \nKenny Sebastian // https://www.instagram.com/kennethseb/\nAakash Gupta // https://www.instagram.com/theskygupta/\nShreeja Chaturvedi // https://www.instagram.com/shreejachaturvedi/\nRahul Dua  // https://www.instagram.com/therahuldua/\nFor Lie Hard Instagram link // https://www.instagram.com/liehardofficial/\n\nChapters:\n00:00 Intro and Explainer\n02:00 Game 1 : Better Call Bluff\n02:57 Rahul Dua’s Statement\n12:42 Aakash Gupta’s Statement\n20:06 Shreeja’s Statement\n28:28 Kenny’s Statements\n39:36 Game 2: Phones Out - Cash In\n44:15 Game 3: Catch Me If You Can\n44:49 Kenny’s Statements\n56:02 Shreeja’s Statements\n1:05:00 Rahul Dua’s Statements \n1:14:36 Aakash Gupta’s Statements \n1:29:25 Game 4: Faking Bad\n1:41:37 Results\n1:43:08 BTS & Credits\n\nInspired By: WILTY, MAFIA, POKER, BLUFF, BULLSH*T GAME SHOW and more",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/EJzZ3ftkyt0/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Gaurav Kapoor",
                            "categoryId": "23",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "LIE HARD Ep. 5 ft @AakashGupta @KennySebastian @TheRahulDua @ShreejaChaturvedi",
                                "description": "Cashify Presents Lie Hard | Episode 5\n\nWelcome to Lie Hard, where comedians turn bluffing into an art form.\nThey will lie so hard that it will make it hard for you to trust yourself.\nSome lies are obvious. Some are not. Some are just weird.\n\nPresented by Cashify.\nSell Your Old Phone:\nhttps://www.cashify.in/sell-old-mobile-phone?utm_source=YT_Campaign&utm_medium=cpv&utm_campaign=YT_LH2&__utmrg=YT_LH2\n\nFt: \nKenny Sebastian // https://www.instagram.com/kennethseb/\nAakash Gupta // https://www.instagram.com/theskygupta/\nShreeja Chaturvedi // https://www.instagram.com/shreejachaturvedi/\nRahul Dua  // https://www.instagram.com/therahuldua/\nFor Lie Hard Instagram link // https://www.instagram.com/liehardofficial/\n\nChapters:\n00:00 Intro and Explainer\n02:00 Game 1 : Better Call Bluff\n02:57 Rahul Dua’s Statement\n12:42 Aakash Gupta’s Statement\n20:06 Shreeja’s Statement\n28:28 Kenny’s Statements\n39:36 Game 2: Phones Out - Cash In\n44:15 Game 3: Catch Me If You Can\n44:49 Kenny’s Statements\n56:02 Shreeja’s Statements\n1:05:00 Rahul Dua’s Statements \n1:14:36 Aakash Gupta’s Statements \n1:29:25 Game 4: Faking Bad\n1:41:37 Results\n1:43:08 BTS & Credits\n\nInspired By: WILTY, MAFIA, POKER, BLUFF, BULLSH*T GAME SHOW and more"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT1H44M30S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "840047",
                            "likeCount": "27115",
                            "favoriteCount": "0",
                            "commentCount": "1988"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "NcK1LW3J3dyfxZ3QK7qXvGbrvD0",
                    "id": "TEwuUmxUVk1pNEp6WkE",
                    "snippet": {
                        "publishedAt": "2025-07-21T11:38:56Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Why Performance Actually Matters (The Standup)",
                        "description": "Watch the https://bolt.new Reward Ceremony Live!\nJuly 26th 10AM PST on   / theprimeagen\n#sponsored  https://balls.yoga\n\n📌 Chapters:\n\n00:00:00 - Intro\n00:01:55 - The downward trend of performance expectations\n00:07:10 - The internet isn't to blame for slow speeds anymore\n00:11:27 - Dial up\n00:12:50 - School day routines and the reason behind modem sounds\n00:18:00 - Trash was a Catfish \n00:20:25 - Primes School Habits and his Moms prophetic Internet dream\n00:23:58 - Teej's highschool experience\n00:27:24 - Back on topic (its performance btw) WHO/WHAT is to blame\n00:39:38 - Speed = Sales and WHERE is the problem\n00:43:46 - Netflix BTW and WHEN performance is important\n00:48:35 - Too performant and waste\n00:53:14 - 'Hardware will catch up'\n01:01:13 - GPU vs CPU \n01:06:00 - Wrap up and closing thoughts \n\nLinks:\n- Casey's Performance Course: https://computerenhance.com\n\nFeaturing: \nPrime: https://x.com/ThePrimeagen \nTeej: https://x.com/teej_dv\nCasey Muratori: https://x.com/cmuratori\nTrash Dev: https://x.com/trashh_dev\n\n---\n\nIn this episode of The Standup, we tackle one of the most frustrating aspects of modern computing: why everything feels so sluggish despite having incredibly powerful hardware. Casey Muratori joins us to share his perspective on performance culture and how we've collectively lowered our standards over the past two decades.\n\nFrom nostalgic stories about dial-up internet and modem sounds to serious discussions about software architecture, this conversation covers the technical, cultural, and business factors that have led to today's performance problems. We explore real-world examples from Netflix, discuss the impact of layered abstractions, and examine how corporate development pressures contribute to the problem.\n\nKey topics include:\n- How performance standards have declined while hardware has improved exponentially\n- The role of abstractions and frameworks in creating performance bottlenecks\n- Real Netflix case studies showing the complex relationship between performance and user behavior\n- Why the \"hardware will catch up\" mentality is fundamentally flawed\n- The difference between GPU and CPU performance paradigms\n- How AI might make performance problems even worse\n- Potential solutions through better substrate design\n\nWhether you're a developer frustrated with slow tools, a user wondering why your powerful computer still feels sluggish, or someone interested in the intersection of technology and culture, this discussion offers valuable insights into one of computing's most persistent challenges.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 3,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "RlTVMi4JzZA"
                        },
                        "videoOwnerChannelTitle": "ThePrimeTime",
                        "videoOwnerChannelId": "UCUyeluBRhGPCW4rPe_UvBZQ"
                    },
                    "contentDetails": {
                        "videoId": "RlTVMi4JzZA",
                        "videoPublishedAt": "2025-07-20T13:30:19Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "Qh99WELeqXLaY-RHFeQ90VdThNQ",
                        "id": "UCUyeluBRhGPCW4rPe_UvBZQ",
                        "snippet": {
                            "title": "ThePrimeTime",
                            "description": "This is a place for all the things that are awesome on stream. ",
                            "customUrl": "@theprimetimeagen",
                            "publishedAt": "2021-03-05T17:02:28.224517Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "ThePrimeTime",
                                "description": "This is a place for all the things that are awesome on stream. "
                            },
                            "country": "US"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "PFCSynMCbvxUoXvLEgxhU0JJHfQ",
                        "id": "RlTVMi4JzZA",
                        "snippet": {
                            "publishedAt": "2025-07-20T13:30:19Z",
                            "channelId": "UCUyeluBRhGPCW4rPe_UvBZQ",
                            "title": "Why Performance Actually Matters (The Standup)",
                            "description": "Watch the https://bolt.new Reward Ceremony Live!\nJuly 26th 10AM PST on   / theprimeagen\n#sponsored  https://balls.yoga\n\n📌 Chapters:\n\n00:00:00 - Intro\n00:01:55 - The downward trend of performance expectations\n00:07:10 - The internet isn't to blame for slow speeds anymore\n00:11:27 - Dial up\n00:12:50 - School day routines and the reason behind modem sounds\n00:18:00 - Trash was a Catfish \n00:20:25 - Primes School Habits and his Moms prophetic Internet dream\n00:23:58 - Teej's highschool experience\n00:27:24 - Back on topic (its performance btw) WHO/WHAT is to blame\n00:39:38 - Speed = Sales and WHERE is the problem\n00:43:46 - Netflix BTW and WHEN performance is important\n00:48:35 - Too performant and waste\n00:53:14 - 'Hardware will catch up'\n01:01:13 - GPU vs CPU \n01:06:00 - Wrap up and closing thoughts \n\nLinks:\n- Casey's Performance Course: https://computerenhance.com\n\nFeaturing: \nPrime: https://x.com/ThePrimeagen \nTeej: https://x.com/teej_dv\nCasey Muratori: https://x.com/cmuratori\nTrash Dev: https://x.com/trashh_dev\n\n---\n\nIn this episode of The Standup, we tackle one of the most frustrating aspects of modern computing: why everything feels so sluggish despite having incredibly powerful hardware. Casey Muratori joins us to share his perspective on performance culture and how we've collectively lowered our standards over the past two decades.\n\nFrom nostalgic stories about dial-up internet and modem sounds to serious discussions about software architecture, this conversation covers the technical, cultural, and business factors that have led to today's performance problems. We explore real-world examples from Netflix, discuss the impact of layered abstractions, and examine how corporate development pressures contribute to the problem.\n\nKey topics include:\n- How performance standards have declined while hardware has improved exponentially\n- The role of abstractions and frameworks in creating performance bottlenecks\n- Real Netflix case studies showing the complex relationship between performance and user behavior\n- Why the \"hardware will catch up\" mentality is fundamentally flawed\n- The difference between GPU and CPU performance paradigms\n- How AI might make performance problems even worse\n- Potential solutions through better substrate design\n\nWhether you're a developer frustrated with slow tools, a user wondering why your powerful computer still feels sluggish, or someone interested in the intersection of technology and culture, this discussion offers valuable insights into one of computing's most persistent challenges.",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/RlTVMi4JzZA/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "ThePrimeTime",
                            "tags": [
                                "programming",
                                "software engineer",
                                "software engineering",
                                "developer",
                                "web design",
                                "web development",
                                "programmer humor"
                            ],
                            "categoryId": "28",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-US",
                            "localized": {
                                "title": "Why Performance Actually Matters (The Standup)",
                                "description": "Watch the https://bolt.new Reward Ceremony Live!\nJuly 26th 10AM PST on   / theprimeagen\n#sponsored  https://balls.yoga\n\n📌 Chapters:\n\n00:00:00 - Intro\n00:01:55 - The downward trend of performance expectations\n00:07:10 - The internet isn't to blame for slow speeds anymore\n00:11:27 - Dial up\n00:12:50 - School day routines and the reason behind modem sounds\n00:18:00 - Trash was a Catfish \n00:20:25 - Primes School Habits and his Moms prophetic Internet dream\n00:23:58 - Teej's highschool experience\n00:27:24 - Back on topic (its performance btw) WHO/WHAT is to blame\n00:39:38 - Speed = Sales and WHERE is the problem\n00:43:46 - Netflix BTW and WHEN performance is important\n00:48:35 - Too performant and waste\n00:53:14 - 'Hardware will catch up'\n01:01:13 - GPU vs CPU \n01:06:00 - Wrap up and closing thoughts \n\nLinks:\n- Casey's Performance Course: https://computerenhance.com\n\nFeaturing: \nPrime: https://x.com/ThePrimeagen \nTeej: https://x.com/teej_dv\nCasey Muratori: https://x.com/cmuratori\nTrash Dev: https://x.com/trashh_dev\n\n---\n\nIn this episode of The Standup, we tackle one of the most frustrating aspects of modern computing: why everything feels so sluggish despite having incredibly powerful hardware. Casey Muratori joins us to share his perspective on performance culture and how we've collectively lowered our standards over the past two decades.\n\nFrom nostalgic stories about dial-up internet and modem sounds to serious discussions about software architecture, this conversation covers the technical, cultural, and business factors that have led to today's performance problems. We explore real-world examples from Netflix, discuss the impact of layered abstractions, and examine how corporate development pressures contribute to the problem.\n\nKey topics include:\n- How performance standards have declined while hardware has improved exponentially\n- The role of abstractions and frameworks in creating performance bottlenecks\n- Real Netflix case studies showing the complex relationship between performance and user behavior\n- Why the \"hardware will catch up\" mentality is fundamentally flawed\n- The difference between GPU and CPU performance paradigms\n- How AI might make performance problems even worse\n- Potential solutions through better substrate design\n\nWhether you're a developer frustrated with slow tools, a user wondering why your powerful computer still feels sluggish, or someone interested in the intersection of technology and culture, this discussion offers valuable insights into one of computing's most persistent challenges."
                            },
                            "defaultAudioLanguage": "en-US"
                        },
                        "contentDetails": {
                            "duration": "PT1H11M54S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "81098",
                            "likeCount": "2727",
                            "favoriteCount": "0",
                            "commentCount": "440"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "WVfAfHganEOG61fXrOD7wywLuEY",
                    "id": "TEwub005SkhrS1NXY3M",
                    "snippet": {
                        "publishedAt": "2025-07-20T13:47:44Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Who Got 'Cold-Played'? 🫤 | Sunday Show",
                        "description": "Sign up for Nation Skill Up by Geeks for Geeks -\nhttps://gfgcdn.com/tu/VR6/\n\n**\n\n\n\n\nJoin this channel\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nSupreme Court, Tesla Tax & Deepfakes | The Sunday Show\n News ki baat, entertainment ke saath 📰🎭\nThis week on The Sunday Show:\n\n🧑‍⚖️ Samay Raina’s mic drop moment outside court. (Hint : he supports Mohak Mangal)\n 👧 Apoorva “The Rebel Kid” Makhija in controversy again over her comments.\n ⚠️ Indonesia’s 11-year-old viral star inspires everyone from cops to F1. Aura Farming legend.\n 🤖 Assam influencer Archita Phukan targeted by her own ex. AI-generated filth is real.\n 💔 ColdplayGate – CEO caught cheating on kiss cam. Live. Viral. Awkward.\n🔥 SPOTLIGHT: Why Tesla Costs ₹70 Lakh in India\n TaxLA is real. Tariffs, protectionism, and policy absurdities explained.\n🧼 Cleanest Cities 2025 – Indore tops again. But now there’s a “Swachh League”!\n 🥟 Jalebi Ban? – Viral fake news debunked. The Health Ministry clarifies.\n 🐄 Non-Veg Doodh? – India-US trade stuck over cow feed. Yes, seriously.\n 📖 Anti-Sacrilege Bill – Punjab proposes life term for hurting religious sentiments.\n 🐕 SC on Stray Dogs – Love them? Feed them at home, says Supreme Court.\n 💨 Coal Plants Exempt – Govt drops pollution tech mandate for 78% plants. Why?\n📉 SHARE BAZAAR: Viral of the Week\n 📱 Influencers Pari and Mahak arrested for obscene reels\n 🛒 NRI aunty caught shoplifting ₹1L worth at Target in USA\n 🥚 Eggs thrown at Rath Yatra in Toronto\n 🌊 Ganga Aarti... in Canada... without Ganga.\n\nChapters:\n00:00 - Intro\n01:05 - Samay Raina in Supreme Court\n01:48 - Aura Farming\n02:32 - Apoorva Mukhija Controversy\n04:05 - ColdPlay Bawal\n08:12 - Archita Phukan Controversy\n11:00 - Sunday Samachar\n28:19 - News From Newspapers\n30:19 - Spotlight - Tesla in India\n36:57 - Share Bazaar\n42:50 - Nonsense News\n45:05 - Reddit Reviews\n\n******************************************************************************\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/35ac3n5n\n\nSee you, in the next Episode!",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 4,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "oM9JHkKSWcs"
                        },
                        "videoOwnerChannelTitle": "Sarthak Goswami",
                        "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
                    },
                    "contentDetails": {
                        "videoId": "oM9JHkKSWcs",
                        "videoPublishedAt": "2025-07-20T04:30:29Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
                        "id": "UC5fcjujOsqD-126Chn_BAuA",
                        "snippet": {
                            "title": "Sarthak Goswami",
                            "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
                            "customUrl": "@sundaysarthak",
                            "publishedAt": "2018-01-02T14:18:23Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Sarthak Goswami",
                                "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "bir2xJ3zqV1PJcOtWHeQQjMysfY",
                        "id": "oM9JHkKSWcs",
                        "snippet": {
                            "publishedAt": "2025-07-20T04:30:29Z",
                            "channelId": "UC5fcjujOsqD-126Chn_BAuA",
                            "title": "Who Got 'Cold-Played'? 🫤 | Sunday Show",
                            "description": "Sign up for Nation Skill Up by Geeks for Geeks -\nhttps://gfgcdn.com/tu/VR6/\n\n**\n\n\n\n\nJoin this channel\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nSupreme Court, Tesla Tax & Deepfakes | The Sunday Show\n News ki baat, entertainment ke saath 📰🎭\nThis week on The Sunday Show:\n\n🧑‍⚖️ Samay Raina’s mic drop moment outside court. (Hint : he supports Mohak Mangal)\n 👧 Apoorva “The Rebel Kid” Makhija in controversy again over her comments.\n ⚠️ Indonesia’s 11-year-old viral star inspires everyone from cops to F1. Aura Farming legend.\n 🤖 Assam influencer Archita Phukan targeted by her own ex. AI-generated filth is real.\n 💔 ColdplayGate – CEO caught cheating on kiss cam. Live. Viral. Awkward.\n🔥 SPOTLIGHT: Why Tesla Costs ₹70 Lakh in India\n TaxLA is real. Tariffs, protectionism, and policy absurdities explained.\n🧼 Cleanest Cities 2025 – Indore tops again. But now there’s a “Swachh League”!\n 🥟 Jalebi Ban? – Viral fake news debunked. The Health Ministry clarifies.\n 🐄 Non-Veg Doodh? – India-US trade stuck over cow feed. Yes, seriously.\n 📖 Anti-Sacrilege Bill – Punjab proposes life term for hurting religious sentiments.\n 🐕 SC on Stray Dogs – Love them? Feed them at home, says Supreme Court.\n 💨 Coal Plants Exempt – Govt drops pollution tech mandate for 78% plants. Why?\n📉 SHARE BAZAAR: Viral of the Week\n 📱 Influencers Pari and Mahak arrested for obscene reels\n 🛒 NRI aunty caught shoplifting ₹1L worth at Target in USA\n 🥚 Eggs thrown at Rath Yatra in Toronto\n 🌊 Ganga Aarti... in Canada... without Ganga.\n\nChapters:\n00:00 - Intro\n01:05 - Samay Raina in Supreme Court\n01:48 - Aura Farming\n02:32 - Apoorva Mukhija Controversy\n04:05 - ColdPlay Bawal\n08:12 - Archita Phukan Controversy\n11:00 - Sunday Samachar\n28:19 - News From Newspapers\n30:19 - Spotlight - Tesla in India\n36:57 - Share Bazaar\n42:50 - Nonsense News\n45:05 - Reddit Reviews\n\n******************************************************************************\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/35ac3n5n\n\nSee you, in the next Episode!",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/oM9JHkKSWcs/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Sarthak Goswami",
                            "tags": [
                                "sarthak goswami",
                                "india news",
                                "sunday show",
                                "controversy",
                                "breaking news",
                                "top news",
                                "latest",
                                "satire",
                                "viral",
                                "Samay Raina",
                                "Apoorva Makhija",
                                "The Rebel Kid",
                                "Coldplayed",
                                "Coldplay Concert",
                                "ColdplayGate",
                                "Astronomer CEO",
                                "Tesla India",
                                "Tesla India Price",
                                "Tesla in India",
                                "deepfake scandal",
                                "deepfake danger",
                                "Assam deepfake",
                                "AI deepfake",
                                "Archita Phukan deepfake",
                                "Archita Phukan Scandal sacrilege law punjab",
                                "odisha news",
                                "swachh bharat",
                                "fake news india",
                                "india viral video",
                                "india memes"
                            ],
                            "categoryId": "25",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Who Got 'Cold-Played'? 🫤 | Sunday Show",
                                "description": "Sign up for Nation Skill Up by Geeks for Geeks -\nhttps://gfgcdn.com/tu/VR6/\n\n**\n\n\n\n\nJoin this channel\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nSupreme Court, Tesla Tax & Deepfakes | The Sunday Show\n News ki baat, entertainment ke saath 📰🎭\nThis week on The Sunday Show:\n\n🧑‍⚖️ Samay Raina’s mic drop moment outside court. (Hint : he supports Mohak Mangal)\n 👧 Apoorva “The Rebel Kid” Makhija in controversy again over her comments.\n ⚠️ Indonesia’s 11-year-old viral star inspires everyone from cops to F1. Aura Farming legend.\n 🤖 Assam influencer Archita Phukan targeted by her own ex. AI-generated filth is real.\n 💔 ColdplayGate – CEO caught cheating on kiss cam. Live. Viral. Awkward.\n🔥 SPOTLIGHT: Why Tesla Costs ₹70 Lakh in India\n TaxLA is real. Tariffs, protectionism, and policy absurdities explained.\n🧼 Cleanest Cities 2025 – Indore tops again. But now there’s a “Swachh League”!\n 🥟 Jalebi Ban? – Viral fake news debunked. The Health Ministry clarifies.\n 🐄 Non-Veg Doodh? – India-US trade stuck over cow feed. Yes, seriously.\n 📖 Anti-Sacrilege Bill – Punjab proposes life term for hurting religious sentiments.\n 🐕 SC on Stray Dogs – Love them? Feed them at home, says Supreme Court.\n 💨 Coal Plants Exempt – Govt drops pollution tech mandate for 78% plants. Why?\n📉 SHARE BAZAAR: Viral of the Week\n 📱 Influencers Pari and Mahak arrested for obscene reels\n 🛒 NRI aunty caught shoplifting ₹1L worth at Target in USA\n 🥚 Eggs thrown at Rath Yatra in Toronto\n 🌊 Ganga Aarti... in Canada... without Ganga.\n\nChapters:\n00:00 - Intro\n01:05 - Samay Raina in Supreme Court\n01:48 - Aura Farming\n02:32 - Apoorva Mukhija Controversy\n04:05 - ColdPlay Bawal\n08:12 - Archita Phukan Controversy\n11:00 - Sunday Samachar\n28:19 - News From Newspapers\n30:19 - Spotlight - Tesla in India\n36:57 - Share Bazaar\n42:50 - Nonsense News\n45:05 - Reddit Reviews\n\n******************************************************************************\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/35ac3n5n\n\nSee you, in the next Episode!"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT50M31S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "true",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "896139",
                            "likeCount": "42582",
                            "favoriteCount": "0",
                            "commentCount": "4041"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "Lw_WsiBxHGlTx0WQfqMtts3aSck",
                    "id": "TEwuNTBJc2l4Mk9Odm8",
                    "snippet": {
                        "publishedAt": "2025-07-19T10:28:44Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "How Indian Media Is FAILING Us? | Fixing News  Ep. 03 | ft. Manisha Pande @newslaundry  ​",
                        "description": "Welcome to the latest episode of Fixing News – the podcast for everyone tired of \"breaking\" news that only breaks logic.\n\nIn this episode, hosts Sarthak Goswami and Rishabh Srivastava are joined by Manisha Pande (Host- Newsance, Managing Editor at Newslaundry) for an honest, hilarious, and hard-hitting conversation about the state of Indian media. From her personal journey in journalism to exposing fake news, newsroom politics, legal battles, and the toxic nature of prime-time debates- this podcast goes deep. We also unpack Newslaundry’s ad-free revenue model, why real journalism matters, and the challenges faced by YouTubers and independent reporters in today’s media landscape.\n\nIf you're interested in Indian news, digital journalism, or media critique with a dose of humor- this episode is for you.\n\n#FixingNews #ManishaPande #Newslaundry #FakeNews #IndianMedia #YouTubePodcast #JournalismInIndia #SarthakGoswami #NewsPodcast #mediacritique \n\nHelp us decide who sits on the other side of the mic :studio_microphone: https://forms.gle/rMANoV1pHCRHGsry5 Drop your suggestions, tell us why they matter, and maybe your favorite creator ends up on a couch with us.\n\n******************************************************************************************************\nSupport Newslaundry: rzp.io/rzp/nlsm\n\nCOMMENT/SHARE the Video -- Make these stories reach maximum people by engaging with video. Let's do it!\n\nSay yes to us forever, become a member of The Sunday Sarthak YouTube fam and get exclusive content:\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n******************************************************************************************************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nHosts: Sarthak Goswami and Rishabh Srivastava\nEdits: Vishal, Shubham\nProducers: Rishabh Srivastava\n\nSee you, in the next Episode!",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/50Isix2ONvo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/50Isix2ONvo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/50Isix2ONvo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/50Isix2ONvo/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/50Isix2ONvo/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 5,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "50Isix2ONvo"
                        },
                        "videoOwnerChannelTitle": "Sarthak Goswami",
                        "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
                    },
                    "contentDetails": {
                        "videoId": "50Isix2ONvo",
                        "videoPublishedAt": "2025-07-19T08:03:04Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
                        "id": "UC5fcjujOsqD-126Chn_BAuA",
                        "snippet": {
                            "title": "Sarthak Goswami",
                            "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
                            "customUrl": "@sundaysarthak",
                            "publishedAt": "2018-01-02T14:18:23Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Sarthak Goswami",
                                "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "OJA8pDb1k9H55oXQF2_egZiFj2c",
                        "id": "50Isix2ONvo",
                        "snippet": {
                            "publishedAt": "2025-07-19T08:03:04Z",
                            "channelId": "UC5fcjujOsqD-126Chn_BAuA",
                            "title": "How Indian Media Is FAILING Us? | Fixing News  Ep. 03 | ft. Manisha Pande @newslaundry  ​",
                            "description": "Welcome to the latest episode of Fixing News – the podcast for everyone tired of \"breaking\" news that only breaks logic.\n\nIn this episode, hosts Sarthak Goswami and Rishabh Srivastava are joined by Manisha Pande (Host- Newsance, Managing Editor at Newslaundry) for an honest, hilarious, and hard-hitting conversation about the state of Indian media. From her personal journey in journalism to exposing fake news, newsroom politics, legal battles, and the toxic nature of prime-time debates- this podcast goes deep. We also unpack Newslaundry’s ad-free revenue model, why real journalism matters, and the challenges faced by YouTubers and independent reporters in today’s media landscape.\n\nIf you're interested in Indian news, digital journalism, or media critique with a dose of humor- this episode is for you.\n\n#FixingNews #ManishaPande #Newslaundry #FakeNews #IndianMedia #YouTubePodcast #JournalismInIndia #SarthakGoswami #NewsPodcast #mediacritique \n\nHelp us decide who sits on the other side of the mic :studio_microphone: https://forms.gle/rMANoV1pHCRHGsry5 Drop your suggestions, tell us why they matter, and maybe your favorite creator ends up on a couch with us.\n\n******************************************************************************************************\nSupport Newslaundry: rzp.io/rzp/nlsm\n\nCOMMENT/SHARE the Video -- Make these stories reach maximum people by engaging with video. Let's do it!\n\nSay yes to us forever, become a member of The Sunday Sarthak YouTube fam and get exclusive content:\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n******************************************************************************************************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nHosts: Sarthak Goswami and Rishabh Srivastava\nEdits: Vishal, Shubham\nProducers: Rishabh Srivastava\n\nSee you, in the next Episode!",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/50Isix2ONvo/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/50Isix2ONvo/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/50Isix2ONvo/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/50Isix2ONvo/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/50Isix2ONvo/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Sarthak Goswami",
                            "tags": [
                                "sarthak goswami",
                                "india news",
                                "sunday show",
                                "latest",
                                "viral",
                                "Indian Journalism",
                                "Indian News Media",
                                "Godi Media",
                                "Fake News India",
                                "TV News India",
                                "Newslaundry Podcast",
                                "Manisha Pande Interview",
                                "Newsance Newslaundry",
                                "Arnab Goswami Debate",
                                "Rahul Shivshankar News",
                                "Sudhir Chaudhary Latest",
                                "Navika Kumar Debate",
                                "India vs Pakistan News",
                                "Nirbhaya Delhi Case",
                                "Amish Devgan Controversy",
                                "News Anchor Roast",
                                "Media Bias in India",
                                "Journalism in India 2025",
                                "Hindi News Anchors",
                                "Manisha Pande"
                            ],
                            "categoryId": "25",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "How Indian Media Is FAILING Us? | Fixing News  Ep. 03 | ft. Manisha Pande @newslaundry  ​",
                                "description": "Welcome to the latest episode of Fixing News – the podcast for everyone tired of \"breaking\" news that only breaks logic.\n\nIn this episode, hosts Sarthak Goswami and Rishabh Srivastava are joined by Manisha Pande (Host- Newsance, Managing Editor at Newslaundry) for an honest, hilarious, and hard-hitting conversation about the state of Indian media. From her personal journey in journalism to exposing fake news, newsroom politics, legal battles, and the toxic nature of prime-time debates- this podcast goes deep. We also unpack Newslaundry’s ad-free revenue model, why real journalism matters, and the challenges faced by YouTubers and independent reporters in today’s media landscape.\n\nIf you're interested in Indian news, digital journalism, or media critique with a dose of humor- this episode is for you.\n\n#FixingNews #ManishaPande #Newslaundry #FakeNews #IndianMedia #YouTubePodcast #JournalismInIndia #SarthakGoswami #NewsPodcast #mediacritique \n\nHelp us decide who sits on the other side of the mic :studio_microphone: https://forms.gle/rMANoV1pHCRHGsry5 Drop your suggestions, tell us why they matter, and maybe your favorite creator ends up on a couch with us.\n\n******************************************************************************************************\nSupport Newslaundry: rzp.io/rzp/nlsm\n\nCOMMENT/SHARE the Video -- Make these stories reach maximum people by engaging with video. Let's do it!\n\nSay yes to us forever, become a member of The Sunday Sarthak YouTube fam and get exclusive content:\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n******************************************************************************************************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nHosts: Sarthak Goswami and Rishabh Srivastava\nEdits: Vishal, Shubham\nProducers: Rishabh Srivastava\n\nSee you, in the next Episode!"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT1H15M14S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "188051",
                            "likeCount": "7599",
                            "favoriteCount": "0",
                            "commentCount": "712"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "_9-vBoGVt2rBFja7VPMLYu6YE-g",
                    "id": "TEwuRlRGRXprbHRRTDQ",
                    "snippet": {
                        "publishedAt": "2025-07-15T13:34:05Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Ab To PJ Explained Bhi Chalega || Men Of Culture || Meme ep.45",
                        "description": "Share Your memes Here👇\nJoin Our Official discord - https://discord.gg/GAnTMVurm4\n\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nThis is a Discord meme reaction episode with the most savage and funny memes on the internet. Sit back and enjoy and don't forget to comment your fav parts about the episode✌️.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE  For Weekly Podcasts👇\nhttps://www.youtube.com/ @menofculturepodcast  \n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal https://www.youtube.com/ @BnfTV  \nMohit  https://www.youtube.com/ @comicverseog  \nthePJ  https://www.youtube.com/ @PJExplained",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/FTFEzkltQL4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/FTFEzkltQL4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/FTFEzkltQL4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/FTFEzkltQL4/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/FTFEzkltQL4/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 6,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "FTFEzkltQL4"
                        },
                        "videoOwnerChannelTitle": "Men of Culture Ultra",
                        "videoOwnerChannelId": "UCQwh4aoymaFf4gXv7MSxpMw"
                    },
                    "contentDetails": {
                        "videoId": "FTFEzkltQL4",
                        "videoPublishedAt": "2025-07-15T13:30:06Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "ZenrXTfibVsprOjUhVlp8KHvu4A",
                        "id": "UCQwh4aoymaFf4gXv7MSxpMw",
                        "snippet": {
                            "title": "Men of Culture Ultra",
                            "description": "Sister channel - Men of Culture\n\nfor business contact - business.menofcultureyt@gmail.com\n",
                            "customUrl": "@menofcultureultra",
                            "publishedAt": "2024-08-23T15:23:35.245187Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/1rOrRYgogQ5e4VKojTNG7zU4-V3SxhSJFr-s-WOHpa8vBESdLjyzY0kUFMSrXExHGkq4_3jH=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Men of Culture Ultra",
                                "description": "Sister channel - Men of Culture\n\nfor business contact - business.menofcultureyt@gmail.com\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "Om9o3OoHqtYvO5oB0yscM47djV8",
                        "id": "FTFEzkltQL4",
                        "snippet": {
                            "publishedAt": "2025-07-15T13:30:06Z",
                            "channelId": "UCQwh4aoymaFf4gXv7MSxpMw",
                            "title": "Ab To PJ Explained Bhi Chalega || Men Of Culture || Meme ep.45",
                            "description": "Share Your memes Here👇\nJoin Our Official discord - https://discord.gg/GAnTMVurm4\n\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nThis is a Discord meme reaction episode with the most savage and funny memes on the internet. Sit back and enjoy and don't forget to comment your fav parts about the episode✌️.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE  For Weekly Podcasts👇\nhttps://www.youtube.com/ @menofculturepodcast  \n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal https://www.youtube.com/ @BnfTV  \nMohit  https://www.youtube.com/ @comicverseog  \nthePJ  https://www.youtube.com/ @PJExplained",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/FTFEzkltQL4/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/FTFEzkltQL4/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/FTFEzkltQL4/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/FTFEzkltQL4/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/FTFEzkltQL4/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Men of Culture Ultra",
                            "tags": [
                                "#memes",
                                "#memereaction",
                                "#vlogs",
                                "#fun",
                                "#menofculture",
                                "#reactionvideos",
                                "#comedy",
                                "#pjexplained",
                                "#bnftv",
                                "#comicverse",
                                "#freinds",
                                "#games",
                                "#laughter",
                                "#enjoy",
                                "#love",
                                "#podcast",
                                "#cinema",
                                "#moc",
                                "#movies",
                                "#marvel"
                            ],
                            "categoryId": "22",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Ab To PJ Explained Bhi Chalega || Men Of Culture || Meme ep.45",
                                "description": "Share Your memes Here👇\nJoin Our Official discord - https://discord.gg/GAnTMVurm4\n\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nThis is a Discord meme reaction episode with the most savage and funny memes on the internet. Sit back and enjoy and don't forget to comment your fav parts about the episode✌️.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE  For Weekly Podcasts👇\nhttps://www.youtube.com/ @menofculturepodcast  \n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal https://www.youtube.com/ @BnfTV  \nMohit  https://www.youtube.com/ @comicverseog  \nthePJ  https://www.youtube.com/ @PJExplained"
                            }
                        },
                        "contentDetails": {
                            "duration": "PT11M31S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "227765",
                            "likeCount": "15184",
                            "favoriteCount": "0",
                            "commentCount": "412"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "DgOvcnL5skqY5nlaVIfHUBxDp5w",
                    "id": "TEwuRGFxbTlRUGtjS00",
                    "snippet": {
                        "publishedAt": "2025-07-13T13:07:51Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Lies EXPOSED? 😱| Sunday Show",
                        "description": "Try Odoo: https://www.odoo.com/r/H90R\n \nThis week was one big emotional rollercoaster. Air India Plane crash investigations, bots stole Tatkal tickets, Kapil ke café pe dhayein dhayein, aur Bihar ne bola: “Kaagaz dikhao, warna vote mat do!”\n Highlights from this chaotic week:\n✈️ Air India Crash Report is out — no bird hits, no pilot errors… toh crash kyun hua? Fuel cutoff ka twist?\n📜 Bihar’s Voter Verification drive sparks controversy — kaagaz dikhao, warna naam cut\n🎭 Kunal Kamra vs Eknath Shinde – joke pe motion, daadhi pe emotion\n🩸 Rahul Gandhi’s sanitary pad video goes viral — FIR, fake edit aur full drama\n🏏 Tatkal Ticket Scam 2.0 – Aadhaar verification useless, Tatkal bots return – Agents 1, IRCTC 0\n🚺 Radhika Yadav m**der – National tennis player, un-alived by her father over “log kya kahenge”\n🌧️ Himachal Floods & Kangana’s helplessness – sans funds, sans power, but full Twitter\n☕ Kapil Sharma’s Canada café - Literally under fire\n🕉️ Chhangur Baba Conversion Racket – ₹106 crore ka scam, caste-based rate card\n🚶‍♂️ Kawad Yatra tensions again - viral videos, vandalism fears, and the annual debate\n\n\n🗳️ Today’s SPOTLIGHT: SIR in Bihar = NRC 2.0? Citizenship proof ke naam pe voter list se cleansing? \n\n🕒 Timestamps:\n00:00 – Intro\n01:00 – Air India 171: What Really Happened?\n03:07 – Kunal Kamra’s Joke Trouble\n04:08 – Rahul Gandhi’s Pad Controversy\n05:49 – Kapil Sharma Café Firing\n06:34 – Himachal Floods & Kangana’s Response\n08:24 – Chhangur Baba Scam\n09:28 – Kawad Yatra Tensions\n11:10 – IRCTC Tatkal Ticket Scam\n15:47 – Radhika Yadav M**der Case\n16:35 – India’s Children Still Behind in School\n18:21 – SPOTLIGHT: Bihar Voter List Drama – CAA/NRC Lite?\n23:23 – Share Bazaar\n29:40 – Nonsense News\n33:14 – Sunday Sabha (MEMES)\n40:15 – Outro\n\n🧠 Weekly news, without the noise.\n😂 Politics, policies aur punches – sab milega iss Sunday Show pe.\n📣 Comment below:\n Is asking for kaagaz the same as NRC-lite?\n Kya IRCTC kabhi sudhrega?\n📍 Join our member fam:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/4b43ynnz\n\nSee you, in the next Episode!",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 7,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "Daqm9QPkcKM"
                        },
                        "videoOwnerChannelTitle": "Sarthak Goswami",
                        "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
                    },
                    "contentDetails": {
                        "videoId": "Daqm9QPkcKM",
                        "videoPublishedAt": "2025-07-13T04:30:08Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
                        "id": "UC5fcjujOsqD-126Chn_BAuA",
                        "snippet": {
                            "title": "Sarthak Goswami",
                            "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
                            "customUrl": "@sundaysarthak",
                            "publishedAt": "2018-01-02T14:18:23Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Sarthak Goswami",
                                "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "Tgncb0ZshZQRtX25EG-AwfBoP8c",
                        "id": "Daqm9QPkcKM",
                        "snippet": {
                            "publishedAt": "2025-07-13T04:30:08Z",
                            "channelId": "UC5fcjujOsqD-126Chn_BAuA",
                            "title": "Lies EXPOSED? 😱| Sunday Show",
                            "description": "Try Odoo: https://www.odoo.com/r/H90R\n \nThis week was one big emotional rollercoaster. Air India Plane crash investigations, bots stole Tatkal tickets, Kapil ke café pe dhayein dhayein, aur Bihar ne bola: “Kaagaz dikhao, warna vote mat do!”\n Highlights from this chaotic week:\n✈️ Air India Crash Report is out — no bird hits, no pilot errors… toh crash kyun hua? Fuel cutoff ka twist?\n📜 Bihar’s Voter Verification drive sparks controversy — kaagaz dikhao, warna naam cut\n🎭 Kunal Kamra vs Eknath Shinde – joke pe motion, daadhi pe emotion\n🩸 Rahul Gandhi’s sanitary pad video goes viral — FIR, fake edit aur full drama\n🏏 Tatkal Ticket Scam 2.0 – Aadhaar verification useless, Tatkal bots return – Agents 1, IRCTC 0\n🚺 Radhika Yadav m**der – National tennis player, un-alived by her father over “log kya kahenge”\n🌧️ Himachal Floods & Kangana’s helplessness – sans funds, sans power, but full Twitter\n☕ Kapil Sharma’s Canada café - Literally under fire\n🕉️ Chhangur Baba Conversion Racket – ₹106 crore ka scam, caste-based rate card\n🚶‍♂️ Kawad Yatra tensions again - viral videos, vandalism fears, and the annual debate\n\n\n🗳️ Today’s SPOTLIGHT: SIR in Bihar = NRC 2.0? Citizenship proof ke naam pe voter list se cleansing? \n\n🕒 Timestamps:\n00:00 – Intro\n01:00 – Air India 171: What Really Happened?\n03:07 – Kunal Kamra’s Joke Trouble\n04:08 – Rahul Gandhi’s Pad Controversy\n05:49 – Kapil Sharma Café Firing\n06:34 – Himachal Floods & Kangana’s Response\n08:24 – Chhangur Baba Scam\n09:28 – Kawad Yatra Tensions\n11:10 – IRCTC Tatkal Ticket Scam\n15:47 – Radhika Yadav M**der Case\n16:35 – India’s Children Still Behind in School\n18:21 – SPOTLIGHT: Bihar Voter List Drama – CAA/NRC Lite?\n23:23 – Share Bazaar\n29:40 – Nonsense News\n33:14 – Sunday Sabha (MEMES)\n40:15 – Outro\n\n🧠 Weekly news, without the noise.\n😂 Politics, policies aur punches – sab milega iss Sunday Show pe.\n📣 Comment below:\n Is asking for kaagaz the same as NRC-lite?\n Kya IRCTC kabhi sudhrega?\n📍 Join our member fam:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/4b43ynnz\n\nSee you, in the next Episode!",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/Daqm9QPkcKM/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Sarthak Goswami",
                            "tags": [
                                "sarthak goswami",
                                "india news",
                                "sunday show",
                                "controversy",
                                "breaking news",
                                "top news",
                                "latest",
                                "satire",
                                "viral",
                                "Air India Crash",
                                "Bihar Voter List",
                                "Tatkal Scam",
                                "Tatkal Ticket Scam",
                                "Kunal Kamra",
                                "Radhika Yadav",
                                "Kapil Sharma Cafe",
                                "Chhangur Baba",
                                "Kangana Ranaut",
                                "Education Survey India",
                                "CAA NRC",
                                "News Satire",
                                "The Sunday Show",
                                "Indian Politics",
                                "Bihar Elections 2025",
                                "Air India crash report",
                                "Air India Flight 171",
                                "IRCTC Tatkal scam",
                                "Bihar voter list",
                                "Rahul gandhi",
                                "rahul gandhi pad"
                            ],
                            "categoryId": "25",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Lies EXPOSED? 😱| Sunday Show",
                                "description": "Try Odoo: https://www.odoo.com/r/H90R\n \nThis week was one big emotional rollercoaster. Air India Plane crash investigations, bots stole Tatkal tickets, Kapil ke café pe dhayein dhayein, aur Bihar ne bola: “Kaagaz dikhao, warna vote mat do!”\n Highlights from this chaotic week:\n✈️ Air India Crash Report is out — no bird hits, no pilot errors… toh crash kyun hua? Fuel cutoff ka twist?\n📜 Bihar’s Voter Verification drive sparks controversy — kaagaz dikhao, warna naam cut\n🎭 Kunal Kamra vs Eknath Shinde – joke pe motion, daadhi pe emotion\n🩸 Rahul Gandhi’s sanitary pad video goes viral — FIR, fake edit aur full drama\n🏏 Tatkal Ticket Scam 2.0 – Aadhaar verification useless, Tatkal bots return – Agents 1, IRCTC 0\n🚺 Radhika Yadav m**der – National tennis player, un-alived by her father over “log kya kahenge”\n🌧️ Himachal Floods & Kangana’s helplessness – sans funds, sans power, but full Twitter\n☕ Kapil Sharma’s Canada café - Literally under fire\n🕉️ Chhangur Baba Conversion Racket – ₹106 crore ka scam, caste-based rate card\n🚶‍♂️ Kawad Yatra tensions again - viral videos, vandalism fears, and the annual debate\n\n\n🗳️ Today’s SPOTLIGHT: SIR in Bihar = NRC 2.0? Citizenship proof ke naam pe voter list se cleansing? \n\n🕒 Timestamps:\n00:00 – Intro\n01:00 – Air India 171: What Really Happened?\n03:07 – Kunal Kamra’s Joke Trouble\n04:08 – Rahul Gandhi’s Pad Controversy\n05:49 – Kapil Sharma Café Firing\n06:34 – Himachal Floods & Kangana’s Response\n08:24 – Chhangur Baba Scam\n09:28 – Kawad Yatra Tensions\n11:10 – IRCTC Tatkal Ticket Scam\n15:47 – Radhika Yadav M**der Case\n16:35 – India’s Children Still Behind in School\n18:21 – SPOTLIGHT: Bihar Voter List Drama – CAA/NRC Lite?\n23:23 – Share Bazaar\n29:40 – Nonsense News\n33:14 – Sunday Sabha (MEMES)\n40:15 – Outro\n\n🧠 Weekly news, without the noise.\n😂 Politics, policies aur punches – sab milega iss Sunday Show pe.\n📣 Comment below:\n Is asking for kaagaz the same as NRC-lite?\n Kya IRCTC kabhi sudhrega?\n📍 Join our member fam:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources: https://tinyurl.com/4b43ynnz\n\nSee you, in the next Episode!"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT41M4S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "true",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "849452",
                            "likeCount": "65184",
                            "favoriteCount": "0",
                            "commentCount": "2427"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "JurdJ4lwo3cbs9Aery5-jKdw1A8",
                    "id": "TEwub0VYNVNVdGl5cmM",
                    "snippet": {
                        "publishedAt": "2025-07-11T13:47:19Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Can Ramayana heal us from Adipurush?  |  Men of Culture 187",
                        "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps :\n0:00 - Kaise Ho bhaiyo \n1:17 - Pj Babu Ki Story \n2:05 - Josh Bhara Intro \n3:35 - Discuss Ramayana Teaser \n29:47 - Exited For 2026 \n31:13 - Edited For Odyssey\n32:31 - Odyssey Leaks & Update \n35:44 - Next Year Ki Films \n37:51 -  Discuss Jurassic World RB \n57:33 - Vin Diesel And Fast & Furious\n1:02:38 - Badal On Metro Inn dino \n1:08:00 - George Clooney Ka Charm \n1:09:39 - Back On Metro Inn dino \n1:13:49 - Hera pheri 3 Is back \n1:18:29 - Discuss Iron Heart \n1:35:02 - Squide Game S3 \n1:49:35 - Battle Of Galwan First Look \n1:50:33 - ChainsawMan Movie Trailer \n1:52:31 - Jujutsu Kaisen S3 \n1:54:17 - Demon Slayer Infinity Castle \n1:56:16 - Pj Anime Event Experience \n1:57:02 - ChainsawMan And Manga\n1:59:21 - Project hail Mary \n1:59:39 - Diego Is No more \n1:59:59 - Coolie Amir Look \n2:01:03 - Revisit SnyderVerse Films \n2:07:18 - Superman Early Review \n2:08:16 - The Battle Of Galwan \n2:08:40 - Pj See Srk House \n2:12:00 - SuperChat Reading",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 8,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "oEX5SUtiyrc"
                        },
                        "videoOwnerChannelTitle": "Men of culture",
                        "videoOwnerChannelId": "UC9CROGyC9hgIB1mnBuMpeoQ"
                    },
                    "contentDetails": {
                        "videoId": "oEX5SUtiyrc",
                        "videoPublishedAt": "2025-07-05T19:04:55Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "PNZWNsOf7GM7c6uDYi9Noz8LOgw",
                        "id": "UC9CROGyC9hgIB1mnBuMpeoQ",
                        "snippet": {
                            "title": "Men of culture",
                            "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n",
                            "customUrl": "@menofculturepodcast",
                            "publishedAt": "2021-11-30T11:18:37.30403Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/yhWP66MIak2Jigz8WRrdzJj1UJA7df6WrkIdey5BbNk8O-D2G9pQTbIfK03erOlypgKsn5sH=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Men of culture",
                                "description": "dekho. Kuch aata ho ya na ho... gyan to fek fek ke marege. sahi galat wo aap dekh lena. With Great Tharak comes Great Culture.\n\nor business inquiry - business.menofcultureyt@gmail.com\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "wI6Kj5LfODjUrH0GOnZaknooGJc",
                        "id": "oEX5SUtiyrc",
                        "snippet": {
                            "publishedAt": "2025-07-05T19:04:55Z",
                            "channelId": "UC9CROGyC9hgIB1mnBuMpeoQ",
                            "title": "Can Ramayana heal us from Adipurush?  |  Men of Culture 187",
                            "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps :\n0:00 - Kaise Ho bhaiyo \n1:17 - Pj Babu Ki Story \n2:05 - Josh Bhara Intro \n3:35 - Discuss Ramayana Teaser \n29:47 - Exited For 2026 \n31:13 - Edited For Odyssey\n32:31 - Odyssey Leaks & Update \n35:44 - Next Year Ki Films \n37:51 -  Discuss Jurassic World RB \n57:33 - Vin Diesel And Fast & Furious\n1:02:38 - Badal On Metro Inn dino \n1:08:00 - George Clooney Ka Charm \n1:09:39 - Back On Metro Inn dino \n1:13:49 - Hera pheri 3 Is back \n1:18:29 - Discuss Iron Heart \n1:35:02 - Squide Game S3 \n1:49:35 - Battle Of Galwan First Look \n1:50:33 - ChainsawMan Movie Trailer \n1:52:31 - Jujutsu Kaisen S3 \n1:54:17 - Demon Slayer Infinity Castle \n1:56:16 - Pj Anime Event Experience \n1:57:02 - ChainsawMan And Manga\n1:59:21 - Project hail Mary \n1:59:39 - Diego Is No more \n1:59:59 - Coolie Amir Look \n2:01:03 - Revisit SnyderVerse Films \n2:07:18 - Superman Early Review \n2:08:16 - The Battle Of Galwan \n2:08:40 - Pj See Srk House \n2:12:00 - SuperChat Reading",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/oEX5SUtiyrc/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Men of culture",
                            "tags": [
                                "men of culture",
                                "men of culture podcast",
                                "podcast",
                                "bnftv",
                                "Badal Yadav",
                                "Comicverse",
                                "Comic Verse",
                                "PJ Explained",
                                "thePJ",
                                "FlickVerse"
                            ],
                            "categoryId": "22",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Can Ramayana heal us from Adipurush?  |  Men of Culture 187",
                                "description": "#podcast #menofculture #pjexplained #comicverse #bnftv\nSUBSCIBE TO MEN OF CULTURE ULTRA🔴\nhttps://www.youtube.com/channel/UCQwh4aoymaFf4gXv7MSxpMw\n\nOfficial Snapchat - https://www.snapchat.com/add/menofculture24?share_id=us5esu2zD8E&locale=en-GB\nOfficial Instagram - https://www.instagram.com/menofculture.69/\nOfficial discord - https://discord.gg/GAnTMVurm4\n---------------------------------------------------------------------------------------------------------------------------------------\nEditor and Curator :- https://www.instagram.com/inyoodreams_/\n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nBecome a member on MEN OF CULTURE For early access to Meme Episodes- JOIN👇\nhttps://www.youtube.com/channel/UC9CROGyC9hgIB1mnBuMpeoQ/join\n\nSubscribe to MEN OF CULTURE XTRA For Podcast Highlights👇 \nhttps://www.youtube.com/ @menofculturehighlights  \n------------------------------------------------------------------------------------------------------------------------------------------------------------------\nSubscribe To Our MAIN CHANNELS 👇 \nBadal  @BnfTV  \nMohit   @comicverseog  \nthePJ   @PJExplained\n\nTime Stamps :\n0:00 - Kaise Ho bhaiyo \n1:17 - Pj Babu Ki Story \n2:05 - Josh Bhara Intro \n3:35 - Discuss Ramayana Teaser \n29:47 - Exited For 2026 \n31:13 - Edited For Odyssey\n32:31 - Odyssey Leaks & Update \n35:44 - Next Year Ki Films \n37:51 -  Discuss Jurassic World RB \n57:33 - Vin Diesel And Fast & Furious\n1:02:38 - Badal On Metro Inn dino \n1:08:00 - George Clooney Ka Charm \n1:09:39 - Back On Metro Inn dino \n1:13:49 - Hera pheri 3 Is back \n1:18:29 - Discuss Iron Heart \n1:35:02 - Squide Game S3 \n1:49:35 - Battle Of Galwan First Look \n1:50:33 - ChainsawMan Movie Trailer \n1:52:31 - Jujutsu Kaisen S3 \n1:54:17 - Demon Slayer Infinity Castle \n1:56:16 - Pj Anime Event Experience \n1:57:02 - ChainsawMan And Manga\n1:59:21 - Project hail Mary \n1:59:39 - Diego Is No more \n1:59:59 - Coolie Amir Look \n2:01:03 - Revisit SnyderVerse Films \n2:07:18 - Superman Early Review \n2:08:16 - The Battle Of Galwan \n2:08:40 - Pj See Srk House \n2:12:00 - SuperChat Reading"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT4H19M16S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "375102",
                            "likeCount": "12012",
                            "favoriteCount": "0",
                            "commentCount": "602"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "WLAuvWmXdBWVAJbQahau3KfYu_0",
                    "id": "TEwuekQ4emI0dzViUG8",
                    "snippet": {
                        "publishedAt": "2025-07-10T12:12:49Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Ramayana teaser made 1000cr Profit? Prabhas vs Ranveer Clash confirmed",
                        "description": "suskribssssuuu\n\nJoin Bnftv Whatsapp channel - https://whatsapp.com/channel/0029VahMzDw545uveedFpV3T\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 9,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "zD8zb4w5bPo"
                        },
                        "videoOwnerChannelTitle": "BnfTV",
                        "videoOwnerChannelId": "UCUinnqDgIsNFleLdkZKbP-w"
                    },
                    "contentDetails": {
                        "videoId": "zD8zb4w5bPo",
                        "videoPublishedAt": "2025-07-09T14:15:23Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "8uO1Q4iH0wqu3lSdEdqk6dwjjbE",
                        "id": "UCUinnqDgIsNFleLdkZKbP-w",
                        "snippet": {
                            "title": "BnfTV",
                            "description": "No baat, only bakwaas 🙂 aisa kisi ne bola to paap lagega\n\nFor business enquiry: business.bnftv@gmail.com",
                            "customUrl": "@bnftv",
                            "publishedAt": "2016-10-28T04:18:16Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/AgJU9IXiiu0NSlOiXp1onAiFAI6XeZHWiRI232hgW_5WUnsNvW7dteK-H7Pq2brWM_zJEC8KJKE=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/AgJU9IXiiu0NSlOiXp1onAiFAI6XeZHWiRI232hgW_5WUnsNvW7dteK-H7Pq2brWM_zJEC8KJKE=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/AgJU9IXiiu0NSlOiXp1onAiFAI6XeZHWiRI232hgW_5WUnsNvW7dteK-H7Pq2brWM_zJEC8KJKE=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "BnfTV",
                                "description": "No baat, only bakwaas 🙂 aisa kisi ne bola to paap lagega\n\nFor business enquiry: business.bnftv@gmail.com"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "2r0ztF8hU2zV3D23cpX7cuI2tdY",
                        "id": "zD8zb4w5bPo",
                        "snippet": {
                            "publishedAt": "2025-07-09T14:15:23Z",
                            "channelId": "UCUinnqDgIsNFleLdkZKbP-w",
                            "title": "Ramayana teaser made 1000cr Profit? Prabhas vs Ranveer Clash confirmed",
                            "description": "suskribssssuuu\n\nJoin Bnftv Whatsapp channel - https://whatsapp.com/channel/0029VahMzDw545uveedFpV3T\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/zD8zb4w5bPo/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "BnfTV",
                            "categoryId": "24",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en-IN",
                            "localized": {
                                "title": "Ramayana teaser made 1000cr Profit? Prabhas vs Ranveer Clash confirmed",
                                "description": "suskribssssuuu\n\nJoin Bnftv Whatsapp channel - https://whatsapp.com/channel/0029VahMzDw545uveedFpV3T\n\nInstagram\nhttps://www.instagram.com/badal_bnftv\n\nFacebook\nhttps://www.facebook.com/bnftv/?ref=br_rs\n\nTwitter\nhttps://twitter.com/badal_bnftv"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT9M28S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "542716",
                            "likeCount": "30240",
                            "favoriteCount": "0",
                            "commentCount": "1005"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "52k_OV03KPeiUIxFqbxPsada01E",
                    "id": "TEwud29zQzNVbjBBQUE",
                    "snippet": {
                        "publishedAt": "2025-07-06T13:49:14Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Kaisi hogi Second Innings?🧐 | Sunday Show",
                        "description": "Is baar Dilli ne gaadi nahi, law hi reverse gear mein daal diya!\nFrom scrapping the scrappage policy to Pakistani actors popping up again online — this week was full of political U-turns, legal burns, and emotional churns.\n💥 Highlights this week:\n 🚗 Delhi’s scrap policy scrapped after outrage — gaadi tera bhai shayad chala payega!\n 🇵🇰 Banned Pakistani celeb accounts reappeared (aur fir se gayab) — Inka ban button bhi trial version lagta hai\n ⚖️ Mohammad Shami ordered to pay ₹4 lakh/month alimony — Hasin Jahan demands more\n 🏏 Rinku Singh gets govt job in UP Education Dept. — UPSC nahi khela, IPL khel liya\n 🔥 Shubman Gill breaks 13 records with a legendary 269 in Tests\n 👕 MS Dhoni trademarks ‘Captain Cool’ – chalo branding toh sahi hai\n 💃 Kerala Zumba ban protest — log soch rahe kids ne salsa shuru kar diya kya?\n 🗳️ Bihar allows voting by mobile phone — app ka naam SECBHR tho chunaav jitega nahi\n 💸 India gets record $135B in remittances + GST at ₹22 lakh crore\n 📈 Tata tops India’s most valuable brands list – Amul, Infosys, LIC, Reliance close behind\n 💔 Bombay HC says “I love you” ≠ sexual intent – kya love legal ho gaya?\n 💉 COV*D vaccines don’t cause premature d**ths – confirmed by ICMR\n 😔 WHO says loneliness is killing 100 people/hour globally – and you thought Monday was bad\nToday’s SPOTLIGHT - 🥗 India is eating more, but still not right — cereals are still king, protein abhi bhi praja hai.\n\n🧠 Subscribe for your weekly dose of smart satire & serious LOLs.\n\n📢 Comment below:\nWhich U-turn, outrage or update shocked you the most this week?  \n\nChapters:\n00:00 – Intro\n01:10 – Delhi fuel ban U-turn\n02:15 – Pakistani actor accounts drama\n04:01 – Shami vs Hasin Jahan\n06:19 – Rinku Singh gets govt job\n07:26 – Shubman Gill’s 269-run record\n08:14 – Captain Cool™ is now official\n09:12 - Sunday Samachar\n21:39 - Spotlight \n25:29 - Share Bazaar\n32:18 - Nonsense News\n37:00 - Positive News\n38:38 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/9yAuU\n\nSee you, in the next Episode!",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/wosC3Un0AAA/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/wosC3Un0AAA/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/wosC3Un0AAA/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/wosC3Un0AAA/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/wosC3Un0AAA/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 10,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "wosC3Un0AAA"
                        },
                        "videoOwnerChannelTitle": "Sarthak Goswami",
                        "videoOwnerChannelId": "UC5fcjujOsqD-126Chn_BAuA"
                    },
                    "contentDetails": {
                        "videoId": "wosC3Un0AAA",
                        "videoPublishedAt": "2025-07-06T04:30:52Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "WCAYIlc3ykITXqF1RWCPcxZpYUw",
                        "id": "UC5fcjujOsqD-126Chn_BAuA",
                        "snippet": {
                            "title": "Sarthak Goswami",
                            "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n",
                            "customUrl": "@sundaysarthak",
                            "publishedAt": "2018-01-02T14:18:23Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/EHd9fhkc1poDEkNmyjkznN6zINSSRqcjaGiknzjP9A3w5VbIa6y_QOkKrnsZZyqNuJ5nJlGWWg=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Sarthak Goswami",
                                "description": "Sarthak Goswami is a multi-disciplinary entertainer with over 10 Million+  cumulative digital reach across different platforms.\n\nSarthak brings esoteric news and concepts like politics, social issues,  science & technology, finance to the fore and translates them into simple digestible content for his audience all while following his simple mantra- ‘Marrying News with Entertainment.’\nOur viewers are not limited to the Indian subcontinent, but  spread across the globe including countries like the USA, Bangladesh, Pakistan and Nepal etc. \nOur channel has an extensive pool of audience, dominated by the age group 16-30.\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "uNaWHhqe_uURg0E_pZz8HUga6eQ",
                        "id": "wosC3Un0AAA",
                        "snippet": {
                            "publishedAt": "2025-07-06T04:30:52Z",
                            "channelId": "UC5fcjujOsqD-126Chn_BAuA",
                            "title": "Kaisi hogi Second Innings?🧐 | Sunday Show",
                            "description": "Is baar Dilli ne gaadi nahi, law hi reverse gear mein daal diya!\nFrom scrapping the scrappage policy to Pakistani actors popping up again online — this week was full of political U-turns, legal burns, and emotional churns.\n💥 Highlights this week:\n 🚗 Delhi’s scrap policy scrapped after outrage — gaadi tera bhai shayad chala payega!\n 🇵🇰 Banned Pakistani celeb accounts reappeared (aur fir se gayab) — Inka ban button bhi trial version lagta hai\n ⚖️ Mohammad Shami ordered to pay ₹4 lakh/month alimony — Hasin Jahan demands more\n 🏏 Rinku Singh gets govt job in UP Education Dept. — UPSC nahi khela, IPL khel liya\n 🔥 Shubman Gill breaks 13 records with a legendary 269 in Tests\n 👕 MS Dhoni trademarks ‘Captain Cool’ – chalo branding toh sahi hai\n 💃 Kerala Zumba ban protest — log soch rahe kids ne salsa shuru kar diya kya?\n 🗳️ Bihar allows voting by mobile phone — app ka naam SECBHR tho chunaav jitega nahi\n 💸 India gets record $135B in remittances + GST at ₹22 lakh crore\n 📈 Tata tops India’s most valuable brands list – Amul, Infosys, LIC, Reliance close behind\n 💔 Bombay HC says “I love you” ≠ sexual intent – kya love legal ho gaya?\n 💉 COV*D vaccines don’t cause premature d**ths – confirmed by ICMR\n 😔 WHO says loneliness is killing 100 people/hour globally – and you thought Monday was bad\nToday’s SPOTLIGHT - 🥗 India is eating more, but still not right — cereals are still king, protein abhi bhi praja hai.\n\n🧠 Subscribe for your weekly dose of smart satire & serious LOLs.\n\n📢 Comment below:\nWhich U-turn, outrage or update shocked you the most this week?  \n\nChapters:\n00:00 – Intro\n01:10 – Delhi fuel ban U-turn\n02:15 – Pakistani actor accounts drama\n04:01 – Shami vs Hasin Jahan\n06:19 – Rinku Singh gets govt job\n07:26 – Shubman Gill’s 269-run record\n08:14 – Captain Cool™ is now official\n09:12 - Sunday Samachar\n21:39 - Spotlight \n25:29 - Share Bazaar\n32:18 - Nonsense News\n37:00 - Positive News\n38:38 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/9yAuU\n\nSee you, in the next Episode!",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/wosC3Un0AAA/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/wosC3Un0AAA/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/wosC3Un0AAA/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/wosC3Un0AAA/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/wosC3Un0AAA/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Sarthak Goswami",
                            "tags": [
                                "sarthak goswami",
                                "india news",
                                "sunday show",
                                "controversy",
                                "breaking news",
                                "top news",
                                "latest",
                                "satire",
                                "viral",
                                "The Sunday Show",
                                "Delhi Fuel Ban",
                                "delhi fuel ban old vehicles",
                                "Mohammad Shami",
                                "Hasin Jahan",
                                "Shami divorce",
                                "Shubman Gill",
                                "Captain Cool",
                                "Dhoni",
                                "Kerala Zumba",
                                "RinkuSingh",
                                "Pakistani Celebs",
                                "GST India",
                                "Indian News Satire",
                                "Bihar Elections",
                                "Bihar evoting",
                                "India top brand",
                                "top brand in india",
                                "tata brand",
                                "Test Series",
                                "India vs england test"
                            ],
                            "categoryId": "25",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Kaisi hogi Second Innings?🧐 | Sunday Show",
                                "description": "Is baar Dilli ne gaadi nahi, law hi reverse gear mein daal diya!\nFrom scrapping the scrappage policy to Pakistani actors popping up again online — this week was full of political U-turns, legal burns, and emotional churns.\n💥 Highlights this week:\n 🚗 Delhi’s scrap policy scrapped after outrage — gaadi tera bhai shayad chala payega!\n 🇵🇰 Banned Pakistani celeb accounts reappeared (aur fir se gayab) — Inka ban button bhi trial version lagta hai\n ⚖️ Mohammad Shami ordered to pay ₹4 lakh/month alimony — Hasin Jahan demands more\n 🏏 Rinku Singh gets govt job in UP Education Dept. — UPSC nahi khela, IPL khel liya\n 🔥 Shubman Gill breaks 13 records with a legendary 269 in Tests\n 👕 MS Dhoni trademarks ‘Captain Cool’ – chalo branding toh sahi hai\n 💃 Kerala Zumba ban protest — log soch rahe kids ne salsa shuru kar diya kya?\n 🗳️ Bihar allows voting by mobile phone — app ka naam SECBHR tho chunaav jitega nahi\n 💸 India gets record $135B in remittances + GST at ₹22 lakh crore\n 📈 Tata tops India’s most valuable brands list – Amul, Infosys, LIC, Reliance close behind\n 💔 Bombay HC says “I love you” ≠ sexual intent – kya love legal ho gaya?\n 💉 COV*D vaccines don’t cause premature d**ths – confirmed by ICMR\n 😔 WHO says loneliness is killing 100 people/hour globally – and you thought Monday was bad\nToday’s SPOTLIGHT - 🥗 India is eating more, but still not right — cereals are still king, protein abhi bhi praja hai.\n\n🧠 Subscribe for your weekly dose of smart satire & serious LOLs.\n\n📢 Comment below:\nWhich U-turn, outrage or update shocked you the most this week?  \n\nChapters:\n00:00 – Intro\n01:10 – Delhi fuel ban U-turn\n02:15 – Pakistani actor accounts drama\n04:01 – Shami vs Hasin Jahan\n06:19 – Rinku Singh gets govt job\n07:26 – Shubman Gill’s 269-run record\n08:14 – Captain Cool™ is now official\n09:12 - Sunday Samachar\n21:39 - Spotlight \n25:29 - Share Bazaar\n32:18 - Nonsense News\n37:00 - Positive News\n38:38 - Meme Review\n\nLiked this video? Two ways you can support us! 🔥\n\nCOMMENT/SHARE the Video📲- Make these stories reach maximum people by engaging with video. Let's do it!\n\n\nBecome a member of Sarthak Sabha, get News  delivered directly to your Whatsapp! 📲\n‎Follow the Sarthak Sabha channel on WhatsApp: https://whatsapp.com/channel/0029Vae35iDKWEKhOQR4Si0j\n\nFollow us on:\n\nTwitter: https://twitter.com/sundaysarthak\nInstagram: https://www.instagram.com/sundaysarthak\nFacebook: https://www.facebook.com/sundaysarthak\n\n*************\n\nBecome a Channel Member:\nhttps://www.youtube.com/channel/UC5fcjujOsqD-126Chn_BAuA/join\n\nEdits: Niranjan Mehta, Sonu Dewansh, Amit Kumar Chakraborty, Arpan Biswas, Ritik Parida\n\nProducer: Sagar Gupta\n\nWriters: Sarthak Goswami, Vishav Bansal, Rishabh Srivastava\n\nResources:  https://shorturl.at/9yAuU\n\nSee you, in the next Episode!"
                            },
                            "defaultAudioLanguage": "hi"
                        },
                        "contentDetails": {
                            "duration": "PT46M6S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "true",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "858925",
                            "likeCount": "64777",
                            "favoriteCount": "0",
                            "commentCount": "2586"
                        }
                    }
                },
                {
                    "kind": "youtube#playlistItem",
                    "etag": "B8-FEWNgi6l6j1rRPIaERWSZq9E",
                    "id": "TEwuZ3pVdS1GSjdzLVk",
                    "snippet": {
                        "publishedAt": "2025-07-03T10:13:23Z",
                        "channelId": "UCtfZyhWH9CKkZZAKPYRICeQ",
                        "title": "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
                        "description": "An outcome through a collaboration of some of the world’s best to ensure that Ramayana is presented with the greatest amount of Reverence and Respect. \n\nWelcome to the Beginning. \n\nLet’s celebrate the IMMORTAL story of Rama v/s Ravana. \n\nOur Truth. Our History.\n\nDirected by Nitesh Tiwari, Produced by Namit Malhotra’s Prime Focus Studios and 8-time Oscar winning VFX studio DNEG in association with Yash’s Monster Mind Creations; Ramayana is being filmed for IMAX and will release worldwide: Part 1 on Diwali 2026 and Part 2 on Diwali 2027.\n\nNamit Malhotra’s Ramayana\n\nStarring:\nRanbir Kapoor as Rama\nYash as Ravana\nSai Pallavi as Sita\nRavie Dubey as Lakshman\nSunny Deol as Hanuman\n\nCo-Produced by Yash\nWritten by Shridhar Raghavan\nDirected by Nitesh Tiwari\n\nMusic by Hans Zimmer & AR Rahman\nLyrics by Kumar Vishwas\n\nVFX by DNEG (8-time Academy Award winners)\n\nFilmed for IMAX\n\nPresented by Prime Focus Studios in association with Monster Mind Creations\n\nAudio on Sony Music Entertainment India Pvt. Ltd (C) 2025\n👉 Subscribe To Sony Music India YouTube - http://bit.ly/SonyMusic_YouTube\n👉 Like us : Facebook - https://www.facebook.com/SonyMusicIndia \n👉 Follow us : Instagram - https://www.instagram.com/sonymusicindia\n👉 Follow us : Twitter - https://twitter.com/sonymusicindia\n\n#HansZimmer #ARRahman #RanbirKapoor #Yash #NamitMalhotra #SaiPallavi #WorldOfRamayana",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Tejas Prajapati",
                        "playlistId": "LL",
                        "position": 11,
                        "resourceId": {
                            "kind": "youtube#video",
                            "videoId": "gzUu-FJ7s-Y"
                        },
                        "videoOwnerChannelTitle": "Sony Music India",
                        "videoOwnerChannelId": "UC56gTxNs4f9xZ7Pa2i5xNzg"
                    },
                    "contentDetails": {
                        "videoId": "gzUu-FJ7s-Y",
                        "videoPublishedAt": "2025-07-03T09:30:34Z"
                    },
                    "chDetails": {
                        "kind": "youtube#channel",
                        "etag": "UC5hcU_J0AFe1LBB1WI754SnXFI",
                        "id": "UC56gTxNs4f9xZ7Pa2i5xNzg",
                        "snippet": {
                            "title": "Sony Music India",
                            "description": "Welcome to Sony Music India's official YouTube channel, the ultimate destination for music enthusiasts and fans of the Indian music scene. Immerse yourself in a world of melodies, rhythms, and harmonies as we proudly present \"Sony Music India - Home To India's Biggest Music Hits.\"\n\nStep into a realm where musical brilliance knows no bounds, and every beat resonates with the heartbeat of a nation. With a legacy that spans genres and generations, our channel is a testament to the power of music to unite, inspire, and captivate. From timeless classics to contemporary chart-toppers, we curate a diverse range of sounds that cater to every palate.\n\nhit that subscribe button and become a part of our musical family. Tune in daily to satiate your cravings for remarkable tunes, captivating visuals, and the sheer joy that great music brings. \n\n👉 Subscribe: - https://www.youtube.com/@SonyMusicIndia/videos\n",
                            "customUrl": "@sonymusicindia",
                            "publishedAt": "2009-09-02T23:16:22Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/42o3XIW1j5zmzsFeZs3ND4QwaXXrnpK9vqftcEuEdbgNhPbltXRktcSmyJ12-gSRqKch93Ir=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "localized": {
                                "title": "Sony Music India",
                                "description": "Welcome to Sony Music India's official YouTube channel, the ultimate destination for music enthusiasts and fans of the Indian music scene. Immerse yourself in a world of melodies, rhythms, and harmonies as we proudly present \"Sony Music India - Home To India's Biggest Music Hits.\"\n\nStep into a realm where musical brilliance knows no bounds, and every beat resonates with the heartbeat of a nation. With a legacy that spans genres and generations, our channel is a testament to the power of music to unite, inspire, and captivate. From timeless classics to contemporary chart-toppers, we curate a diverse range of sounds that cater to every palate.\n\nhit that subscribe button and become a part of our musical family. Tune in daily to satiate your cravings for remarkable tunes, captivating visuals, and the sheer joy that great music brings. \n\n👉 Subscribe: - https://www.youtube.com/@SonyMusicIndia/videos\n"
                            },
                            "country": "IN"
                        }
                    },
                    "vDetails": {
                        "kind": "youtube#video",
                        "etag": "9m8xMTCnkLfiquY-3S1sqSBQ5Ro",
                        "id": "gzUu-FJ7s-Y",
                        "snippet": {
                            "publishedAt": "2025-07-03T09:30:34Z",
                            "channelId": "UC56gTxNs4f9xZ7Pa2i5xNzg",
                            "title": "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
                            "description": "An outcome through a collaboration of some of the world’s best to ensure that Ramayana is presented with the greatest amount of Reverence and Respect. \n\nWelcome to the Beginning. \n\nLet’s celebrate the IMMORTAL story of Rama v/s Ravana. \n\nOur Truth. Our History.\n\nDirected by Nitesh Tiwari, Produced by Namit Malhotra’s Prime Focus Studios and 8-time Oscar winning VFX studio DNEG in association with Yash’s Monster Mind Creations; Ramayana is being filmed for IMAX and will release worldwide: Part 1 on Diwali 2026 and Part 2 on Diwali 2027.\n\nNamit Malhotra’s Ramayana\n\nStarring:\nRanbir Kapoor as Rama\nYash as Ravana\nSai Pallavi as Sita\nRavie Dubey as Lakshman\nSunny Deol as Hanuman\n\nCo-Produced by Yash\nWritten by Shridhar Raghavan\nDirected by Nitesh Tiwari\n\nMusic by Hans Zimmer & AR Rahman\nLyrics by Kumar Vishwas\n\nVFX by DNEG (8-time Academy Award winners)\n\nFilmed for IMAX\n\nPresented by Prime Focus Studios in association with Monster Mind Creations\n\nAudio on Sony Music Entertainment India Pvt. Ltd (C) 2025\n👉 Subscribe To Sony Music India YouTube - http://bit.ly/SonyMusic_YouTube\n👉 Like us : Facebook - https://www.facebook.com/SonyMusicIndia \n👉 Follow us : Instagram - https://www.instagram.com/sonymusicindia\n👉 Follow us : Twitter - https://twitter.com/sonymusicindia\n\n#HansZimmer #ARRahman #RanbirKapoor #Yash #NamitMalhotra #SaiPallavi #WorldOfRamayana",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/gzUu-FJ7s-Y/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "Sony Music India",
                            "tags": [
                                "sony music india",
                                "ramayan",
                                "ramayana",
                                "ramayana teaser",
                                "ramayana trailer",
                                "ramayan introduction",
                                "ramayana song",
                                "ramayan trailer",
                                "ranbir kapoor",
                                "yash",
                                "hans zimmer",
                                "ar rahman",
                                "hans zimmer ar rahman",
                                "ar rahman hans zimmer",
                                "hans zimmer soundtrack",
                                "hans zimmer songs",
                                "ravan",
                                "ram",
                                "rama vs ravan",
                                "ranbir kapoor songs",
                                "sai pallavi",
                                "sai pallavi movies",
                                "ramayan song",
                                "namit malhotras ramayana",
                                "ramayana movie",
                                "namit malhotra",
                                "ranbir kapoor ramayan",
                                "World Of Ramayana",
                                "nitesh tiwari ramayan"
                            ],
                            "categoryId": "10",
                            "liveBroadcastContent": "none",
                            "localized": {
                                "title": "Namit Malhotra's Ramayana: The Introduction | Nitesh Tiwari | Ranbir, Yash, Hans Zimmer & AR Rahman",
                                "description": "An outcome through a collaboration of some of the world’s best to ensure that Ramayana is presented with the greatest amount of Reverence and Respect. \n\nWelcome to the Beginning. \n\nLet’s celebrate the IMMORTAL story of Rama v/s Ravana. \n\nOur Truth. Our History.\n\nDirected by Nitesh Tiwari, Produced by Namit Malhotra’s Prime Focus Studios and 8-time Oscar winning VFX studio DNEG in association with Yash’s Monster Mind Creations; Ramayana is being filmed for IMAX and will release worldwide: Part 1 on Diwali 2026 and Part 2 on Diwali 2027.\n\nNamit Malhotra’s Ramayana\n\nStarring:\nRanbir Kapoor as Rama\nYash as Ravana\nSai Pallavi as Sita\nRavie Dubey as Lakshman\nSunny Deol as Hanuman\n\nCo-Produced by Yash\nWritten by Shridhar Raghavan\nDirected by Nitesh Tiwari\n\nMusic by Hans Zimmer & AR Rahman\nLyrics by Kumar Vishwas\n\nVFX by DNEG (8-time Academy Award winners)\n\nFilmed for IMAX\n\nPresented by Prime Focus Studios in association with Monster Mind Creations\n\nAudio on Sony Music Entertainment India Pvt. Ltd (C) 2025\n👉 Subscribe To Sony Music India YouTube - http://bit.ly/SonyMusic_YouTube\n👉 Like us : Facebook - https://www.facebook.com/SonyMusicIndia \n👉 Follow us : Instagram - https://www.instagram.com/sonymusicindia\n👉 Follow us : Twitter - https://twitter.com/sonymusicindia\n\n#HansZimmer #ARRahman #RanbirKapoor #Yash #NamitMalhotra #SaiPallavi #WorldOfRamayana"
                            },
                            "defaultAudioLanguage": "en"
                        },
                        "contentDetails": {
                            "duration": "PT3M4S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "false",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "18512748",
                            "likeCount": "589160",
                            "favoriteCount": "0",
                            "commentCount": "29100"
                        }
                    }
                }
            ]

            return res
                .status(200)
                .json(resData)

        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Something went wrong while fetching videos")
        }
    }

}

const getWatchLaterVideos = async (req, res) => {

    if (req.user) {

        try {
            // oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token, access_token: req.cookies?.access_token })

            // const videos = await youtube.playlistItems.list({
            //     part: "snippet, contentDetails",
            //     playlistId: "WL",
            //     maxResults: 12,
            //     auth: oauth2Client,
            // })

            // const data = videos.data?.items

            // const chIds = []
            // const vIds = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     chIds.push(chId)
            //     vIds.push(vId)
            // })

            // const chRes = await getChProfile(chIds)
            // const vRes = await getVideoById(vIds)

            // const resData = []

            // data.map((item) => {
            //     const chId = item.snippet?.videoOwnerChannelId
            //     const vId = item.snippet?.resourceId?.videoId
            //     const ch = chRes.data.items.filter((item) => item.id === chId)
            //     const v = vRes.data.items.filter((item) => item.id === vId)
            //     resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
            // })

            const resData = ""

            return res
                .status(200)
                .json(resData)

        } catch (error) {
            console.log(error.message);
            return res.status(500).send("Something went wrong while fetching videos")
        }
    }

}

export {
    getAllPlaylists,
    getAllPlaylistVideos,
    getLikedVideos,
    getWatchLaterVideos
}