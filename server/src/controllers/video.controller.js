import { google } from 'googleapis'
import { oauth2Client } from '../utils/gApi.js'
import { asyncHandler, ApiError, ApiResponse } from '../utils/index.js'

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

const getSearchList = async (id, aAuth) => {

    const sVideos = await youtube.search.list({
        part: "snippet",
        channelId: id,
        order: "date",
        maxResults: 3,
        type: 'video',
        auth: aAuth
    })

    const videos = sVideos.data.items.map((video) => getVideoById(video.id.videoId))

    return videos
}

const getVideos = async (req, res) => {

    const isLoggedIn = req.user !== undefined

    try {
        // if (req.cookies?.refresh_token) oauth2Client.setCredentials({ refresh_token: req.cookies?.refresh_token })

        // console.log("youtube ...");

        // const subChannels = await youtube.subscriptions.list({
        //     part: "snippet",
        //     mine: true,
        //     maxResults: 21,
        //     auth: oauth2Client
        // })

        // // console.log(subChannels);

        // if (!subChannels) throw new ApiError(500, `Something went wrong while fetching subChannels Error:  ${error.message}`)

        // const channelIds = subChannels.data.items.map((channel) => channel.snippet.resourceId.channelId)

        // const videos = channelIds.map((channelId) => getSearchList(channelId, oauth2Client))

        // console.log(videos.data?.items);

        // const data = videos?.data?.items

        // const chIds = []

        // data.map((item) => {
        //     const chId = item.snippet?.videoOwnerChannelId
        //     chIds.push(chId)
        // })

        // const chRes = await getChProfile(chIds)

        // const resData = []

        // data.map((item) => {
        //     const chId = item.snippet?.videoOwnerChannelId
        //     const ch = chRes.data.items.filter((item) => item.id === chId)
        //     resData.push({ ...item, chDetails: ch[0], vDetails: v[0] })
        // })

        const resData = [
            {
                "kind": "youtube#video",
                "etag": "HLK0ysuXzKSvrYsbCSG0MeMYX2k",
                "id": "pc8gX4GZqnI",
                "snippet": {
                    "publishedAt": "2025-07-19T08:30:24Z",
                    "channelId": "UCfLuT3JwLx8rvHjHfTymekw",
                    "title": "We Tried 5-Minute Crafts Hacks that Make No Sense",
                    "description": "We completed 11 years of this channel, so bringing back the legendary life hacks in this video.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://www.youtube.com/liveinsaan\n\nDiscord ► https://discord.gg/liveinsaan\n\nTwitter ► https://twitter.com/triggeredinsaan\n\nAbout Me ► My name is Nischay Malhan. I'm from Delhi and I'm an engineering student. Now I am pursuing youtube Full Time. I make family friendly clean comedy videos on this channel for everyone to enjoy with their family. You don't need earphones to watch my videos😂\n\nThanks For Reading😘",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pc8gX4GZqnI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pc8gX4GZqnI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pc8gX4GZqnI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/pc8gX4GZqnI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/pc8gX4GZqnI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Triggered Insaan",
                    "tags": [
                        "triggered insaan",
                        "live insaan",
                        "5 minute crafts roast",
                        "5 minute crafts",
                        "life hacks",
                        "funny hacks",
                        "diy hacks",
                        "food hacks"
                    ],
                    "categoryId": "22",
                    "liveBroadcastContent": "none",
                    "defaultLanguage": "en-IN",
                    "localized": {
                        "title": "We Tried 5-Minute Crafts Hacks that Make No Sense",
                        "description": "We completed 11 years of this channel, so bringing back the legendary life hacks in this video.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://www.youtube.com/liveinsaan\n\nDiscord ► https://discord.gg/liveinsaan\n\nTwitter ► https://twitter.com/triggeredinsaan\n\nAbout Me ► My name is Nischay Malhan. I'm from Delhi and I'm an engineering student. Now I am pursuing youtube Full Time. I make family friendly clean comedy videos on this channel for everyone to enjoy with their family. You don't need earphones to watch my videos😂\n\nThanks For Reading😘"
                    },
                    "defaultAudioLanguage": "hi"
                },
                "contentDetails": {
                    "duration": "PT19M18S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "3921830",
                    "likeCount": "238711",
                    "favoriteCount": "0",
                    "commentCount": "8474"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "wozS12FJttze9HJEq7cxQrHYgJQ",
                    "id": "UCfLuT3JwLx8rvHjHfTymekw",
                    "snippet": {
                        "title": "Triggered Insaan",
                        "description": "A meme who laughs at memes :)\n\nBusiness inquiries: nischay@collabx.in\n\nThanks For Reading :)",
                        "customUrl": "@triggeredinsaan",
                        "publishedAt": "2014-07-17T13:31:54Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/ytc/AIdro_kcOOmIW7xVRIyEyDfZNLz2N2QF4h2shl3NL04oS365WvA=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/ytc/AIdro_kcOOmIW7xVRIyEyDfZNLz2N2QF4h2shl3NL04oS365WvA=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/ytc/AIdro_kcOOmIW7xVRIyEyDfZNLz2N2QF4h2shl3NL04oS365WvA=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Triggered Insaan",
                            "description": "A meme who laughs at memes :)\n\nBusiness inquiries: nischay@collabx.in\n\nThanks For Reading :)"
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "5COIuWu1myW5syqd_5_ijOIL6jQ",
                "id": "_X6G4RqTnvQ",
                "snippet": {
                    "publishedAt": "2025-07-19T11:52:16Z",
                    "channelId": "UCmL1WlDI8UkXDXCXcBQN9CA",
                    "title": "Laadla (1994) Full Hindi Movie (4K) Sridevi & Anil Kapoor & Raveena | Farida Jalal | Bollywood Movie",
                    "description": "Laadla is a 1994 Indian Bollywood action drama film, directed by Raj Kanwar and produced by Nitin Manmohan. The film stars Anil Kapoor, Sridevi, and Raveena Tandon in pivotal roles. And Farida Jalal, Aruna Irani, Anupam Kher, Prem Chopra, Paresh Rawal, Mohnish Behl, Shakti Kapoor, Alok Nath, Arun Bakshi others in supportive role. It is known for its strong dialogues, emotional story and powerful performances.\n\nThe story revolves around Raju (Anil Kapoor), a hardworking and principled man who is hired by a ruthless and arrogant factory owner, Sheetal (Sridevi). Their personalities clash due to their different ideologies. Raju believes in honesty and humanity, while Sheetal believes in power and control. Their constant conflict leads to unexpected developments, including a dramatic marriage twist that changes their lives. \n\nलाडला (1994) एक भारतीय बॉलीवुड एक्शन-ड्रामा फिल्म है, जिसका निर्देशन राज कंवर ने किया है और निर्माण नितिन मनमोहन ने किया है। इस फिल्म में अनिल कपूर, श्रीदेवी और रवीना टंडन लीड रोल में हैं, तो वहीं फरीदा जलाल, अरुणा ईरानी, अनुपम खेर, प्रेम चोपड़ा, परेश रावल,मोहनीश बहल, शक्ति कपूर, आलोक नाथ और अरुण बख्शी सपोर्टिंव रोल में नजर आते हैं। \n\nकहानी एक ईमानदार और मेहनती आदमी राजू (अनिल कपूर) की है, जिसे एक घमंडी और सख्त फैक्ट्री मालकिन शीतल (श्रीदेवी) द्वारा काम पर रखा जाता है। राजू और शीतल की सोच में ज़मीन-आसमान का फर्क है। एक इंसानियत में विश्वास करता है, तो दूसरी ताकत और नियंत्रण में। उनके बीच का टकराव एक ऐसे मोड़ पर पहुंचता है, जहां एक अप्रत्याशित शादी उनके जीवन को बदल कर रख देती है।\n\nMovie:– Laadla (1994)\nDirector :-  Raj Kanwar\nProdure :- Nitin Manmohan\nCast:- Anil Kapoor, Sridevi, Raveena Tandon, Farida Jalal, Aruna Irani, Anupam Kher, Prem Chopra, Paresh Rawal, Mohnish Behl, Shakti Kapoor, Alok Nath, Arun Bakshi \nMusic:- Anand–Milind\nGenre:- Action Drama\nLanguage: Hindi\n\n#anilkapoor #sridevi #raveenatandon #besthindimovies #anupamkher #faridajalal #besthindimovies #bollywood #bollywoodmovies",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_X6G4RqTnvQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_X6G4RqTnvQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_X6G4RqTnvQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/_X6G4RqTnvQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/_X6G4RqTnvQ/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Ultra Bollywood",
                    "tags": [
                        "Ultra Bollywood",
                        "laadla movie",
                        "laadla movie full",
                        "laadla movie full movie anil kapoor",
                        "ladla movie",
                        "ladla movie anil kapoor",
                        "anil kapoor sridevi movie",
                        "anil kapoor sridevi movie laadla",
                        "anil kapoor sridevi raveena tandon movie",
                        "ladlaa",
                        "ladla hindi picture",
                        "ladla hindi movie anil kapoor",
                        "best bollywood movies",
                        "latest bollywood movies",
                        "latest bollywood new film",
                        "anil kapoor movies",
                        "bollywood movies",
                        "लाडला मूवी",
                        "teri ungli pakad ke chala song",
                        "divya bharti ladla full movie"
                    ],
                    "categoryId": "24",
                    "liveBroadcastContent": "none",
                    "defaultLanguage": "en",
                    "localized": {
                        "title": "Laadla (1994) Full Hindi Movie (4K) Sridevi & Anil Kapoor & Raveena | Farida Jalal | Bollywood Movie",
                        "description": "Laadla is a 1994 Indian Bollywood action drama film, directed by Raj Kanwar and produced by Nitin Manmohan. The film stars Anil Kapoor, Sridevi, and Raveena Tandon in pivotal roles. And Farida Jalal, Aruna Irani, Anupam Kher, Prem Chopra, Paresh Rawal, Mohnish Behl, Shakti Kapoor, Alok Nath, Arun Bakshi others in supportive role. It is known for its strong dialogues, emotional story and powerful performances.\n\nThe story revolves around Raju (Anil Kapoor), a hardworking and principled man who is hired by a ruthless and arrogant factory owner, Sheetal (Sridevi). Their personalities clash due to their different ideologies. Raju believes in honesty and humanity, while Sheetal believes in power and control. Their constant conflict leads to unexpected developments, including a dramatic marriage twist that changes their lives. \n\nलाडला (1994) एक भारतीय बॉलीवुड एक्शन-ड्रामा फिल्म है, जिसका निर्देशन राज कंवर ने किया है और निर्माण नितिन मनमोहन ने किया है। इस फिल्म में अनिल कपूर, श्रीदेवी और रवीना टंडन लीड रोल में हैं, तो वहीं फरीदा जलाल, अरुणा ईरानी, अनुपम खेर, प्रेम चोपड़ा, परेश रावल,मोहनीश बहल, शक्ति कपूर, आलोक नाथ और अरुण बख्शी सपोर्टिंव रोल में नजर आते हैं। \n\nकहानी एक ईमानदार और मेहनती आदमी राजू (अनिल कपूर) की है, जिसे एक घमंडी और सख्त फैक्ट्री मालकिन शीतल (श्रीदेवी) द्वारा काम पर रखा जाता है। राजू और शीतल की सोच में ज़मीन-आसमान का फर्क है। एक इंसानियत में विश्वास करता है, तो दूसरी ताकत और नियंत्रण में। उनके बीच का टकराव एक ऐसे मोड़ पर पहुंचता है, जहां एक अप्रत्याशित शादी उनके जीवन को बदल कर रख देती है।\n\nMovie:– Laadla (1994)\nDirector :-  Raj Kanwar\nProdure :- Nitin Manmohan\nCast:- Anil Kapoor, Sridevi, Raveena Tandon, Farida Jalal, Aruna Irani, Anupam Kher, Prem Chopra, Paresh Rawal, Mohnish Behl, Shakti Kapoor, Alok Nath, Arun Bakshi \nMusic:- Anand–Milind\nGenre:- Action Drama\nLanguage: Hindi\n\n#anilkapoor #sridevi #raveenatandon #besthindimovies #anupamkher #faridajalal #besthindimovies #bollywood #bollywoodmovies"
                    },
                    "defaultAudioLanguage": "hi"
                },
                "contentDetails": {
                    "duration": "PT2H47M9S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1186507",
                    "likeCount": "13346",
                    "favoriteCount": "0",
                    "commentCount": "331"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "avJTauJ45wJ3_IJC2_g9_01SsgI",
                    "id": "UCmL1WlDI8UkXDXCXcBQN9CA",
                    "snippet": {
                        "title": "Ultra Bollywood",
                        "description": "Ultra Media & Entertainment Pvt. Ltd.\n\nUltra Bollywood channel brings you full Bollywood Movie, Bollywood Movie Scenes, Movie Teaser and Trailers, Video Songs, Audio-Video Jukebox, and more... on a daily basis in the Hindi language specially created for YouTube subscribers. \n\nSubscribe NOW!",
                        "customUrl": "@ultrabollywood",
                        "publishedAt": "2009-10-21T12:28:20Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/k-ttextobVe4D05OqobL_IMQNFB1I-gjyIsLS35YB7jWK4dAFcn5UE1lyqcPDFhEqWBtdkvEE4Q=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/k-ttextobVe4D05OqobL_IMQNFB1I-gjyIsLS35YB7jWK4dAFcn5UE1lyqcPDFhEqWBtdkvEE4Q=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/k-ttextobVe4D05OqobL_IMQNFB1I-gjyIsLS35YB7jWK4dAFcn5UE1lyqcPDFhEqWBtdkvEE4Q=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Ultra Bollywood",
                            "description": "Ultra Media & Entertainment Pvt. Ltd.\n\nUltra Bollywood channel brings you full Bollywood Movie, Bollywood Movie Scenes, Movie Teaser and Trailers, Video Songs, Audio-Video Jukebox, and more... on a daily basis in the Hindi language specially created for YouTube subscribers. \n\nSubscribe NOW!"
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "sSGjwdIjJlAtDACouUpXkqRFgB4",
                "id": "pzBi1nwDn8U",
                "snippet": {
                    "publishedAt": "2025-07-19T16:00:01Z",
                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                    "title": "Survive 100 Days Trapped In A Private Jet, Keep It",
                    "description": "Spending that much time in a jet is crazy\n10 people will win $10,000 thanks to DoorDash. Enter promo code JET on any grocery, convenience or retail to get $10 off your order AND to enter for a chance to win $10K: https://bit.ly/44GtE3z\n#doordashpartner \n\nTo help offset the carbon emissions from the jet, we planted thousands of trees and are working with the Arbor Day Foundation to support certified carbon removal projects that restore forests and remove CO₂ from the atmosphere.\n\nDue to airport security, Dashers delivered this and all subsequent orders to a MrBeast crew member who then brought items to the pilot.\n\nWith DashPass, enjoy $0 delivery fees and lower service fees on eligible orders. Terms apply.\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------\nTerms & Conditions:\nNO PURCHASE NECESSARY. Purchase will not increase your chances of winning. Sweepstakes ends 11:59 PM PT on 07/27/25. Open to legal US residents, 18+, who have an active, valid DoorDash account. See Official Rules (https://bit.ly/4nYqvoO) for complete details on how to enter, eligibility requirements, free method of entry, odds of winning, prize description, and limitations. Void where prohibited. Sponsor: DoorDash, Inc.\n\nPromo offer valid through 11:59PM PT on 07/27/25 on first time orders placed at participating grocery, convenience, or retail merchants on the DoorDash app or website. Valid only in the United States. Valid only on orders with a minimum subtotal of $20, excluding fees and taxes. Maximum value of discount is $10. Discount applies to subtotal only; does not apply to fees, taxes, and gratuity. If the full $10 value is not used on a single order, the remaining value will be forfeited. Not valid for pickup. Limit one per person. Not valid for the purchase of alcohol. Fees, taxes, and gratuity still apply. Use promo code JET at checkout to redeem. See further terms and conditions at https://drd.sh/8ONpZP/.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pzBi1nwDn8U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pzBi1nwDn8U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pzBi1nwDn8U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/pzBi1nwDn8U/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/pzBi1nwDn8U/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "MrBeast",
                    "categoryId": "24",
                    "liveBroadcastContent": "none",
                    "defaultLanguage": "en",
                    "localized": {
                        "title": "Survive 100 Days Trapped In A Private Jet, Keep It",
                        "description": "Spending that much time in a jet is crazy\n10 people will win $10,000 thanks to DoorDash. Enter promo code JET on any grocery, convenience or retail to get $10 off your order AND to enter for a chance to win $10K: https://bit.ly/44GtE3z\n#doordashpartner \n\nTo help offset the carbon emissions from the jet, we planted thousands of trees and are working with the Arbor Day Foundation to support certified carbon removal projects that restore forests and remove CO₂ from the atmosphere.\n\nDue to airport security, Dashers delivered this and all subsequent orders to a MrBeast crew member who then brought items to the pilot.\n\nWith DashPass, enjoy $0 delivery fees and lower service fees on eligible orders. Terms apply.\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------\nTerms & Conditions:\nNO PURCHASE NECESSARY. Purchase will not increase your chances of winning. Sweepstakes ends 11:59 PM PT on 07/27/25. Open to legal US residents, 18+, who have an active, valid DoorDash account. See Official Rules (https://bit.ly/4nYqvoO) for complete details on how to enter, eligibility requirements, free method of entry, odds of winning, prize description, and limitations. Void where prohibited. Sponsor: DoorDash, Inc.\n\nPromo offer valid through 11:59PM PT on 07/27/25 on first time orders placed at participating grocery, convenience, or retail merchants on the DoorDash app or website. Valid only in the United States. Valid only on orders with a minimum subtotal of $20, excluding fees and taxes. Maximum value of discount is $10. Discount applies to subtotal only; does not apply to fees, taxes, and gratuity. If the full $10 value is not used on a single order, the remaining value will be forfeited. Not valid for pickup. Limit one per person. Not valid for the purchase of alcohol. Fees, taxes, and gratuity still apply. Use promo code JET at checkout to redeem. See further terms and conditions at https://drd.sh/8ONpZP/."
                    },
                    "defaultAudioLanguage": "en"
                },
                "contentDetails": {
                    "duration": "PT33M3S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "true",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "45822213",
                    "likeCount": "1724081",
                    "favoriteCount": "0",
                    "commentCount": "26247"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "1d9Re_BW7pFUOGScg6mLJfv6fB0",
                    "id": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                    "snippet": {
                        "title": "MrBeast",
                        "description": "SUBSCRIBE FOR A COOKIE!\nNew MrBeast or MrBeast Gaming video every single Saturday at noon eastern time!\nAccomplishments:\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Removed 30,000,000 pounds of trash from the ocean\n- Helped 2,000 people walk again\n- Helped 1,000 blind people see\n- Helped 1,000 deaf people hear\n- Built wells in Africa\n- Built and gave away 100 houses\n- Adopted every dog in a shelter (twice)\n- Given millions to charity\n- Started my own snack company Feastables\n- Started my own software company Viewstats\n- Started Lunchly, a tasty, better-for-you lunch option\n- Gave away a private island (twice)\n- Gave away 1 million meals\n- I counted to 100k\n- Ran a marathon in the world's largest shoes\n- Survived 50 hours in Antarctica\n- Recreated Squid Game in real life\n- Created the largest competition show with 1000 people (Beast Games)\n- Gave $5,000,000 to one person\n- Passed T-Series to become most subscribed YouTube channel 🥹\nyou get it, I appreciate all of you so much :)\n",
                        "customUrl": "@mrbeast",
                        "publishedAt": "2012-02-20T00:43:50Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "defaultLanguage": "en",
                        "localized": {
                            "title": "MrBeast",
                            "description": "SUBSCRIBE FOR A COOKIE!\nNew MrBeast or MrBeast Gaming video every single Saturday at noon eastern time!\nAccomplishments:\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Removed 30,000,000 pounds of trash from the ocean\n- Helped 2,000 people walk again\n- Helped 1,000 blind people see\n- Helped 1,000 deaf people hear\n- Built wells in Africa\n- Built and gave away 100 houses\n- Adopted every dog in a shelter (twice)\n- Given millions to charity\n- Started my own snack company Feastables\n- Started my own software company Viewstats\n- Started Lunchly, a tasty, better-for-you lunch option\n- Gave away a private island (twice)\n- Gave away 1 million meals\n- I counted to 100k\n- Ran a marathon in the world's largest shoes\n- Survived 50 hours in Antarctica\n- Recreated Squid Game in real life\n- Created the largest competition show with 1000 people (Beast Games)\n- Gave $5,000,000 to one person\n- Passed T-Series to become most subscribed YouTube channel 🥹\nyou get it, I appreciate all of you so much :)\n"
                        },
                        "country": "US"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "0CtfqdG0sKpBixEZRX4ovxmTWbM",
                "id": "tbU4cYtoYCw",
                "snippet": {
                    "publishedAt": "2025-07-20T04:30:40Z",
                    "channelId": "UCvrhwpnp2DHYQ1CbXby9ypQ",
                    "title": "Pandian Stores 2 | 21st to 26th July 2025 - Promo",
                    "description": "பாண்டியன் ஸ்டோர்ஸ் தந்தை சொல் மிக்க மந்திரம் இல்லை - திங்கள் முதல் சனி இரவு 8 மணிக்கு நம்ம விஜய் டிவில.. Click here https://www.hotstar.com/in/shows/pandian-stores-2/1260000603 to watch the show on Jiohotstar             #PandianStores #VijayTV #VijayTelevision #StarVijayTV #StarVijay #TamilTV",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/tbU4cYtoYCw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/tbU4cYtoYCw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/tbU4cYtoYCw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/tbU4cYtoYCw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/tbU4cYtoYCw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Vijay Television",
                    "tags": [
                        "Pandian Stores",
                        "Star",
                        "Star Vijay TV",
                        "Vijay TV",
                        "Vijay",
                        "தமிழ்",
                        "விஜய்",
                        "டிவி",
                        "தொலைக்காட்சி",
                        "Tamil TV",
                        "Tamil Shows",
                        "hotstar",
                        "பாண்டியன் ஸ்டோர்ஸ்",
                        "jeeva",
                        "Kathir"
                    ],
                    "categoryId": "24",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Pandian Stores 2 | 21st to 26th July 2025 - Promo",
                        "description": "பாண்டியன் ஸ்டோர்ஸ் தந்தை சொல் மிக்க மந்திரம் இல்லை - திங்கள் முதல் சனி இரவு 8 மணிக்கு நம்ம விஜய் டிவில.. Click here https://www.hotstar.com/in/shows/pandian-stores-2/1260000603 to watch the show on Jiohotstar             #PandianStores #VijayTV #VijayTelevision #StarVijayTV #StarVijay #TamilTV"
                    },
                    "defaultAudioLanguage": "en"
                },
                "contentDetails": {
                    "duration": "PT50S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1807579",
                    "likeCount": "38813",
                    "favoriteCount": "0",
                    "commentCount": "238"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "9Fl9R4Dt4htVBVL-1rxTxhqdzag",
                    "id": "UCvrhwpnp2DHYQ1CbXby9ypQ",
                    "snippet": {
                        "title": "Vijay Television",
                        "description": "Vijay Television (\"Vijay\") is a leading Tamil Language Entertainment Channel broadcasting innovative shows & programs from India.  Vijay TV is part of the Jio Star network and is commonly referred to as STAR VIJAY.",
                        "customUrl": "@vijaytelevision",
                        "publishedAt": "2007-02-01T11:57:18Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/Dl3vwt3IyU7BjPGm193HvMIkdxLPo5sjAmi9DuoS-kwUd3Jvy5aFUb-6dyPsMmshPZKEEcj-4xA=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/Dl3vwt3IyU7BjPGm193HvMIkdxLPo5sjAmi9DuoS-kwUd3Jvy5aFUb-6dyPsMmshPZKEEcj-4xA=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/Dl3vwt3IyU7BjPGm193HvMIkdxLPo5sjAmi9DuoS-kwUd3Jvy5aFUb-6dyPsMmshPZKEEcj-4xA=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Vijay Television",
                            "description": "Vijay Television (\"Vijay\") is a leading Tamil Language Entertainment Channel broadcasting innovative shows & programs from India.  Vijay TV is part of the Jio Star network and is commonly referred to as STAR VIJAY."
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "QDwevSpYo-LbSoe_z-8_M-MF6WM",
                "id": "ibZOeRgb8xg",
                "snippet": {
                    "publishedAt": "2025-07-20T03:30:35Z",
                    "channelId": "UCX8pnu3DYUnx8qy8V_c6oHg",
                    "title": "I BUILT AN AIRPORT IN MY CITY",
                    "description": "I BUILT AN AIRPORT IN MY CITY | CITIES SKYLINES GAMEPLAY #4\n#technogamerz \n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ibZOeRgb8xg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ibZOeRgb8xg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ibZOeRgb8xg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ibZOeRgb8xg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/ibZOeRgb8xg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Techno Gamerz",
                    "tags": [
                        "Cities Skylines",
                        "Cities Skylines metro",
                        "Cities Skylines metro tutorial",
                        "Cities Skylines transport",
                        "Cities Skylines subway",
                        "Cities Skylines metro system",
                        "how to build metro Cities Skylines",
                        "Cities Skylines public transport",
                        "Cities Skylines transit guide",
                        "Cities Skylines underground metro",
                        "Cities Skylines gameplay",
                        "Cities Skylines city planning",
                        "Cities Skylines transport tips",
                        "Cities Skylines metro layout",
                        "Cities Skylines beginner guide",
                        "techno gamerz"
                    ],
                    "categoryId": "20",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "I BUILT AN AIRPORT IN MY CITY",
                        "description": "I BUILT AN AIRPORT IN MY CITY | CITIES SKYLINES GAMEPLAY #4\n#technogamerz \n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button."
                    },
                    "defaultAudioLanguage": "en-IN"
                },
                "contentDetails": {
                    "duration": "PT43M14S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1051026",
                    "likeCount": "90852",
                    "favoriteCount": "0",
                    "commentCount": "7484"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "AakTc4jHnbp2Apk1D43mNFSb6Os",
                    "id": "UCX8pnu3DYUnx8qy8V_c6oHg",
                    "snippet": {
                        "title": "Techno Gamerz",
                        "description": "Hey Everyone! This is Ujjwal here! Welcome to \"Techno Gamerz\" YouTube Channel!\nI created this channel for android games i upload daily videos about mobile related games and gaming news so if you’re interested in playing games so this channel is helpful for you.\nPlease SUBSCRIBE to Techno Gamerz, Thanks.\n\nIf you are looking for somebody to make a review of your products or product of your company, such as:\nphones, tablets, PC, gadgets or even apps, you can contact us so we can make a deal...\n\nFor Business enquiries: technogamerzofficial@gmail.com",
                        "customUrl": "@technogamerzofficial",
                        "publishedAt": "2017-08-13T16:15:04Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/ytc/AIdro_mSh0doIgogNhhpzLcRYEMRorZefkBUe_6LYOWnLgzSyFc=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Techno Gamerz",
                            "description": "Hey Everyone! This is Ujjwal here! Welcome to \"Techno Gamerz\" YouTube Channel!\nI created this channel for android games i upload daily videos about mobile related games and gaming news so if you’re interested in playing games so this channel is helpful for you.\nPlease SUBSCRIBE to Techno Gamerz, Thanks.\n\nIf you are looking for somebody to make a review of your products or product of your company, such as:\nphones, tablets, PC, gadgets or even apps, you can contact us so we can make a deal...\n\nFor Business enquiries: technogamerzofficial@gmail.com"
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "sWngJaVm15XVz34QXXsHnR7ceSo",
                "id": "88E262yVWz4",
                "snippet": {
                    "publishedAt": "2025-07-20T02:30:10Z",
                    "channelId": "UCjvgGbPPn-FgYeguc5nxG4A",
                    "title": "SHADI KI SHOPPING START 😍 Day 1",
                    "description": "Folllow  me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/88E262yVWz4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/88E262yVWz4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/88E262yVWz4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/88E262yVWz4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/88E262yVWz4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Sourav Joshi Vlogs",
                    "tags": [
                        "sourav joshi",
                        "sourav joshi vlogs",
                        "family vlogs",
                        "daily vlogs",
                        "piyush joshi",
                        "piyush joshi vlogs",
                        "sourav joshi arts",
                        "vlogs",
                        "family vlog",
                        "KUNALI",
                        "KUNALI JOSHI",
                        "KUNALI JOSHI VLOGS",
                        "kunali",
                        "kunali vlogs",
                        "kunali vlog",
                        "kunali k toys",
                        "thailand vlog",
                        "thailand pohoch gye",
                        "new car",
                        "new car delivery",
                        "taking delievry of new car",
                        "Maha kumbh",
                        "Kumbh mela",
                        "Kumbh mela vlog",
                        "Finally Taking Delivery Of G-Wagon"
                    ],
                    "categoryId": "22",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "SHADI KI SHOPPING START 😍 Day 1",
                        "description": "Folllow  me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com"
                    },
                    "defaultAudioLanguage": "hi"
                },
                "contentDetails": {
                    "duration": "PT8M36S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "3153987",
                    "likeCount": "192913",
                    "favoriteCount": "0",
                    "commentCount": "5812"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "A5XuXVjGiDjBrWJ1KEC8-mbuGMM",
                    "id": "UCjvgGbPPn-FgYeguc5nxG4A",
                    "snippet": {
                        "title": "Sourav Joshi Vlogs",
                        "description": "This is sourav Joshi \n\nThis is my vlog channel.\n\nOn this channel I share my life with you guys. \n\nI am an artist and Vlogger .\n\nMy art channel - Sourav Joshi arts (4 million  + subscribers)\n\n\n\n\n",
                        "customUrl": "@souravjvlogs",
                        "publishedAt": "2019-02-19T07:06:46Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/Eb6xZ8irjVgF187eBWAZTsUh7Q6qQSSz5kw_5yJxgUL12sVZORG9ilYGIpca9SyYmGotCHlt1Q=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/Eb6xZ8irjVgF187eBWAZTsUh7Q6qQSSz5kw_5yJxgUL12sVZORG9ilYGIpca9SyYmGotCHlt1Q=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/Eb6xZ8irjVgF187eBWAZTsUh7Q6qQSSz5kw_5yJxgUL12sVZORG9ilYGIpca9SyYmGotCHlt1Q=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Sourav Joshi Vlogs",
                            "description": "This is sourav Joshi \n\nThis is my vlog channel.\n\nOn this channel I share my life with you guys. \n\nI am an artist and Vlogger .\n\nMy art channel - Sourav Joshi arts (4 million  + subscribers)\n\n\n\n\n"
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "VAT77xjpMrA51Pb1GRme7YAEyR8",
                "id": "cpE2NpxN4JI",
                "snippet": {
                    "publishedAt": "2025-07-19T05:33:13Z",
                    "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                    "title": "CHANDANIYA (Song) | Ashish Chanchlani, Elli AvrRam | Mithoon, Vishal Mishra, Sayeed Q | Bhushan K",
                    "description": "There’s a kind of love that glows, even in silence. #Chandaniya is made of that🌙✨. Presenting \"CHANDANIYA (Song)\", Feat. Ashish Chanchlani & Elli AvrRam, from the Album \"Master of Melody\". Sung by Vishal Mishra, composed by Mithoon & Written by Sayeed Quadri.\n\nGulshan Kumar & T-Series Present\nBhushan Kumar's \"CHANDANIYA\"\n\n#Chandaniya #AshishChanchalani #EliAvrRam #Mithoon #VishalMishra #SayeedQuadri\n\nAudio Credits:\nArtists: Mithoon, Vishal Mishra & Sayeed Quadri\nSong Composed & Arranged By: MITHOON\nLyrics: Sayeed Quadri\nSinger: Vishal Mishra\nMusic Production: Godswill Mergulhão\nDrums Designed and Programmed by Bobby Shrivastava\nCreative Head: Anugrah\nBacking Vocalists: Sagar Lele, Rahul Chitnis, Vivek Naik, Yashad Ghanekar\nMixed & Mastered By: Eric Pillai (Future Sound Of Bombay)\nRecording Engineer: A Manivannan\nRecording Studio: Living Water Music\nAssistant Mixing Engineer: Michael Edwin Pillai\nMusic Assistants: Anugrah, Godswill Mergulhao, Eli Rodrigues, Kaushal Gohil\nMithoon’s Management: Vijay Iyer\nMithoon’s Staff: Navnath Bacche, Ganesh Raut & Sanjeev Utekar\nMusic Label - T-Series\n\nVideo Credits:\nProduction House: The 2 Studio \nVideo Producer: RC Rana\nDirector: Dhruwal Patel & Jigar Mulani \nDOP: Dhruwal Patel\nCinematographer: Pallav Patel\nCostume Stylist: Denish Hamirani & Shama Barali\nChoreographer: Hemant Kumar Singh\nLine Producer: Sajjad Ali\nAsst Line Producer: Zaib Ali, Abdul Vahid M (The 2 Studio)\nProduction Manager: Ashok, Production Team: Simon Dimnik, Light Man: Marjan Nikolovski\nLights Equipment: MB Grip \nDrone: Luca\nMakeup: Ugenia & team\nHair: Marta \nEditor: Abhishek Kumar Singh\nAssociate Editor: Nishant Sagar\nOnline: Cut & Action films\nDI Studio: Nube Cirrus\nColorist: Mujahid Khan\nProduction Boy: Syed Naveed Kena, Syed Nadeem Shah\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cpE2NpxN4JI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cpE2NpxN4JI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cpE2NpxN4JI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cpE2NpxN4JI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/cpE2NpxN4JI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "T-Series",
                    "tags": [
                        "hindi songs 2025",
                        "hindi songs new",
                        "bollywood songs 2025",
                        "tseries",
                        "tseries songs",
                        "chandaniya song ashish chanchalani",
                        "chandaniya song elli avram",
                        "ashish and elli song",
                        "chandaniya video song",
                        "ashish chanchalani song",
                        "elli avram and ashish chanchalani song",
                        "ashish chanchalani new video",
                        "ashish and eli video song",
                        "chandanaiya full video song",
                        "ashish chanchalani song chandaniya",
                        "eli avrram song",
                        "ashish and eli song",
                        "chandaniya song ashish chanchalani full",
                        "ashish and eli video"
                    ],
                    "categoryId": "10",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "CHANDANIYA (Song) | Ashish Chanchlani, Elli AvrRam | Mithoon, Vishal Mishra, Sayeed Q | Bhushan K",
                        "description": "There’s a kind of love that glows, even in silence. #Chandaniya is made of that🌙✨. Presenting \"CHANDANIYA (Song)\", Feat. Ashish Chanchlani & Elli AvrRam, from the Album \"Master of Melody\". Sung by Vishal Mishra, composed by Mithoon & Written by Sayeed Quadri.\n\nGulshan Kumar & T-Series Present\nBhushan Kumar's \"CHANDANIYA\"\n\n#Chandaniya #AshishChanchalani #EliAvrRam #Mithoon #VishalMishra #SayeedQuadri\n\nAudio Credits:\nArtists: Mithoon, Vishal Mishra & Sayeed Quadri\nSong Composed & Arranged By: MITHOON\nLyrics: Sayeed Quadri\nSinger: Vishal Mishra\nMusic Production: Godswill Mergulhão\nDrums Designed and Programmed by Bobby Shrivastava\nCreative Head: Anugrah\nBacking Vocalists: Sagar Lele, Rahul Chitnis, Vivek Naik, Yashad Ghanekar\nMixed & Mastered By: Eric Pillai (Future Sound Of Bombay)\nRecording Engineer: A Manivannan\nRecording Studio: Living Water Music\nAssistant Mixing Engineer: Michael Edwin Pillai\nMusic Assistants: Anugrah, Godswill Mergulhao, Eli Rodrigues, Kaushal Gohil\nMithoon’s Management: Vijay Iyer\nMithoon’s Staff: Navnath Bacche, Ganesh Raut & Sanjeev Utekar\nMusic Label - T-Series\n\nVideo Credits:\nProduction House: The 2 Studio \nVideo Producer: RC Rana\nDirector: Dhruwal Patel & Jigar Mulani \nDOP: Dhruwal Patel\nCinematographer: Pallav Patel\nCostume Stylist: Denish Hamirani & Shama Barali\nChoreographer: Hemant Kumar Singh\nLine Producer: Sajjad Ali\nAsst Line Producer: Zaib Ali, Abdul Vahid M (The 2 Studio)\nProduction Manager: Ashok, Production Team: Simon Dimnik, Light Man: Marjan Nikolovski\nLights Equipment: MB Grip \nDrone: Luca\nMakeup: Ugenia & team\nHair: Marta \nEditor: Abhishek Kumar Singh\nAssociate Editor: Nishant Sagar\nOnline: Cut & Action films\nDI Studio: Nube Cirrus\nColorist: Mujahid Khan\nProduction Boy: Syed Naveed Kena, Syed Nadeem Shah\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu"
                    },
                    "defaultAudioLanguage": "hi"
                },
                "contentDetails": {
                    "duration": "PT4M7S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "6863070",
                    "likeCount": "363281",
                    "favoriteCount": "0",
                    "commentCount": "14314"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "alX_ru9iQCBOPwFEwXes7QRo6Dg",
                    "id": "UCq-Fj5jknLsUf-MWSy4_brA",
                    "snippet": {
                        "title": "T-Series",
                        "description": "\"Music can change the world\". T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nT-Series is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with T-Series.",
                        "customUrl": "@tseries",
                        "publishedAt": "2006-03-13T14:27:05Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "T-Series",
                            "description": "\"Music can change the world\". T-Series is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nT-Series is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with T-Series."
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "HNMy9e_vlO_yMswHF6ZArPxUJvM",
                "id": "GkAUsuGMqm8",
                "snippet": {
                    "publishedAt": "2025-07-19T11:29:07Z",
                    "channelId": "UC_J44kyEsEB8LPlhfm2Xb4g",
                    "title": "Hridayapoorvam Official Teaser | Mohanlal | Sathyan Anthikad | Antony Perumbavoor |Aashirvad Cinemas",
                    "description": "#Mohanlal #SathyanAnthikad #MalavikaMohanan #AntonyPerumbavoor #AashirvadCinemas #SangeethPrathap #Siddique #Hridayapoorvam  \n\nPresenting Hridayapoorvam Official Teaser \n\nWorldwide Release on AUGUST 28, 2025 \n\nDirector - Sathyan Anthikad\nProducer - Antony Perumbavoor \nProduction - Aashirvad Cinemas\nCast - Mohanlal, Malavika Mohanan, Sangeeth Prathap, Sangita, Siddique, Nishan, Baburaj, Lalu Alex, Janardhanan\nScreenplay & Dialogues - Sonu TP\nDOP - Anu Moothedath\nMusic - Justin Prabhakaran\nStory - Akhil Sathyan\nAssociate Director - Anoop Sathyan\nExecutive Producer - Dr. Emil Vincent & Dr. Anisha Antony\nArt - Prashant Madhav\nSync Sound & Sound Design - Anil Radhakrishnan\nCostumes - Sameera Saneesh\nEditor -  K Rajagopal\nLyrics - Manu Manjith, Raj Shekhar \nChoreography - Brinda\nMake Up - Pandian\nFinance Controller - Manoharan K Payyannur\nProduction Controller - Biju Thomas\nFinance Manager - Basil M Babu\nStills - Amal C Aadhar\nSound Mix - Sinoy Joseph\nDesigns - Yellowtooths\nVFX - Vishnu R Pisharady\nColour - Redchilliescolor\nTeaser - Anoop Sathyan\n\nStay connected with us:\nYouTube: https://www.youtube.com/AashirvadCinemasOfficial\nFacebook: https://www.facebook.com/AashirvadCin...\nTwitter: https://twitter.com/aashirvadcine\nInstagram: https://www.instagram.com/aashirvadcine\nWeb: https://www.aashirvadcinemas.com\n\n\n(C) 2025 MJ Antony (Antony Perumbavoor)\nAny illegal reproduction of this content will result in immediate legal action",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GkAUsuGMqm8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GkAUsuGMqm8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GkAUsuGMqm8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GkAUsuGMqm8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/GkAUsuGMqm8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Aashirvad Cinemas",
                    "tags": [
                        "Mohanlal",
                        "Hridayapoorvam",
                        "Hridayapoorvam Movie",
                        "Hridayapoorvam Malayalam Movie",
                        "Hridayapoorvam Mohanlal",
                        "Hridayapoorvam Teaser",
                        "Hridayapoorvam Teaser Malayalam",
                        "Mohanlal Hridayapoorvam",
                        "Hridayapoorvam Movie Teaser Malayalam",
                        "mohanlal movies",
                        "Sathyan Anthikad",
                        "Sathyan Anthikad Hridayapoorvam",
                        "Malavika Mohanan",
                        "Malavika Mohanan Hridayapoorvam",
                        "Malayalam Movies",
                        "Hridayapoorvam Malayalam teaser",
                        "mohanlal movie hridayapoorvam",
                        "Mohanlal latest movies",
                        "mohanlal latest",
                        "Mohanlal movie"
                    ],
                    "categoryId": "1",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "Hridayapoorvam Official Teaser | Mohanlal | Sathyan Anthikad | Antony Perumbavoor |Aashirvad Cinemas",
                        "description": "#Mohanlal #SathyanAnthikad #MalavikaMohanan #AntonyPerumbavoor #AashirvadCinemas #SangeethPrathap #Siddique #Hridayapoorvam  \n\nPresenting Hridayapoorvam Official Teaser \n\nWorldwide Release on AUGUST 28, 2025 \n\nDirector - Sathyan Anthikad\nProducer - Antony Perumbavoor \nProduction - Aashirvad Cinemas\nCast - Mohanlal, Malavika Mohanan, Sangeeth Prathap, Sangita, Siddique, Nishan, Baburaj, Lalu Alex, Janardhanan\nScreenplay & Dialogues - Sonu TP\nDOP - Anu Moothedath\nMusic - Justin Prabhakaran\nStory - Akhil Sathyan\nAssociate Director - Anoop Sathyan\nExecutive Producer - Dr. Emil Vincent & Dr. Anisha Antony\nArt - Prashant Madhav\nSync Sound & Sound Design - Anil Radhakrishnan\nCostumes - Sameera Saneesh\nEditor -  K Rajagopal\nLyrics - Manu Manjith, Raj Shekhar \nChoreography - Brinda\nMake Up - Pandian\nFinance Controller - Manoharan K Payyannur\nProduction Controller - Biju Thomas\nFinance Manager - Basil M Babu\nStills - Amal C Aadhar\nSound Mix - Sinoy Joseph\nDesigns - Yellowtooths\nVFX - Vishnu R Pisharady\nColour - Redchilliescolor\nTeaser - Anoop Sathyan\n\nStay connected with us:\nYouTube: https://www.youtube.com/AashirvadCinemasOfficial\nFacebook: https://www.facebook.com/AashirvadCin...\nTwitter: https://twitter.com/aashirvadcine\nInstagram: https://www.instagram.com/aashirvadcine\nWeb: https://www.aashirvadcinemas.com\n\n\n(C) 2025 MJ Antony (Antony Perumbavoor)\nAny illegal reproduction of this content will result in immediate legal action"
                    },
                    "defaultAudioLanguage": "ml"
                },
                "contentDetails": {
                    "duration": "PT1M6S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "true",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1644792",
                    "likeCount": "81808",
                    "favoriteCount": "0",
                    "commentCount": "3799"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "FmwtpavS5u824HtDmZb8AQkeJQc",
                    "id": "UC_J44kyEsEB8LPlhfm2Xb4g",
                    "snippet": {
                        "title": "Aashirvad Cinemas",
                        "description": "Welcome to the official YouTube channel of Aashirvad Cinemas.\n\nFounded in 1999 by Antony Perumbavoor, Aashirvad Cinemas has been at the forefront of Malayalam cinema, delivering iconic films and memorable storytelling for 25 years. From industry-defining blockbusters to groundbreaking narratives, our journey has been driven by passion, creativity, and a commitment to excellence.\n\nSubscribe for exclusive updates, behind-the-scenes content, and a celebration of the legacy that continues to shape the future of Malayalam cinema.\n\n#AashirvadCinemas #25YearsOfCinema #AVD25\n",
                        "customUrl": "@aashirvadcinemasofficial",
                        "publishedAt": "2019-12-10T06:27:28.244099Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/2xGA9U7gCSzMRqa0UBCUkzShXuHWHA6i6hZcnKO-lav4hrvxfpjJO6cy-1a66-iLDSuoQcY3Og4=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/2xGA9U7gCSzMRqa0UBCUkzShXuHWHA6i6hZcnKO-lav4hrvxfpjJO6cy-1a66-iLDSuoQcY3Og4=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/2xGA9U7gCSzMRqa0UBCUkzShXuHWHA6i6hZcnKO-lav4hrvxfpjJO6cy-1a66-iLDSuoQcY3Og4=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Aashirvad Cinemas",
                            "description": "Welcome to the official YouTube channel of Aashirvad Cinemas.\n\nFounded in 1999 by Antony Perumbavoor, Aashirvad Cinemas has been at the forefront of Malayalam cinema, delivering iconic films and memorable storytelling for 25 years. From industry-defining blockbusters to groundbreaking narratives, our journey has been driven by passion, creativity, and a commitment to excellence.\n\nSubscribe for exclusive updates, behind-the-scenes content, and a celebration of the legacy that continues to shape the future of Malayalam cinema.\n\n#AashirvadCinemas #25YearsOfCinema #AVD25\n"
                        }
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "_8jgywngtcdgMHk9sn7kQV7OQUg",
                "id": "tQtJzzCOiys",
                "snippet": {
                    "publishedAt": "2025-07-17T18:31:12Z",
                    "channelId": "UC3ar28GS6o1p0m_wabfk2zw",
                    "title": "Romeo S3 - Full Movie | Palak Tiwari, Thakur Anoop Singh | Pen Movies | New Hindi Movie 2025",
                    "description": "Romeo S3, directed by Guddu Dhanoa and produced by Pen Studios and Wild River Pictures, is an adrenaline-fueled Hindi action thriller set in the underworld of Goa.\nThakur Anoop Singh stars as DCP Sangram Singh Shekhawat, a fearless cop who goes undercover to dismantle a dangerous drug cartel while uncovering a sinister virus-linked conspiracy.\nOpposing him is Palak Tiwari’s investigative journalist, Tanu, whose dogged pursuit of truth pulls her into Sangram’s high-stakes mission.\nPacked with explosive fight scenes, high-speed chases, and larger-than-life stunts, the film delivers classic masala action in a bold, cinematic.\nWhile praised for its sheer energy and punchy performances, critics note the storyline sometimes leans on predictable tropes and formulaic twists.\n\nEnjoy Super Hit Movies Collection:- \nAcharya - https://youtu.be/MZGKv-UqD4c\nJaya Janaki Nayaka KHOONKHAR - https://youtu.be/1lFk1LSsI_c \nSHER KA SHIKAAR - https://youtu.be/FE435iFT6jw \nTholi Prema -  https://youtu.be/J4nBcaYMuI4\nEntertainment- https://youtu.be/LXXkiUKDK4w            \n\n\nFor your favourite Bollywood Movies, subscribe now: \nhttp://bit.ly/2VXistY\n\nSUBSCRIBE for the best Bollywood clips, movies and scenes all in your PEN Multiplex channel \nhttp://bit.ly/2QxELp3\n\nFor your favorite Gujarati Movies, Subscribe now: http://bit.ly/2VZm9Q6\n\nFor Action-Packed Movies, Click on the below link now...\nPen Action: http://bit.ly/2XaSS6t\n\n\nEnjoy & stay connected with us! \nLike us on Facebook: https://www.facebook.com/PenMovies\nFollow us on Twitter: https://twitter.com/penmovies\nFollow us on Instagram: https://www.instagram.com/penmovies 👉 Log On To Our Official Website : https://penstudios.in/",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/tQtJzzCOiys/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/tQtJzzCOiys/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/tQtJzzCOiys/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/tQtJzzCOiys/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/tQtJzzCOiys/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Pen Movies",
                    "tags": [
                        "Romeo S3",
                        "Palak Tiwari",
                        "Thakur Anoop Singh",
                        "Guddu Dhanoa",
                        "Pen Studios",
                        "Hindi action thriller",
                        "Goa underworld",
                        "DCP Sangram Singh",
                        "Bollywood action",
                        "masala movie",
                        "2025 Hindi film",
                        "new hindi movie",
                        "Jayantilal Gada",
                        "Palak Tiwari Movie",
                        "Thakur Anoop Singh Movie",
                        "Romeo s3 full movie",
                        "action movie 2025",
                        "new hindi movie 2025",
                        "Pen movies",
                        "s3 full movie",
                        "romeo s3 new hindi movie",
                        "bollywood movie 2025"
                    ],
                    "categoryId": "1",
                    "liveBroadcastContent": "none",
                    "defaultLanguage": "en",
                    "localized": {
                        "title": "Romeo S3 - Full Movie | Palak Tiwari, Thakur Anoop Singh | Pen Movies | New Hindi Movie 2025",
                        "description": "Romeo S3, directed by Guddu Dhanoa and produced by Pen Studios and Wild River Pictures, is an adrenaline-fueled Hindi action thriller set in the underworld of Goa.\nThakur Anoop Singh stars as DCP Sangram Singh Shekhawat, a fearless cop who goes undercover to dismantle a dangerous drug cartel while uncovering a sinister virus-linked conspiracy.\nOpposing him is Palak Tiwari’s investigative journalist, Tanu, whose dogged pursuit of truth pulls her into Sangram’s high-stakes mission.\nPacked with explosive fight scenes, high-speed chases, and larger-than-life stunts, the film delivers classic masala action in a bold, cinematic.\nWhile praised for its sheer energy and punchy performances, critics note the storyline sometimes leans on predictable tropes and formulaic twists.\n\nEnjoy Super Hit Movies Collection:- \nAcharya - https://youtu.be/MZGKv-UqD4c\nJaya Janaki Nayaka KHOONKHAR - https://youtu.be/1lFk1LSsI_c \nSHER KA SHIKAAR - https://youtu.be/FE435iFT6jw \nTholi Prema -  https://youtu.be/J4nBcaYMuI4\nEntertainment- https://youtu.be/LXXkiUKDK4w            \n\n\nFor your favourite Bollywood Movies, subscribe now: \nhttp://bit.ly/2VXistY\n\nSUBSCRIBE for the best Bollywood clips, movies and scenes all in your PEN Multiplex channel \nhttp://bit.ly/2QxELp3\n\nFor your favorite Gujarati Movies, Subscribe now: http://bit.ly/2VZm9Q6\n\nFor Action-Packed Movies, Click on the below link now...\nPen Action: http://bit.ly/2XaSS6t\n\n\nEnjoy & stay connected with us! \nLike us on Facebook: https://www.facebook.com/PenMovies\nFollow us on Twitter: https://twitter.com/penmovies\nFollow us on Instagram: https://www.instagram.com/penmovies 👉 Log On To Our Official Website : https://penstudios.in/"
                    },
                    "defaultAudioLanguage": "hi"
                },
                "contentDetails": {
                    "duration": "PT2H25M32S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "true",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "5005015",
                    "likeCount": "61414",
                    "favoriteCount": "0",
                    "commentCount": "2740"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "yliak4qazyJNryX9yMcQxJboSUw",
                    "id": "UC3ar28GS6o1p0m_wabfk2zw",
                    "snippet": {
                        "title": "Pen Movies",
                        "description": "SUBSCRIBE to India's number 1  content library, PEN India Limited has produced blockbuster movies such as Kahaani, Gangubai Kathiawadi, RRR, Attack: Part 1 & many more. With many more blockbusters coming soon, we hope to keep you engaged and entertained.\n\nFor any claim-related queries, email us on – claims@penindia.in\n\nFor New Hindi Dubbed Movies follow the below link.\nhttps://lnk.bio/PenMovies\n",
                        "customUrl": "@penmovies",
                        "publishedAt": "2014-03-25T09:42:26Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/96wNkGp9NW2OXCcJy_FPpkOPh1y2lZzIRcCFE4qt0yuubkRCcgCHd6M1EYesC3NrI6B2e1oX=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/96wNkGp9NW2OXCcJy_FPpkOPh1y2lZzIRcCFE4qt0yuubkRCcgCHd6M1EYesC3NrI6B2e1oX=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/96wNkGp9NW2OXCcJy_FPpkOPh1y2lZzIRcCFE4qt0yuubkRCcgCHd6M1EYesC3NrI6B2e1oX=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Pen Movies",
                            "description": "SUBSCRIBE to India's number 1  content library, PEN India Limited has produced blockbuster movies such as Kahaani, Gangubai Kathiawadi, RRR, Attack: Part 1 & many more. With many more blockbusters coming soon, we hope to keep you engaged and entertained.\n\nFor any claim-related queries, email us on – claims@penindia.in\n\nFor New Hindi Dubbed Movies follow the below link.\nhttps://lnk.bio/PenMovies\n"
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "hjAVWlPzEuuKe8aoKYXme9SOLes",
                "id": "nyURE5vmj2I",
                "snippet": {
                    "publishedAt": "2025-07-17T11:30:04Z",
                    "channelId": "UCLbdVvreihwZRL6kwuEUYsA",
                    "title": "Thalaivan Thalaivii - Trailer | Vijay Sethupathi, Nithya Menen | Pandiraaj | Santhosh Narayanan",
                    "description": "Here's the Official Trailer of \"Thalaivan Thalaivii\", Starring Makkal Selvan Vijay Sethupathi, Nithya Menen, Yogi Babu & Others Music by Santhosh Narayanan, Written & Directed by Pandiraaj.\n\nMovie Credits :\n\nCast : Makkal Selvan Vijay Sethupathi, Nithya Menen, Yogi Babu\nWritten & Directed by Pandiraaj\nProduced by Sathya Jyothi Films, TG Thyagarajan Presents\nProducers : Sendhil Thyagarajan & Arjun Thyagarajan\nCo-Produced by G. Saravanan & Sai Siddharth\nMusic : Santhosh Narayanan\nDirector of Photography : M. Sukumar\nArt Director : K. Veerasamar\nEditor : Pradeep E Ragav\nStunt Master : Kalai Kingson\nChoreography : Baba Bhaskar\nLyrics : Vivek, Karthi Netha\nMusic Supervisor : Santhosh Kumar\nCostume Designer : Poornima Ramaswamy\nCostume : K. Nataraj\nAudiography : M.R. Rajakrishnan\nSound Design : Arun S Mani (Oli Lab)\nVFX Producer :  B.R. Venkatesh\nDI : Prasath Somasekar (Knack Studios)\nStills : Theni Murugan\nPublicity Designer : Gopi Prasannaa\nPRO : Nikil Murukan\nProduction Controller : Ramadoss & N. Mahendran\nSubtitles : Rekhs\nVideo Animation : ADFX Studio\n\nAudio Label : Think Music\n\n© 2025 SPI Music Pvt. Ltd.\n\nFor All Latest Updates:\nWebsite: https://thinkmusic.in/\nSubscribe to us on: http://www.youtube.com/thinkmusicindia\nFollow us on: https://twitter.com/thinkmusicindia\nLike us on: https://www.facebook.com/Thinkmusicofficial\nFollow us on: https://www.instagram.com/thinkmusicofficial\n\n#ThalaivanThalaivii  #VijaySethupathi #NithyaMenen #SanthoshNarayanan #Pandiraaj #YogiBabu #SathyaJyothiFilms #ThalaivanThalaiviiTrailer",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nyURE5vmj2I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nyURE5vmj2I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nyURE5vmj2I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/nyURE5vmj2I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/nyURE5vmj2I/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Think Music India",
                    "tags": [
                        "thalaivan thalaivii",
                        "vijay sethupathi",
                        "nithya menen",
                        "pandiraaj",
                        "santhosh narayanan",
                        "thalaivan thalaivii trailer",
                        "vijay sethupathy",
                        "nithya menon",
                        "vijay sethupathy thalaivan thalaivii trailer",
                        "thalaivan thalaivi",
                        "thalaivan thalaivi trailer",
                        "thalaivan thalaivii tamil movie",
                        "thalaivan thalaivii movie tamil",
                        "thalaivan thalaivi movie",
                        "thalaivan thalaivi tamil movie",
                        "vijay sethupathy new movie",
                        "thalaivan thalaivi movie tamil",
                        "latest tamil movies 2025",
                        "tamil movies 2025",
                        "tamil movies"
                    ],
                    "categoryId": "1",
                    "liveBroadcastContent": "none",
                    "defaultLanguage": "en",
                    "localized": {
                        "title": "Thalaivan Thalaivii - Trailer | Vijay Sethupathi, Nithya Menen | Pandiraaj | Santhosh Narayanan",
                        "description": "Here's the Official Trailer of \"Thalaivan Thalaivii\", Starring Makkal Selvan Vijay Sethupathi, Nithya Menen, Yogi Babu & Others Music by Santhosh Narayanan, Written & Directed by Pandiraaj.\n\nMovie Credits :\n\nCast : Makkal Selvan Vijay Sethupathi, Nithya Menen, Yogi Babu\nWritten & Directed by Pandiraaj\nProduced by Sathya Jyothi Films, TG Thyagarajan Presents\nProducers : Sendhil Thyagarajan & Arjun Thyagarajan\nCo-Produced by G. Saravanan & Sai Siddharth\nMusic : Santhosh Narayanan\nDirector of Photography : M. Sukumar\nArt Director : K. Veerasamar\nEditor : Pradeep E Ragav\nStunt Master : Kalai Kingson\nChoreography : Baba Bhaskar\nLyrics : Vivek, Karthi Netha\nMusic Supervisor : Santhosh Kumar\nCostume Designer : Poornima Ramaswamy\nCostume : K. Nataraj\nAudiography : M.R. Rajakrishnan\nSound Design : Arun S Mani (Oli Lab)\nVFX Producer :  B.R. Venkatesh\nDI : Prasath Somasekar (Knack Studios)\nStills : Theni Murugan\nPublicity Designer : Gopi Prasannaa\nPRO : Nikil Murukan\nProduction Controller : Ramadoss & N. Mahendran\nSubtitles : Rekhs\nVideo Animation : ADFX Studio\n\nAudio Label : Think Music\n\n© 2025 SPI Music Pvt. Ltd.\n\nFor All Latest Updates:\nWebsite: https://thinkmusic.in/\nSubscribe to us on: http://www.youtube.com/thinkmusicindia\nFollow us on: https://twitter.com/thinkmusicindia\nLike us on: https://www.facebook.com/Thinkmusicofficial\nFollow us on: https://www.instagram.com/thinkmusicofficial\n\n#ThalaivanThalaivii  #VijaySethupathi #NithyaMenen #SanthoshNarayanan #Pandiraaj #YogiBabu #SathyaJyothiFilms #ThalaivanThalaiviiTrailer"
                    },
                    "defaultAudioLanguage": "ta"
                },
                "contentDetails": {
                    "duration": "PT2M47S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "true",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "5283198",
                    "likeCount": "164212",
                    "favoriteCount": "0",
                    "commentCount": "3059"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "IJe9DdcwJwsgHHkTqfgJdqzTd5M",
                    "id": "UCLbdVvreihwZRL6kwuEUYsA",
                    "snippet": {
                        "title": "Think Music India",
                        "description": "About Think Music - Official Channel\n\nThe official YouTube channel of Think Music. \n\n",
                        "customUrl": "@thinkmusicofficial",
                        "publishedAt": "2009-08-15T08:30:56Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/p4TyMutaPSAFZNzFWSGHM0rbT59hPYuAhvMFfpi6uyNJyRLeUG5og5x91rtE6vnb5Vq1TcWT=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/p4TyMutaPSAFZNzFWSGHM0rbT59hPYuAhvMFfpi6uyNJyRLeUG5og5x91rtE6vnb5Vq1TcWT=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/p4TyMutaPSAFZNzFWSGHM0rbT59hPYuAhvMFfpi6uyNJyRLeUG5og5x91rtE6vnb5Vq1TcWT=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Think Music India",
                            "description": "About Think Music - Official Channel\n\nThe official YouTube channel of Think Music. \n\n"
                        },
                        "country": "IN"
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "k6rAdVwQPkffOMcNQjqNieMq9NE",
                "id": "HdCkkHlPr64",
                "snippet": {
                    "publishedAt": "2025-07-19T11:48:29Z",
                    "channelId": "UCSB-L3HN2tJoizsxR45vUFQ",
                    "title": "sheth zala Gareeb | Sheth Manus | Vinayak Mali comedy",
                    "description": "concept - This story is about a rich guy who goes to a chawl to experience poverty, represented in a funny way, with no intention to hurt anyone.\n\nCast\nsuraj  gharat \nsaba \nsubodh \npushpak \n\nCameraman\nShubham panpatil \n\nDirectional team \nVm \nassist by Ishan thakur \n\nmanagement \nsuresh jadhav - chawl \nchaitanya\nchetan gaikar\nsahil bugade\nsaurabh patil \n\nthumbnail\nJasmit patil \n\nSpecial thanks \nMumbai chawl\nBalu sheth phadke \nLion group",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HdCkkHlPr64/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HdCkkHlPr64/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HdCkkHlPr64/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HdCkkHlPr64/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HdCkkHlPr64/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Vinayak Mali",
                    "categoryId": "22",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "sheth zala Gareeb | Sheth Manus | Vinayak Mali comedy",
                        "description": "concept - This story is about a rich guy who goes to a chawl to experience poverty, represented in a funny way, with no intention to hurt anyone.\n\nCast\nsuraj  gharat \nsaba \nsubodh \npushpak \n\nCameraman\nShubham panpatil \n\nDirectional team \nVm \nassist by Ishan thakur \n\nmanagement \nsuresh jadhav - chawl \nchaitanya\nchetan gaikar\nsahil bugade\nsaurabh patil \n\nthumbnail\nJasmit patil \n\nSpecial thanks \nMumbai chawl\nBalu sheth phadke \nLion group"
                    },
                    "defaultAudioLanguage": "mr"
                },
                "contentDetails": {
                    "duration": "PT27M13S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "443331",
                    "likeCount": "19992",
                    "favoriteCount": "0",
                    "commentCount": "565"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "h7mZc31TTV6J-ZyJyqlLOsWFIh8",
                    "id": "UCSB-L3HN2tJoizsxR45vUFQ",
                    "snippet": {
                        "title": "Vinayak Mali",
                        "description": "",
                        "customUrl": "@vinayakmali100",
                        "publishedAt": "2017-03-14T05:49:51Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/0vG9CKz41wJ4XgJMVujNDhgnCu0548QDIdK7j-Yy7WgCVtYdvROvRD1c-p8f0P1g_TA01SlduQ=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/0vG9CKz41wJ4XgJMVujNDhgnCu0548QDIdK7j-Yy7WgCVtYdvROvRD1c-p8f0P1g_TA01SlduQ=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/0vG9CKz41wJ4XgJMVujNDhgnCu0548QDIdK7j-Yy7WgCVtYdvROvRD1c-p8f0P1g_TA01SlduQ=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Vinayak Mali",
                            "description": ""
                        }
                    }
                }
            },
            {
                "kind": "youtube#video",
                "etag": "g2uIo83Q1waohRLz8xzxqz1QcxY",
                "id": "dvr306me310",
                "snippet": {
                    "publishedAt": "2025-07-19T09:13:39Z",
                    "channelId": "UCyYdwGP0ZbS_VmXg4M9il3Q",
                    "title": "New House Update + Nani ke Ghar ki Masti",
                    "description": "SUBSCRIBE!!! . . \nJOIN ME:\nFacebook - https://www.facebook.com/WHtravel/ \nTwitter - https://twitter.com/HubWanderers \nInstagram - https://www.instagram.com/wanderershub/ \nPinterest - https://in.pinterest.com/WandererHub/ \n.\n.\nRead my travel stories: https://www.wanderershub.com/ \n.\n.\nAbout Me ► My name is Prerna Malhan. I'm from Delhi and I'm a WRITER. Now I am pursuing Youtube full-time. I make entertainment and GAMING videos on this channel. Thanks for reading.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dvr306me310/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dvr306me310/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dvr306me310/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dvr306me310/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/dvr306me310/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "Wanderers Live",
                    "tags": [
                        "WANDERERS HUB",
                        "WANDERERS LIVE",
                        "PRERNA HARSH",
                        "PRERNA MALHAN",
                        "vlogs",
                        "travel vlogs",
                        "daily vlogs",
                        "wanderers hub vlogs",
                        "dimple vlogs",
                        "triggered insaan",
                        "fukra insaan"
                    ],
                    "categoryId": "22",
                    "liveBroadcastContent": "none",
                    "localized": {
                        "title": "New House Update + Nani ke Ghar ki Masti",
                        "description": "SUBSCRIBE!!! . . \nJOIN ME:\nFacebook - https://www.facebook.com/WHtravel/ \nTwitter - https://twitter.com/HubWanderers \nInstagram - https://www.instagram.com/wanderershub/ \nPinterest - https://in.pinterest.com/WandererHub/ \n.\n.\nRead my travel stories: https://www.wanderershub.com/ \n.\n.\nAbout Me ► My name is Prerna Malhan. I'm from Delhi and I'm a WRITER. Now I am pursuing Youtube full-time. I make entertainment and GAMING videos on this channel. Thanks for reading."
                    },
                    "defaultAudioLanguage": "en-IN"
                },
                "contentDetails": {
                    "duration": "PT16M6S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "1129545",
                    "likeCount": "35001",
                    "favoriteCount": "0",
                    "commentCount": "747"
                },
                "chDetails": {
                    "kind": "youtube#channel",
                    "etag": "r4E1QLxhrW-4W-tMJcmMZ_SUrHI",
                    "id": "UCyYdwGP0ZbS_VmXg4M9il3Q",
                    "snippet": {
                        "title": "Wanderers Live",
                        "description": "Cute vlogs and random tidbits 💕",
                        "customUrl": "@prernamalhan",
                        "publishedAt": "2013-10-04T08:06:15Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/wwd2MU1wqjZuH0AVUaRrzpasV3Si75o7CekvJuOh_2ujsTjf0N5dUlyLXastEI-C2EvngerOYw=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/wwd2MU1wqjZuH0AVUaRrzpasV3Si75o7CekvJuOh_2ujsTjf0N5dUlyLXastEI-C2EvngerOYw=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/wwd2MU1wqjZuH0AVUaRrzpasV3Si75o7CekvJuOh_2ujsTjf0N5dUlyLXastEI-C2EvngerOYw=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "Wanderers Live",
                            "description": "Cute vlogs and random tidbits 💕"
                        },
                        "country": "IN"
                    }
                }
            }
        ]

        return res
            .status(200)
            .json(resData)

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

            const data = {
                "video": [
                    {
                        "kind": "youtube#video",
                        "etag": "ooAgm3ArgIn-79eM_Uq6nP_V2lE",
                        "id": "pe_ejTiIcSs",
                        "snippet": {
                            "publishedAt": "2025-06-21T16:00:01Z",
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "title": "Lose 100 LBs, Win $250,000!",
                            "description": "Go start the business you’ve been dreaming of and visit https://www.Shopify.com/MrBeast to start your trial now.\n\n**In Loving Memory of Coach Tyler Wall**\n\nIt is with profound sadness that we share the unexpected passing of Coach Tyler Wall. Coach Wall was a remarkable individual whose kindness and genuine spirit touched all who knew him. His loss has left our hearts heavy with grief.\n\nFollowing this tragic news, we reached out to Coach Wall’s family to determine whether this video should be shared. With grace and wisdom, they expressed that Tyler would have wanted his message of hope and positivity to continue reaching others, even in his absence.\n\nWe humbly ask that you honor Coach Wall’s memory and respect his family’s need for privacy during this difficult time.\n\nCoach Tyler Wall’s legacy of compassion and encouragement will live on in the hearts of all who were fortunate enough to know him.\n\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
                            "thumbnails": {
                                "default": {
                                    "url": "https://i.ytimg.com/vi/pe_ejTiIcSs/default.jpg",
                                    "width": 120,
                                    "height": 90
                                },
                                "medium": {
                                    "url": "https://i.ytimg.com/vi/pe_ejTiIcSs/mqdefault.jpg",
                                    "width": 320,
                                    "height": 180
                                },
                                "high": {
                                    "url": "https://i.ytimg.com/vi/pe_ejTiIcSs/hqdefault.jpg",
                                    "width": 480,
                                    "height": 360
                                },
                                "standard": {
                                    "url": "https://i.ytimg.com/vi/pe_ejTiIcSs/sddefault.jpg",
                                    "width": 640,
                                    "height": 480
                                },
                                "maxres": {
                                    "url": "https://i.ytimg.com/vi/pe_ejTiIcSs/maxresdefault.jpg",
                                    "width": 1280,
                                    "height": 720
                                }
                            },
                            "channelTitle": "MrBeast",
                            "categoryId": "24",
                            "liveBroadcastContent": "none",
                            "defaultLanguage": "en",
                            "localized": {
                                "title": "Lose 100 LBs, Win $250,000!",
                                "description": "Go start the business you’ve been dreaming of and visit https://www.Shopify.com/MrBeast to start your trial now.\n\n**In Loving Memory of Coach Tyler Wall**\n\nIt is with profound sadness that we share the unexpected passing of Coach Tyler Wall. Coach Wall was a remarkable individual whose kindness and genuine spirit touched all who knew him. His loss has left our hearts heavy with grief.\n\nFollowing this tragic news, we reached out to Coach Wall’s family to determine whether this video should be shared. With grace and wisdom, they expressed that Tyler would have wanted his message of hope and positivity to continue reaching others, even in his absence.\n\nWe humbly ask that you honor Coach Wall’s memory and respect his family’s need for privacy during this difficult time.\n\nCoach Tyler Wall’s legacy of compassion and encouragement will live on in the hearts of all who were fortunate enough to know him.\n\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------"
                            },
                            "defaultAudioLanguage": "en"
                        },
                        "contentDetails": {
                            "duration": "PT36M50S",
                            "dimension": "2d",
                            "definition": "hd",
                            "caption": "true",
                            "licensedContent": true,
                            "contentRating": {},
                            "projection": "rectangular"
                        },
                        "statistics": {
                            "viewCount": "81144064",
                            "likeCount": "3595314",
                            "favoriteCount": "0",
                            "commentCount": "59584"
                        }
                    }
                ],
                "channel": [
                    {
                        "kind": "youtube#channel",
                        "etag": "HjLH88j7Wbo9fTiY-rya5OtOLhc",
                        "id": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                        "snippet": {
                            "title": "MrBeast",
                            "description": "SUBSCRIBE FOR A COOKIE!\nNew MrBeast or MrBeast Gaming video every single Saturday at noon eastern time!\nAccomplishments:\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Removed 30,000,000 pounds of trash from the ocean\n- Helped 2,000 people walk again\n- Helped 1,000 blind people see\n- Helped 1,000 deaf people hear\n- Built wells in Africa\n- Built and gave away 100 houses\n- Adopted every dog in a shelter (twice)\n- Given millions to charity\n- Started my own snack company Feastables\n- Started my own software company Viewstats\n- Started Lunchly, a tasty, better-for-you lunch option\n- Gave away a private island (twice)\n- Gave away 1 million meals\n- I counted to 100k\n- Ran a marathon in the world's largest shoes\n- Survived 50 hours in Antarctica\n- Recreated Squid Game in real life\n- Created the largest competition show with 1000 people (Beast Games)\n- Gave $5,000,000 to one person\n- Passed T-Series to become most subscribed YouTube channel 🥹\nyou get it, I appreciate all of you so much :)\n",
                            "customUrl": "@mrbeast",
                            "publishedAt": "2012-02-20T00:43:50Z",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s88-c-k-c0x00ffffff-no-rj",
                                    "width": 88,
                                    "height": 88
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s240-c-k-c0x00ffffff-no-rj",
                                    "width": 240,
                                    "height": 240
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s800-c-k-c0x00ffffff-no-rj",
                                    "width": 800,
                                    "height": 800
                                }
                            },
                            "defaultLanguage": "en",
                            "localized": {
                                "title": "MrBeast",
                                "description": "SUBSCRIBE FOR A COOKIE!\nNew MrBeast or MrBeast Gaming video every single Saturday at noon eastern time!\nAccomplishments:\n- Raised $20,000,000 To Plant 20,000,000 Trees\n- Removed 30,000,000 pounds of trash from the ocean\n- Helped 2,000 people walk again\n- Helped 1,000 blind people see\n- Helped 1,000 deaf people hear\n- Built wells in Africa\n- Built and gave away 100 houses\n- Adopted every dog in a shelter (twice)\n- Given millions to charity\n- Started my own snack company Feastables\n- Started my own software company Viewstats\n- Started Lunchly, a tasty, better-for-you lunch option\n- Gave away a private island (twice)\n- Gave away 1 million meals\n- I counted to 100k\n- Ran a marathon in the world's largest shoes\n- Survived 50 hours in Antarctica\n- Recreated Squid Game in real life\n- Created the largest competition show with 1000 people (Beast Games)\n- Gave $5,000,000 to one person\n- Passed T-Series to become most subscribed YouTube channel 🥹\nyou get it, I appreciate all of you so much :)\n"
                            },
                            "country": "US"
                        },
                        "statistics": {
                            "viewCount": "87114498703",
                            "subscriberCount": "407000000",
                            "hiddenSubscriberCount": false,
                            "videoCount": "879"
                        }
                    }
                ],
                "comments": [
                    {
                        "kind": "youtube#commentThread",
                        "etag": "SgIMEcR88-y1cKZ_DgsiL9HybPg",
                        "id": "UgwJUeaZIu7L6i_9Jzx4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "US7dlPKd2i_6RvBvL8npZeeE1wk",
                                "id": "UgwJUeaZIu7L6i_9Jzx4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "In loving memory of Coach Tyler Wall, a true source of kindness and inspiration ♥",
                                    "textOriginal": "In loving memory of Coach Tyler Wall, a true source of kindness and inspiration ♥",
                                    "authorDisplayName": "@MrBeast",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@MrBeast",
                                    "authorChannelId": {
                                        "value": "UCX6OQ3DkcsbYNE6H8uQQuVA"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 558043,
                                    "publishedAt": "2025-06-21T16:02:51Z",
                                    "updatedAt": "2025-06-21T16:02:51Z"
                                }
                            },
                            "canReply": false,
                            "totalReplyCount": 493,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "6Ac7TE7XDp29fOINSFCB9iKcLWo",
                        "id": "Ugw71rtwQSXJ39AtdnZ4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "un4gMSUBMM5Gn1T5G8D1v-OG7So",
                                "id": "Ugw71rtwQSXJ39AtdnZ4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "Inanilahi coach wall 🥹",
                                    "textOriginal": "Inanilahi coach wall 🥹",
                                    "authorDisplayName": "@Pinzx_Roblox",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/sET49NaN90Gxyk7Wp7igBQofydGbmJCXC1qaHltoJ8IXg-YYnNTafsVCzS3zBcFOrjG-oJD9xBs=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@Pinzx_Roblox",
                                    "authorChannelId": {
                                        "value": "UCfIAIJXLErBoPHX1db1wr3w"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:41:24Z",
                                    "updatedAt": "2025-06-23T10:41:24Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "M8OBpoE7MENqe4w-xTo2GIF0bCI",
                        "id": "UgwX1M_kJQRRqMr1vUh4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "oKFmdzX1vUT8MKA62X-HO7QX2Sk",
                                "id": "UgwX1M_kJQRRqMr1vUh4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "😭",
                                    "textOriginal": "😭",
                                    "authorDisplayName": "@ChonMobile-h1g",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_n3m7xeWn5ptA_zwpmU81y3O6-jbv8WvjnnpyQKbi9YeNOmEZNThwjQW3EwN3-DVI6pDA=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@ChonMobile-h1g",
                                    "authorChannelId": {
                                        "value": "UCHdxQb1rJ8ZtlQFyuj37s-g"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:41:22Z",
                                    "updatedAt": "2025-06-23T10:41:22Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "-JL_8yGr-cdPj6Sh75Vd5B8Ihus",
                        "id": "Ugyf0b2VarigPTcSAl14AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "Ch4_zQHtm_-nEBzubWvV8Zx1nzI",
                                "id": "Ugyf0b2VarigPTcSAl14AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "😭😭😭😭",
                                    "textOriginal": "😭😭😭😭",
                                    "authorDisplayName": "@ObitoUchiha-tb8uy",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/-FSduzjhG0NrUZt_0cg2bnAV5wy-5KNuz8b8ZKftbqqw5I07jJwwkro0yEHZYRSGniinWwpNUA=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@ObitoUchiha-tb8uy",
                                    "authorChannelId": {
                                        "value": "UC0jZv3uc6CbWoJ6fuNpdqdw"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:41:21Z",
                                    "updatedAt": "2025-06-23T10:41:21Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "9LqYYDY5DQ-TtkRzBI84uvPuF7s",
                        "id": "Ugwz_tNXOzHFTlXCas94AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "3Pk8K4dZwPcNVvMr3N4SN-fXKKU",
                                "id": "Ugwz_tNXOzHFTlXCas94AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "Goodbye coach wall 😢",
                                    "textOriginal": "Goodbye coach wall 😢",
                                    "authorDisplayName": "@lierrr-t1o",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nRD9z_0T7cdFN6O1NO_ucfJFxA9iOhJ2Q4kywmoWclsZmxoRho6WAgrB2lx-azSlMAeg=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@lierrr-t1o",
                                    "authorChannelId": {
                                        "value": "UCg2bXijMKu1GlPnWIqCZvaw"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:41:15Z",
                                    "updatedAt": "2025-06-23T10:41:15Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "Gv9WowrT8LMbTddFBCwm_dFS_mQ",
                        "id": "UgxAv-LvQk1q3JcQvB94AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "CjcV0l4M5Sx7_MhBr0dJLWMm0sM",
                                "id": "UgxAv-LvQk1q3JcQvB94AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "I cried btw😢😕",
                                    "textOriginal": "I cried btw😢😕",
                                    "authorDisplayName": "@YTKj999",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/in8iM1MubgD8DTfnUjPdQq6JFR0jjAXvraCs98KGW8-upJ7kc4pRl0mKskEJfAdbfAfJp63hPA=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@YTKj999",
                                    "authorChannelId": {
                                        "value": "UCXmrhCdzfozXnDF2FhlmXBg"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:41:12Z",
                                    "updatedAt": "2025-06-23T10:41:12Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "xWttafFkPo98K9v_oYv41duMiZ4",
                        "id": "UgyJMzwuKAKmn6UNG_d4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "uXIESdQSBxUVyP-nvE6mFN1x4vw",
                                "id": "UgyJMzwuKAKmn6UNG_d4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "Türkiye Türkiye🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷",
                                    "textOriginal": "Türkiye Türkiye🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷",
                                    "authorDisplayName": "@ilyasDurmuş-q7d",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nM7HBmvOeKaR0Fm59jgHDwEd0iiZqPv9ai-MiT_AC7RO26tppXv2kFq4RJHfj4NtA18g=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@ilyasDurmu%C5%9F-q7d",
                                    "authorChannelId": {
                                        "value": "UCVZrXu-SYwvs5wOd0QAz42w"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:41:10Z",
                                    "updatedAt": "2025-06-23T10:41:10Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "FFCaYlFuiEGMIZgXKjOUk4VSm_I",
                        "id": "UgxLkTxr2RLD8EbzGSV4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "k6im9wfHh0fMwlJFafFMD210sV4",
                                "id": "UgxLkTxr2RLD8EbzGSV4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "Love you Mrbeast",
                                    "textOriginal": "Love you Mrbeast",
                                    "authorDisplayName": "@LalluKilanguage",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_la-H9d58afKmA1gx1QVtyU-KPQL-P_-zFly6BX3pJlvct2ymNDOK1_281YXJGJXUfWug=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@LalluKilanguage",
                                    "authorChannelId": {
                                        "value": "UCc1IVtMpSuvZOlhaheX_9Rg"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:40:56Z",
                                    "updatedAt": "2025-06-23T10:40:56Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "siGI4me3e6ltdDMS3oOFNPmhCTw",
                        "id": "UgwnhOncYwe3k_Hqx3d4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "S1UmuBLNFZuxAOgkmvU9dfu8RFE",
                                "id": "UgwnhOncYwe3k_Hqx3d4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "TÜRKELER BURDAMI ❤",
                                    "textOriginal": "TÜRKELER BURDAMI ❤",
                                    "authorDisplayName": "@İlmisabriev",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/UhXuLrG5-6mmOF94D63wUepNS937xiwrrcQxaO8adSKT94Hx7sDAjoKGP0ZNJscjaX430PShqg=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@%C4%B0lmisabriev",
                                    "authorChannelId": {
                                        "value": "UCE-pjQ1bkXFq85-TyflYq4Q"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:40:53Z",
                                    "updatedAt": "2025-06-23T10:40:53Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "yEtGCajIoOEJceSzGc6AezMiPH8",
                        "id": "Ugzod7QAbIqEburQUYV4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "eNUbhicNSP94n-Z44mX3tm9hm2Y",
                                "id": "Ugzod7QAbIqEburQUYV4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "Лол год это 365 дней",
                                    "textOriginal": "Лол год это 365 дней",
                                    "authorDisplayName": "@забор-з9л",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mJFYeLiT0q7SCgVLd1GS80swzjJNaw_4qdh1JquRnZLcULN-VnBBe5HoFqvhIHyZYcwZo=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@%D0%B7%D0%B0%D0%B1%D0%BE%D1%80-%D0%B79%D0%BB",
                                    "authorChannelId": {
                                        "value": "UCqsEn8XTEfLALDJFhjibd4Q"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 0,
                                    "publishedAt": "2025-06-23T10:40:47Z",
                                    "updatedAt": "2025-06-23T10:40:47Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    },
                    {
                        "kind": "youtube#commentThread",
                        "etag": "lcqX7Xvb7Z7rQBrOoljyB-frJyM",
                        "id": "UgxTLHguk-QSWfRMytV4AaABAg",
                        "snippet": {
                            "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                            "videoId": "pe_ejTiIcSs",
                            "topLevelComment": {
                                "kind": "youtube#comment",
                                "etag": "cgGO-gSuCPibQ4aIYlCQdiFwjXQ",
                                "id": "UgxTLHguk-QSWfRMytV4AaABAg",
                                "snippet": {
                                    "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
                                    "videoId": "pe_ejTiIcSs",
                                    "textDisplay": "Coach Wall isn&#39;t just a coach he was a legend and inspiration❤🫡<br>I actually cried bro😢",
                                    "textOriginal": "Coach Wall isn't just a coach he was a legend and inspiration❤🫡\nI actually cried bro😢",
                                    "authorDisplayName": "@Mahatmagandhi_0",
                                    "authorProfileImageUrl": "https://yt3.ggpht.com/6q9bozcnUKlg9KHIr-cFwS9ZQ_8Wy_Mmh8Mn8hQaZvNsjv2FKw5C7MDOweqOHdnpLC8ESpgO=s48-c-k-c0x00ffffff-no-rj",
                                    "authorChannelUrl": "http://www.youtube.com/@Mahatmagandhi_0",
                                    "authorChannelId": {
                                        "value": "UCgtQDL6L6gvu1CuImf8d3wg"
                                    },
                                    "canRate": true,
                                    "viewerRating": "none",
                                    "likeCount": 1,
                                    "publishedAt": "2025-06-23T10:40:42Z",
                                    "updatedAt": "2025-06-23T10:40:42Z"
                                }
                            },
                            "canReply": true,
                            "totalReplyCount": 0,
                            "isPublic": true
                        }
                    }
                ],
                "suggestions": [
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
            }

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