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

const v = {
    "Now": [
        {
            "kind": "youtube#video",
            "etag": "dgDKqR1GwI8sIxnHppfVbwQMDt8",
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
                "viewCount": "5969650",
                "likeCount": "316306",
                "favoriteCount": "0",
                "commentCount": "12762"
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
            "etag": "oDIB7o6ADrhnqBjIaEIu4Z9qamA",
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
                "viewCount": "5111279",
                "likeCount": "160125",
                "favoriteCount": "0",
                "commentCount": "3011"
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
            "etag": "x8xbxBxXACpzFAaLqPqZnoEynhA",
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
                "viewCount": "4566851",
                "likeCount": "56388",
                "favoriteCount": "0",
                "commentCount": "2368"
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
            "etag": "OO-3lqpx-swSJ_H41XtoSw9xHY4",
            "id": "s9NBDKfVg1c",
            "snippet": {
                "publishedAt": "2025-07-18T11:34:03Z",
                "channelId": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "T-Series Telugu",
                "tags": [
                    "Telugu New song",
                    "Telugu Songs",
                    "T-Series",
                    "Telugu Video Songs",
                    "Telugu Hit songs",
                    "Latest telugu Songs",
                    "telugu hit songs",
                    "telugu super hit songs",
                    "latest video",
                    "Latest Telugu Songs 2025",
                    "telugu melody songs",
                    "Telugu Hits",
                    "Nuvvunte Chaley",
                    "Nuvvunte Chaley Song Promo",
                    "Nuvvunte Chaley Andhra King Taluka",
                    "Andhra King Taluka Nuvvunte Chaley",
                    "Ram Pothineni Nuvvunte Chaley",
                    "Bhagyashri Borse Nuvvunte Chaley",
                    "Ram Pothineni New Song",
                    "Ram Pothineni Telugu Love Song",
                    "Ram Pothineni"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                    "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "10022815",
                "likeCount": "218262",
                "favoriteCount": "0",
                "commentCount": "8251"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "mL8nqlhatyLCqMR2AoYljj77Zxo",
                "id": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "snippet": {
                    "title": "T-Series Telugu",
                    "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!",
                    "customUrl": "@tseriestelugu",
                    "publishedAt": "2014-06-09T05:57:42Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "T-Series Telugu",
                        "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "mJDqE3g-HDlms3yM97wILBP09hI",
            "id": "6lnorP0ZsZY",
            "snippet": {
                "publishedAt": "2025-07-18T08:34:16Z",
                "channelId": "UCUK49UvmYWYLiB7_bZFuFZQ",
                "title": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News",
                "description": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News\n\nFM College student case..... The Investigating Committee to be present. Directive for personal attendance to ICC members. Instructions for personal attendance at FM College today and tomorrow. On the 13th, the preliminary investigation internal report was submitted.\n\n\n#fmcollegegirlnews #OdishaBandh #CongressOdisha #BalasoreStudent  #fmcollegeincident #fmcollege #OdishaNews #FakirMohanCollege #odishapolitics  #News18Odia #OdiaNews #ଆଜିରନ୍ୟୁଜ #odishanews #oriyanews #bhubaneswarnews \n \n\nWelcome to News18 Odia, your go-to destination for the latest news and updates from across India and beyond. As one of Odisha's premier news channels, we strive to keep you informed with live coverage and breaking news as it happens.  \n\nSubscribe now and turn on notifications to stay connected with News18 Odia and stay ahead of the curve with our comprehensive news coverage. Stay informed, stay engaged, and stay connected with News18 Odia on YouTube.  \n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube  \n\nPlease visit our website https://bit.ly/2YaikeJ for the latest opinions and detailed news coverage.  \n\nFollow us on \nFacebook: https://www.facebook.com/News18Odia\nTwitter: https://twitter.com/news18odia?lang=en\nWebsite: https://bit.ly/2YaikeJ\n\nSubscribe to our channel to get the latest news and updates https://tinyurl.com/y46bt2fm",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "News18 Odia",
                "tags": [
                    "news 18 odia",
                    "news 18 odia live",
                    "Odisha News",
                    "Odisha University Scandal",
                    "fm college case",
                    "Odia News",
                    "odisha news",
                    "news18 odia",
                    "FM College Student Case",
                    "fm college srudent case",
                    "fm college news today",
                    "fm college news today cctv footage",
                    "victim father",
                    "fm college balasore",
                    "fm college video viral",
                    "fm college news today odia",
                    "balasore fm college news today",
                    "balasore fm college cctv footage",
                    "balasore fm college case",
                    "odia news",
                    "latest odia news",
                    "local news",
                    "soumyashree"
                ],
                "categoryId": "25",
                "liveBroadcastContent": "none",
                "defaultLanguage": "or",
                "localized": {
                    "title": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News",
                    "description": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News\n\nFM College student case..... The Investigating Committee to be present. Directive for personal attendance to ICC members. Instructions for personal attendance at FM College today and tomorrow. On the 13th, the preliminary investigation internal report was submitted.\n\n\n#fmcollegegirlnews #OdishaBandh #CongressOdisha #BalasoreStudent  #fmcollegeincident #fmcollege #OdishaNews #FakirMohanCollege #odishapolitics  #News18Odia #OdiaNews #ଆଜିରନ୍ୟୁଜ #odishanews #oriyanews #bhubaneswarnews \n \n\nWelcome to News18 Odia, your go-to destination for the latest news and updates from across India and beyond. As one of Odisha's premier news channels, we strive to keep you informed with live coverage and breaking news as it happens.  \n\nSubscribe now and turn on notifications to stay connected with News18 Odia and stay ahead of the curve with our comprehensive news coverage. Stay informed, stay engaged, and stay connected with News18 Odia on YouTube.  \n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube  \n\nPlease visit our website https://bit.ly/2YaikeJ for the latest opinions and detailed news coverage.  \n\nFollow us on \nFacebook: https://www.facebook.com/News18Odia\nTwitter: https://twitter.com/news18odia?lang=en\nWebsite: https://bit.ly/2YaikeJ\n\nSubscribe to our channel to get the latest news and updates https://tinyurl.com/y46bt2fm"
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT8M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1411282",
                "likeCount": "13097",
                "favoriteCount": "0",
                "commentCount": "1141"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "_ZGR8DKzXqkSocYZnV5d54_twZw",
                "id": "UCUK49UvmYWYLiB7_bZFuFZQ",
                "snippet": {
                    "title": "News18 Odia",
                    "description": "News18 Odia is one of the Odisha’s leading news channel. Please follow up page to watch live and breaking news with latest videos added very hour. \n\nNews18 ଓଡ଼ିଆ ହେଉଛି ଓଡିଶାର ନାମୀ ଦାମୀ ନ୍ୟୁଜ ଚ୍ୟାନେଲ ଭିତରୁ ଗୋଟିଏ . ଓଡିଶାର ଛୋଟ ମୋଟ ଖବର ଆପଣ ପାଇଁ ପାରିବେ ଏହି ଚ୍ୟାନେଲ ମାଧ୍ୟମରେ\n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube\n\nPlease visit our website http://www.news18.com/ for latest opinions and detailed news coverage, Pictures, Entertainment, Sports, Cricket and Lifestyle Updates. \n\nGet latest news updates as they happen on your phone, Download our app: Android: http://bit.ly/2ussJls , iPhone: http://apple.co/2usJEEm",
                    "customUrl": "@news18odia",
                    "publishedAt": "2015-05-02T04:44:32Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "News18 Odia",
                        "description": "News18 Odia is one of the Odisha’s leading news channel. Please follow up page to watch live and breaking news with latest videos added very hour. \n\nNews18 ଓଡ଼ିଆ ହେଉଛି ଓଡିଶାର ନାମୀ ଦାମୀ ନ୍ୟୁଜ ଚ୍ୟାନେଲ ଭିତରୁ ଗୋଟିଏ . ଓଡିଶାର ଛୋଟ ମୋଟ ଖବର ଆପଣ ପାଇଁ ପାରିବେ ଏହି ଚ୍ୟାନେଲ ମାଧ୍ୟମରେ\n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube\n\nPlease visit our website http://www.news18.com/ for latest opinions and detailed news coverage, Pictures, Entertainment, Sports, Cricket and Lifestyle Updates. \n\nGet latest news updates as they happen on your phone, Download our app: Android: http://bit.ly/2ussJls , iPhone: http://apple.co/2usJEEm"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "7E4Y2bbOG2jcMG70-SE3Ak_rsTQ",
            "id": "nIj06MVH0HY",
            "snippet": {
                "publishedAt": "2025-07-18T11:30:52Z",
                "channelId": "UC7G96LIVWvicrHlQRyA3GRA",
                "title": "2025 ஆடி கிருத்திகை எந்த நாளில் வருகிறது? வழிபடும் & விரத முறை | Aadi Krithigai fasting & worship",
                "description": "#ஆடிகிருத்திகை #aadikrithigai #desamangaiyarkarasi #desamangayarkarasi #தேசமங்கையர்க்கரசி \n\nதிருப்புகழ் 1\n\nசந்தம் \nதனதனன தான தத்த தனதனன தான தத்த\nதனதனன தான தத்த    தனதான\n\nதிருப்புகழ் பாடல் \nசரணகம லால யத்தை அரைநிமிஷ நேர மட்டில்\nதவமுறைதி யானம் வைக்க   அறியாத\n\nசடகசட மூட மட்டி பவவினையி லேச னித்த\nதமியன்மிடி யால்ம யக்க    முறுவேனோ\n\nகருணைபுரி யாதி ருப்ப தெனகுறையி வேளை செப்பு\nகயிலைமலை நாதர் பெற்ற    குமரோனே\n\nகடகபுய மீதி ரத்ந மணியணிபொன் மாலே செச்சை\nகமழுமண மார்க டப்ப    மணிவோனே\n\nதருணமிதை யாமி குத்த கனமதுறு நீள்ச வுக்ய\nசகலசெல்வ யோக மிக்க    பெருவாழ்வு\n\nதகைமைசிவ ஞான முத்தி பரகதியு நீகொ டுத்து\nதவிபுரிய வேணு நெய்த்த    வடிவேலா\n\nஅருணதள பாத பத்ம மதுநிதமு மேது திக்க\nஅரியதமிழ் தான ளித்த    மயில்வீரா\n\nஅதிசயம நேக முற்ற பழநிமலை மீது தித்த\nஅழகதிரு வேர கத்தின்    முருகோனே.\n\nTHIRUPUGAZH 1 IN ENGLISH\n\nCHARANA KAMALALA YATHTHAI ARAINIMISHA NERA MATTIL\nTHAVAMURAI DHIYANAM VAIKKA    ARIYADHA\n\nSADAKASADA MOODA MATTI BHAVA VINAIYILE JANITHTHA\nTHAMIYAN MIDIYAL MAYAKKAM    URUVENO\n\nKARUNAIPURI YAADHI RUPPA DHENAKURAIYI VELAI SEPPU\nKAYILAIMALAI NATHAR PETRA     KUMARONE\n\nKADAKAPUYA MEETHI RATHNA MANIYANIPON MALAE SECHAI\nKAMAZHU MANA MAR KADAPPAM    ANIVONE\n\nTHARUNAM IDHAIYA MIGUTHTHA KANAMADHURU NEEL SAVUKYA\nSAKALASELVA YOGA MIKKA     PERUVAZHVU\n\nTHAGAIMAISIVA NYANA MUTHTHI PARAGATHIYU NEE KODUTH\nUDHAVIPURIYA VENU NEYTHTHA    VADIVELA\n\nARUNADHALA PADHA PADHMAM ADHUNIDHAMUME THUDHIKKA\nARIYATHAMIZH THAN ALITHTHA    MAYILVEERA\n\nADHISAYAM ANEGAM UTRA PAZHANIMALAI MEEDH UDHITHTHA\nAZHAGATHIRU VERAGATHTHIN    MURUGONE.\n\nதிருப்புகழ் 2\n\nசந்தம் \nதனதான தத்த தனதான தத்த\nதனதான தத்த  தனதான\n\nதிருப்புகழ் பாடல் \n\nசெகமாயை யுற்றெ னகவாழ்வில் வைத்த\nதிருமாது கெர்ப்ப     முடலூறித்\n\nதெசமாத முற்றி வடிவாய்நி லத்தில்\nதிரமாய ளித்த      பொருளாகி\n\nமகவாவி னுச்சி விழியாந நத்தில்\nமலைநேர்பு யத்தி     லுறவாடி\n\nமடிமீத டுத்து விளையாடி நித்த\nமணிவாயின் முத்தி     தரவேணும்\n\nமுகமாய மிட்ட குறமாதி னுக்கு\nமுலைமேல ணைக்க     வருநீதா\n\nமுதுமாம றைக்கு ளொருமாபொ ருட்குள்\nமொழியேயு ரைத்த     குருநாதா\n\nதகையாதெ னக்கு னடிகாண வைத்த\nதனியேர கத்தின்     முருகோனே\n\nதருகாவி ரிக்கு வடபாரி சத்தில்\nசமர்வேலெ டுத்த     பெருமாளே.\n\nTHIRUPPUGHAZH 2 IN ENGLISH \n\nSEGA MAYAI UTREN AGA VAZHVIL VAITHTHA\nTHIRUMADHU GERBAM     UDAL URI\n\nDHESA MADHA MUTRI VADIVAY NILATHTHIL\nTHIRAMAY ALITHTHA      PORULAGI\n\nMAGAVAVIN UCHCHI VIZHI ANANATHTHIL\nMALAI NER BUYATHTHIL     URAVADI\n\nMADIMEE DHADUTHTHU VILAIYADI NITHTHAM\nMANIVAYIN MUTHTHI      THARAVENUM\n\nMUGA MAYAM ITTA KURA MADHINUKKU\nMULAIMEL ANAIKKA  VARU    NEEDHA\n\nMUDHU MA MARAIKKUL ORU MA PORUTKUL\nMOZHIYE URAITHTHA      GURUNATHA\n\nTHAGAIYADH ENAKKUN ADI KANA VAITHTHA\nTHANI ERAGATHTHIN      MURUGONE\n\nTHARU KAVIRIKKU VADA PARISATHTHIL\nSAMAR VEL EDUTHTHA     PERUMALE.\n\nஆத்ம ஞான மையம்",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Athma Gnana Maiyam",
                "tags": [
                    "sollarasi",
                    "desa mangaiyarkarasi",
                    "desa mangayarkarasi",
                    "athma gnana maiyam",
                    "latest speech",
                    "variyar",
                    "variyar swamigal",
                    "krubanandha variyar",
                    "sorpozhivu",
                    "சொல்லரசி",
                    "தேச மங்கையர்க்கரசி",
                    "தேச மங்கையற்கரசி",
                    "ஆத்ம ஞான மையம்",
                    "சொற்பொழிவு",
                    "வாரியார்",
                    "வாரியார் ஸ்வாமிகள்",
                    "சுவாமிகள்",
                    "கிருபானந்த வாரியார்"
                ],
                "categoryId": "22",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "2025 ஆடி கிருத்திகை எந்த நாளில் வருகிறது? வழிபடும் & விரத முறை | Aadi Krithigai fasting & worship",
                    "description": "#ஆடிகிருத்திகை #aadikrithigai #desamangaiyarkarasi #desamangayarkarasi #தேசமங்கையர்க்கரசி \n\nதிருப்புகழ் 1\n\nசந்தம் \nதனதனன தான தத்த தனதனன தான தத்த\nதனதனன தான தத்த    தனதான\n\nதிருப்புகழ் பாடல் \nசரணகம லால யத்தை அரைநிமிஷ நேர மட்டில்\nதவமுறைதி யானம் வைக்க   அறியாத\n\nசடகசட மூட மட்டி பவவினையி லேச னித்த\nதமியன்மிடி யால்ம யக்க    முறுவேனோ\n\nகருணைபுரி யாதி ருப்ப தெனகுறையி வேளை செப்பு\nகயிலைமலை நாதர் பெற்ற    குமரோனே\n\nகடகபுய மீதி ரத்ந மணியணிபொன் மாலே செச்சை\nகமழுமண மார்க டப்ப    மணிவோனே\n\nதருணமிதை யாமி குத்த கனமதுறு நீள்ச வுக்ய\nசகலசெல்வ யோக மிக்க    பெருவாழ்வு\n\nதகைமைசிவ ஞான முத்தி பரகதியு நீகொ டுத்து\nதவிபுரிய வேணு நெய்த்த    வடிவேலா\n\nஅருணதள பாத பத்ம மதுநிதமு மேது திக்க\nஅரியதமிழ் தான ளித்த    மயில்வீரா\n\nஅதிசயம நேக முற்ற பழநிமலை மீது தித்த\nஅழகதிரு வேர கத்தின்    முருகோனே.\n\nTHIRUPUGAZH 1 IN ENGLISH\n\nCHARANA KAMALALA YATHTHAI ARAINIMISHA NERA MATTIL\nTHAVAMURAI DHIYANAM VAIKKA    ARIYADHA\n\nSADAKASADA MOODA MATTI BHAVA VINAIYILE JANITHTHA\nTHAMIYAN MIDIYAL MAYAKKAM    URUVENO\n\nKARUNAIPURI YAADHI RUPPA DHENAKURAIYI VELAI SEPPU\nKAYILAIMALAI NATHAR PETRA     KUMARONE\n\nKADAKAPUYA MEETHI RATHNA MANIYANIPON MALAE SECHAI\nKAMAZHU MANA MAR KADAPPAM    ANIVONE\n\nTHARUNAM IDHAIYA MIGUTHTHA KANAMADHURU NEEL SAVUKYA\nSAKALASELVA YOGA MIKKA     PERUVAZHVU\n\nTHAGAIMAISIVA NYANA MUTHTHI PARAGATHIYU NEE KODUTH\nUDHAVIPURIYA VENU NEYTHTHA    VADIVELA\n\nARUNADHALA PADHA PADHMAM ADHUNIDHAMUME THUDHIKKA\nARIYATHAMIZH THAN ALITHTHA    MAYILVEERA\n\nADHISAYAM ANEGAM UTRA PAZHANIMALAI MEEDH UDHITHTHA\nAZHAGATHIRU VERAGATHTHIN    MURUGONE.\n\nதிருப்புகழ் 2\n\nசந்தம் \nதனதான தத்த தனதான தத்த\nதனதான தத்த  தனதான\n\nதிருப்புகழ் பாடல் \n\nசெகமாயை யுற்றெ னகவாழ்வில் வைத்த\nதிருமாது கெர்ப்ப     முடலூறித்\n\nதெசமாத முற்றி வடிவாய்நி லத்தில்\nதிரமாய ளித்த      பொருளாகி\n\nமகவாவி னுச்சி விழியாந நத்தில்\nமலைநேர்பு யத்தி     லுறவாடி\n\nமடிமீத டுத்து விளையாடி நித்த\nமணிவாயின் முத்தி     தரவேணும்\n\nமுகமாய மிட்ட குறமாதி னுக்கு\nமுலைமேல ணைக்க     வருநீதா\n\nமுதுமாம றைக்கு ளொருமாபொ ருட்குள்\nமொழியேயு ரைத்த     குருநாதா\n\nதகையாதெ னக்கு னடிகாண வைத்த\nதனியேர கத்தின்     முருகோனே\n\nதருகாவி ரிக்கு வடபாரி சத்தில்\nசமர்வேலெ டுத்த     பெருமாளே.\n\nTHIRUPPUGHAZH 2 IN ENGLISH \n\nSEGA MAYAI UTREN AGA VAZHVIL VAITHTHA\nTHIRUMADHU GERBAM     UDAL URI\n\nDHESA MADHA MUTRI VADIVAY NILATHTHIL\nTHIRAMAY ALITHTHA      PORULAGI\n\nMAGAVAVIN UCHCHI VIZHI ANANATHTHIL\nMALAI NER BUYATHTHIL     URAVADI\n\nMADIMEE DHADUTHTHU VILAIYADI NITHTHAM\nMANIVAYIN MUTHTHI      THARAVENUM\n\nMUGA MAYAM ITTA KURA MADHINUKKU\nMULAIMEL ANAIKKA  VARU    NEEDHA\n\nMUDHU MA MARAIKKUL ORU MA PORUTKUL\nMOZHIYE URAITHTHA      GURUNATHA\n\nTHAGAIYADH ENAKKUN ADI KANA VAITHTHA\nTHANI ERAGATHTHIN      MURUGONE\n\nTHARU KAVIRIKKU VADA PARISATHTHIL\nSAMAR VEL EDUTHTHA     PERUMALE.\n\nஆத்ம ஞான மையம்"
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT11M11S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "439055",
                "likeCount": "11297",
                "favoriteCount": "0",
                "commentCount": "812"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "YXO50TTob8fl7bUT0NV_nh1qhzU",
                "id": "UC7G96LIVWvicrHlQRyA3GRA",
                "snippet": {
                    "title": "Athma Gnana Maiyam",
                    "description": "Welcome to Athma Gnana Maiyam.  Athma Gnana Maiyam is a dedicated YouTube channel by Smt. Desa Mangayarkarasi.  In this channel we will be posting Smt. Desa Mangayarkarasi's devotional speeches, motivational talks, other religious activities and services.\n\nThe contents of all material available on this YouTube channel are copyrighted to Athma Gnana Maiyam. All rights are reserved and the content may not be reproduced, downloaded, published or transferred in any form or by any means.\n\nAnyone making decisions based on the content of this channel should perform independent due diligence before making a final decision.",
                    "customUrl": "@athmagnanamaiyam",
                    "publishedAt": "2015-01-18T06:41:34Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Athma Gnana Maiyam",
                        "description": "Welcome to Athma Gnana Maiyam.  Athma Gnana Maiyam is a dedicated YouTube channel by Smt. Desa Mangayarkarasi.  In this channel we will be posting Smt. Desa Mangayarkarasi's devotional speeches, motivational talks, other religious activities and services.\n\nThe contents of all material available on this YouTube channel are copyrighted to Athma Gnana Maiyam. All rights are reserved and the content may not be reproduced, downloaded, published or transferred in any form or by any means.\n\nAnyone making decisions based on the content of this channel should perform independent due diligence before making a final decision."
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "_XgAa4MGI1KQtX40TiEYtDJRqgg",
            "id": "iKZyYdwS3Wg",
            "snippet": {
                "publishedAt": "2025-07-16T14:00:00Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Stranger Things 5 | Official Teaser | Netflix",
                "description": "Every battle has led to this.\n\nMore about Stranger Things 5:\nThe fall of 1987. Hawkins is scarred by the opening of the Rifts, and our heroes are united by a single goal: find and kill Vecna. But he has vanished — his whereabouts and plans unknown. Complicating their mission, the government has placed the town under military quarantine and intensified its hunt for Eleven, forcing her back into hiding. As the anniversary of Will’s disappearance approaches, so does a heavy, familiar dread. The final battle is looming — and with it, a darkness more powerful and more deadly than anything they’ve faced before. To end this nightmare, they’ll need everyone — the full party — standing together, one last time.\n\nWatch on Netflix: https://www.netflix.com/title/81297917\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nStranger Things 5 | Official Teaser | Netflix\nhttps://www.youtube.com/@Netflix",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Netflix",
                "tags": [
                    "Caleb McLaughlin",
                    "Cara Buono",
                    "Charlie Heaton",
                    "Chief Hopper",
                    "David Harbour",
                    "Dustin",
                    "Eleven",
                    "Finn Wolfhard",
                    "Gaten Matarazzo",
                    "Holly Wheeler",
                    "Jamie Campbell Bower",
                    "Joe Keery",
                    "Jonathan Byers",
                    "Joyce Byers",
                    "Lucas",
                    "Max",
                    "Maya Hawke",
                    "Mike Wheeler",
                    "Millie Bobby Brown",
                    "Nancy Wheeler",
                    "Natalia Dyer",
                    "Netflix",
                    "Noah Schnapp",
                    "Official Teaser",
                    "Robin Buckley",
                    "Sadie Sink",
                    "Steve Harrington",
                    "Stranger Things 5",
                    "Vecna",
                    "Will Byers",
                    "Winona Ryder"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Stranger Things 5 | Official Teaser | Netflix",
                    "description": "Every battle has led to this.\n\nMore about Stranger Things 5:\nThe fall of 1987. Hawkins is scarred by the opening of the Rifts, and our heroes are united by a single goal: find and kill Vecna. But he has vanished — his whereabouts and plans unknown. Complicating their mission, the government has placed the town under military quarantine and intensified its hunt for Eleven, forcing her back into hiding. As the anniversary of Will’s disappearance approaches, so does a heavy, familiar dread. The final battle is looming — and with it, a darkness more powerful and more deadly than anything they’ve faced before. To end this nightmare, they’ll need everyone — the full party — standing together, one last time.\n\nWatch on Netflix: https://www.netflix.com/title/81297917\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nStranger Things 5 | Official Teaser | Netflix\nhttps://www.youtube.com/@Netflix"
                },
                "defaultAudioLanguage": "en-US"
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
                "viewCount": "15975640",
                "likeCount": "707994",
                "favoriteCount": "0",
                "commentCount": "40207"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "Tbw5t7bZxvWXgEgs_ri5x8z8p_8",
                "id": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "snippet": {
                    "title": "Netflix",
                    "description": "game over\n\n\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n",
                    "customUrl": "@netflix",
                    "publishedAt": "2012-07-17T20:45:36Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Netflix",
                        "description": "game over\n\n\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n"
                    },
                    "country": "US"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "csJrQv-CenG3HjVvoFahNPpqlhg",
            "id": "mMNHi8n-7sY",
            "snippet": {
                "publishedAt": "2025-07-18T09:45:40Z",
                "channelId": "UCeiAKuJGZrIjYvaq0nMwbJg",
                "title": "Saiyaara Movie REVIEW | Deeksha Sharma",
                "description": "Saiyaara Movie Review By Deeksha Sharma. Ahaan Panday & Aneet Padda in Mohit Suri Film Saiyaara Hits back at Aashiqui 3 Similarities with Strong Emotions, Soul-Full Music & 2 Debut Real Actors prepared for a Nostalgic Bollywood Rom-Com Ending, 1 Musician 1 heart broken writer teams up for life & love only to be challenged in a never seen before tragedy! Saiyaara Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Aashiqui 3 vs Saiyaara- Can Mohit Suri survive without Aashiqui Franchise? Do leave Comments below if you have seen the film or not!\n\n#Saiyaara #SaiyaaraReview #SaiyaaraMovie\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Filmi Indian",
                "tags": [
                    "saiyaara",
                    "saiyaara review",
                    "saiyaara movie",
                    "saiyaara trailer",
                    "saiyaara movie review",
                    "saiyaara full movie",
                    "aashiqui 3",
                    "mohit suri",
                    "Ahaan Panday",
                    "Aneet Padda",
                    "saiyaara hindi movie",
                    "teaser",
                    "trailer",
                    "review reaction",
                    "filmi indian",
                    "saiyaara song",
                    "yrf",
                    "saiyaara hindi review",
                    "saiyaara explained"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Saiyaara Movie REVIEW | Deeksha Sharma",
                    "description": "Saiyaara Movie Review By Deeksha Sharma. Ahaan Panday & Aneet Padda in Mohit Suri Film Saiyaara Hits back at Aashiqui 3 Similarities with Strong Emotions, Soul-Full Music & 2 Debut Real Actors prepared for a Nostalgic Bollywood Rom-Com Ending, 1 Musician 1 heart broken writer teams up for life & love only to be challenged in a never seen before tragedy! Saiyaara Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Aashiqui 3 vs Saiyaara- Can Mohit Suri survive without Aashiqui Franchise? Do leave Comments below if you have seen the film or not!\n\n#Saiyaara #SaiyaaraReview #SaiyaaraMovie\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian"
                }
            },
            "contentDetails": {
                "duration": "PT4M37S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1320120",
                "likeCount": "33930",
                "favoriteCount": "0",
                "commentCount": "2093"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "iQOI9tzlu_KgZmdGhc5B4RfYqO4",
                "id": "UCeiAKuJGZrIjYvaq0nMwbJg",
                "snippet": {
                    "title": "Filmi Indian",
                    "description": "Hi Deeksha Here! Living A Life Through Cinema & Sharing The Journey With You..!\n\n➤ Don't Message For ❌ SPONSORSHIP ❌\n     I am A Creator Not A Saleswoman.\n\n♥ For Haal-chaal & Feedback (thefilmiindian@gmail.com)\n",
                    "customUrl": "@filmiindian",
                    "publishedAt": "2018-07-17T16:01:32Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Filmi Indian",
                        "description": "Hi Deeksha Here! Living A Life Through Cinema & Sharing The Journey With You..!\n\n➤ Don't Message For ❌ SPONSORSHIP ❌\n     I am A Creator Not A Saleswoman.\n\n♥ For Haal-chaal & Feedback (thefilmiindian@gmail.com)\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "U-tZQ2HIePLnoSH8Hvyr5Np8s_4",
            "id": "-PXOEWsldoM",
            "snippet": {
                "publishedAt": "2025-07-18T10:30:01Z",
                "channelId": "UCFQ9AY7oyEqRS7iVXJLNSmw",
                "title": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song",
                "description": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song | Sonotek Music | Kawad Special Song\n\nSubscribe Us - @sonotekmusic \nMake Your Reels Now :-  https://www.instagram.com/reels/audio/1397480538006550\n\nSonotek Music Presents “Bhole Ka Pujari“ (Official Video) a New Latest Most Popular Haryanvi Songs Haryanavi 2025.New Bhole Baba Song, Haryanvi Dj Song, New Hr Song 2025, Haryanvi Song Starring by Masoom Sharma. This superhit Haryanvi Song Sung by Masoom Sharma. Music given by Pinna Music. Lyrics of this Bholenath Ji Haryanvi song is written by Mp Karsola. Directed By Kuldeep Rathee.  Music label by \"Sonotek Music\"\n\n#masoomsharma #bholekapujari #masoomsharmanewsong #masoom \n#masoomsharmabholekapujari #newharyanvisong #bholenath  #newharyanvisongsharyanavi2025 #haryanvisong #haryanvigane #haryanvidjsong #pinnamusic  #hrsong #sonotekmusic \n\nSong - Bhole Ka Pujari\nSinger - Masoom Sharma\nArtist - Masoom Sharma\nLyrics - Mp Karsola\nMusic - Pinna Music\nComposer - Masoom Sharma\nProject By - Ankit Vij & Yash Thukral \nEditor - Lalit Hudda\nDrone Operator - PDF \nDirected By - Kuldeep Rathee\nPoster - Ratan (Sonotek)\nDigital Work - Roshan Ekma\nLabel - Sonotek Music\n\nLOVE !! LIKE !! COMMENTS !! SUBSCRIBE\n\n♪ Full Song Available On ♪ \n♪ Spotify : https://open.spotify.com/track/6vvPYcNnp101qeETPfamIY?si=6b2d94315ad847ea\n♪ Gaana : https://gaana.com/song/bhole-ka-pujari-10\n♪ Jio Saavn : https://www.jiosaavn.com/song/bhole-ka-pujari/NyAAQCx,A3Q\n♪ Apple Music : https://music.apple.com/us/song/bhole-ka-pujari/1825816750\n♪ Amazon Prime Music : https://music.amazon.com/albums/B0FH6SBX9Y?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_bzzfnI0d5d2827hFb8Clp2JJe\n♪ YouTube Music : https://music.youtube.com/watch?v=2zY-eZ4a59Y&si=BX4uUDfIy9qLGx-w\n\nLyrics -\nHo mera bhola se bhandari\nUski mahima se nyari\nSubeh shyam rattu jau su naam uska\nHoke masti mein choor\nRave bhakti mein choor\nAur bhulu Koni Kade Vi Mai Dhaam Uska\nMai su shivji ka das\nUka dere mein re vaas\nBaba aane konya deve\nKade kasht bawli\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su mai\nTrust bawli re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic.....\n\no japu shambhu shambhu naam\nsidhe hoja sare kaam\nmai toh aau haridwar\njade ganga ji ka dhaam\nse aghoriya ka dera\ntane kuch konya bera\nburi aatma ne kar deve\nnasht bawli\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\n\nMusic....\n\nSe mane triloki te pyaar\nWohe mera sacha yaar\nSunne sab bhakta ki\nJobhi jave se kedar\nWoh se teen lok ka data\nMera Sacha Se Vidhata\nUski Bhakti Mein Aagya\nInterest Bawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath Pe karu su Mai\nTrust Bawli Re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic...\n\nO mera shankar damru wala\nKhole se kismat ka tala\nKare pahada upar tap\nPade jave po ka pala\nChhora mp karsola\nbhole pache hora boda\naaya bhakti mein sun\nsada first baawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\ntrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su\nmai trust bawli\n\nTags- \n\"bhole ka pujari\"\n\"bhole ka pujari song\"\n\"bhole ka pujari haryanvi\"\n\"bhole ka pujari haryanvi song\"\n\"bhole ka pujari masoom sharma\"\n\"masoom sharma\" \n\"masoom sharma song\"\n\"masoom sharma new song\"\n\"masoom sharma all song\"\n\"masoom sharma dj song\"\n\"masoom sharma bhole ke pujari\"\n\"masoom sharma haryanvi kawad song\"\n\"haryanvi song\"\n\"new haryanvi song\"\n\"naryanvi dj song\"\n\"new haryanvi song 2025\"\n\"new haryanvi songs haryanavi 2025\"\n\"haryanvi new song\"\n\"sonotek music\"\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Dj Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Sonotek Music",
                "tags": [
                    "bhole ka pujari",
                    "masoom sharma",
                    "masoom sharma song",
                    "bhole ka pujari masoom sharma song",
                    "kawad song by masoom sharma",
                    "kawad special song massom sharma",
                    "masoom sharma new song",
                    "masoom sharma all songs",
                    "masoom",
                    "masoom sharma kawad song",
                    "masoom sharma latest song",
                    "bhole ka pujari masoom sharma",
                    "bholenath song",
                    "sonotek music",
                    "bhole baba haryanvi song",
                    "haryanvi dj song",
                    "new haryanvi song",
                    "new bhole baba song",
                    "new haryanvi song 2025",
                    "haryanvi song",
                    "masoom sharma ke gane",
                    "hr song"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song",
                    "description": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song | Sonotek Music | Kawad Special Song\n\nSubscribe Us - @sonotekmusic \nMake Your Reels Now :-  https://www.instagram.com/reels/audio/1397480538006550\n\nSonotek Music Presents “Bhole Ka Pujari“ (Official Video) a New Latest Most Popular Haryanvi Songs Haryanavi 2025.New Bhole Baba Song, Haryanvi Dj Song, New Hr Song 2025, Haryanvi Song Starring by Masoom Sharma. This superhit Haryanvi Song Sung by Masoom Sharma. Music given by Pinna Music. Lyrics of this Bholenath Ji Haryanvi song is written by Mp Karsola. Directed By Kuldeep Rathee.  Music label by \"Sonotek Music\"\n\n#masoomsharma #bholekapujari #masoomsharmanewsong #masoom \n#masoomsharmabholekapujari #newharyanvisong #bholenath  #newharyanvisongsharyanavi2025 #haryanvisong #haryanvigane #haryanvidjsong #pinnamusic  #hrsong #sonotekmusic \n\nSong - Bhole Ka Pujari\nSinger - Masoom Sharma\nArtist - Masoom Sharma\nLyrics - Mp Karsola\nMusic - Pinna Music\nComposer - Masoom Sharma\nProject By - Ankit Vij & Yash Thukral \nEditor - Lalit Hudda\nDrone Operator - PDF \nDirected By - Kuldeep Rathee\nPoster - Ratan (Sonotek)\nDigital Work - Roshan Ekma\nLabel - Sonotek Music\n\nLOVE !! LIKE !! COMMENTS !! SUBSCRIBE\n\n♪ Full Song Available On ♪ \n♪ Spotify : https://open.spotify.com/track/6vvPYcNnp101qeETPfamIY?si=6b2d94315ad847ea\n♪ Gaana : https://gaana.com/song/bhole-ka-pujari-10\n♪ Jio Saavn : https://www.jiosaavn.com/song/bhole-ka-pujari/NyAAQCx,A3Q\n♪ Apple Music : https://music.apple.com/us/song/bhole-ka-pujari/1825816750\n♪ Amazon Prime Music : https://music.amazon.com/albums/B0FH6SBX9Y?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_bzzfnI0d5d2827hFb8Clp2JJe\n♪ YouTube Music : https://music.youtube.com/watch?v=2zY-eZ4a59Y&si=BX4uUDfIy9qLGx-w\n\nLyrics -\nHo mera bhola se bhandari\nUski mahima se nyari\nSubeh shyam rattu jau su naam uska\nHoke masti mein choor\nRave bhakti mein choor\nAur bhulu Koni Kade Vi Mai Dhaam Uska\nMai su shivji ka das\nUka dere mein re vaas\nBaba aane konya deve\nKade kasht bawli\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su mai\nTrust bawli re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic.....\n\no japu shambhu shambhu naam\nsidhe hoja sare kaam\nmai toh aau haridwar\njade ganga ji ka dhaam\nse aghoriya ka dera\ntane kuch konya bera\nburi aatma ne kar deve\nnasht bawli\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\n\nMusic....\n\nSe mane triloki te pyaar\nWohe mera sacha yaar\nSunne sab bhakta ki\nJobhi jave se kedar\nWoh se teen lok ka data\nMera Sacha Se Vidhata\nUski Bhakti Mein Aagya\nInterest Bawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath Pe karu su Mai\nTrust Bawli Re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic...\n\nO mera shankar damru wala\nKhole se kismat ka tala\nKare pahada upar tap\nPade jave po ka pala\nChhora mp karsola\nbhole pache hora boda\naaya bhakti mein sun\nsada first baawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\ntrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su\nmai trust bawli\n\nTags- \n\"bhole ka pujari\"\n\"bhole ka pujari song\"\n\"bhole ka pujari haryanvi\"\n\"bhole ka pujari haryanvi song\"\n\"bhole ka pujari masoom sharma\"\n\"masoom sharma\" \n\"masoom sharma song\"\n\"masoom sharma new song\"\n\"masoom sharma all song\"\n\"masoom sharma dj song\"\n\"masoom sharma bhole ke pujari\"\n\"masoom sharma haryanvi kawad song\"\n\"haryanvi song\"\n\"new haryanvi song\"\n\"naryanvi dj song\"\n\"new haryanvi song 2025\"\n\"new haryanvi songs haryanavi 2025\"\n\"haryanvi new song\"\n\"sonotek music\"\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Dj Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT2M44S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "438026",
                "likeCount": "10217",
                "favoriteCount": "0",
                "commentCount": "469"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "sEjiBrbqbfTmhiDn2S9OAg4HFqI",
                "id": "UCFQ9AY7oyEqRS7iVXJLNSmw",
                "snippet": {
                    "title": "Sonotek Music",
                    "description": "\"Music can change the world\". Sonotek Cassettes is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nSonotek Cassettes is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with Sonotek Cassettes",
                    "customUrl": "@sonotekmusic",
                    "publishedAt": "2011-01-29T05:37:23Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Sonotek Music",
                        "description": "\"Music can change the world\". Sonotek Cassettes is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nSonotek Cassettes is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with Sonotek Cassettes"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "aulTEzcAGeqSqVaZFI90DYVGKe0",
            "id": "8-FvwGUZBXM",
            "snippet": {
                "publishedAt": "2025-07-19T05:30:07Z",
                "channelId": "UCD3ib30j29V1jgy4cPh_jxQ",
                "title": "Every Indian in Hotel || Aditi Sharma",
                "description": "Every Indian in Hotel || Aditi Sharma\n\nYoutube Short Channel Link :  \n\nhttps://www.youtube.com/channel/UCmrOZ0rAZzmwfHSaF1AAEJQ\n\nInstagram Link:\n\nhttps://rb.gy/zbihjw \n\nSUBSCRIBE for more videos!\nTurn Notifications on and you will never miss a video again\nThank you for watching!\n\nSOURCES: \nScript By: \n\nAditi Sharma\n\n\nFOLLOW ME ON:\nFacebook: https://rb.gy/zkacdi  \nYouTube: SUBSCRIBE!  https://rb.gy/3bhgo7 \nInstagram: https://rb.gy/zbihjw \n\nCast:\n\nAditi Sharma\nDeepali\nTalim\nShiva\nkritya\n\nEdit By: \n\nAayush Tiwari\n\nShoot By: \n\nNitish Goel\nShivam Sharma\n\nThumbnail:\n\nRaj Sharma\n\nContact me at (     iamaditisharma11@gmail.com     )",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Aditi Sharma",
                "tags": [
                    "school teacher mein aaya chudail || Aditi Sharma",
                    "aditi",
                    "school main bhoot",
                    "bhoot video",
                    "funny video",
                    "comedy video",
                    "scary school",
                    "bhootiya class",
                    "bhootiya school",
                    "bhoot bangla",
                    "Badi Behan vs Choti Behan in Bhoot Bangla",
                    "BHOOT",
                    "HORROR VIDEO",
                    "BHAI BEHAN OR BHOOT",
                    "BHOOT FAMILY",
                    "BHOOT VIDEO",
                    "HORROR HOUSE",
                    "middle class school aur चुड़ैल",
                    "funny witch",
                    "chudail",
                    "horror comedy",
                    "entertainment",
                    "the haunted house",
                    "middle class bhoot",
                    "auto mai bhoot",
                    "bhoot",
                    "school teacher mein aaya Chudail"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Every Indian in Hotel || Aditi Sharma",
                    "description": "Every Indian in Hotel || Aditi Sharma\n\nYoutube Short Channel Link :  \n\nhttps://www.youtube.com/channel/UCmrOZ0rAZzmwfHSaF1AAEJQ\n\nInstagram Link:\n\nhttps://rb.gy/zbihjw \n\nSUBSCRIBE for more videos!\nTurn Notifications on and you will never miss a video again\nThank you for watching!\n\nSOURCES: \nScript By: \n\nAditi Sharma\n\n\nFOLLOW ME ON:\nFacebook: https://rb.gy/zkacdi  \nYouTube: SUBSCRIBE!  https://rb.gy/3bhgo7 \nInstagram: https://rb.gy/zbihjw \n\nCast:\n\nAditi Sharma\nDeepali\nTalim\nShiva\nkritya\n\nEdit By: \n\nAayush Tiwari\n\nShoot By: \n\nNitish Goel\nShivam Sharma\n\nThumbnail:\n\nRaj Sharma\n\nContact me at (     iamaditisharma11@gmail.com     )"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT21M56S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "136493",
                "likeCount": "1130",
                "favoriteCount": "0",
                "commentCount": "51"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "oojpotwUHHhDO5TdpRcNVs40hx0",
                "id": "UCD3ib30j29V1jgy4cPh_jxQ",
                "snippet": {
                    "title": "Aditi Sharma",
                    "description": "Welcome to our family! #ADITISHARMA!\nWe are a family based in New Delhi-India that love to entertain you. We believe in family, fun, Love and are passionate about fashion, comedy, and culture. Our vision is to capture and document real moments and stories happening in a family on a daily basis in a very practical way and post them here. \nCome back for our videos that are posted regularly on the topics of family, love, relationships, wisdom, fun and much more!! \n\nBest of all, we believe everyone is a part of our family, so don’t forget to SUBSCRIBE!!\n\nWe are thankful for your support and we always Love you!\n",
                    "customUrl": "@aditisharma4u",
                    "publishedAt": "2020-09-20T17:13:55.725335Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Aditi Sharma",
                        "description": "Welcome to our family! #ADITISHARMA!\nWe are a family based in New Delhi-India that love to entertain you. We believe in family, fun, Love and are passionate about fashion, comedy, and culture. Our vision is to capture and document real moments and stories happening in a family on a daily basis in a very practical way and post them here. \nCome back for our videos that are posted regularly on the topics of family, love, relationships, wisdom, fun and much more!! \n\nBest of all, we believe everyone is a part of our family, so don’t forget to SUBSCRIBE!!\n\nWe are thankful for your support and we always Love you!\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "Jxjs592-SZkR_dynskVEU4dJjVQ",
            "id": "SRscWBa1OSE",
            "snippet": {
                "publishedAt": "2025-07-18T05:30:08Z",
                "channelId": "UCOsyDsO5tIt-VZ1iwjdQmew",
                "title": "Sabba : Village Flow (Official Video) | Latest Punjabi Songs 2025 | New Punjabi Songs 2025",
                "description": "Straight from the heart of the pind, Sabba drops 'Village Flow', a desi anthem full of pride, passion, and pure Punjabi swag! This isn’t just another track — it’s a celebration of Sabba’s roots and rise.\n\nIs vaar gall sirf beats di nahi – ae taan Sabba Da Lanter ae, jisnu vekh ke poora pind hi nach paeya! 🔥\n\n#punjabimusic #latestpunjabisong #sabbadalanter\n\n\nStreaming Links :\n\nInsta\nhttps://www.instagram.com/reels/audio/1384408396005666\n\nSpotify\nhttps://open.spotify.com/album/7bySaar4oQhsod5QaZrjvV\n\nAmazon Music\nhttps://music.amazon.in/albums/B0FH27Y1LW\n\nApple Music\nhttps://music.apple.com/in/album/village-flow-single/1825339856\n\nGaana\nhttps://gaana.com/album/village-flow\n\nJioSaavn\nhttps://www.jiosaavn.com/album/village-flow/I1Asyr2DoOM_\n\nYouTube Music\nhttps://music.youtube.com/watch?v=SRscWBa1OSE&si=_DpMZ6EdS3CoD55a \n\n\nCredits :\n\nSpeed Records Presents\nSong - Village Flow\nSinger/Composer/Lyrics - Sabba\nMusic - JayB Singh\nDirection/Concept?Screenplay : Sahil Sharma\nPresentation : Meeru\nProducer - Sarabjit Saroya\nDop : Pardeep Potter\nEditor : HC Edittz\nProd. : Sahil Sharma Filmzz (Honey)\nCostume : Rajat Manchanda\nReels Shoot : Jagjit Chak\nDigital Managed By Scope Entertainment\nDigital Promotions By Speed Records Digital\nReel Promotions By Scope Digital\nLabel - Speed Records\n\nLyrics :\nNi baitha mai trakki de mathe ch jhanda gaddke\nNi utte nahio aaya thalle kise de vi laggke\nOh hun mera changa aaya kehnde pair chhad gya\nNi jehde maade time ch gye si hath chhadke\nOh lanka nahio dhayi bhave bheti aa harek de\nNi mere saale kinne hi jo bahre pye aa hate de\nNi bahoteya de rang udd janda kude face to\nNi charno da dohta baitha gaddi vich vekhke\nHo vekhi mardanya eh rang kartar de\nOh aap mar jande jehde doojeya nu maarde\nHo bahn jihdi fadi hove neeli Chhatt wale ne\nNi kitho sutt hona a laler nehri taarke\nOh chhetti hath aunde nahio uchiya udariyaan\nNi reejh na pugaiye asi vair nale yaariyan\nOh vairi voori vekhke badak maar dyidi\nNi kudi jandi vekh kde whistlaan ni maariyan\nNi gabhru rakaane bebe bapu ji to baahre na\nNa saade kolo vaade hone lagne ve laare na\nNi tere kolo main vi tere maa-pe charwaune na\nTe mere kolo ranjhe wangu pashu jaane chaare na\nNa dil to greeb bhave bhute na ameer ni\nAa jehde nal bhai kathi kri na mandeer ni\nNi susti na nede tede mitran de laggdi \nNi 24 ghante lor vich rehnda ae sareer ni\nNi bhaiyan te yakeen security jeyo z te\nHo bade dil lutte akh mittraa di red ne\nHo dabb nal lgga jo rakaane 30 bore da\nFlower bna dewe bhaida eh forehead te\nNa nimm jehe lot aune mitthi teri talk to\nNa pighluga dil eh jwaani teri hot to\nDass fer sher da ni rutba ki reh gya\nJe oh vi gya pattya rakaane cat walk to\nOh zindgi nu reejha nal maande aa baithke\nKoi chakkr ni meeru bai khada jado back te\nHo asi befikre 9 10 vje sojiye\nNi sathon gallan adhi raat honiya ni chat te\nNi chattya ni kde v yaara ne billo thukk ke\nOh jo vi kita shar-e-aam kreya ni lukk ke\nOh Kayi saale raula pake kehn asi ki aa\nTe sara kujh dssya ae mittra di chupp ne\nJo tappde aa salya nu shittra di ghaat ni\nOh fer vekhi baith jaane sara chupp chaap ni\nOhh kehnde ne ke saade naalo vadda koi vaily ni\nTe Dhaai saah ne ch*** de utte bhora maas ni\nNeet saaf rabb ne vi kujh ni lakoya kude\nTension ni len koi dinda bai saroya kude\nDhannwaad karda va saareya da dil to\nHaaye pauna si punjab kattha lentar te hoya kude\nHo dunia ta jitti baitha hun kithe haar da\nJhool jhool ture kude pota jagtar da\nOh jihna hun takk aukh vich hi aa kattli\nNi maapeya nu geda mai lwauna ik bahar da\nHo guru ghar jaake bhala sareyaa da mangda\nHo adhi cho vi adhi cheej doojeya na vand da\nHo mai ni kehnda rabb bahla deyi jawe menu\nJinna mera banda onna hi ohto mangda\n\n\nLike || Share || Spread || Love \n  \nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords \n\nSpeed Records Haryanvi\nYoutube: https://bit.ly/2kSrhZK\nInstagram: https://www.instagram.com/speedharyanviofficial \n\nSpeed Records Bhojpuri - \nYoutube: https://bit.ly/2y8HSez\nInstagram: https://bit.ly/2xM2WYL\nSnapchat: https://www.snapchat.com/add/speedbhojpuri\n\nOops TV -\nOops TV Facebook Link - https://m.facebook.com/oopstvfun/\n\nPoon Poon - \nSnapchat - https://www.snapchat.com/add/poonpoon0001\nYoutube - http://bitly.com/2hwYOnx\nFacebook - https://www.facebook.com/officialpoonpoon\nInstagram - https://instagram.com/poonpoonofficial",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Speed Records",
                "tags": [
                    "punjabi music",
                    "punjabi latest music",
                    "punjabi latest songs",
                    "punjabi romantic songs",
                    "punjabi sad songs",
                    "latest punjabi songs 2025",
                    "speed records",
                    "hit punjabi songs",
                    "New punjabi songs 2025",
                    "All new punjabi songs 2025",
                    "Hit punjabi song",
                    "punjabi new song",
                    "punjabi new movie",
                    "sabba new song",
                    "sabba all song",
                    "sabba new song all",
                    "sabba new song 2025",
                    "village flow sabba",
                    "village flow sabba new song",
                    "village flow",
                    "village flow song",
                    "new song",
                    "new latest song",
                    "sabba da lanter"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Sabba : Village Flow (Official Video) | Latest Punjabi Songs 2025 | New Punjabi Songs 2025",
                    "description": "Straight from the heart of the pind, Sabba drops 'Village Flow', a desi anthem full of pride, passion, and pure Punjabi swag! This isn’t just another track — it’s a celebration of Sabba’s roots and rise.\n\nIs vaar gall sirf beats di nahi – ae taan Sabba Da Lanter ae, jisnu vekh ke poora pind hi nach paeya! 🔥\n\n#punjabimusic #latestpunjabisong #sabbadalanter\n\n\nStreaming Links :\n\nInsta\nhttps://www.instagram.com/reels/audio/1384408396005666\n\nSpotify\nhttps://open.spotify.com/album/7bySaar4oQhsod5QaZrjvV\n\nAmazon Music\nhttps://music.amazon.in/albums/B0FH27Y1LW\n\nApple Music\nhttps://music.apple.com/in/album/village-flow-single/1825339856\n\nGaana\nhttps://gaana.com/album/village-flow\n\nJioSaavn\nhttps://www.jiosaavn.com/album/village-flow/I1Asyr2DoOM_\n\nYouTube Music\nhttps://music.youtube.com/watch?v=SRscWBa1OSE&si=_DpMZ6EdS3CoD55a \n\n\nCredits :\n\nSpeed Records Presents\nSong - Village Flow\nSinger/Composer/Lyrics - Sabba\nMusic - JayB Singh\nDirection/Concept?Screenplay : Sahil Sharma\nPresentation : Meeru\nProducer - Sarabjit Saroya\nDop : Pardeep Potter\nEditor : HC Edittz\nProd. : Sahil Sharma Filmzz (Honey)\nCostume : Rajat Manchanda\nReels Shoot : Jagjit Chak\nDigital Managed By Scope Entertainment\nDigital Promotions By Speed Records Digital\nReel Promotions By Scope Digital\nLabel - Speed Records\n\nLyrics :\nNi baitha mai trakki de mathe ch jhanda gaddke\nNi utte nahio aaya thalle kise de vi laggke\nOh hun mera changa aaya kehnde pair chhad gya\nNi jehde maade time ch gye si hath chhadke\nOh lanka nahio dhayi bhave bheti aa harek de\nNi mere saale kinne hi jo bahre pye aa hate de\nNi bahoteya de rang udd janda kude face to\nNi charno da dohta baitha gaddi vich vekhke\nHo vekhi mardanya eh rang kartar de\nOh aap mar jande jehde doojeya nu maarde\nHo bahn jihdi fadi hove neeli Chhatt wale ne\nNi kitho sutt hona a laler nehri taarke\nOh chhetti hath aunde nahio uchiya udariyaan\nNi reejh na pugaiye asi vair nale yaariyan\nOh vairi voori vekhke badak maar dyidi\nNi kudi jandi vekh kde whistlaan ni maariyan\nNi gabhru rakaane bebe bapu ji to baahre na\nNa saade kolo vaade hone lagne ve laare na\nNi tere kolo main vi tere maa-pe charwaune na\nTe mere kolo ranjhe wangu pashu jaane chaare na\nNa dil to greeb bhave bhute na ameer ni\nAa jehde nal bhai kathi kri na mandeer ni\nNi susti na nede tede mitran de laggdi \nNi 24 ghante lor vich rehnda ae sareer ni\nNi bhaiyan te yakeen security jeyo z te\nHo bade dil lutte akh mittraa di red ne\nHo dabb nal lgga jo rakaane 30 bore da\nFlower bna dewe bhaida eh forehead te\nNa nimm jehe lot aune mitthi teri talk to\nNa pighluga dil eh jwaani teri hot to\nDass fer sher da ni rutba ki reh gya\nJe oh vi gya pattya rakaane cat walk to\nOh zindgi nu reejha nal maande aa baithke\nKoi chakkr ni meeru bai khada jado back te\nHo asi befikre 9 10 vje sojiye\nNi sathon gallan adhi raat honiya ni chat te\nNi chattya ni kde v yaara ne billo thukk ke\nOh jo vi kita shar-e-aam kreya ni lukk ke\nOh Kayi saale raula pake kehn asi ki aa\nTe sara kujh dssya ae mittra di chupp ne\nJo tappde aa salya nu shittra di ghaat ni\nOh fer vekhi baith jaane sara chupp chaap ni\nOhh kehnde ne ke saade naalo vadda koi vaily ni\nTe Dhaai saah ne ch*** de utte bhora maas ni\nNeet saaf rabb ne vi kujh ni lakoya kude\nTension ni len koi dinda bai saroya kude\nDhannwaad karda va saareya da dil to\nHaaye pauna si punjab kattha lentar te hoya kude\nHo dunia ta jitti baitha hun kithe haar da\nJhool jhool ture kude pota jagtar da\nOh jihna hun takk aukh vich hi aa kattli\nNi maapeya nu geda mai lwauna ik bahar da\nHo guru ghar jaake bhala sareyaa da mangda\nHo adhi cho vi adhi cheej doojeya na vand da\nHo mai ni kehnda rabb bahla deyi jawe menu\nJinna mera banda onna hi ohto mangda\n\n\nLike || Share || Spread || Love \n  \nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords \n\nSpeed Records Haryanvi\nYoutube: https://bit.ly/2kSrhZK\nInstagram: https://www.instagram.com/speedharyanviofficial \n\nSpeed Records Bhojpuri - \nYoutube: https://bit.ly/2y8HSez\nInstagram: https://bit.ly/2xM2WYL\nSnapchat: https://www.snapchat.com/add/speedbhojpuri\n\nOops TV -\nOops TV Facebook Link - https://m.facebook.com/oopstvfun/\n\nPoon Poon - \nSnapchat - https://www.snapchat.com/add/poonpoon0001\nYoutube - http://bitly.com/2hwYOnx\nFacebook - https://www.facebook.com/officialpoonpoon\nInstagram - https://instagram.com/poonpoonofficial"
                },
                "defaultAudioLanguage": "pa"
            },
            "contentDetails": {
                "duration": "PT2M51S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1194635",
                "likeCount": "52833",
                "favoriteCount": "0",
                "commentCount": "2931"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "fTWyDJmLlBIFIUJ8kVDV48DN6Y4",
                "id": "UCOsyDsO5tIt-VZ1iwjdQmew",
                "snippet": {
                    "title": "Speed Records",
                    "description": "Speed Records, the biggest Punjabi Music Record label in the world combining feet tapping tunes accompanied with vibrant voices as the identifier of Punjabi culture. With best of artistes in Punjabi Music and a huge repertoire of hits, this is your one stop destination for Punjabi Music!\n\nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords\nWebsite - http://www.speedrecordsworld.com/",
                    "customUrl": "@speedrecords",
                    "publishedAt": "2012-11-22T10:36:15Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Speed Records",
                        "description": "Speed Records, the biggest Punjabi Music Record label in the world combining feet tapping tunes accompanied with vibrant voices as the identifier of Punjabi culture. With best of artistes in Punjabi Music and a huge repertoire of hits, this is your one stop destination for Punjabi Music!\n\nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords\nWebsite - http://www.speedrecordsworld.com/"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "72flWWcUIYyF2674o_WXg_UCc_g",
            "id": "EW4PcyuFMfo",
            "snippet": {
                "publishedAt": "2025-07-14T05:30:07Z",
                "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/maxresdefault.jpg",
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
                    "dil pe chalai churiya trending version",
                    "dil pe chalai churiya raju kalakkar",
                    "dil pe chalai churiya anjali",
                    "dil pe chalai churiya dj",
                    "dil pe chalai churiya song sonu nigam",
                    "dil pe chalai churiya raju kalakar",
                    "dil pe chalai churiya song raju",
                    "raju kalakar dil pe chalai churiya",
                    "tune dil ke rakibo sang song",
                    "anajli arora dil pe chalai churiya",
                    "rajan dil pe chalai churiya",
                    "dil pe chalai churiya"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                    "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT4M1S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "16630911",
                "likeCount": "649817",
                "favoriteCount": "0",
                "commentCount": "31683"
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
        }
    ],
    "Music": [
        {
            "kind": "youtube#video",
            "etag": "72flWWcUIYyF2674o_WXg_UCc_g",
            "id": "EW4PcyuFMfo",
            "snippet": {
                "publishedAt": "2025-07-14T05:30:07Z",
                "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/maxresdefault.jpg",
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
                    "dil pe chalai churiya trending version",
                    "dil pe chalai churiya raju kalakkar",
                    "dil pe chalai churiya anjali",
                    "dil pe chalai churiya dj",
                    "dil pe chalai churiya song sonu nigam",
                    "dil pe chalai churiya raju kalakar",
                    "dil pe chalai churiya song raju",
                    "raju kalakar dil pe chalai churiya",
                    "tune dil ke rakibo sang song",
                    "anajli arora dil pe chalai churiya",
                    "rajan dil pe chalai churiya",
                    "dil pe chalai churiya"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                    "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT4M1S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "16630911",
                "likeCount": "649817",
                "favoriteCount": "0",
                "commentCount": "31683"
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
            "etag": "9JUTFvrJxmW7DCKLNqde48TXGu8",
            "id": "2qCpY38ompo",
            "snippet": {
                "publishedAt": "2025-07-11T12:29:04Z",
                "channelId": "UCBnxEdpoZwstJqC1yZpOjRA",
                "title": "Monica - Lyric Video| COOLIE | Superstar Rajinikanth | Sun Pictures | Lokesh | Anirudh | Pooja Hegde",
                "description": "Presenting the second single 'Monica ' lyrical video from Superstar Rajinikanth's #COOLIE\nDirected By Lokesh Kanagaraj & Music By Anirudh. \n\nListen to the \"Monica\" on your favourite Streaming Platforms: https://orcd.co/monicacoolie\n\n\n#MonicaLyricVideo #Coolie #SuperstarRajinikanth #SunPictures #LokeshKanagaraj #Anirudh #PoojaHegde #cooliesecondsingle #cooliesong #cooliemovie #cooliemusicvideo #cooliedisco #cooliesongvideo\n-------------------------------------------------\nSong Title : Monica\nAlbum / Movie : Coolie\nComposed by Anirudh Ravichander\nLyrics - Vishnu Edavan\nVocals - Sublahshini, Anirudh Ravichander, Rap by Asal Kolaar\n\nComposed, Arranged & Programmed by Anirudh Ravichander\nRhythm Produced by Kalyan, Karthik Vamsi\nAdditional Rhythm Programmed by Shashank Vijay\nAdditional Music Programmed by Nivin Raphael, Arish\nMuga Veenai - D.Balasubramani\nMusic Advisor - Ananthakrrishnan\nCreative Consultant - Sajith Satya\nSession Assistant - Shivakiran S\n\nRecorded at \nAlbuquerque Records, Chennai. Engineered by Shivakiran S, Rajesh Kannan\nMixed by Vinay Sridhar & Srinivasan M at Albuquerque Records, Chennai\nMastered by Mastered by Rupendar Venkatesh at Mix Magic\nMusic Coordinator - Velavan B\n—---------------\nTrack Lyrics:: \n\nMonica\n\nMonica Belluci\nErangi\nVandhachi\n\nKadale kondhalikum\nTsunamiye undachi\n\nMonica Belluci\nEthita\nEnergy \n\nThalaye suthaveikum\nSooravali Ponnachi\n\nPattunu paathale\nPulse ethum body\nKoduva meenellam koothadumey\n\nIrava colorakum\nJilebi lady\nSaltum naa thotta sweetagumey\n\nMonica \nMy dear Monica\nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nSikkikichu ma\n\nMonica \nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nPathikichu ma\n\nRap :\n\nEnna tholayavekkiriye \nKonjo kolayaveikiriye \nPagal kanavulaye \nunna adaya vaikuriye \n\nManal gadikaara idaiye \nManam korangaagum padiye \nEn aranerigalaye \nNee uri adikuriye \n\nUn vadivam oru classic \nAdha paaka aavudhu traffic \nOru unma solluren(vena vena )\nSari konjo solluren ma\nEnaku\n\nSothu pathu vandha \nMaathiduren undha \nPathalana maasa maasam katturen sandhaa\n\nUrasama\nPathikavaka\nUdhatoram \nThithikava\nIrukadha \nOthayila \nOthayila\n\nOruvatti\nSandhikava\nMayangatti\nThandikava\nThayangathe\nMethayila\nMethayila\n\nSaavum nerathil\nPolambi alugathe\nPooja aatathil\nInnocent aanathola\n\nVarumay kolathil\nNermai paakatha\nIlamay kalathil\nDecency nalla illa\n\nNilava Sevapakum\nThanjavoor kari\nManasa rendaki varava killa\n\nIrumba karumbakum \nPappali lorry\nBaasha kaipaatu kavudhenmella\n\nMonica \nMy dear Monica\nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nSikkikichu ma\n\nMonica \nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nPathikichu ma\n\nMonica \nMy dear\n\nMonica \nMy dear",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2qCpY38ompo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2qCpY38ompo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2qCpY38ompo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2qCpY38ompo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2qCpY38ompo/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Sun TV",
                "tags": [
                    "monica full song",
                    "monica song promo",
                    "monica song",
                    "Pooja Hegde",
                    "coolie songs",
                    "coolie movie songs",
                    "Coolie movie",
                    "Thalaivar Rajinikanth",
                    "coolie song video",
                    "rajinikanth songs",
                    "sun pictures",
                    "superstar rajinikanth",
                    "lokesh kanagaraj",
                    "anirudh musical",
                    "Anirudh songs",
                    "coolie teaser reaction",
                    "coolie teaser tamil",
                    "coolie rajinikanth",
                    "monica coolie movie",
                    "coolie movie monica song",
                    "monica tamil movie song",
                    "Monica Lyric Video",
                    "Monica Video Song",
                    "Monika Video Song"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Monica - Lyric Video| COOLIE | Superstar Rajinikanth | Sun Pictures | Lokesh | Anirudh | Pooja Hegde",
                    "description": "Presenting the second single 'Monica ' lyrical video from Superstar Rajinikanth's #COOLIE\nDirected By Lokesh Kanagaraj & Music By Anirudh. \n\nListen to the \"Monica\" on your favourite Streaming Platforms: https://orcd.co/monicacoolie\n\n\n#MonicaLyricVideo #Coolie #SuperstarRajinikanth #SunPictures #LokeshKanagaraj #Anirudh #PoojaHegde #cooliesecondsingle #cooliesong #cooliemovie #cooliemusicvideo #cooliedisco #cooliesongvideo\n-------------------------------------------------\nSong Title : Monica\nAlbum / Movie : Coolie\nComposed by Anirudh Ravichander\nLyrics - Vishnu Edavan\nVocals - Sublahshini, Anirudh Ravichander, Rap by Asal Kolaar\n\nComposed, Arranged & Programmed by Anirudh Ravichander\nRhythm Produced by Kalyan, Karthik Vamsi\nAdditional Rhythm Programmed by Shashank Vijay\nAdditional Music Programmed by Nivin Raphael, Arish\nMuga Veenai - D.Balasubramani\nMusic Advisor - Ananthakrrishnan\nCreative Consultant - Sajith Satya\nSession Assistant - Shivakiran S\n\nRecorded at \nAlbuquerque Records, Chennai. Engineered by Shivakiran S, Rajesh Kannan\nMixed by Vinay Sridhar & Srinivasan M at Albuquerque Records, Chennai\nMastered by Mastered by Rupendar Venkatesh at Mix Magic\nMusic Coordinator - Velavan B\n—---------------\nTrack Lyrics:: \n\nMonica\n\nMonica Belluci\nErangi\nVandhachi\n\nKadale kondhalikum\nTsunamiye undachi\n\nMonica Belluci\nEthita\nEnergy \n\nThalaye suthaveikum\nSooravali Ponnachi\n\nPattunu paathale\nPulse ethum body\nKoduva meenellam koothadumey\n\nIrava colorakum\nJilebi lady\nSaltum naa thotta sweetagumey\n\nMonica \nMy dear Monica\nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nSikkikichu ma\n\nMonica \nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nPathikichu ma\n\nRap :\n\nEnna tholayavekkiriye \nKonjo kolayaveikiriye \nPagal kanavulaye \nunna adaya vaikuriye \n\nManal gadikaara idaiye \nManam korangaagum padiye \nEn aranerigalaye \nNee uri adikuriye \n\nUn vadivam oru classic \nAdha paaka aavudhu traffic \nOru unma solluren(vena vena )\nSari konjo solluren ma\nEnaku\n\nSothu pathu vandha \nMaathiduren undha \nPathalana maasa maasam katturen sandhaa\n\nUrasama\nPathikavaka\nUdhatoram \nThithikava\nIrukadha \nOthayila \nOthayila\n\nOruvatti\nSandhikava\nMayangatti\nThandikava\nThayangathe\nMethayila\nMethayila\n\nSaavum nerathil\nPolambi alugathe\nPooja aatathil\nInnocent aanathola\n\nVarumay kolathil\nNermai paakatha\nIlamay kalathil\nDecency nalla illa\n\nNilava Sevapakum\nThanjavoor kari\nManasa rendaki varava killa\n\nIrumba karumbakum \nPappali lorry\nBaasha kaipaatu kavudhenmella\n\nMonica \nMy dear Monica\nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nSikkikichu ma\n\nMonica \nLove u monica\nBabyma\nMonica\n\nKichukichu ma\nPathikichu ma\n\nMonica \nMy dear\n\nMonica \nMy dear"
                },
                "defaultAudioLanguage": "ta"
            },
            "contentDetails": {
                "duration": "PT3M35S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "22391375",
                "likeCount": "490301",
                "favoriteCount": "0",
                "commentCount": "18482"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "UrcxAlJ1zUiDkvmiVcOFgWpd-Ds",
                "id": "UCBnxEdpoZwstJqC1yZpOjRA",
                "snippet": {
                    "title": "Sun TV",
                    "description": "Welcome to the official YouTube channel of Sun TV - Your one-stop YouTube channel to watch Tamil Movie Videos, Movie Songs, Full Serials & Promos of latest releases, and more.\n\nClick here to subscribe to the channel - http://bit.ly/2LlCQnT\n\nFor movie-related videos from SunNXT - http://bit.ly/2H2R0Gz\n\nFollow Us On Our Official Social Media Pages:\nFacebook: https://www.facebook.com/SunTV\nTwitter: https://twitter.com/SunTV\nInstagram: https://www.instagram.com/suntv",
                    "customUrl": "@suntv",
                    "publishedAt": "2016-02-26T05:18:18Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kdFSFaUrMKl1-R4r1J2XUBvWPTZJfUTCD4Y16SSczWCP4=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kdFSFaUrMKl1-R4r1J2XUBvWPTZJfUTCD4Y16SSczWCP4=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kdFSFaUrMKl1-R4r1J2XUBvWPTZJfUTCD4Y16SSczWCP4=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Sun TV",
                        "description": "Welcome to the official YouTube channel of Sun TV - Your one-stop YouTube channel to watch Tamil Movie Videos, Movie Songs, Full Serials & Promos of latest releases, and more.\n\nClick here to subscribe to the channel - http://bit.ly/2LlCQnT\n\nFor movie-related videos from SunNXT - http://bit.ly/2H2R0Gz\n\nFollow Us On Our Official Social Media Pages:\nFacebook: https://www.facebook.com/SunTV\nTwitter: https://twitter.com/SunTV\nInstagram: https://www.instagram.com/suntv"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "rqJ-ozPkIKJFRvnpj5FEzsDknWc",
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
                "viewCount": "5969650",
                "likeCount": "316315",
                "favoriteCount": "0",
                "commentCount": "12762"
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
            "etag": "wCWaQbOjpM7uIWlvDEqnabW74Lw",
            "id": "I5iCw4CIpAU",
            "snippet": {
                "publishedAt": "2025-07-15T07:30:07Z",
                "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                "title": "6 AM (Official Video): YO YO HONEY SINGH | HEERA SOHAL | GLORY | BHUSHAN KUMAR",
                "description": "Presenting the Official Video Song \"6 AM\", the most demanded song from the Album \"Glory\" by Yo Yo Honey Singh.\n\nGulshan Kumar & T-Series Present\nBhushan Kumar's \"6 AM (Official Video)\"\n\n#6AM #YoYoHoneySingh #Glory \n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/3Mgrwa4\nSpotify: https://bit.ly/3yQNqxs\nApple Music: https://bit.ly/4fVLQer\nGaana: https://bit.ly/4fTnPEX\nAmazon Prime Music: https://bit.ly/3X0MNcT\nYouTube Music: https://bit.ly/473h7Il\n\nCredits:\nSong: 6 AM\nSinger: Yo Yo Honey Singh \nStarring: Yo Yo Honey Singh & Heera Sohal\nLyrics: Leo Grewal \nMusic - Yo Yo Honey Singh \nRecorded at Mosiqi Studios and LPME Studios, Dubai.\nMastered by - Hommiee Dilliwala\nMixing by -  Vinod Verma\nMusic Label - T-Series\n\nVideo Credits\nDirected by: Mihir Gulati\nStory & Screenplay: Yo Yo Honey Singh\nDirector of Photography: Abhimanyu Sengupta\nEdited by: Hitesh Chandwani (Frogalised Productions)\nAssistant Director: Hitesh Chandwani & PU Rohit \nLine Production: Naushad Ahmed\nProduction House: Frogalised Productions \nDigital Strategy & Marketing: Rajdeep Mayer\n\nPost & Production\nAssistant Editor: PU Rohit\nAssistant Cameraman: Abdul Razak\nFocus Puller: Ali Murad\nPoster and Artwork: RDM Media\nUnit Production Manager & Casting Coordinator: Aqsa Ghazanfar \nProduction Manager:  Jashan Dubai\nLocation manager: Syed Afzal \nEquipment and Crew: Action Filmz \nColor Studio : The Post Brothers\nColorist : Ercan Kucuk\nColor Producer : Ertug Ozturk\n\nMakeup \nYo Yo Honey Singh’ Make-up  : Shasia Sethi \nHeera Sohal’s Make- up: Madiha Qaiser\nHeera Sohal’s Hair : Ibrahim\n\nYYHS Team\nRohit Chhabra \nShubham Gupta\nInternational Management: Passant Shams Ell Dean\n\nWardrobe Stylist (YYHS & Heera Sohal) : Akanksha Bhakoo\nAssistant Stylist : Annie Gulati\nYYHS Wardrobe : Sameer Madaan, Palve\nHeera Wardrobe : Aroka, MVRI, Fad, House of Reine, Vaidaan\n\nBTS & Stills: Bilal Riaz\n\nTailor team: Abbas \nCatering: Avec Events \nShoffer driver: Yuvraj Sahani\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/I5iCw4CIpAU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/I5iCw4CIpAU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/I5iCw4CIpAU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/I5iCw4CIpAU/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/I5iCw4CIpAU/maxresdefault.jpg",
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
                    "6 am full song",
                    "6 am full video song",
                    "yo yo honey singh 6 am song",
                    "honey singh new song",
                    "6 am full song video",
                    "6 am honey singh song video",
                    "6 am video song",
                    "honey singh 6 am rap",
                    "yo yo honey singh 6 am video",
                    "honey singh 6 am song",
                    "6 am rap honey singh",
                    "yo yo honey singh 6 am",
                    "honey singh 6 am",
                    "yo yo honey singh 6am song",
                    "honey singh 6 am full song",
                    "yo yo honey singh songs",
                    "6 am",
                    "honey singh"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "6 AM (Official Video): YO YO HONEY SINGH | HEERA SOHAL | GLORY | BHUSHAN KUMAR",
                    "description": "Presenting the Official Video Song \"6 AM\", the most demanded song from the Album \"Glory\" by Yo Yo Honey Singh.\n\nGulshan Kumar & T-Series Present\nBhushan Kumar's \"6 AM (Official Video)\"\n\n#6AM #YoYoHoneySingh #Glory \n\n♪Full Song Available on♪ \nJioSaavn: https://bit.ly/3Mgrwa4\nSpotify: https://bit.ly/3yQNqxs\nApple Music: https://bit.ly/4fVLQer\nGaana: https://bit.ly/4fTnPEX\nAmazon Prime Music: https://bit.ly/3X0MNcT\nYouTube Music: https://bit.ly/473h7Il\n\nCredits:\nSong: 6 AM\nSinger: Yo Yo Honey Singh \nStarring: Yo Yo Honey Singh & Heera Sohal\nLyrics: Leo Grewal \nMusic - Yo Yo Honey Singh \nRecorded at Mosiqi Studios and LPME Studios, Dubai.\nMastered by - Hommiee Dilliwala\nMixing by -  Vinod Verma\nMusic Label - T-Series\n\nVideo Credits\nDirected by: Mihir Gulati\nStory & Screenplay: Yo Yo Honey Singh\nDirector of Photography: Abhimanyu Sengupta\nEdited by: Hitesh Chandwani (Frogalised Productions)\nAssistant Director: Hitesh Chandwani & PU Rohit \nLine Production: Naushad Ahmed\nProduction House: Frogalised Productions \nDigital Strategy & Marketing: Rajdeep Mayer\n\nPost & Production\nAssistant Editor: PU Rohit\nAssistant Cameraman: Abdul Razak\nFocus Puller: Ali Murad\nPoster and Artwork: RDM Media\nUnit Production Manager & Casting Coordinator: Aqsa Ghazanfar \nProduction Manager:  Jashan Dubai\nLocation manager: Syed Afzal \nEquipment and Crew: Action Filmz \nColor Studio : The Post Brothers\nColorist : Ercan Kucuk\nColor Producer : Ertug Ozturk\n\nMakeup \nYo Yo Honey Singh’ Make-up  : Shasia Sethi \nHeera Sohal’s Make- up: Madiha Qaiser\nHeera Sohal’s Hair : Ibrahim\n\nYYHS Team\nRohit Chhabra \nShubham Gupta\nInternational Management: Passant Shams Ell Dean\n\nWardrobe Stylist (YYHS & Heera Sohal) : Akanksha Bhakoo\nAssistant Stylist : Annie Gulati\nYYHS Wardrobe : Sameer Madaan, Palve\nHeera Wardrobe : Aroka, MVRI, Fad, House of Reine, Vaidaan\n\nBTS & Stills: Bilal Riaz\n\nTailor team: Abbas \nCatering: Avec Events \nShoffer driver: Yuvraj Sahani\n\nDownload Song Beat: https://bit.ly/3Cjh24R \n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT3M44S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "15718431",
                "likeCount": "561577",
                "favoriteCount": "0",
                "commentCount": "34458"
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
            "etag": "d8EydMPjq1EqdOebacFtAoG0Wak",
            "id": "NsUqPzdkFTY",
            "snippet": {
                "publishedAt": "2025-07-04T12:06:03Z",
                "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
                "title": "Viral Vayyari (Telugu) Lyrical Video | Junior Movie | Kireeti, Sreeleela | Radha Krishna | DSP",
                "description": "Watch & Enjoy Viral Vayyari Lyrical Video Song from the Movie Junior.\n\nSong Details:\nSong Name: Viral Vayyari\nLyrics: Kalyan Chakravarthy  \nSinger: Haripriya & DSP\nMusic: Devi Sri Prasad\n\nMusicians Credits:\nKeyboards: Vikas Badisa   \nRhythm: Kalyan \nFrets: Subhani\nChorus: Aravind Srinivas, Shenbagaraj, Narayanan Ravishankar, Shridhar Ramesh\nSong Mixed & Mastered By A. Uday Kumar @ \"DSP Studios - Chennai\"\nSong Recorded By A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi.\nVocal Supervision: S.P. Abhishek\nOrchestra In-charge: Murugan \nStudio Asst: Pugalendhi, Bharat & V Dhinakaran \nAlbum Co-ordinator: B. Manikandan\n\nMovie Details:\n\nMovie Name: Junior\nCast: Kireeti, Sreeleela, V. Ravi Chandran, Genelia, Rao Ramesh, Sudharani, Achyuth Kumar, Satya, Viva Harsha\nBanner: Vaaraahi Chalana Chitram\nPresented by: Sai Sivani\nProducer: Rajani Korrapati\nA Sai Korrapati Production\nWritten & Directed by: Radha Krishna Reddy\nMusic: Devi Sri Prasad\nCinematographer: K. K. Senthil Kumar (ISC)\nProduction Design: Avinash Kolla\nEditor: Niranjan Devaramane\nDialogue Writer: Kalyanachakravarthy Tripuraneni\nChoreographer: Revanth Gollamandala\nAction: Peter Hein, Venkat\nCo-director: Rakesh Srinivas\nVFX Supervisors: Raghava Thammareddy\nCostume Designers: Neeta Lulla, Aswin Mawle, Hassan Khan, Srimukhi Mekala\nPublicity Designers: Siva Kiran\nPRO: Vamsi-Shekar\nLine Producer: Prasad Rao Mula\nDI & Sound Design: Annapurna Studios\nLyrical Video By: Sabari (Chennai)\nAssistant Editor: Raghu Kiran Devisetti\nAudio on: Aditya Music\n\n🎵Full Song Available on👉 :- \nInstagram - https://tinyurl.com/y576wrd5\nSpotify - https://shorturl.at/jkD16\nYT Music -  https://tinyurl.com/56nbp9mv\nAmazon Music -   https://shorturl.at/rqyKm\nGaana - https://shorturl.at/MuPOQ\nJio Saavn - https://shorturl.at/Vv955\nApple Music - https://shorturl.at/c398B\n\n#Viralvayyarisong #Juniormovie #Kireeti #Sreeleela #Sreeleelasongs #Devisriprasad #Dsp #Dspsongs #Telugusongs #Telugunewsongs #Newsongstelugu #Latesttelugusongs #Telugusongs2025 #Telugupartysongs #Adityamusic\n------------------------------------------------------------------------------------------\nEnjoy and stay connected with us!!\n►Subscribe us on Youtube: http://bit.ly/adityamusic\n►Like us on Facebook: http://www.facebook.com/adityamusic\n►Follow us on Twitter: http://www.twitter.com/adityamusic\n►Follow us on Instagram: https://www.instagram.com/adityamusicindia\n►Follow us on LinkedIn: http://bit.ly/2Pp6ze3\n\nSUBSCRIBE Aditya Music Channels for unlimited entertainment:\n►For South Indian Dubbed Movies in HD: http://www.youtube.com/Adityamovies\n►For Songs with Telugu Lyrics: https://bit.ly/3cpQuFH\n►For Devotional Songs: http://www.youtube.com/AdityaDevotional\n\n→\"మా పాట మీ నోట\" Telugu Lyrical Songs https://www.youtube.com/@mapaatameenota\n→Fresh Arrivals - https://bit.ly/4cPYetG\n→Telugu Full Video Songs - https://bit.ly/4cQIRB6\n→Party Mix Telugu Songs - https://bit.ly/3X9kx82\n\n© 2025 Aditya Music India Pvt. Ltd.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/NsUqPzdkFTY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/NsUqPzdkFTY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/NsUqPzdkFTY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/NsUqPzdkFTY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/NsUqPzdkFTY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Aditya Music",
                "tags": [
                    "Viral Vayyari Song",
                    "Junior Movie 2025",
                    "Junior Movie Song",
                    "Junior Movie Songs Telugu",
                    "Kireeti Junior Movie",
                    "Kireeti Junior Movie Songs",
                    "Kireeti Junior",
                    "Sreeleela Songs",
                    "Sreeleela Movies",
                    "Devi Sri Prasad Hit Songs",
                    "Telugu Songs",
                    "Telugu New Songs",
                    "Telugu Lyrics Songs",
                    "Telugu Lyrical Songs",
                    "Telugu Video Songs",
                    "Telugu Video Songs New",
                    "Latest Telugu Songs",
                    "Telugu Latest Songs",
                    "New Songs Telugu",
                    "New Movie Songs Telugu",
                    "Telugu Beats Songs",
                    "Telugu Songs Download",
                    "Aditya Music"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Viral Vayyari (Telugu) Lyrical Video | Junior Movie | Kireeti, Sreeleela | Radha Krishna | DSP",
                    "description": "Watch & Enjoy Viral Vayyari Lyrical Video Song from the Movie Junior.\n\nSong Details:\nSong Name: Viral Vayyari\nLyrics: Kalyan Chakravarthy  \nSinger: Haripriya & DSP\nMusic: Devi Sri Prasad\n\nMusicians Credits:\nKeyboards: Vikas Badisa   \nRhythm: Kalyan \nFrets: Subhani\nChorus: Aravind Srinivas, Shenbagaraj, Narayanan Ravishankar, Shridhar Ramesh\nSong Mixed & Mastered By A. Uday Kumar @ \"DSP Studios - Chennai\"\nSong Recorded By A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi.\nVocal Supervision: S.P. Abhishek\nOrchestra In-charge: Murugan \nStudio Asst: Pugalendhi, Bharat & V Dhinakaran \nAlbum Co-ordinator: B. Manikandan\n\nMovie Details:\n\nMovie Name: Junior\nCast: Kireeti, Sreeleela, V. Ravi Chandran, Genelia, Rao Ramesh, Sudharani, Achyuth Kumar, Satya, Viva Harsha\nBanner: Vaaraahi Chalana Chitram\nPresented by: Sai Sivani\nProducer: Rajani Korrapati\nA Sai Korrapati Production\nWritten & Directed by: Radha Krishna Reddy\nMusic: Devi Sri Prasad\nCinematographer: K. K. Senthil Kumar (ISC)\nProduction Design: Avinash Kolla\nEditor: Niranjan Devaramane\nDialogue Writer: Kalyanachakravarthy Tripuraneni\nChoreographer: Revanth Gollamandala\nAction: Peter Hein, Venkat\nCo-director: Rakesh Srinivas\nVFX Supervisors: Raghava Thammareddy\nCostume Designers: Neeta Lulla, Aswin Mawle, Hassan Khan, Srimukhi Mekala\nPublicity Designers: Siva Kiran\nPRO: Vamsi-Shekar\nLine Producer: Prasad Rao Mula\nDI & Sound Design: Annapurna Studios\nLyrical Video By: Sabari (Chennai)\nAssistant Editor: Raghu Kiran Devisetti\nAudio on: Aditya Music\n\n🎵Full Song Available on👉 :- \nInstagram - https://tinyurl.com/y576wrd5\nSpotify - https://shorturl.at/jkD16\nYT Music -  https://tinyurl.com/56nbp9mv\nAmazon Music -   https://shorturl.at/rqyKm\nGaana - https://shorturl.at/MuPOQ\nJio Saavn - https://shorturl.at/Vv955\nApple Music - https://shorturl.at/c398B\n\n#Viralvayyarisong #Juniormovie #Kireeti #Sreeleela #Sreeleelasongs #Devisriprasad #Dsp #Dspsongs #Telugusongs #Telugunewsongs #Newsongstelugu #Latesttelugusongs #Telugusongs2025 #Telugupartysongs #Adityamusic\n------------------------------------------------------------------------------------------\nEnjoy and stay connected with us!!\n►Subscribe us on Youtube: http://bit.ly/adityamusic\n►Like us on Facebook: http://www.facebook.com/adityamusic\n►Follow us on Twitter: http://www.twitter.com/adityamusic\n►Follow us on Instagram: https://www.instagram.com/adityamusicindia\n►Follow us on LinkedIn: http://bit.ly/2Pp6ze3\n\nSUBSCRIBE Aditya Music Channels for unlimited entertainment:\n►For South Indian Dubbed Movies in HD: http://www.youtube.com/Adityamovies\n►For Songs with Telugu Lyrics: https://bit.ly/3cpQuFH\n►For Devotional Songs: http://www.youtube.com/AdityaDevotional\n\n→\"మా పాట మీ నోట\" Telugu Lyrical Songs https://www.youtube.com/@mapaatameenota\n→Fresh Arrivals - https://bit.ly/4cPYetG\n→Telugu Full Video Songs - https://bit.ly/4cQIRB6\n→Party Mix Telugu Songs - https://bit.ly/3X9kx82\n\n© 2025 Aditya Music India Pvt. Ltd."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M51S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "21801662",
                "likeCount": "637541",
                "favoriteCount": "0",
                "commentCount": "4396"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "TUwG3ZQGjDL4xukj5LMaBm0Vvy4",
                "id": "UCNApqoVYJbYSrni4YsbXzyQ",
                "snippet": {
                    "title": "Aditya Music",
                    "description": "Aditya Music, a popular Telugu music label. Owns the music rights of most of the films in the Tollywood industry.\n\nAditya Music is the perfect music hub for Telugu music lovers, offering 24/7 live music, top songs and popular hits across genres. Check out Aditya Music Youtube Channel for Latest Telugu Songs and Trailers with High Quality Super Hit Telugu Video Songs , Exclusive Audios, Music Videos and Music Boxes of Hit Movie Music Tracks.. \n\n",
                    "customUrl": "@adityamusic",
                    "publishedAt": "2008-05-01T05:03:30Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Aditya Music",
                        "description": "Aditya Music, a popular Telugu music label. Owns the music rights of most of the films in the Tollywood industry.\n\nAditya Music is the perfect music hub for Telugu music lovers, offering 24/7 live music, top songs and popular hits across genres. Check out Aditya Music Youtube Channel for Latest Telugu Songs and Trailers with High Quality Super Hit Telugu Video Songs , Exclusive Audios, Music Videos and Music Boxes of Hit Movie Music Tracks.. \n\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "1ZzV1zdKhg8z_TMFP2BfQY-SAjE",
            "id": "8PQNsHGhm2w",
            "snippet": {
                "publishedAt": "2025-07-11T05:30:55Z",
                "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
                "title": "Poyiraa Mama Full Video Song | Kuberaa | Dhanush, Nagarjuna, Rashmika | Sekhar Kammula | DSP",
                "description": "Watch & Enjoy Poyiraa Mama Full Video Song (Telugu) From The Movie Kuberaa.\n\nSong Details :\n\nSong Name : Poyiraa Mama \nSinger : Dhanush\nLyrics : Bhaskarabhatla\nMusic : Devi Sri Prasad\n\nMUSICIANS CREDITS\n\nKeyboards: Vikas Badisa\nRhythm: Kalyan\nShehnai: Balesh\nTrumpet & Trombones: Vijay\nChorus: S.P. Abhishek, Aravind Srinivas, Narayanan Ravishankar, Sai Sharan, Shridhar Ramesh, Shenbagaraj Ganesalingam\nMixed & Mastered by: A. Uday Kumar @ DSP Studios - Chennai\nRecorded by: A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi\nVocal Supervision: S.P. Abhishek\nOrchestra In-Charge: Murugan\nStudio Assistants: Pugalendhi, Bharat & V. Dhinakaran\nAlbum Co-ordinator: B. Manikandan\n\n#Kuberaa #Dhanush #Nagarjuna #RashmikaMandanna #DSP \n\nMovie Details :\n\nMovie Name : Kuberaa\nCast - Dhanush, 'King' Nagarjuna Akkineni, Rashmika Mandanna, Jim Sarbh\nBanners - Sree Venkateswara Cinemas LLP, Amigos Creations Pvt Ltd \nProducers - Suniel Narang, Puskur Ram Mohan Rao\nPresented by - Sonali Narang\nDirector - Sekhar Kammula\nMusic - Devi Sri Prasad\nProduction Design - Thota Tharani\nCinematographer - Niketh Bommi \nEditor - Karthika Srinivas R\nCo-Writer - Chaithanya Pingali\nSecond Unit Director - Suri Ravi Kumar\nAction Director - 'Stunts' Sree\nChoreographer - Sekhar VJ\nVfx Supervisors - Ashok Mocharla, Nagu Talari\nCostume Designers - Kavya Sriram, Poorvaa Jain\nPublicity Designer - Kabilan\nPRO - Vamsi-Shekar, Riaz K Ahmed\nExecutive Producer - Irla Nageswara Rao\nCo-Producer - Ajay Kaikala\nMarketing: Walls And Trends\nAudio On Aditya Music \n\n#PoyiraaMama #TeluguSongs #TeluguNewSongs #Newsongstelugu  #Songs #TrendingSong #LatestTeluguSongs #Telugusongs2025 #AdityaMusic  \n------------------------------------------------------------------------------------------\nEnjoy and stay connected with us!!\n►Subscribe us on Youtube: http://bit.ly/adityamusic\n►Like us on Facebook: http://www.facebook.com/adityamusic\n►Follow us on Twitter: http://www.twitter.com/adityamusic\n►Follow us on Instagram: https://www.instagram.com/adityamusicindia\n►Follow us on LinkedIn: http://bit.ly/2Pp6ze3\n\nSUBSCRIBE Aditya Music Channels for unlimited entertainment:\n►For South Indian Dubbed Movies in HD: http://www.youtube.com/Adityamovies\n►For Songs with Telugu Lyrics: https://bit.ly/3cpQuFH\n►For Devotional Songs: http://www.youtube.com/AdityaDevotional\n\n→\"మా పాట మీ నోట\" Telugu Lyrical Songs https://www.youtube.com/@mapaatameenota\n→Fresh Arrivals - https://bit.ly/4cPYetG\n→Telugu Full Video Songs - https://bit.ly/4cQIRB6\n→Party Mix Telugu Songs - https://bit.ly/3X9kx82\n\n© 2025 Aditya Music India Pvt. Ltd.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8PQNsHGhm2w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8PQNsHGhm2w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8PQNsHGhm2w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/8PQNsHGhm2w/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/8PQNsHGhm2w/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Aditya Music",
                "tags": [
                    "Poyi ra Mama",
                    "Poyiraa Mama Video Song",
                    "Poyi ra Mama Song",
                    "Kuberaa",
                    "Kubera Movie Songs",
                    "Kubera Song",
                    "Kubera Songs Telugu",
                    "Kubera Movie Trailer",
                    "Dhanush Songs",
                    "Dhanush New Movie",
                    "Nagarjuna Songs",
                    "Rashmika Mandanna Songs",
                    "Devi Sri Prasda Hit Songs",
                    "Sekhar Kammula Movies",
                    "Telugu Songs",
                    "Telugu New Songs",
                    "New Movie Songs Telugu",
                    "Telugu Latest Songs",
                    "Telugu Trending Songs",
                    "Telugu Dance Songs",
                    "Telugu Video Songs",
                    "Telugu Video Songs New",
                    "Latest Telugu Songs",
                    "NewSongs",
                    "Aditya Music"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Poyiraa Mama Full Video Song | Kuberaa | Dhanush, Nagarjuna, Rashmika | Sekhar Kammula | DSP",
                    "description": "Watch & Enjoy Poyiraa Mama Full Video Song (Telugu) From The Movie Kuberaa.\n\nSong Details :\n\nSong Name : Poyiraa Mama \nSinger : Dhanush\nLyrics : Bhaskarabhatla\nMusic : Devi Sri Prasad\n\nMUSICIANS CREDITS\n\nKeyboards: Vikas Badisa\nRhythm: Kalyan\nShehnai: Balesh\nTrumpet & Trombones: Vijay\nChorus: S.P. Abhishek, Aravind Srinivas, Narayanan Ravishankar, Sai Sharan, Shridhar Ramesh, Shenbagaraj Ganesalingam\nMixed & Mastered by: A. Uday Kumar @ DSP Studios - Chennai\nRecorded by: A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi\nVocal Supervision: S.P. Abhishek\nOrchestra In-Charge: Murugan\nStudio Assistants: Pugalendhi, Bharat & V. Dhinakaran\nAlbum Co-ordinator: B. Manikandan\n\n#Kuberaa #Dhanush #Nagarjuna #RashmikaMandanna #DSP \n\nMovie Details :\n\nMovie Name : Kuberaa\nCast - Dhanush, 'King' Nagarjuna Akkineni, Rashmika Mandanna, Jim Sarbh\nBanners - Sree Venkateswara Cinemas LLP, Amigos Creations Pvt Ltd \nProducers - Suniel Narang, Puskur Ram Mohan Rao\nPresented by - Sonali Narang\nDirector - Sekhar Kammula\nMusic - Devi Sri Prasad\nProduction Design - Thota Tharani\nCinematographer - Niketh Bommi \nEditor - Karthika Srinivas R\nCo-Writer - Chaithanya Pingali\nSecond Unit Director - Suri Ravi Kumar\nAction Director - 'Stunts' Sree\nChoreographer - Sekhar VJ\nVfx Supervisors - Ashok Mocharla, Nagu Talari\nCostume Designers - Kavya Sriram, Poorvaa Jain\nPublicity Designer - Kabilan\nPRO - Vamsi-Shekar, Riaz K Ahmed\nExecutive Producer - Irla Nageswara Rao\nCo-Producer - Ajay Kaikala\nMarketing: Walls And Trends\nAudio On Aditya Music \n\n#PoyiraaMama #TeluguSongs #TeluguNewSongs #Newsongstelugu  #Songs #TrendingSong #LatestTeluguSongs #Telugusongs2025 #AdityaMusic  \n------------------------------------------------------------------------------------------\nEnjoy and stay connected with us!!\n►Subscribe us on Youtube: http://bit.ly/adityamusic\n►Like us on Facebook: http://www.facebook.com/adityamusic\n►Follow us on Twitter: http://www.twitter.com/adityamusic\n►Follow us on Instagram: https://www.instagram.com/adityamusicindia\n►Follow us on LinkedIn: http://bit.ly/2Pp6ze3\n\nSUBSCRIBE Aditya Music Channels for unlimited entertainment:\n►For South Indian Dubbed Movies in HD: http://www.youtube.com/Adityamovies\n►For Songs with Telugu Lyrics: https://bit.ly/3cpQuFH\n►For Devotional Songs: http://www.youtube.com/AdityaDevotional\n\n→\"మా పాట మీ నోట\" Telugu Lyrical Songs https://www.youtube.com/@mapaatameenota\n→Fresh Arrivals - https://bit.ly/4cPYetG\n→Telugu Full Video Songs - https://bit.ly/4cQIRB6\n→Party Mix Telugu Songs - https://bit.ly/3X9kx82\n\n© 2025 Aditya Music India Pvt. Ltd."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M19S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "2801097",
                "likeCount": "31790",
                "favoriteCount": "0",
                "commentCount": "450"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "TUwG3ZQGjDL4xukj5LMaBm0Vvy4",
                "id": "UCNApqoVYJbYSrni4YsbXzyQ",
                "snippet": {
                    "title": "Aditya Music",
                    "description": "Aditya Music, a popular Telugu music label. Owns the music rights of most of the films in the Tollywood industry.\n\nAditya Music is the perfect music hub for Telugu music lovers, offering 24/7 live music, top songs and popular hits across genres. Check out Aditya Music Youtube Channel for Latest Telugu Songs and Trailers with High Quality Super Hit Telugu Video Songs , Exclusive Audios, Music Videos and Music Boxes of Hit Movie Music Tracks.. \n\n",
                    "customUrl": "@adityamusic",
                    "publishedAt": "2008-05-01T05:03:30Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Aditya Music",
                        "description": "Aditya Music, a popular Telugu music label. Owns the music rights of most of the films in the Tollywood industry.\n\nAditya Music is the perfect music hub for Telugu music lovers, offering 24/7 live music, top songs and popular hits across genres. Check out Aditya Music Youtube Channel for Latest Telugu Songs and Trailers with High Quality Super Hit Telugu Video Songs , Exclusive Audios, Music Videos and Music Boxes of Hit Movie Music Tracks.. \n\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "RcJil6T6XWOV_qO9YUe4D3cFu2M",
            "id": "CgCVZdcKcqY",
            "snippet": {
                "publishedAt": "2025-07-11T04:00:07Z",
                "channelId": "UCOmHUn--16B90oW2L6FRR3A",
                "title": "BLACKPINK - ‘뛰어(JUMP)’ M/V",
                "description": "BLACKPINK - 뛰어(JUMP)\n\nI’m not that easy to tame\nYou should see me under these lights\nAll my tears turn to ice\n\nThat’s the sweetest escape\nEvery time the feeling kicks in\nI might stay through the night\n\nBet you get it now\nRocked that didn’t I\n착각 하지마 누가 누군지 oh\n\nThink you runnin that\nGuess we gunnin back\nYou know I walk yeah I talk it\n\n눈감고 하나 둘 셋\n뛰어\n\n뛰어 뛰어\n뛰어 뛰어\n\nSo come up with me I’ll take you high\nThat prima donna spice up your life\n\nYou know I got that shit that you like\nSo come up with me run up uh jump 뛰어\n\nWatch me runnin up the place\nI’m already stuntin’ and my girls are on the way\n\nWatch me open up the place\nWanna see you bumpin baby\nBouncin to the bass\n\nAre you not entertained\nI ain’t gotta explain it\nI’m with all of my sisters\nGot em goin insane, yeah\n\nYou know we on a mission\nAll gas no brakes, yeah\nBreaking out of the system\nBreaking out of this cage, yeah\n\nBet you get it now\nAte that didn’t I\n순간 잊지마 누가 누군지 oh\n\nThink you runnin that\nGuess we gunnin back\nYou know I walk yeah I talk it\n\n눈감고 하나 둘 셋\n뛰어\n\n뛰어 뛰어\n뛰어 뛰어\n\nSo come up with me I’ll take you high\nThat prima donna spice up your life\n\nYou know I got that shit that you like\nSo come up with me run up uh jump 뛰어\n\nWatch me runnin up the place\nI’m already stuntin’ and my girls are on the way\n\nWatch me open up the place\nWanna see you bumpin baby\nBouncin to the bass\n \nBlackpink in your area\n\nAvailable @ https://blackpink.lnk.to/JUMP\n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttps://www.instagram.com/BLACKPINKOFFICIAL\nhttps://twitter.com/BLACKPINK\n\n#BLACKPINK #블랙핑크 #뛰어 #JUMP #MV #OUTNOW #YG",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CgCVZdcKcqY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CgCVZdcKcqY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CgCVZdcKcqY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/CgCVZdcKcqY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/CgCVZdcKcqY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "BLACKPINK",
                "tags": [
                    "YG Entertainment",
                    "YG",
                    "와이지",
                    "K-pop",
                    "BLACKPINK",
                    "블랙핑크",
                    "블핑",
                    "제니",
                    "로제",
                    "리사",
                    "지수",
                    "LISA",
                    "JISOO",
                    "JENNIE",
                    "ROSÉ",
                    "BLINK",
                    "블링크",
                    "JENNIE You & Me",
                    "JENNIE You and ME",
                    "You & Me",
                    "You and Me",
                    "제니 You & Me",
                    "제니 You and Me",
                    "제니 유앤미",
                    "유앤미",
                    "JENNIE 유앤미",
                    "제니 코첼라",
                    "JENNIE COACHELLA"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "BLACKPINK - ‘뛰어(JUMP)’ M/V",
                    "description": "BLACKPINK - 뛰어(JUMP)\n\nI’m not that easy to tame\nYou should see me under these lights\nAll my tears turn to ice\n\nThat’s the sweetest escape\nEvery time the feeling kicks in\nI might stay through the night\n\nBet you get it now\nRocked that didn’t I\n착각 하지마 누가 누군지 oh\n\nThink you runnin that\nGuess we gunnin back\nYou know I walk yeah I talk it\n\n눈감고 하나 둘 셋\n뛰어\n\n뛰어 뛰어\n뛰어 뛰어\n\nSo come up with me I’ll take you high\nThat prima donna spice up your life\n\nYou know I got that shit that you like\nSo come up with me run up uh jump 뛰어\n\nWatch me runnin up the place\nI’m already stuntin’ and my girls are on the way\n\nWatch me open up the place\nWanna see you bumpin baby\nBouncin to the bass\n\nAre you not entertained\nI ain’t gotta explain it\nI’m with all of my sisters\nGot em goin insane, yeah\n\nYou know we on a mission\nAll gas no brakes, yeah\nBreaking out of the system\nBreaking out of this cage, yeah\n\nBet you get it now\nAte that didn’t I\n순간 잊지마 누가 누군지 oh\n\nThink you runnin that\nGuess we gunnin back\nYou know I walk yeah I talk it\n\n눈감고 하나 둘 셋\n뛰어\n\n뛰어 뛰어\n뛰어 뛰어\n\nSo come up with me I’ll take you high\nThat prima donna spice up your life\n\nYou know I got that shit that you like\nSo come up with me run up uh jump 뛰어\n\nWatch me runnin up the place\nI’m already stuntin’ and my girls are on the way\n\nWatch me open up the place\nWanna see you bumpin baby\nBouncin to the bass\n \nBlackpink in your area\n\nAvailable @ https://blackpink.lnk.to/JUMP\n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttps://www.instagram.com/BLACKPINKOFFICIAL\nhttps://twitter.com/BLACKPINK\n\n#BLACKPINK #블랙핑크 #뛰어 #JUMP #MV #OUTNOW #YG"
                },
                "defaultAudioLanguage": "ko"
            },
            "contentDetails": {
                "duration": "PT3M14S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "81497951",
                "likeCount": "4678489",
                "favoriteCount": "0",
                "commentCount": "383371"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "bJzePnR_1RXeOHh-v-DeIUMxhiU",
                "id": "UCOmHUn--16B90oW2L6FRR3A",
                "snippet": {
                    "title": "BLACKPINK",
                    "description": "BLACKPINK Official YouTube Channel\n블랙핑크 공식 유튜브 채널입니다.\n\nJISOO, JENNIE, ROSÉ, LISA\n지수, 제니, 로제, 리사",
                    "customUrl": "@blackpink",
                    "publishedAt": "2016-06-29T03:15:23Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/U3VrCkKjzTpQ3VYv4SCPjNfDHeJV-swGNnhLYhr0nV4lZz_GVUNzK4EB-HFRfKv9S5VNh14uAg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/U3VrCkKjzTpQ3VYv4SCPjNfDHeJV-swGNnhLYhr0nV4lZz_GVUNzK4EB-HFRfKv9S5VNh14uAg=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/U3VrCkKjzTpQ3VYv4SCPjNfDHeJV-swGNnhLYhr0nV4lZz_GVUNzK4EB-HFRfKv9S5VNh14uAg=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "BLACKPINK",
                        "description": "BLACKPINK Official YouTube Channel\n블랙핑크 공식 유튜브 채널입니다.\n\nJISOO, JENNIE, ROSÉ, LISA\n지수, 제니, 로제, 리사"
                    },
                    "country": "KR"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "OO-3lqpx-swSJ_H41XtoSw9xHY4",
            "id": "s9NBDKfVg1c",
            "snippet": {
                "publishedAt": "2025-07-18T11:34:03Z",
                "channelId": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "T-Series Telugu",
                "tags": [
                    "Telugu New song",
                    "Telugu Songs",
                    "T-Series",
                    "Telugu Video Songs",
                    "Telugu Hit songs",
                    "Latest telugu Songs",
                    "telugu hit songs",
                    "telugu super hit songs",
                    "latest video",
                    "Latest Telugu Songs 2025",
                    "telugu melody songs",
                    "Telugu Hits",
                    "Nuvvunte Chaley",
                    "Nuvvunte Chaley Song Promo",
                    "Nuvvunte Chaley Andhra King Taluka",
                    "Andhra King Taluka Nuvvunte Chaley",
                    "Ram Pothineni Nuvvunte Chaley",
                    "Bhagyashri Borse Nuvvunte Chaley",
                    "Ram Pothineni New Song",
                    "Ram Pothineni Telugu Love Song",
                    "Ram Pothineni"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                    "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "10022815",
                "likeCount": "218262",
                "favoriteCount": "0",
                "commentCount": "8251"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "mL8nqlhatyLCqMR2AoYljj77Zxo",
                "id": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "snippet": {
                    "title": "T-Series Telugu",
                    "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!",
                    "customUrl": "@tseriestelugu",
                    "publishedAt": "2014-06-09T05:57:42Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "T-Series Telugu",
                        "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "V9-7Nr90gvjZNPHTInRi6vFHlzE",
            "id": "llhrIVWjU5I",
            "snippet": {
                "publishedAt": "2025-07-16T06:30:28Z",
                "channelId": "UCNApqoVYJbYSrni4YsbXzyQ",
                "title": "Naa Koduka Full Video Song | Kuberaa | Nagarjuna | Dhanush | Rashmika | Sekhar Kammula | DSP",
                "description": "Watch & Enjoy Naa Koduka Full Video Song from “Kuberaa Movie”, Starring King Nagarjuna, Dhanush, Rashmika Mandanna, Under the Direction of Sekhar Kammula & Music by Devi Sri Prasad. \n\nSong Details:\n\nSong Name : Naa Koduka\nLyrics : Nanda Kishore \nSinger : Sinduri Vishal\nMusic : Devi Sri Prasad\n\nMusicians Credits\nKeyboards : Chinna, Ravi Krishnan,  R Rajesh  \nRhythm : Kalyan \nSong Mixed & Mastered By A. Uday Kumar @ \"Dsp Studios - Chennai\"\nSong Recorded By A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi.\nVocal Supervision : S.p. Abhishek\nOrchestra In-charge : Murugan \nStudio Asst : Pugalendhi, Bharat & V Dhinakaran \nAlbum Co-ordinator : B. Manikandan\n\nMovie Details:\n\nMovie Name : Kuberaa \nCast - 'King' Nagarjuna Akkineni, Dhanush, Rashmika Mandanna, Jim Sarbh \nBanners - Sree Venkateswara Cinemas LLP, Amigos Creations Pvt Ltd \nProducers - Suniel Narang, Puskur Ram Mohan Rao \nPresented by - Sonali Narang \nDirector - Sekhar Kammula \nMusic - Devi Sri Prasad \nProduction Design - Thota Tharani \nCinematographer - Niketh Bommi \nEditor - Karthika Srinivas R \nCo-Writer - Chaithanya Pingali \nSecond Unit Director - Suri Ravi Kumar \nAction Director - 'Stunts' Sree \nVfx Supervisors - Ashok Mocharla, Nagu Talari \nCostume Designers - Kavya Sriram, Poorvaa Jain \nPublicity Designer - Kabilan \nPRO - Vamsi-Shekar, Riaz K Ahmed \nExecutive Producer - Irla Nageswara Rao \nCo-Producer - Ajay Kaikala \nMarketing: Walls And Trends \nBrand Partnership Agency : SillyMonks \nAudio On : Aditya Music\n\n#NaaKoduka #Kuberaa #KuberaaMovie #Dhanush #Nagarjuna #RashmikaMandanna #SekharKammula #DSP #TeluguSongs #TeluguSongs2025 #TeluguNewSongs #LatestTeluguSongs #TeluguTrendingSongs #TeluguPopularSongs #AdityaMusic\n------------------------------------------------------------------------------------------\nEnjoy and stay connected with us!!\n►Subscribe us on Youtube: http://bit.ly/adityamusic\n►Like us on Facebook: http://www.facebook.com/adityamusic\n►Follow us on Twitter: http://www.twitter.com/adityamusic\n►Follow us on Instagram: https://www.instagram.com/adityamusicindia\n►Follow us on LinkedIn: http://bit.ly/2Pp6ze3\n\nSUBSCRIBE Aditya Music Channels for unlimited entertainment:\n►For South Indian Dubbed Movies in HD: http://www.youtube.com/Adityamovies\n►For Songs with Telugu Lyrics: https://bit.ly/3cpQuFH\n►For Devotional Songs: http://www.youtube.com/AdityaDevotional\n\n→\"మా పాట మీ నోట\" Telugu Lyrical Songs https://www.youtube.com/@mapaatameenota\n→Fresh Arrivals - https://bit.ly/4cPYetG\n→Telugu Full Video Songs - https://bit.ly/4cQIRB6\n→Party Mix Telugu Songs - https://bit.ly/3X9kx82\n\n© 2025 Aditya Music India Pvt. Ltd.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/llhrIVWjU5I/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/llhrIVWjU5I/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/llhrIVWjU5I/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/llhrIVWjU5I/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/llhrIVWjU5I/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Aditya Music",
                "tags": [
                    "Naa Koduku Song",
                    "Na Kodaka Song",
                    "Na Kodaka Video Song",
                    "Na Koduku Song",
                    "Na Kodaka Kubera Song",
                    "Kubera Movie Songs",
                    "Kubera Song",
                    "Kubera Songs Telugu",
                    "Dhanush Songs",
                    "Dhanush New Song",
                    "Nagarjuna Movies",
                    "Rashmika Mandanna Movies",
                    "Sekhar Kammula Movies",
                    "DSP Hit in Telugu",
                    "Telugu Songs",
                    "Telugu New Songs",
                    "Emotional Songs Telugu",
                    "Telugu Emotional Songs",
                    "Telugu Songs Download",
                    "New Songs Telugu",
                    "New Movie Songs Telugu 2025",
                    "Latest Telugu Songs",
                    "Telugu Trending Songs",
                    "Aditya Music"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Naa Koduka Full Video Song | Kuberaa | Nagarjuna | Dhanush | Rashmika | Sekhar Kammula | DSP",
                    "description": "Watch & Enjoy Naa Koduka Full Video Song from “Kuberaa Movie”, Starring King Nagarjuna, Dhanush, Rashmika Mandanna, Under the Direction of Sekhar Kammula & Music by Devi Sri Prasad. \n\nSong Details:\n\nSong Name : Naa Koduka\nLyrics : Nanda Kishore \nSinger : Sinduri Vishal\nMusic : Devi Sri Prasad\n\nMusicians Credits\nKeyboards : Chinna, Ravi Krishnan,  R Rajesh  \nRhythm : Kalyan \nSong Mixed & Mastered By A. Uday Kumar @ \"Dsp Studios - Chennai\"\nSong Recorded By A. Uday Kumar, T. Uday Kumar & Suresh Kumar Taddi.\nVocal Supervision : S.p. Abhishek\nOrchestra In-charge : Murugan \nStudio Asst : Pugalendhi, Bharat & V Dhinakaran \nAlbum Co-ordinator : B. Manikandan\n\nMovie Details:\n\nMovie Name : Kuberaa \nCast - 'King' Nagarjuna Akkineni, Dhanush, Rashmika Mandanna, Jim Sarbh \nBanners - Sree Venkateswara Cinemas LLP, Amigos Creations Pvt Ltd \nProducers - Suniel Narang, Puskur Ram Mohan Rao \nPresented by - Sonali Narang \nDirector - Sekhar Kammula \nMusic - Devi Sri Prasad \nProduction Design - Thota Tharani \nCinematographer - Niketh Bommi \nEditor - Karthika Srinivas R \nCo-Writer - Chaithanya Pingali \nSecond Unit Director - Suri Ravi Kumar \nAction Director - 'Stunts' Sree \nVfx Supervisors - Ashok Mocharla, Nagu Talari \nCostume Designers - Kavya Sriram, Poorvaa Jain \nPublicity Designer - Kabilan \nPRO - Vamsi-Shekar, Riaz K Ahmed \nExecutive Producer - Irla Nageswara Rao \nCo-Producer - Ajay Kaikala \nMarketing: Walls And Trends \nBrand Partnership Agency : SillyMonks \nAudio On : Aditya Music\n\n#NaaKoduka #Kuberaa #KuberaaMovie #Dhanush #Nagarjuna #RashmikaMandanna #SekharKammula #DSP #TeluguSongs #TeluguSongs2025 #TeluguNewSongs #LatestTeluguSongs #TeluguTrendingSongs #TeluguPopularSongs #AdityaMusic\n------------------------------------------------------------------------------------------\nEnjoy and stay connected with us!!\n►Subscribe us on Youtube: http://bit.ly/adityamusic\n►Like us on Facebook: http://www.facebook.com/adityamusic\n►Follow us on Twitter: http://www.twitter.com/adityamusic\n►Follow us on Instagram: https://www.instagram.com/adityamusicindia\n►Follow us on LinkedIn: http://bit.ly/2Pp6ze3\n\nSUBSCRIBE Aditya Music Channels for unlimited entertainment:\n►For South Indian Dubbed Movies in HD: http://www.youtube.com/Adityamovies\n►For Songs with Telugu Lyrics: https://bit.ly/3cpQuFH\n►For Devotional Songs: http://www.youtube.com/AdityaDevotional\n\n→\"మా పాట మీ నోట\" Telugu Lyrical Songs https://www.youtube.com/@mapaatameenota\n→Fresh Arrivals - https://bit.ly/4cPYetG\n→Telugu Full Video Songs - https://bit.ly/4cQIRB6\n→Party Mix Telugu Songs - https://bit.ly/3X9kx82\n\n© 2025 Aditya Music India Pvt. Ltd."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M40S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "902786",
                "likeCount": "11769",
                "favoriteCount": "0",
                "commentCount": "234"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "TUwG3ZQGjDL4xukj5LMaBm0Vvy4",
                "id": "UCNApqoVYJbYSrni4YsbXzyQ",
                "snippet": {
                    "title": "Aditya Music",
                    "description": "Aditya Music, a popular Telugu music label. Owns the music rights of most of the films in the Tollywood industry.\n\nAditya Music is the perfect music hub for Telugu music lovers, offering 24/7 live music, top songs and popular hits across genres. Check out Aditya Music Youtube Channel for Latest Telugu Songs and Trailers with High Quality Super Hit Telugu Video Songs , Exclusive Audios, Music Videos and Music Boxes of Hit Movie Music Tracks.. \n\n",
                    "customUrl": "@adityamusic",
                    "publishedAt": "2008-05-01T05:03:30Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ln9XRahq7NmtKgdDM0sA1g210AOyUOTmwVHwjjX3c3fDahjY85LvWUplPfl1WrFaSR-SvG7V8Q=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Aditya Music",
                        "description": "Aditya Music, a popular Telugu music label. Owns the music rights of most of the films in the Tollywood industry.\n\nAditya Music is the perfect music hub for Telugu music lovers, offering 24/7 live music, top songs and popular hits across genres. Check out Aditya Music Youtube Channel for Latest Telugu Songs and Trailers with High Quality Super Hit Telugu Video Songs , Exclusive Audios, Music Videos and Music Boxes of Hit Movie Music Tracks.. \n\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "Hc6HnWqtWqYfdh30WkHGCd3V090",
            "id": "6bcvyFOEztE",
            "snippet": {
                "publishedAt": "2025-07-10T22:30:01Z",
                "channelId": "UCi5g2Y4keAkIkEt8YvR5JoA",
                "title": "Payal Chandi KI | Saman Aagya Bhole Hori | Gulshan Music | Jaat Nia | New Haryanvi Bhole Song 2025",
                "description": "Payal Chandi KI | Saman Aagya Bhole Hori | Gulshan Music | Jaat Nia | New Haryanvi Bhole Song 2025 \n\nPayal Chandi KI Haryanvi Song Starring with Gulshan Music | Jaat Nia. This superhit Haryanvi Song Sung by Gulshan Music & Swera Verma . Music given by Gulshan Music. Penned by Shivaye Pandit. Copyright & Music label by Gulshan Music.\n  \n#PayalChandiKi #samanaagyabhole #sawanbhajan #bholebhajan #GulshanMusic #JaatNia #VatsRecords #NewHaryanviSongsHaryanavi2025 #NewHaryanviSongs2025 #HaryanviDjSongs2025\n \n💫Click to create Instagram Reels :    / dlujdnrto.  .\n\nStarring :- Gulshan Music | Jaat Nia\nSinger/Composer :- Gulshan Music \nFemale :-  Swera Verma\nLyrics :-  Shivaye Pandit\nMusic :- Gulshan Music (8168614500)\nDirector :- Shakhar Salariya\nEdit :- Monty\nDigital Promotion : Gulshan Music 8168614500\n\nLabel & Copyright - Vats Records\nCompany Owner : Pawan Sharma\nProducer : Gulshan Sharma\nFor Any Enquiry Company Contacts\n8168614500 , 7404210848\n\nTags-\npayal chandi ki,\npayal chandi ki song,\npayal chandi ki instta song,\npayal chandi ki remix song,\npayal chandi ki song dj remix,\npayal chandi ki gulshan music,\npayal chandi ki gulshan music song,\nSaman Aagya Bhole Hori,\nsaman aagya bhole hori bunda bandi si,\nhori bunda bandi si,\nbhola new song\nbhole baba new song 2025\nhr song\nbhole baba ke new song\nlatest haryanvi song 2024\nnew bhole song\nnew song\nhar har mahadev\nbhole s haryana k\nbhole haryana k\nhr song 2025\nbole baba new song\nnew song bhole baba 2025\nnew bhole baba song\nbaba bhola new song 2025\nnew bholenath song 2025\nnew haryanvi song 2025 bhole baba\n\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6bcvyFOEztE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6bcvyFOEztE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6bcvyFOEztE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/6bcvyFOEztE/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/6bcvyFOEztE/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Vats Bhakti Sagar",
                "tags": [
                    "payal chandi ki",
                    "payal chandi ki song",
                    "payal chandi ki gulshan music",
                    "payal chandi ki bhole song",
                    "saman aagya bhole",
                    "payal chandi ki instta song",
                    "gulshan music",
                    "jaat nia",
                    "gulshan music song",
                    "bhole song",
                    "bhole new song",
                    "haryanvi",
                    "new haryanvi songs haryanavi 2025",
                    "haryanvi songs",
                    "haryanvi songs 2025",
                    "latest haryanvi songs 2025",
                    "bhole song 2025",
                    "bhole bhajan",
                    "kawad song",
                    "kawad bhajan",
                    "new kawad song",
                    "new bhole bhajan",
                    "kawad song 2025",
                    "hori bunda bandi si",
                    "bhole",
                    "sawan bhajan"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Payal Chandi KI | Saman Aagya Bhole Hori | Gulshan Music | Jaat Nia | New Haryanvi Bhole Song 2025",
                    "description": "Payal Chandi KI | Saman Aagya Bhole Hori | Gulshan Music | Jaat Nia | New Haryanvi Bhole Song 2025 \n\nPayal Chandi KI Haryanvi Song Starring with Gulshan Music | Jaat Nia. This superhit Haryanvi Song Sung by Gulshan Music & Swera Verma . Music given by Gulshan Music. Penned by Shivaye Pandit. Copyright & Music label by Gulshan Music.\n  \n#PayalChandiKi #samanaagyabhole #sawanbhajan #bholebhajan #GulshanMusic #JaatNia #VatsRecords #NewHaryanviSongsHaryanavi2025 #NewHaryanviSongs2025 #HaryanviDjSongs2025\n \n💫Click to create Instagram Reels :    / dlujdnrto.  .\n\nStarring :- Gulshan Music | Jaat Nia\nSinger/Composer :- Gulshan Music \nFemale :-  Swera Verma\nLyrics :-  Shivaye Pandit\nMusic :- Gulshan Music (8168614500)\nDirector :- Shakhar Salariya\nEdit :- Monty\nDigital Promotion : Gulshan Music 8168614500\n\nLabel & Copyright - Vats Records\nCompany Owner : Pawan Sharma\nProducer : Gulshan Sharma\nFor Any Enquiry Company Contacts\n8168614500 , 7404210848\n\nTags-\npayal chandi ki,\npayal chandi ki song,\npayal chandi ki instta song,\npayal chandi ki remix song,\npayal chandi ki song dj remix,\npayal chandi ki gulshan music,\npayal chandi ki gulshan music song,\nSaman Aagya Bhole Hori,\nsaman aagya bhole hori bunda bandi si,\nhori bunda bandi si,\nbhola new song\nbhole baba new song 2025\nhr song\nbhole baba ke new song\nlatest haryanvi song 2024\nnew bhole song\nnew song\nhar har mahadev\nbhole s haryana k\nbhole haryana k\nhr song 2025\nbole baba new song\nnew song bhole baba 2025\nnew bhole baba song\nbaba bhola new song 2025\nnew bholenath song 2025\nnew haryanvi song 2025 bhole baba\n\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time."
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT3M49S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "2646715",
                "likeCount": "30871",
                "favoriteCount": "0",
                "commentCount": "2897"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "tkbrzkNnDQibzYTBwwq9Pw9f_WA",
                "id": "UCi5g2Y4keAkIkEt8YvR5JoA",
                "snippet": {
                    "title": "Vats Bhakti Sagar",
                    "description": "Welcome to Official Vats Bhakti Sagar Channel! The #1 destination for Premium Devotional Songs On YouTube.\n\nSince the last two decades, we are dedicatedly engaged in bringing to you fine Spiritual Musical Experience under the brand Vats Records. After the grand success of our first Devotional Channel 'Vats Bhakti Geet' with the grace of almighty, we at Vats Records present The 'Vats Bhakti Sagar' Channel. It is our sincere commitment to make 'Vats Bhakti Sagar' an ultimate Devotional channel on Youtube.\n\nYou will find here the best of the best Devotional music like Bhajans, Aartis, Mantras, Bhakti Songs, Shlokas, etc... \n",
                    "customUrl": "@vatsbhaktisagar-t7u",
                    "publishedAt": "2018-09-24T08:50:51Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/yljNvNLLGIk1cgZcz0BHxgS_i-RV5F1urlNpp-HJ1AXFB03xNEYIEMGrSgxuJDFkhRWGIAtjIY8=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/yljNvNLLGIk1cgZcz0BHxgS_i-RV5F1urlNpp-HJ1AXFB03xNEYIEMGrSgxuJDFkhRWGIAtjIY8=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/yljNvNLLGIk1cgZcz0BHxgS_i-RV5F1urlNpp-HJ1AXFB03xNEYIEMGrSgxuJDFkhRWGIAtjIY8=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Vats Bhakti Sagar",
                        "description": "Welcome to Official Vats Bhakti Sagar Channel! The #1 destination for Premium Devotional Songs On YouTube.\n\nSince the last two decades, we are dedicatedly engaged in bringing to you fine Spiritual Musical Experience under the brand Vats Records. After the grand success of our first Devotional Channel 'Vats Bhakti Geet' with the grace of almighty, we at Vats Records present The 'Vats Bhakti Sagar' Channel. It is our sincere commitment to make 'Vats Bhakti Sagar' an ultimate Devotional channel on Youtube.\n\nYou will find here the best of the best Devotional music like Bhajans, Aartis, Mantras, Bhakti Songs, Shlokas, etc... \n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "5kM6K9j8BUUXSkrDX21014slzTE",
            "id": "DxZ9Y8cQHZc",
            "snippet": {
                "publishedAt": "2025-07-03T01:45:07Z",
                "channelId": "UCBUlrhmOjVLOpbgHAUJceaw",
                "title": "Lai Ja Ne Lerida - 4K Video - Gopal Bharwad - Manisha Bharwad - લઈ જા ને લેરીડા - Jigar Studio",
                "description": "Song: Lai Ja Ne Lerida\nSinger: Gopal Bharwad, Manisha Bharwad\nArtists: Chhaya Thakor, Kuldeep Mishra\nMusic: Jackie Gajjar\nLyrics: RK Thakor\nRecording: Sargam Studio - Patan\nD.O.P. - Edit: Montu Rajput\nDirector: Vishnu Thakor - Adalaj\nProducer: Gunvant Thakor\nMusic Label & Copyright: Jigar Studio\n\nLyrics Of This Song:\nHo Lai Ja Ne Lerida Tara\nHo Lai Ja Ne Lerida Tara Nehade Javu Re\nHo Lal Odhu Mathe Odhani Tari Hel Ma Aavu Re\nHo Bangala Tara Paka Paya Na\nBangala Tara Paka Paya Na Kachi Mati Na Ghar\nNaliya Na Thekana Nathi Kem Lai Javu Malak\nHo Lai Ja Ne Lerida Tara Nehade Javu Re\n\nHo Nanu Ek Zupadu Maru, Man Lagi Nai Taru\nSukh Sahebi Ma Mohya, Oy Ro To Haru\nHo Ho Ho Bangala Ni Mediye, Man Nathi Mohya\nVari Bethi Tamne Valam Jyarthi Me To Joya\nHo Halti Chatak Harni Ni Jem\nHalati Chatak Harani Ni Jem, Harnya Halar Desh\nPag Ma Vagashe Kankariyu Tane Kem Hamjavu Re\nHo Lai Ja Ne Valam Tara Malak Ma Javu Re\n\nHo Prem Niswarth Taro, Bharoho Te Jityo Maro\nEk Bija Na Thaine Jivashu Aa Janmaro\nHo Ho Ho Haiya Na Re Het Aato, Khoti Nai Thay Vato\nSaath Nai Chhodu Valam Jiv Bhale Jato\nHo Bar Medi Na Bangala Mare\nBar Medi Na Bangala, An Bangale Melya Madh\nHona Na Moraliya Bole Halo Mare Desh\nAe Halo Ne Hangath Lerida Deh Ma Jashu Re\n\n\nSubscribe : https://goo.gl/9VtrB7\nFacebook : https://goo.gl/SBYrky\nTwitter : https://goo.gl/vUbV4Q\nInstagram : https://goo.gl/HRQorS\nPinterest : https://goo.gl/RD2poU\nTumblr : https://goo.gl/TP9hvy\nBlogSpot : https://goo.gl/pG2swb\n\nKeep in touch with us \nhttp://www.jigarstudio.com",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DxZ9Y8cQHZc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DxZ9Y8cQHZc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DxZ9Y8cQHZc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/DxZ9Y8cQHZc/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/DxZ9Y8cQHZc/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Jigar Studio",
                "tags": [
                    "Jigar Studio",
                    "Gunvant Thakor",
                    "Dhollywood",
                    "Gujarati Song",
                    "New Song",
                    "man mela",
                    "gujarati song",
                    "love song",
                    "gopal bharwad new song",
                    "gopal bharwad latest gujarati song 2025",
                    "new gujarati song 2025",
                    "romantic gujarati love song",
                    "gopal bharwad new video",
                    "lai ja ne lerida",
                    "manisha bharwad",
                    "manisha bharwad new song",
                    "gopal bharwad manisha bharwad",
                    "gopal bharwad jigar studio",
                    "chhaya thakor",
                    "chhaya thakor new song"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Lai Ja Ne Lerida - 4K Video - Gopal Bharwad - Manisha Bharwad - લઈ જા ને લેરીડા - Jigar Studio",
                    "description": "Song: Lai Ja Ne Lerida\nSinger: Gopal Bharwad, Manisha Bharwad\nArtists: Chhaya Thakor, Kuldeep Mishra\nMusic: Jackie Gajjar\nLyrics: RK Thakor\nRecording: Sargam Studio - Patan\nD.O.P. - Edit: Montu Rajput\nDirector: Vishnu Thakor - Adalaj\nProducer: Gunvant Thakor\nMusic Label & Copyright: Jigar Studio\n\nLyrics Of This Song:\nHo Lai Ja Ne Lerida Tara\nHo Lai Ja Ne Lerida Tara Nehade Javu Re\nHo Lal Odhu Mathe Odhani Tari Hel Ma Aavu Re\nHo Bangala Tara Paka Paya Na\nBangala Tara Paka Paya Na Kachi Mati Na Ghar\nNaliya Na Thekana Nathi Kem Lai Javu Malak\nHo Lai Ja Ne Lerida Tara Nehade Javu Re\n\nHo Nanu Ek Zupadu Maru, Man Lagi Nai Taru\nSukh Sahebi Ma Mohya, Oy Ro To Haru\nHo Ho Ho Bangala Ni Mediye, Man Nathi Mohya\nVari Bethi Tamne Valam Jyarthi Me To Joya\nHo Halti Chatak Harni Ni Jem\nHalati Chatak Harani Ni Jem, Harnya Halar Desh\nPag Ma Vagashe Kankariyu Tane Kem Hamjavu Re\nHo Lai Ja Ne Valam Tara Malak Ma Javu Re\n\nHo Prem Niswarth Taro, Bharoho Te Jityo Maro\nEk Bija Na Thaine Jivashu Aa Janmaro\nHo Ho Ho Haiya Na Re Het Aato, Khoti Nai Thay Vato\nSaath Nai Chhodu Valam Jiv Bhale Jato\nHo Bar Medi Na Bangala Mare\nBar Medi Na Bangala, An Bangale Melya Madh\nHona Na Moraliya Bole Halo Mare Desh\nAe Halo Ne Hangath Lerida Deh Ma Jashu Re\n\n\nSubscribe : https://goo.gl/9VtrB7\nFacebook : https://goo.gl/SBYrky\nTwitter : https://goo.gl/vUbV4Q\nInstagram : https://goo.gl/HRQorS\nPinterest : https://goo.gl/RD2poU\nTumblr : https://goo.gl/TP9hvy\nBlogSpot : https://goo.gl/pG2swb\n\nKeep in touch with us \nhttp://www.jigarstudio.com"
                },
                "defaultAudioLanguage": "gu"
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
                "viewCount": "7029440",
                "likeCount": "111769",
                "favoriteCount": "0",
                "commentCount": "3021"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "2q4_6IgQ6AmQcr5mtyMjZnTZ7MM",
                "id": "UCBUlrhmOjVLOpbgHAUJceaw",
                "snippet": {
                    "title": "Jigar Studio",
                    "description": "Jigar Studio (JS) is an Indian entertainment company and Regional Digital Content provider established by Gunvant Thakor, an Indian film director, producer, song writer and story writer.\n \nJigar Studio is actively involved in content productions and distributions especially keeping in focus for top quality music and public needs. Another key focus area is online marketing of Entertainment Content and Celebrity based Content. Jigar Studio also started distribution of other companies content. We have tied up with major mobile telecom operators, leading web destinations and OEMs to facilitate distribution and monetization of both audio & video content.\n​\nWe distribute content of any size through Mobile & Internet. It includes video and music streaming on web portals and through mobile applications worldwide.\n​\nWorking with major Content Producers, Music labels and Independent Artists across multiple languages.",
                    "customUrl": "@jigarstudio",
                    "publishedAt": "2012-09-25T10:28:20Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_locFebUd7KtctHFjVbsN1Q_y348G4gosRFEbXnJnQQNGA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_locFebUd7KtctHFjVbsN1Q_y348G4gosRFEbXnJnQQNGA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_locFebUd7KtctHFjVbsN1Q_y348G4gosRFEbXnJnQQNGA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Jigar Studio",
                        "description": "Jigar Studio (JS) is an Indian entertainment company and Regional Digital Content provider established by Gunvant Thakor, an Indian film director, producer, song writer and story writer.\n \nJigar Studio is actively involved in content productions and distributions especially keeping in focus for top quality music and public needs. Another key focus area is online marketing of Entertainment Content and Celebrity based Content. Jigar Studio also started distribution of other companies content. We have tied up with major mobile telecom operators, leading web destinations and OEMs to facilitate distribution and monetization of both audio & video content.\n​\nWe distribute content of any size through Mobile & Internet. It includes video and music streaming on web portals and through mobile applications worldwide.\n​\nWorking with major Content Producers, Music labels and Independent Artists across multiple languages."
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "X_A6VdawY4ZZA9TsxIKpX1ZpfmU",
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
                "viewCount": "17375881",
                "likeCount": "575238",
                "favoriteCount": "0",
                "commentCount": "28581"
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
            }
        }
    ],
    "Gaming": [
        {
            "kind": "youtube#video",
            "etag": "zXbkDmaahwKM8lzJ2eRdz1zIZJw",
            "id": "qRZNvP5eH3o",
            "snippet": {
                "publishedAt": "2025-07-19T03:30:39Z",
                "channelId": "UCX8pnu3DYUnx8qy8V_c6oHg",
                "title": "LEVEL 1 VS LEVEL 100 WARSHIP BATTLE",
                "description": "⚓ Think you’ve got what it takes to dominate in World of Warships?\nNow’s your chance to battle it out and sail with me in the next round. 💥\n\n\n🎮 Download the game & create a wargaming account using my link:\n👉 https://wo.ws/3DL0kzG\n📝 Verify yourself here:\n👉 https://forms.gle/5RGwaTeSD20k1ZCJ6\n💬 Join our Discord to climb the leaderboard & stay updated:\n👉 https://discord.gg/PuYQnexe66\n\n📅 Event live from 25th July to 18th August – grind hard, climb fast!\n\n⏳ Last date to enter tournament: 31st July \n\ngoogle form link :  https://forms.gle/XToNpAorZ4x1DMBQ9 \n\ndiscord link : https://discord.gg/dU9za5nF8q\n\n🔥 Prove your skills. Dominate the seas.\nMaybe YOU will be the one sailing with me in Round 2!\n\n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qRZNvP5eH3o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qRZNvP5eH3o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qRZNvP5eH3o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/qRZNvP5eH3o/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/qRZNvP5eH3o/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Techno Gamerz",
                "tags": [
                    "world of warships",
                    "gameplay",
                    "funny",
                    "ujjwal",
                    "techno gamerz"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "LEVEL 1 VS LEVEL 100 WARSHIP BATTLE",
                    "description": "⚓ Think you’ve got what it takes to dominate in World of Warships?\nNow’s your chance to battle it out and sail with me in the next round. 💥\n\n\n🎮 Download the game & create a wargaming account using my link:\n👉 https://wo.ws/3DL0kzG\n📝 Verify yourself here:\n👉 https://forms.gle/5RGwaTeSD20k1ZCJ6\n💬 Join our Discord to climb the leaderboard & stay updated:\n👉 https://discord.gg/PuYQnexe66\n\n📅 Event live from 25th July to 18th August – grind hard, climb fast!\n\n⏳ Last date to enter tournament: 31st July \n\ngoogle form link :  https://forms.gle/XToNpAorZ4x1DMBQ9 \n\ndiscord link : https://discord.gg/dU9za5nF8q\n\n🔥 Prove your skills. Dominate the seas.\nMaybe YOU will be the one sailing with me in Round 2!\n\n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button."
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT25M58S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1629126",
                "likeCount": "89558",
                "favoriteCount": "0",
                "commentCount": "7258"
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
            "etag": "kPlcPwHInpLKNHTT5OmO1R8b8Qk",
            "id": "GO3K9k-lQtI",
            "snippet": {
                "publishedAt": "2025-07-19T09:59:52Z",
                "channelId": "UClqifC6Nd7v-IfTqce4k62A",
                "title": "I Got Stuck in One Chunk Civilization in Minecraft..",
                "description": "in this video i got stuck in one chunk civilization..\n\nnew mod - https://www.curseforge.com/minecraft/mc-mods/crazyvillagers-forge\nDiscord join karo :- https://discord.gg/65fWdrGCuK\nfollow marlo :-  https://www.instagram.com/carrydepie?igsh=MWljaWl6aHpqcnVyaQ==\nemail - carrydepiebusiness@gmail.com\n\n#minecraft \n#minecraftsurvivalgameplay \n#carrydepie",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GO3K9k-lQtI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GO3K9k-lQtI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GO3K9k-lQtI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/GO3K9k-lQtI/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/GO3K9k-lQtI/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Carry Depie",
                "tags": [
                    "minecraft",
                    "bedrock",
                    "minecraft villager troll",
                    "villager troll mine",
                    "minecraft trolling video",
                    "Minecraft",
                    "Minecraft gameplay",
                    "Minecraft roleplay",
                    "Minecraft mods",
                    "minecraft house",
                    "Minecraft trolling",
                    "Minecraft stealing",
                    "Minecraft trolling in",
                    "Minecraft tricking",
                    "Minecraft diamonds",
                    "Minecraft illegal",
                    "carry depie",
                    "jethiya",
                    "bagha",
                    "carrydp",
                    "carry depie minecraft",
                    "build competiton",
                    "wishing well",
                    "ben10",
                    "minecraft zoo",
                    "mining civilization",
                    "brainrot",
                    "tung tung sahur",
                    "minecraft civilization"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "I Got Stuck in One Chunk Civilization in Minecraft..",
                    "description": "in this video i got stuck in one chunk civilization..\n\nnew mod - https://www.curseforge.com/minecraft/mc-mods/crazyvillagers-forge\nDiscord join karo :- https://discord.gg/65fWdrGCuK\nfollow marlo :-  https://www.instagram.com/carrydepie?igsh=MWljaWl6aHpqcnVyaQ==\nemail - carrydepiebusiness@gmail.com\n\n#minecraft \n#minecraftsurvivalgameplay \n#carrydepie"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT23M41S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "397376",
                "likeCount": "5950",
                "favoriteCount": "0",
                "commentCount": "494"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "y9UkW-5_is3tytbZ1Euaz5RRJys",
                "id": "UClqifC6Nd7v-IfTqce4k62A",
                "snippet": {
                    "title": "Carry Depie",
                    "description": "Welcome to my channel Carry Depie creating a new trend of gaming videos. My channel is free from abusive words. I create  content on any topic in gaming.\nI was a roaster but now i am a gamer.\nI am an engineering student and create humorous gaming video which can be seen with anyone anytime.\n\nBusiness Enquiry :-  carrydepiebusiness@gmail.com\n",
                    "customUrl": "@carrydepie",
                    "publishedAt": "2016-09-09T09:47:26Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_n_XPxEtVaV8-Uqx-hEL5HtclaMSmoHr2xV-eBV0H9T1BI=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_n_XPxEtVaV8-Uqx-hEL5HtclaMSmoHr2xV-eBV0H9T1BI=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_n_XPxEtVaV8-Uqx-hEL5HtclaMSmoHr2xV-eBV0H9T1BI=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Carry Depie",
                        "description": "Welcome to my channel Carry Depie creating a new trend of gaming videos. My channel is free from abusive words. I create  content on any topic in gaming.\nI was a roaster but now i am a gamer.\nI am an engineering student and create humorous gaming video which can be seen with anyone anytime.\n\nBusiness Enquiry :-  carrydepiebusiness@gmail.com\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "zNOdsDZTELygBIGBUh_sQmlvFLU",
            "id": "JInxlQfKFEo",
            "snippet": {
                "publishedAt": "2025-07-18T14:17:29Z",
                "channelId": "UCIpN4Y3Pt00Q9KoQMWI77_Q",
                "title": "Build The Safest Base or Die! 😱",
                "description": "Build The Safest Base or Die! 🔥\n\n\nSubscribe\nSubscribe\nSubscribe\nSubscribe\n\n\n\nThanks For Watching 🎈 \n~ Tyro Gaming\n\n\n\n\n\n\n\n\n\n\nShinchan Game\nNobita Game\nDoraemon Game\nFunny Game Roblox\nBuild To Survive Italian Brainrot",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JInxlQfKFEo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JInxlQfKFEo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JInxlQfKFEo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/JInxlQfKFEo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/JInxlQfKFEo/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Tyro Gaming",
                "tags": [
                    "Build The Safest Base or die! 🔥",
                    "Funny Game",
                    "junkeyy",
                    "epic depic",
                    "Shivang mini",
                    "Shinchan game",
                    "Doraemon Game",
                    "Nobita Game",
                    "Shinchan in hindi",
                    "Green Gaming",
                    "Gaming with Demon",
                    "Shinchan Gaming",
                    "Frostbite Gaming",
                    "Epic Playz",
                    "VeryNuclear",
                    "Rock Indian Gamer",
                    "Amaan-T",
                    "Flight Gamer",
                    "Proboiz",
                    "Tyro Gaming",
                    "Proboii",
                    "Taro gaming",
                    "Funny Game Roblox",
                    "Doraemon New Episode",
                    "Shinchan New Episode",
                    "Italian Brainrot",
                    "Build to survive",
                    "Build to survive Italian brainrot",
                    "Build or die"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Build The Safest Base or Die! 😱",
                    "description": "Build The Safest Base or Die! 🔥\n\n\nSubscribe\nSubscribe\nSubscribe\nSubscribe\n\n\n\nThanks For Watching 🎈 \n~ Tyro Gaming\n\n\n\n\n\n\n\n\n\n\nShinchan Game\nNobita Game\nDoraemon Game\nFunny Game Roblox\nBuild To Survive Italian Brainrot"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT11M6S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "438371",
                "likeCount": "5350",
                "favoriteCount": "0",
                "commentCount": "444"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "lWgSqHd9GXvEg2H_BsqpXFynUF0",
                "id": "UCIpN4Y3Pt00Q9KoQMWI77_Q",
                "snippet": {
                    "title": "Tyro Gaming",
                    "description": "Hi guys , welcome to my channel.\n\nThis channel is all about Gaming that will entertain you So don't forget to subscribe to my channel.\n \nTHANK YOU\n___________________________________________\n\n\n\nFor Business Enquiries - \n( Tyrogaming74@gmail.com )\n\n\n",
                    "customUrl": "@tyro_gaming",
                    "publishedAt": "2020-11-27T13:25:49.978371Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kPwkAT0TwyhO-8bS4TnvCTjeHf0M0lRHJgaYxw5Y9ZlQ=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kPwkAT0TwyhO-8bS4TnvCTjeHf0M0lRHJgaYxw5Y9ZlQ=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kPwkAT0TwyhO-8bS4TnvCTjeHf0M0lRHJgaYxw5Y9ZlQ=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Tyro Gaming",
                        "description": "Hi guys , welcome to my channel.\n\nThis channel is all about Gaming that will entertain you So don't forget to subscribe to my channel.\n \nTHANK YOU\n___________________________________________\n\n\n\nFor Business Enquiries - \n( Tyrogaming74@gmail.com )\n\n\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "huHqzB8XpMKyn3QTuHBAVYoC6AY",
            "id": "61e_ETDUoRM",
            "snippet": {
                "publishedAt": "2025-07-18T08:50:19Z",
                "channelId": "UCTyg-vQ70A1m0lB1cLbu38Q",
                "title": "I Trolled My Sister as LABUBU DOLL  in Minecraft...",
                "description": "I Troll My sister Using LABUBU DOLL in Minecraft!\n\nInstagram 👇…\n  https://www.instagram.com/mc_flame01?igsh=MW9wdjJ5aDBxMTdqbw==\n\n____________________________________\n\n\n\n🤖 Join Discord  :  https://discord.com/invite/mcflame\n\n_____________________________________\n\nCopyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research...\n\n____________________________________\n\n#Minecraft #mcflame #troll #labubu",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/61e_ETDUoRM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/61e_ETDUoRM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/61e_ETDUoRM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/61e_ETDUoRM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/61e_ETDUoRM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Mc flame",
                "tags": [
                    "mc flame",
                    "minecraft",
                    "mc flame trolling sister",
                    "Minecraft",
                    "trolling sister in minecraft",
                    "mc flame trolling his sister",
                    "mc flame minecraft",
                    "I Troll My sister Using LABUBU DOLL in Minecraft",
                    "labubu",
                    "Labubu doll",
                    "I Trolled My Sister as LABUBU DOLL in Minecraft",
                    "minecraft gameplay",
                    "#minecraft"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "I Trolled My Sister as LABUBU DOLL  in Minecraft...",
                    "description": "I Troll My sister Using LABUBU DOLL in Minecraft!\n\nInstagram 👇…\n  https://www.instagram.com/mc_flame01?igsh=MW9wdjJ5aDBxMTdqbw==\n\n____________________________________\n\n\n\n🤖 Join Discord  :  https://discord.com/invite/mcflame\n\n_____________________________________\n\nCopyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research...\n\n____________________________________\n\n#Minecraft #mcflame #troll #labubu"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT10M31S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "421436",
                "likeCount": "4383",
                "favoriteCount": "0",
                "commentCount": "233"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "7N2E_pVPpLk1HZAQcMK5vPOAmYU",
                "id": "UCTyg-vQ70A1m0lB1cLbu38Q",
                "snippet": {
                    "title": "Mc flame",
                    "description": "We will upload many amazing videos of minecraft\n\n\nJust SUBSCRIBE and chill😎\n\n2 may 2021 = 1000 subscriber complete 🎉🎉🎉\n20 April 2022 = 100k subscribers complete 🔥🎉❤️\n24 October 2022 = 1 million subscribers complete 🤯❤️\n24 September 2024 = 2 Million subscribers complete 🔥😉\nThanks for your support... ❤\nKeep supporting \n\n\n  \nFor sponsors:- \nbusinesswithmcflame@servicemedia.in\n",
                    "customUrl": "@mc_flame",
                    "publishedAt": "2021-01-20T23:50:13.115002Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/YRiuDwpUPZ_JY7p_rucfwgXqvzaJ3AyU0MvTI0Qmcr5hbPUoK1BHatq4T00Jo2NWLxTQw5TpAA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/YRiuDwpUPZ_JY7p_rucfwgXqvzaJ3AyU0MvTI0Qmcr5hbPUoK1BHatq4T00Jo2NWLxTQw5TpAA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/YRiuDwpUPZ_JY7p_rucfwgXqvzaJ3AyU0MvTI0Qmcr5hbPUoK1BHatq4T00Jo2NWLxTQw5TpAA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Mc flame",
                        "description": "We will upload many amazing videos of minecraft\n\n\nJust SUBSCRIBE and chill😎\n\n2 may 2021 = 1000 subscriber complete 🎉🎉🎉\n20 April 2022 = 100k subscribers complete 🔥🎉❤️\n24 October 2022 = 1 million subscribers complete 🤯❤️\n24 September 2024 = 2 Million subscribers complete 🔥😉\nThanks for your support... ❤\nKeep supporting \n\n\n  \nFor sponsors:- \nbusinesswithmcflame@servicemedia.in\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "yIEXGmPvlNAgdXw3--TMKw18KjU",
            "id": "DdCAn3MhStM",
            "snippet": {
                "publishedAt": "2025-07-18T21:14:31Z",
                "channelId": "UCI1vyXBgX3bruwvChLMNxjQ",
                "title": "50K UC TRANSFORMER CRATE OPENING | 55 SOLO FINISH TODAY? | BGMI LIVE",
                "description": "INSTAGRAM - https://www.instagram.com/lolzzzgaming/\n\n\nBGMI Live @LoLzZzGaming \n#bgmi #lolz #lolzz #lolzzz #lolzgaming #lolzzgaming #lolzzzgaming #lolzzzgamingyt",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DdCAn3MhStM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DdCAn3MhStM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DdCAn3MhStM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/DdCAn3MhStM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/DdCAn3MhStM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "LoLzZz Gaming",
                "tags": [
                    "lolz",
                    "lolzz",
                    "lolzzz",
                    "lolz gaming",
                    "lolzz gaming",
                    "lolzzz gaming",
                    "bgmi",
                    "conqueror"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en-GB",
                "localized": {
                    "title": "50K UC TRANSFORMER CRATE OPENING | 55 SOLO FINISH TODAY? | BGMI LIVE",
                    "description": "INSTAGRAM - https://www.instagram.com/lolzzzgaming/\n\n\nBGMI Live @LoLzZzGaming \n#bgmi #lolz #lolzz #lolzzz #lolzgaming #lolzzgaming #lolzzzgaming #lolzzzgamingyt"
                }
            },
            "contentDetails": {
                "duration": "PT5H15S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "687857",
                "likeCount": "50072",
                "favoriteCount": "0",
                "commentCount": "69"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "Mni86b14ulKapGhuWXrGFhzwDtQ",
                "id": "UCI1vyXBgX3bruwvChLMNxjQ",
                "snippet": {
                    "title": "LoLzZz Gaming",
                    "description": "Welcome to LoLzZz Gaming.\nThis is Official YouTube Channel of Yash Thacker.\nFull Time Streamer and Gaming  Content Creator.\nBusiness Enquiries - workwithlolzzz@gmail.com\n",
                    "customUrl": "@lolzzzgaming",
                    "publishedAt": "2017-03-26T18:32:31Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_niGQI-25G_EfSn6qNtF7Ll8VT4eVvJfCQv849dtFycZtE=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_niGQI-25G_EfSn6qNtF7Ll8VT4eVvJfCQv849dtFycZtE=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_niGQI-25G_EfSn6qNtF7Ll8VT4eVvJfCQv849dtFycZtE=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "LoLzZz Gaming",
                        "description": "Welcome to LoLzZz Gaming.\nThis is Official YouTube Channel of Yash Thacker.\nFull Time Streamer and Gaming  Content Creator.\nBusiness Enquiries - workwithlolzzz@gmail.com\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "O0VcCyChVcsgz_0As2guG6ubJY4",
            "id": "sCPgs4tSewk",
            "snippet": {
                "publishedAt": "2025-07-19T14:03:08Z",
                "channelId": "UCHGlDku-Fzg0wHNlAike8-g",
                "title": "PN ROSE IS LIVE ! BACK WITH PRO NATION SQUAD 🥵🔥 - #PNHARSH #SHORTS #PNROSE",
                "description": "VLOG CHANNEL - https://youtube.com/rose-chaudhary\nINSTAGRAM - https://instagram.com/_pnrose_\nPRO NATION DISCORD - https://discord.gg/pronation\n\n#PRONATION #FREEFIRE #GARENAFREEFIRE\n\nALOK vs DIAMONDS Best Clash Battle who will win Gameplay Garena Free Fire Live Streamer from India Killing Player with LOUD  Volume Spy Like James Bond 007 Level Up to 68.\n\n\nFree Fire Top Country\n1.Garena Free Fire Indonesia Live\n2.Garena Free Fire Brazil Live\n3.Garena Free Fire Brasil Live\n4.Garena Free Fire India Live\n5.Garena Free Fire Singapore Live\n6.Garena Free Fire Thailand Live\n\n\n#pnharsh #pnrowdy #pnsyed #pnarmy #pronationyt #garenafreefire #freefire #freefirelive #freefireindia #freefirebrazil #garena #freefirethailand #freefiremiddleeast #freefiremena #freefireindonesia #redcriminal #greencriminal #purplecriminal #hiphop #season2\n#season1 #freefiremax #bgmi #bgmilive #battlegroundmobileindia #factoryroof #factorytop #free #freediamonds #freefirediamonds #freefirehack #hack #hackfreefire #freefireban #freefireheadshot #prank #prankvideo #freefiretop5 #top5freefire #freefirevsbgmi #goldroyale #diamondroyale \n\nGarena FreeFire ❤️",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/sCPgs4tSewk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/sCPgs4tSewk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/sCPgs4tSewk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/sCPgs4tSewk/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/sCPgs4tSewk/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "PN ROSE",
                "tags": [
                    "freefire",
                    "garena freefire",
                    "freefire live",
                    "pro nation",
                    "pn harsh",
                    "pn rose",
                    "samsung",
                    "techno gamerz",
                    "total gaming",
                    "ajjubhai",
                    "freefire max"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "PN ROSE IS LIVE ! BACK WITH PRO NATION SQUAD 🥵🔥 - #PNHARSH #SHORTS #PNROSE",
                    "description": "VLOG CHANNEL - https://youtube.com/rose-chaudhary\nINSTAGRAM - https://instagram.com/_pnrose_\nPRO NATION DISCORD - https://discord.gg/pronation\n\n#PRONATION #FREEFIRE #GARENAFREEFIRE\n\nALOK vs DIAMONDS Best Clash Battle who will win Gameplay Garena Free Fire Live Streamer from India Killing Player with LOUD  Volume Spy Like James Bond 007 Level Up to 68.\n\n\nFree Fire Top Country\n1.Garena Free Fire Indonesia Live\n2.Garena Free Fire Brazil Live\n3.Garena Free Fire Brasil Live\n4.Garena Free Fire India Live\n5.Garena Free Fire Singapore Live\n6.Garena Free Fire Thailand Live\n\n\n#pnharsh #pnrowdy #pnsyed #pnarmy #pronationyt #garenafreefire #freefire #freefirelive #freefireindia #freefirebrazil #garena #freefirethailand #freefiremiddleeast #freefiremena #freefireindonesia #redcriminal #greencriminal #purplecriminal #hiphop #season2\n#season1 #freefiremax #bgmi #bgmilive #battlegroundmobileindia #factoryroof #factorytop #free #freediamonds #freefirediamonds #freefirehack #hack #hackfreefire #freefireban #freefireheadshot #prank #prankvideo #freefiretop5 #top5freefire #freefirevsbgmi #goldroyale #diamondroyale \n\nGarena FreeFire ❤️"
                }
            },
            "contentDetails": {
                "duration": "PT5H38M46S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1019972",
                "likeCount": "14345",
                "favoriteCount": "0",
                "commentCount": "24"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "VGMWYjGaKEBp4n8nUo8g1r8LkrA",
                "id": "UCHGlDku-Fzg0wHNlAike8-g",
                "snippet": {
                    "title": "PN ROSE",
                    "description": "Subscribe For Gaming + Entertaining Videos .\nMy Real Name Is Rose Chaudhary ❤\nInstagram - @_PNROSE_\n\nBusiness Mail - pnroseopgaming@gmail.com",
                    "customUrl": "@pnrose",
                    "publishedAt": "2022-04-22T14:46:10.058432Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/vqTBg13ffTF8NaXtRHkvP-Pj6aKwChvM3yqDnw4WlK2VGcpx4QkAtEtYW6nzaHi1vv-pgIW6tQ=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/vqTBg13ffTF8NaXtRHkvP-Pj6aKwChvM3yqDnw4WlK2VGcpx4QkAtEtYW6nzaHi1vv-pgIW6tQ=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/vqTBg13ffTF8NaXtRHkvP-Pj6aKwChvM3yqDnw4WlK2VGcpx4QkAtEtYW6nzaHi1vv-pgIW6tQ=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "PN ROSE",
                        "description": "Subscribe For Gaming + Entertaining Videos .\nMy Real Name Is Rose Chaudhary ❤\nInstagram - @_PNROSE_\n\nBusiness Mail - pnroseopgaming@gmail.com"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "vVjLXqvRMbpyTL-C9oblAR0xg0o",
            "id": "pVrYyoKQ7-s",
            "snippet": {
                "publishedAt": "2025-07-19T07:35:05Z",
                "channelId": "UCt3mMVAyGhwQb_ZBGp_p85g",
                "title": "Franklin Blue Gang Vs Shinchan Green Gang Fastest Prison Escape In GTA 5!",
                "description": "YOU ARE  WATCHING FLIGHT GAMER\nGTA 5 : Franklin Blue Gang Vs Shinchan Green Gang Fastest Prison Escape In GTA 5!\n=====================================================\nINSTAGRAM :-https://www.instagram.com/flightgamer_real\n____________________________________________________________\nTWITTER :-https://twitter.com/flightgamer22\n=====================================================\n\nSo guys i hope you like this video so plz.. plz.. hit a like button and plz.. share this video everywhere and smash Subscribe button....and press the bell icon...\n\nTHANK YOU FOR WATCHING.\n#shinchangta5\n#gta5mods\n#modsgta5",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/pVrYyoKQ7-s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/pVrYyoKQ7-s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/pVrYyoKQ7-s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/pVrYyoKQ7-s/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/pVrYyoKQ7-s/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Flight Gamer",
                "tags": [
                    "gta 5 mods",
                    "gta v mods",
                    "shinchan in gta 5",
                    "shinchan gta 5",
                    "gta 5 shinchan mod",
                    "gta 5",
                    "shinchan",
                    "techno gamerz gta 5",
                    "gta",
                    "gta v",
                    "gta 5 techno gamerz",
                    "gta 5 shinchan",
                    "techno gamerz",
                    "hulk",
                    "flight gamer",
                    "Franklin",
                    "Shinchan",
                    "Franklin Blue Gang Vs Shinchan Green Gang Fastest Prison Escape In GTA 5!",
                    "Flight Gamer",
                    "flight game",
                    "mythpat gta 5",
                    "mods gta 5",
                    "shin",
                    "chan",
                    "gta 6",
                    "shinchan sandstorm",
                    "diwali gta 5",
                    "gta 5 diwali",
                    "diwali",
                    "diwali 2024",
                    "blue gang franklin",
                    "franklin blue gang"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en-US",
                "localized": {
                    "title": "Franklin Blue Gang Vs Shinchan Green Gang Fastest Prison Escape In GTA 5!",
                    "description": "YOU ARE  WATCHING FLIGHT GAMER\nGTA 5 : Franklin Blue Gang Vs Shinchan Green Gang Fastest Prison Escape In GTA 5!\n=====================================================\nINSTAGRAM :-https://www.instagram.com/flightgamer_real\n____________________________________________________________\nTWITTER :-https://twitter.com/flightgamer22\n=====================================================\n\nSo guys i hope you like this video so plz.. plz.. hit a like button and plz.. share this video everywhere and smash Subscribe button....and press the bell icon...\n\nTHANK YOU FOR WATCHING.\n#shinchangta5\n#gta5mods\n#modsgta5"
                }
            },
            "contentDetails": {
                "duration": "PT36M32S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "296622",
                "likeCount": "9085",
                "favoriteCount": "0",
                "commentCount": "1200"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "U8oOSzy1gk3u9y2nYKhSiMUUYiw",
                "id": "UCt3mMVAyGhwQb_ZBGp_p85g",
                "snippet": {
                    "title": "Flight Gamer",
                    "description": "Hi Guys I am Flight .. here to Entertain you With Lots Of Gaming & Funny Videos.....\nSo I Hope That You Will Subscribe This Channel To keep Happiness In your Life....\n\nFor Any Sponsorship Or Enquiry :- flightgamer65@gmail.com\n",
                    "customUrl": "@flightgamerreal",
                    "publishedAt": "2020-05-20T03:18:57.810343Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nuXACqb5i6y7MXgTQ3ZfGUyz4iC67PNRHxiI7-4GpRYr8=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nuXACqb5i6y7MXgTQ3ZfGUyz4iC67PNRHxiI7-4GpRYr8=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nuXACqb5i6y7MXgTQ3ZfGUyz4iC67PNRHxiI7-4GpRYr8=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Flight Gamer",
                        "description": "Hi Guys I am Flight .. here to Entertain you With Lots Of Gaming & Funny Videos.....\nSo I Hope That You Will Subscribe This Channel To keep Happiness In your Life....\n\nFor Any Sponsorship Or Enquiry :- flightgamer65@gmail.com\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "ATZeUw2xePMLLPYY1MU4nDH3nbw",
            "id": "GqB_5XfqIwY",
            "snippet": {
                "publishedAt": "2025-07-17T13:56:30Z",
                "channelId": "UCJS4UHGP6Q3BI-0ZIGrGXgw",
                "title": "DRAWING TRENDING BUILD BATTLE IN MINECRAFT with @ProBoiz95[Episode 29]",
                "description": "Yo Guysss, in this video I and ProBoiz95 will draw trending drawings in minecraft~!💗\n\nLike Aim: 9,500\n⏺️Instagram🔽\nhttps://www.instagram.com/junkeyy05/\n\n#minecraft #minecrafthindi #junkeyy",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GqB_5XfqIwY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GqB_5XfqIwY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GqB_5XfqIwY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/GqB_5XfqIwY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/GqB_5XfqIwY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Junkeyy",
                "tags": [
                    "drawing competition minecraft",
                    "cheating with /draw",
                    "darkheroes",
                    "darkheroes sheng",
                    "minecraft funny",
                    "minecraft hindi",
                    "junkeyy"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "DRAWING TRENDING BUILD BATTLE IN MINECRAFT with @ProBoiz95[Episode 29]",
                    "description": "Yo Guysss, in this video I and ProBoiz95 will draw trending drawings in minecraft~!💗\n\nLike Aim: 9,500\n⏺️Instagram🔽\nhttps://www.instagram.com/junkeyy05/\n\n#minecraft #minecrafthindi #junkeyy"
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT18M41S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "795397",
                "likeCount": "18592",
                "favoriteCount": "0",
                "commentCount": "3703"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "xT0Zi0ZSc5LG-kRC2nVnCEh95zs",
                "id": "UCJS4UHGP6Q3BI-0ZIGrGXgw",
                "snippet": {
                    "title": "Junkeyy",
                    "description": "Hello :))\nSUBSCRIBE FOR SOME MASTI!\n\nBye :))\n\nFor Business Inquiry - junkeyy05@gmail.com\n",
                    "customUrl": "@junkeyy",
                    "publishedAt": "2021-12-28T14:12:55.376573Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/B12hd9L4olOm5gj6PcKoX-BoJad4DiEnSyKDB5TrrsrJzObOYiVnAQOu231G4kMGyoyRtPWBNbk=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/B12hd9L4olOm5gj6PcKoX-BoJad4DiEnSyKDB5TrrsrJzObOYiVnAQOu231G4kMGyoyRtPWBNbk=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/B12hd9L4olOm5gj6PcKoX-BoJad4DiEnSyKDB5TrrsrJzObOYiVnAQOu231G4kMGyoyRtPWBNbk=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Junkeyy",
                        "description": "Hello :))\nSUBSCRIBE FOR SOME MASTI!\n\nBye :))\n\nFor Business Inquiry - junkeyy05@gmail.com\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "hJQct5fcnzpPdqF3wdlNE-z3VIw",
            "id": "ZmPSlcMgJ8g",
            "snippet": {
                "publishedAt": "2025-07-19T21:00:19Z",
                "channelId": "UCFNDr8xds_c17hRUXL8MitA",
                "title": "challenge dayyyy",
                "description": "▶️ Follow the socials for updates and interesting BTS sneak peaks-\n\nhttps://instagram.com/sayip_op7\n\n\nℹ️ F.A.Q's\n\nDevice - 16 pro max\nHeadphones - KZN pro iem\nCooler - Blackshark mag4 pro.\nGame - Battlegrounds mobile india.\nStream timings - 10:30-1:00AM IST.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZmPSlcMgJ8g/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZmPSlcMgJ8g/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZmPSlcMgJ8g/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/ZmPSlcMgJ8g/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/ZmPSlcMgJ8g/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Sayip0P",
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "challenge dayyyy",
                    "description": "▶️ Follow the socials for updates and interesting BTS sneak peaks-\n\nhttps://instagram.com/sayip_op7\n\n\nℹ️ F.A.Q's\n\nDevice - 16 pro max\nHeadphones - KZN pro iem\nCooler - Blackshark mag4 pro.\nGame - Battlegrounds mobile india.\nStream timings - 10:30-1:00AM IST."
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT3H28M49S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "106335",
                "likeCount": "9409",
                "favoriteCount": "0",
                "commentCount": "24"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "31ThKMZ1FfGM6j0nrt6bm2oULdc",
                "id": "UCFNDr8xds_c17hRUXL8MitA",
                "snippet": {
                    "title": "Sayip0P",
                    "description": "\n▶️For Business Enquiries & Partnerships, Reach out to - Saayip7@gmail.com\n\nhttps://instagram.com/sayip_op7",
                    "customUrl": "@sayip0p",
                    "publishedAt": "2016-08-22T00:41:50Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/XxU_XUOmUmuK-vueEHHUVE27FIa_W7Ur8LkkZu1LJm8Zc3sdv-_4Kw3FOEKmntsESCyozlJu3g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/XxU_XUOmUmuK-vueEHHUVE27FIa_W7Ur8LkkZu1LJm8Zc3sdv-_4Kw3FOEKmntsESCyozlJu3g=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/XxU_XUOmUmuK-vueEHHUVE27FIa_W7Ur8LkkZu1LJm8Zc3sdv-_4Kw3FOEKmntsESCyozlJu3g=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Sayip0P",
                        "description": "\n▶️For Business Enquiries & Partnerships, Reach out to - Saayip7@gmail.com\n\nhttps://instagram.com/sayip_op7"
                    }
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "_McQGjMUTo0xHlfz0YUuypKoI8U",
            "id": "ZdC5mFHPldg",
            "snippet": {
                "publishedAt": "2025-07-17T16:05:00Z",
                "channelId": "UCjmJDM5pRKbUlVIzDYYWb6g",
                "title": "Mortal Kombat II | Official Trailer",
                "description": "It's called Mortal Kombat (II).\nMortal Kombat II – only in theaters and @imax October 24. #MortalKombatMovie #FilmedForIMAX \n\nFrom New Line Cinema comes the latest high-stakes installment in the blockbuster video game franchise in all its brutal glory, Mortal Kombat II.  This time, the fan favorite champions—now joined by Johnny Cage himself—are pitted against one another in the ultimate, no-holds barred, gory battle to defeat the dark rule of Shao Kahn that threatens the very existence of the Earthrealm and its defenders.\n\nKarl Urban stars as Johnny Cage, alongside Adeline Rudolph, Jessica McNamee, Josh Lawson, Ludi Lin, Mehcad Brooks, Tati Gabrielle, Lewis Tan, Damon Herriman, with Chin Han, Tadanobu Asano as Lord Raiden, Joe Taslim as Bi-Han, and Hiroyuki Sanada as Hanzo Hasashi and Scorpion.\n\nDirector Simon McQuoid returns to helm the follow up to his explosive 2021 cinematic adventure, from a screenplay by Jeremy Slater, based on the videogame created by Ed Boon and John Tobias.  The film is produced by Todd Garner, James Wan, Toby Emmerich, E. Bennett Walsh and McQuoid, and executive produced by Michael Clear, Judson Scott, Slater and Lawrence Kasanoff.  \n\nJoining McQuoid behind the camera are director of photography Stephen F. Windon, production designer Yohei Taneda, editor Stuart Levy and costume designer Cappi Ireland, with casting by Rich Delia and music by Benjamin Wallfisch.\n\nNew Line Cinema Presents an Atomic Monster/Broken Road Production, a Fireside Films Production, Mortal Kombat II.  The film will be distributed worldwide by Warner Bros. Pictures, only in theaters and IMAX® across North America on October 24, 2025, and internationally beginning 22 October 2025.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZdC5mFHPldg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZdC5mFHPldg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZdC5mFHPldg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/ZdC5mFHPldg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/ZdC5mFHPldg/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Warner Bros.",
                "tags": [
                    "2025",
                    "Action",
                    "Adeline Rudolph",
                    "Adventure",
                    "Battle",
                    "Coming Soon",
                    "Damon Herriman",
                    "Fantasy",
                    "Film",
                    "Film Trailer",
                    "Film Warner",
                    "Game",
                    "Hiroyuki Sanada",
                    "Jessica McNamee",
                    "Joe Taslim as Bi-Han",
                    "Josh Lawson",
                    "Karl Urban",
                    "Lewis Tan",
                    "Ludi Lin",
                    "MMA Fighter",
                    "Martial Arts",
                    "Mehcad Brooks",
                    "Mortal Kombat",
                    "Mortal Kombat II",
                    "Movie",
                    "Official Trailer",
                    "Simon McQuoid",
                    "Tadanobu Asano as Lord Raiden",
                    "Tati Gabrielle",
                    "Trailer",
                    "Video Game",
                    "WB",
                    "Warner",
                    "Warner Bros",
                    "Warner Brothers",
                    "Warner Media",
                    "with Chin Han"
                ],
                "categoryId": "1",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Mortal Kombat II | Official Trailer",
                    "description": "It's called Mortal Kombat (II).\nMortal Kombat II – only in theaters and @imax October 24. #MortalKombatMovie #FilmedForIMAX \n\nFrom New Line Cinema comes the latest high-stakes installment in the blockbuster video game franchise in all its brutal glory, Mortal Kombat II.  This time, the fan favorite champions—now joined by Johnny Cage himself—are pitted against one another in the ultimate, no-holds barred, gory battle to defeat the dark rule of Shao Kahn that threatens the very existence of the Earthrealm and its defenders.\n\nKarl Urban stars as Johnny Cage, alongside Adeline Rudolph, Jessica McNamee, Josh Lawson, Ludi Lin, Mehcad Brooks, Tati Gabrielle, Lewis Tan, Damon Herriman, with Chin Han, Tadanobu Asano as Lord Raiden, Joe Taslim as Bi-Han, and Hiroyuki Sanada as Hanzo Hasashi and Scorpion.\n\nDirector Simon McQuoid returns to helm the follow up to his explosive 2021 cinematic adventure, from a screenplay by Jeremy Slater, based on the videogame created by Ed Boon and John Tobias.  The film is produced by Todd Garner, James Wan, Toby Emmerich, E. Bennett Walsh and McQuoid, and executive produced by Michael Clear, Judson Scott, Slater and Lawrence Kasanoff.  \n\nJoining McQuoid behind the camera are director of photography Stephen F. Windon, production designer Yohei Taneda, editor Stuart Levy and costume designer Cappi Ireland, with casting by Rich Delia and music by Benjamin Wallfisch.\n\nNew Line Cinema Presents an Atomic Monster/Broken Road Production, a Fireside Films Production, Mortal Kombat II.  The film will be distributed worldwide by Warner Bros. Pictures, only in theaters and IMAX® across North America on October 24, 2025, and internationally beginning 22 October 2025."
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT2M33S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": false,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "9699979",
                "likeCount": "326075",
                "favoriteCount": "0",
                "commentCount": "25506"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "IZJFqsjn1JH8AzHtu_BC7jHRaNA",
                "id": "UCjmJDM5pRKbUlVIzDYYWb6g",
                "snippet": {
                    "title": "Warner Bros.",
                    "description": "Welcome to the official channel for Warner Bros. Subscribe now for all our latest movie trailers, clips and featurettes!\n",
                    "customUrl": "@warnerbros",
                    "publishedAt": "2006-10-17T22:30:51Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/yVXKYrUI8hckCQdyUuOWf5ZJk2keT8WO3TV2b8RYk3RKgjz5Rh8v1UsH7Yz2j_hbDQRk32rZ_rM=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/yVXKYrUI8hckCQdyUuOWf5ZJk2keT8WO3TV2b8RYk3RKgjz5Rh8v1UsH7Yz2j_hbDQRk32rZ_rM=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/yVXKYrUI8hckCQdyUuOWf5ZJk2keT8WO3TV2b8RYk3RKgjz5Rh8v1UsH7Yz2j_hbDQRk32rZ_rM=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Warner Bros.",
                        "description": "Welcome to the official channel for Warner Bros. Subscribe now for all our latest movie trailers, clips and featurettes!\n"
                    },
                    "country": "US"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "56MfP4nRy3PBj0fkJ1OupVTCy30",
            "id": "aasP0IBJaRU",
            "snippet": {
                "publishedAt": "2025-07-19T16:44:25Z",
                "channelId": "UCuYSf8EuD8cqeEFITmvHXYQ",
                "title": "[HINDI] Esports World Cup 2025 | Point Rush",
                "description": "The top 12 teams from the Knockout Stage will now face off in a series of crucial matches. Every Booyah and every elimination is critical, as they're not just fighting for a win—they're fighting for extra points that will give them a head start in the Grand Finals!\n\n19th July\n20:00 UTC+7",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/aasP0IBJaRU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/aasP0IBJaRU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/aasP0IBJaRU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/aasP0IBJaRU/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/aasP0IBJaRU/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Free Fire MAX Esports India Official",
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "[HINDI] Esports World Cup 2025 | Point Rush",
                    "description": "The top 12 teams from the Knockout Stage will now face off in a series of crucial matches. Every Booyah and every elimination is critical, as they're not just fighting for a win—they're fighting for extra points that will give them a head start in the Grand Finals!\n\n19th July\n20:00 UTC+7"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT3H46M35S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": false,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "222501",
                "likeCount": "8320",
                "favoriteCount": "0",
                "commentCount": "54"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "HLhRc7CD2BxCdadqZ-mvBFen_G0",
                "id": "UCuYSf8EuD8cqeEFITmvHXYQ",
                "snippet": {
                    "title": "Free Fire MAX Esports India Official",
                    "description": "The official YouTube channel for Free Fire MAX Esports India Official!",
                    "customUrl": "@freefireindiaesportsofficial",
                    "publishedAt": "2020-04-22T08:06:31.6847Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/7AqtehKHUw6pfOanHJ8Zsw6HZKzshLnPJhbwx8T63i1Xs8Y6hJtb4BTyfcOJyKRsz7D7RZQSbw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/7AqtehKHUw6pfOanHJ8Zsw6HZKzshLnPJhbwx8T63i1Xs8Y6hJtb4BTyfcOJyKRsz7D7RZQSbw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/7AqtehKHUw6pfOanHJ8Zsw6HZKzshLnPJhbwx8T63i1Xs8Y6hJtb4BTyfcOJyKRsz7D7RZQSbw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "defaultLanguage": "zu",
                    "localized": {
                        "title": "Free Fire MAX Esports India Official",
                        "description": "The official YouTube channel for Free Fire MAX Esports India Official!"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "K7CSmn-vsHQO6QZ6QnLwpmB3IdA",
            "id": "_51k0rrawLY",
            "snippet": {
                "publishedAt": "2025-07-18T10:05:02Z",
                "channelId": "UC1k1Gf6AbCSuv4CVzOQLLCw",
                "title": "*DO NOT FEED* The Blob..",
                "description": "Wassup Gamers,\n\nToday I will be playing a game where I have to not feed the blob. Do not feed the blob.\nDO NOT FEED THE BLOB.. DO NOT FEED THE BLOB! Do NOT Feed The Blob Do NOT FEED The BLOB\n\nThumbnail Credit : @Melon Sunny World  \nI DO NOT OWN THIS THUMBNAIL.\n  \nNOTE : If you have any issues regarding copyright matters/thumbnail, please contact me through email or my socials. THANKYOU :)\n\nFollow Me On EVERYWHERE! *Not on streets please :')*\nInstagram : https://www.instagram.com/imbixu/\nDiscord (Must Join) : https://discord.gg/imbixu\nTwitter : https://twitter.com/IMBixu1\n\nCopyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.\n\nFair use is a use permitted by copyright statute that might otherwise be infringing.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_51k0rrawLY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_51k0rrawLY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_51k0rrawLY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/_51k0rrawLY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/_51k0rrawLY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "I. M. Bixu",
                "tags": [
                    "do not feed the blob",
                    "do not feed the blob full game",
                    "do not feed the blob all endings",
                    "do not feed the blob secret ending",
                    "feed the blob",
                    "the blob",
                    "unique horror games",
                    "horror",
                    "funny",
                    "gaming",
                    "jumpscare",
                    "2025",
                    "MOST DISTURBING GAME EVER",
                    "SCARY GAME",
                    "GAMEPLAY",
                    "REACT",
                    "comedy",
                    "no cursing",
                    "no swearing",
                    "family friendly",
                    "funniest",
                    "proboiz 95",
                    "in hindi",
                    "techno gamerz",
                    "mythpat",
                    "bixu",
                    "slayypop",
                    "im bixu",
                    "proboii",
                    "Triggered Insaan",
                    "beast boy shub",
                    "full game",
                    "ujjwal",
                    "2024",
                    "live insaan",
                    "new game"
                ],
                "categoryId": "20",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "*DO NOT FEED* The Blob..",
                    "description": "Wassup Gamers,\n\nToday I will be playing a game where I have to not feed the blob. Do not feed the blob.\nDO NOT FEED THE BLOB.. DO NOT FEED THE BLOB! Do NOT Feed The Blob Do NOT FEED The BLOB\n\nThumbnail Credit : @Melon Sunny World  \nI DO NOT OWN THIS THUMBNAIL.\n  \nNOTE : If you have any issues regarding copyright matters/thumbnail, please contact me through email or my socials. THANKYOU :)\n\nFollow Me On EVERYWHERE! *Not on streets please :')*\nInstagram : https://www.instagram.com/imbixu/\nDiscord (Must Join) : https://discord.gg/imbixu\nTwitter : https://twitter.com/IMBixu1\n\nCopyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.\n\nFair use is a use permitted by copyright statute that might otherwise be infringing."
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT20M15S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "326739",
                "likeCount": "7594",
                "favoriteCount": "0",
                "commentCount": "606"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "TWWzx5jMcMvBtd2rj0vEhE8wtHs",
                "id": "UC1k1Gf6AbCSuv4CVzOQLLCw",
                "snippet": {
                    "title": "I. M. Bixu",
                    "description": "My Motive, To Make You Smile! :)\n\nFor Business Related Inquiries : imbixuofficial@gmail.com\nManaged By OP Gaming (Opraahfx)\n",
                    "customUrl": "@imbixu",
                    "publishedAt": "2019-12-07T16:28:52.165161Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nKXjHMvmneF_-yFjTchhQ7hq-m78wdGAx9LqVVNWVFJ5Q=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nKXjHMvmneF_-yFjTchhQ7hq-m78wdGAx9LqVVNWVFJ5Q=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nKXjHMvmneF_-yFjTchhQ7hq-m78wdGAx9LqVVNWVFJ5Q=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "I. M. Bixu",
                        "description": "My Motive, To Make You Smile! :)\n\nFor Business Related Inquiries : imbixuofficial@gmail.com\nManaged By OP Gaming (Opraahfx)\n"
                    },
                    "country": "IN"
                }
            }
        }
    ],
    "Podcast": [
        {
            "kind": "youtube#video",
            "etag": "rqJ-ozPkIKJFRvnpj5FEzsDknWc",
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
                "viewCount": "5969650",
                "likeCount": "316315",
                "favoriteCount": "0",
                "commentCount": "12762"
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
            "etag": "oDIB7o6ADrhnqBjIaEIu4Z9qamA",
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
                "viewCount": "5111279",
                "likeCount": "160125",
                "favoriteCount": "0",
                "commentCount": "3011"
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
            "etag": "RSyiUxc7vXFU5cENkUGDIt8oJlM",
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
                "viewCount": "4566851",
                "likeCount": "56389",
                "favoriteCount": "0",
                "commentCount": "2368"
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
            "etag": "OO-3lqpx-swSJ_H41XtoSw9xHY4",
            "id": "s9NBDKfVg1c",
            "snippet": {
                "publishedAt": "2025-07-18T11:34:03Z",
                "channelId": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "T-Series Telugu",
                "tags": [
                    "Telugu New song",
                    "Telugu Songs",
                    "T-Series",
                    "Telugu Video Songs",
                    "Telugu Hit songs",
                    "Latest telugu Songs",
                    "telugu hit songs",
                    "telugu super hit songs",
                    "latest video",
                    "Latest Telugu Songs 2025",
                    "telugu melody songs",
                    "Telugu Hits",
                    "Nuvvunte Chaley",
                    "Nuvvunte Chaley Song Promo",
                    "Nuvvunte Chaley Andhra King Taluka",
                    "Andhra King Taluka Nuvvunte Chaley",
                    "Ram Pothineni Nuvvunte Chaley",
                    "Bhagyashri Borse Nuvvunte Chaley",
                    "Ram Pothineni New Song",
                    "Ram Pothineni Telugu Love Song",
                    "Ram Pothineni"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                    "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "10022815",
                "likeCount": "218262",
                "favoriteCount": "0",
                "commentCount": "8251"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "mL8nqlhatyLCqMR2AoYljj77Zxo",
                "id": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "snippet": {
                    "title": "T-Series Telugu",
                    "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!",
                    "customUrl": "@tseriestelugu",
                    "publishedAt": "2014-06-09T05:57:42Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "T-Series Telugu",
                        "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "mJDqE3g-HDlms3yM97wILBP09hI",
            "id": "6lnorP0ZsZY",
            "snippet": {
                "publishedAt": "2025-07-18T08:34:16Z",
                "channelId": "UCUK49UvmYWYLiB7_bZFuFZQ",
                "title": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News",
                "description": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News\n\nFM College student case..... The Investigating Committee to be present. Directive for personal attendance to ICC members. Instructions for personal attendance at FM College today and tomorrow. On the 13th, the preliminary investigation internal report was submitted.\n\n\n#fmcollegegirlnews #OdishaBandh #CongressOdisha #BalasoreStudent  #fmcollegeincident #fmcollege #OdishaNews #FakirMohanCollege #odishapolitics  #News18Odia #OdiaNews #ଆଜିରନ୍ୟୁଜ #odishanews #oriyanews #bhubaneswarnews \n \n\nWelcome to News18 Odia, your go-to destination for the latest news and updates from across India and beyond. As one of Odisha's premier news channels, we strive to keep you informed with live coverage and breaking news as it happens.  \n\nSubscribe now and turn on notifications to stay connected with News18 Odia and stay ahead of the curve with our comprehensive news coverage. Stay informed, stay engaged, and stay connected with News18 Odia on YouTube.  \n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube  \n\nPlease visit our website https://bit.ly/2YaikeJ for the latest opinions and detailed news coverage.  \n\nFollow us on \nFacebook: https://www.facebook.com/News18Odia\nTwitter: https://twitter.com/news18odia?lang=en\nWebsite: https://bit.ly/2YaikeJ\n\nSubscribe to our channel to get the latest news and updates https://tinyurl.com/y46bt2fm",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "News18 Odia",
                "tags": [
                    "news 18 odia",
                    "news 18 odia live",
                    "Odisha News",
                    "Odisha University Scandal",
                    "fm college case",
                    "Odia News",
                    "odisha news",
                    "news18 odia",
                    "FM College Student Case",
                    "fm college srudent case",
                    "fm college news today",
                    "fm college news today cctv footage",
                    "victim father",
                    "fm college balasore",
                    "fm college video viral",
                    "fm college news today odia",
                    "balasore fm college news today",
                    "balasore fm college cctv footage",
                    "balasore fm college case",
                    "odia news",
                    "latest odia news",
                    "local news",
                    "soumyashree"
                ],
                "categoryId": "25",
                "liveBroadcastContent": "none",
                "defaultLanguage": "or",
                "localized": {
                    "title": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News",
                    "description": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News\n\nFM College student case..... The Investigating Committee to be present. Directive for personal attendance to ICC members. Instructions for personal attendance at FM College today and tomorrow. On the 13th, the preliminary investigation internal report was submitted.\n\n\n#fmcollegegirlnews #OdishaBandh #CongressOdisha #BalasoreStudent  #fmcollegeincident #fmcollege #OdishaNews #FakirMohanCollege #odishapolitics  #News18Odia #OdiaNews #ଆଜିରନ୍ୟୁଜ #odishanews #oriyanews #bhubaneswarnews \n \n\nWelcome to News18 Odia, your go-to destination for the latest news and updates from across India and beyond. As one of Odisha's premier news channels, we strive to keep you informed with live coverage and breaking news as it happens.  \n\nSubscribe now and turn on notifications to stay connected with News18 Odia and stay ahead of the curve with our comprehensive news coverage. Stay informed, stay engaged, and stay connected with News18 Odia on YouTube.  \n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube  \n\nPlease visit our website https://bit.ly/2YaikeJ for the latest opinions and detailed news coverage.  \n\nFollow us on \nFacebook: https://www.facebook.com/News18Odia\nTwitter: https://twitter.com/news18odia?lang=en\nWebsite: https://bit.ly/2YaikeJ\n\nSubscribe to our channel to get the latest news and updates https://tinyurl.com/y46bt2fm"
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT8M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1411282",
                "likeCount": "13097",
                "favoriteCount": "0",
                "commentCount": "1141"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "_ZGR8DKzXqkSocYZnV5d54_twZw",
                "id": "UCUK49UvmYWYLiB7_bZFuFZQ",
                "snippet": {
                    "title": "News18 Odia",
                    "description": "News18 Odia is one of the Odisha’s leading news channel. Please follow up page to watch live and breaking news with latest videos added very hour. \n\nNews18 ଓଡ଼ିଆ ହେଉଛି ଓଡିଶାର ନାମୀ ଦାମୀ ନ୍ୟୁଜ ଚ୍ୟାନେଲ ଭିତରୁ ଗୋଟିଏ . ଓଡିଶାର ଛୋଟ ମୋଟ ଖବର ଆପଣ ପାଇଁ ପାରିବେ ଏହି ଚ୍ୟାନେଲ ମାଧ୍ୟମରେ\n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube\n\nPlease visit our website http://www.news18.com/ for latest opinions and detailed news coverage, Pictures, Entertainment, Sports, Cricket and Lifestyle Updates. \n\nGet latest news updates as they happen on your phone, Download our app: Android: http://bit.ly/2ussJls , iPhone: http://apple.co/2usJEEm",
                    "customUrl": "@news18odia",
                    "publishedAt": "2015-05-02T04:44:32Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "News18 Odia",
                        "description": "News18 Odia is one of the Odisha’s leading news channel. Please follow up page to watch live and breaking news with latest videos added very hour. \n\nNews18 ଓଡ଼ିଆ ହେଉଛି ଓଡିଶାର ନାମୀ ଦାମୀ ନ୍ୟୁଜ ଚ୍ୟାନେଲ ଭିତରୁ ଗୋଟିଏ . ଓଡିଶାର ଛୋଟ ମୋଟ ଖବର ଆପଣ ପାଇଁ ପାରିବେ ଏହି ଚ୍ୟାନେଲ ମାଧ୍ୟମରେ\n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube\n\nPlease visit our website http://www.news18.com/ for latest opinions and detailed news coverage, Pictures, Entertainment, Sports, Cricket and Lifestyle Updates. \n\nGet latest news updates as they happen on your phone, Download our app: Android: http://bit.ly/2ussJls , iPhone: http://apple.co/2usJEEm"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "7E4Y2bbOG2jcMG70-SE3Ak_rsTQ",
            "id": "nIj06MVH0HY",
            "snippet": {
                "publishedAt": "2025-07-18T11:30:52Z",
                "channelId": "UC7G96LIVWvicrHlQRyA3GRA",
                "title": "2025 ஆடி கிருத்திகை எந்த நாளில் வருகிறது? வழிபடும் & விரத முறை | Aadi Krithigai fasting & worship",
                "description": "#ஆடிகிருத்திகை #aadikrithigai #desamangaiyarkarasi #desamangayarkarasi #தேசமங்கையர்க்கரசி \n\nதிருப்புகழ் 1\n\nசந்தம் \nதனதனன தான தத்த தனதனன தான தத்த\nதனதனன தான தத்த    தனதான\n\nதிருப்புகழ் பாடல் \nசரணகம லால யத்தை அரைநிமிஷ நேர மட்டில்\nதவமுறைதி யானம் வைக்க   அறியாத\n\nசடகசட மூட மட்டி பவவினையி லேச னித்த\nதமியன்மிடி யால்ம யக்க    முறுவேனோ\n\nகருணைபுரி யாதி ருப்ப தெனகுறையி வேளை செப்பு\nகயிலைமலை நாதர் பெற்ற    குமரோனே\n\nகடகபுய மீதி ரத்ந மணியணிபொன் மாலே செச்சை\nகமழுமண மார்க டப்ப    மணிவோனே\n\nதருணமிதை யாமி குத்த கனமதுறு நீள்ச வுக்ய\nசகலசெல்வ யோக மிக்க    பெருவாழ்வு\n\nதகைமைசிவ ஞான முத்தி பரகதியு நீகொ டுத்து\nதவிபுரிய வேணு நெய்த்த    வடிவேலா\n\nஅருணதள பாத பத்ம மதுநிதமு மேது திக்க\nஅரியதமிழ் தான ளித்த    மயில்வீரா\n\nஅதிசயம நேக முற்ற பழநிமலை மீது தித்த\nஅழகதிரு வேர கத்தின்    முருகோனே.\n\nTHIRUPUGAZH 1 IN ENGLISH\n\nCHARANA KAMALALA YATHTHAI ARAINIMISHA NERA MATTIL\nTHAVAMURAI DHIYANAM VAIKKA    ARIYADHA\n\nSADAKASADA MOODA MATTI BHAVA VINAIYILE JANITHTHA\nTHAMIYAN MIDIYAL MAYAKKAM    URUVENO\n\nKARUNAIPURI YAADHI RUPPA DHENAKURAIYI VELAI SEPPU\nKAYILAIMALAI NATHAR PETRA     KUMARONE\n\nKADAKAPUYA MEETHI RATHNA MANIYANIPON MALAE SECHAI\nKAMAZHU MANA MAR KADAPPAM    ANIVONE\n\nTHARUNAM IDHAIYA MIGUTHTHA KANAMADHURU NEEL SAVUKYA\nSAKALASELVA YOGA MIKKA     PERUVAZHVU\n\nTHAGAIMAISIVA NYANA MUTHTHI PARAGATHIYU NEE KODUTH\nUDHAVIPURIYA VENU NEYTHTHA    VADIVELA\n\nARUNADHALA PADHA PADHMAM ADHUNIDHAMUME THUDHIKKA\nARIYATHAMIZH THAN ALITHTHA    MAYILVEERA\n\nADHISAYAM ANEGAM UTRA PAZHANIMALAI MEEDH UDHITHTHA\nAZHAGATHIRU VERAGATHTHIN    MURUGONE.\n\nதிருப்புகழ் 2\n\nசந்தம் \nதனதான தத்த தனதான தத்த\nதனதான தத்த  தனதான\n\nதிருப்புகழ் பாடல் \n\nசெகமாயை யுற்றெ னகவாழ்வில் வைத்த\nதிருமாது கெர்ப்ப     முடலூறித்\n\nதெசமாத முற்றி வடிவாய்நி லத்தில்\nதிரமாய ளித்த      பொருளாகி\n\nமகவாவி னுச்சி விழியாந நத்தில்\nமலைநேர்பு யத்தி     லுறவாடி\n\nமடிமீத டுத்து விளையாடி நித்த\nமணிவாயின் முத்தி     தரவேணும்\n\nமுகமாய மிட்ட குறமாதி னுக்கு\nமுலைமேல ணைக்க     வருநீதா\n\nமுதுமாம றைக்கு ளொருமாபொ ருட்குள்\nமொழியேயு ரைத்த     குருநாதா\n\nதகையாதெ னக்கு னடிகாண வைத்த\nதனியேர கத்தின்     முருகோனே\n\nதருகாவி ரிக்கு வடபாரி சத்தில்\nசமர்வேலெ டுத்த     பெருமாளே.\n\nTHIRUPPUGHAZH 2 IN ENGLISH \n\nSEGA MAYAI UTREN AGA VAZHVIL VAITHTHA\nTHIRUMADHU GERBAM     UDAL URI\n\nDHESA MADHA MUTRI VADIVAY NILATHTHIL\nTHIRAMAY ALITHTHA      PORULAGI\n\nMAGAVAVIN UCHCHI VIZHI ANANATHTHIL\nMALAI NER BUYATHTHIL     URAVADI\n\nMADIMEE DHADUTHTHU VILAIYADI NITHTHAM\nMANIVAYIN MUTHTHI      THARAVENUM\n\nMUGA MAYAM ITTA KURA MADHINUKKU\nMULAIMEL ANAIKKA  VARU    NEEDHA\n\nMUDHU MA MARAIKKUL ORU MA PORUTKUL\nMOZHIYE URAITHTHA      GURUNATHA\n\nTHAGAIYADH ENAKKUN ADI KANA VAITHTHA\nTHANI ERAGATHTHIN      MURUGONE\n\nTHARU KAVIRIKKU VADA PARISATHTHIL\nSAMAR VEL EDUTHTHA     PERUMALE.\n\nஆத்ம ஞான மையம்",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Athma Gnana Maiyam",
                "tags": [
                    "sollarasi",
                    "desa mangaiyarkarasi",
                    "desa mangayarkarasi",
                    "athma gnana maiyam",
                    "latest speech",
                    "variyar",
                    "variyar swamigal",
                    "krubanandha variyar",
                    "sorpozhivu",
                    "சொல்லரசி",
                    "தேச மங்கையர்க்கரசி",
                    "தேச மங்கையற்கரசி",
                    "ஆத்ம ஞான மையம்",
                    "சொற்பொழிவு",
                    "வாரியார்",
                    "வாரியார் ஸ்வாமிகள்",
                    "சுவாமிகள்",
                    "கிருபானந்த வாரியார்"
                ],
                "categoryId": "22",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "2025 ஆடி கிருத்திகை எந்த நாளில் வருகிறது? வழிபடும் & விரத முறை | Aadi Krithigai fasting & worship",
                    "description": "#ஆடிகிருத்திகை #aadikrithigai #desamangaiyarkarasi #desamangayarkarasi #தேசமங்கையர்க்கரசி \n\nதிருப்புகழ் 1\n\nசந்தம் \nதனதனன தான தத்த தனதனன தான தத்த\nதனதனன தான தத்த    தனதான\n\nதிருப்புகழ் பாடல் \nசரணகம லால யத்தை அரைநிமிஷ நேர மட்டில்\nதவமுறைதி யானம் வைக்க   அறியாத\n\nசடகசட மூட மட்டி பவவினையி லேச னித்த\nதமியன்மிடி யால்ம யக்க    முறுவேனோ\n\nகருணைபுரி யாதி ருப்ப தெனகுறையி வேளை செப்பு\nகயிலைமலை நாதர் பெற்ற    குமரோனே\n\nகடகபுய மீதி ரத்ந மணியணிபொன் மாலே செச்சை\nகமழுமண மார்க டப்ப    மணிவோனே\n\nதருணமிதை யாமி குத்த கனமதுறு நீள்ச வுக்ய\nசகலசெல்வ யோக மிக்க    பெருவாழ்வு\n\nதகைமைசிவ ஞான முத்தி பரகதியு நீகொ டுத்து\nதவிபுரிய வேணு நெய்த்த    வடிவேலா\n\nஅருணதள பாத பத்ம மதுநிதமு மேது திக்க\nஅரியதமிழ் தான ளித்த    மயில்வீரா\n\nஅதிசயம நேக முற்ற பழநிமலை மீது தித்த\nஅழகதிரு வேர கத்தின்    முருகோனே.\n\nTHIRUPUGAZH 1 IN ENGLISH\n\nCHARANA KAMALALA YATHTHAI ARAINIMISHA NERA MATTIL\nTHAVAMURAI DHIYANAM VAIKKA    ARIYADHA\n\nSADAKASADA MOODA MATTI BHAVA VINAIYILE JANITHTHA\nTHAMIYAN MIDIYAL MAYAKKAM    URUVENO\n\nKARUNAIPURI YAADHI RUPPA DHENAKURAIYI VELAI SEPPU\nKAYILAIMALAI NATHAR PETRA     KUMARONE\n\nKADAKAPUYA MEETHI RATHNA MANIYANIPON MALAE SECHAI\nKAMAZHU MANA MAR KADAPPAM    ANIVONE\n\nTHARUNAM IDHAIYA MIGUTHTHA KANAMADHURU NEEL SAVUKYA\nSAKALASELVA YOGA MIKKA     PERUVAZHVU\n\nTHAGAIMAISIVA NYANA MUTHTHI PARAGATHIYU NEE KODUTH\nUDHAVIPURIYA VENU NEYTHTHA    VADIVELA\n\nARUNADHALA PADHA PADHMAM ADHUNIDHAMUME THUDHIKKA\nARIYATHAMIZH THAN ALITHTHA    MAYILVEERA\n\nADHISAYAM ANEGAM UTRA PAZHANIMALAI MEEDH UDHITHTHA\nAZHAGATHIRU VERAGATHTHIN    MURUGONE.\n\nதிருப்புகழ் 2\n\nசந்தம் \nதனதான தத்த தனதான தத்த\nதனதான தத்த  தனதான\n\nதிருப்புகழ் பாடல் \n\nசெகமாயை யுற்றெ னகவாழ்வில் வைத்த\nதிருமாது கெர்ப்ப     முடலூறித்\n\nதெசமாத முற்றி வடிவாய்நி லத்தில்\nதிரமாய ளித்த      பொருளாகி\n\nமகவாவி னுச்சி விழியாந நத்தில்\nமலைநேர்பு யத்தி     லுறவாடி\n\nமடிமீத டுத்து விளையாடி நித்த\nமணிவாயின் முத்தி     தரவேணும்\n\nமுகமாய மிட்ட குறமாதி னுக்கு\nமுலைமேல ணைக்க     வருநீதா\n\nமுதுமாம றைக்கு ளொருமாபொ ருட்குள்\nமொழியேயு ரைத்த     குருநாதா\n\nதகையாதெ னக்கு னடிகாண வைத்த\nதனியேர கத்தின்     முருகோனே\n\nதருகாவி ரிக்கு வடபாரி சத்தில்\nசமர்வேலெ டுத்த     பெருமாளே.\n\nTHIRUPPUGHAZH 2 IN ENGLISH \n\nSEGA MAYAI UTREN AGA VAZHVIL VAITHTHA\nTHIRUMADHU GERBAM     UDAL URI\n\nDHESA MADHA MUTRI VADIVAY NILATHTHIL\nTHIRAMAY ALITHTHA      PORULAGI\n\nMAGAVAVIN UCHCHI VIZHI ANANATHTHIL\nMALAI NER BUYATHTHIL     URAVADI\n\nMADIMEE DHADUTHTHU VILAIYADI NITHTHAM\nMANIVAYIN MUTHTHI      THARAVENUM\n\nMUGA MAYAM ITTA KURA MADHINUKKU\nMULAIMEL ANAIKKA  VARU    NEEDHA\n\nMUDHU MA MARAIKKUL ORU MA PORUTKUL\nMOZHIYE URAITHTHA      GURUNATHA\n\nTHAGAIYADH ENAKKUN ADI KANA VAITHTHA\nTHANI ERAGATHTHIN      MURUGONE\n\nTHARU KAVIRIKKU VADA PARISATHTHIL\nSAMAR VEL EDUTHTHA     PERUMALE.\n\nஆத்ம ஞான மையம்"
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT11M11S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "439055",
                "likeCount": "11297",
                "favoriteCount": "0",
                "commentCount": "812"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "YXO50TTob8fl7bUT0NV_nh1qhzU",
                "id": "UC7G96LIVWvicrHlQRyA3GRA",
                "snippet": {
                    "title": "Athma Gnana Maiyam",
                    "description": "Welcome to Athma Gnana Maiyam.  Athma Gnana Maiyam is a dedicated YouTube channel by Smt. Desa Mangayarkarasi.  In this channel we will be posting Smt. Desa Mangayarkarasi's devotional speeches, motivational talks, other religious activities and services.\n\nThe contents of all material available on this YouTube channel are copyrighted to Athma Gnana Maiyam. All rights are reserved and the content may not be reproduced, downloaded, published or transferred in any form or by any means.\n\nAnyone making decisions based on the content of this channel should perform independent due diligence before making a final decision.",
                    "customUrl": "@athmagnanamaiyam",
                    "publishedAt": "2015-01-18T06:41:34Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Athma Gnana Maiyam",
                        "description": "Welcome to Athma Gnana Maiyam.  Athma Gnana Maiyam is a dedicated YouTube channel by Smt. Desa Mangayarkarasi.  In this channel we will be posting Smt. Desa Mangayarkarasi's devotional speeches, motivational talks, other religious activities and services.\n\nThe contents of all material available on this YouTube channel are copyrighted to Athma Gnana Maiyam. All rights are reserved and the content may not be reproduced, downloaded, published or transferred in any form or by any means.\n\nAnyone making decisions based on the content of this channel should perform independent due diligence before making a final decision."
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "_XgAa4MGI1KQtX40TiEYtDJRqgg",
            "id": "iKZyYdwS3Wg",
            "snippet": {
                "publishedAt": "2025-07-16T14:00:00Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Stranger Things 5 | Official Teaser | Netflix",
                "description": "Every battle has led to this.\n\nMore about Stranger Things 5:\nThe fall of 1987. Hawkins is scarred by the opening of the Rifts, and our heroes are united by a single goal: find and kill Vecna. But he has vanished — his whereabouts and plans unknown. Complicating their mission, the government has placed the town under military quarantine and intensified its hunt for Eleven, forcing her back into hiding. As the anniversary of Will’s disappearance approaches, so does a heavy, familiar dread. The final battle is looming — and with it, a darkness more powerful and more deadly than anything they’ve faced before. To end this nightmare, they’ll need everyone — the full party — standing together, one last time.\n\nWatch on Netflix: https://www.netflix.com/title/81297917\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nStranger Things 5 | Official Teaser | Netflix\nhttps://www.youtube.com/@Netflix",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Netflix",
                "tags": [
                    "Caleb McLaughlin",
                    "Cara Buono",
                    "Charlie Heaton",
                    "Chief Hopper",
                    "David Harbour",
                    "Dustin",
                    "Eleven",
                    "Finn Wolfhard",
                    "Gaten Matarazzo",
                    "Holly Wheeler",
                    "Jamie Campbell Bower",
                    "Joe Keery",
                    "Jonathan Byers",
                    "Joyce Byers",
                    "Lucas",
                    "Max",
                    "Maya Hawke",
                    "Mike Wheeler",
                    "Millie Bobby Brown",
                    "Nancy Wheeler",
                    "Natalia Dyer",
                    "Netflix",
                    "Noah Schnapp",
                    "Official Teaser",
                    "Robin Buckley",
                    "Sadie Sink",
                    "Steve Harrington",
                    "Stranger Things 5",
                    "Vecna",
                    "Will Byers",
                    "Winona Ryder"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Stranger Things 5 | Official Teaser | Netflix",
                    "description": "Every battle has led to this.\n\nMore about Stranger Things 5:\nThe fall of 1987. Hawkins is scarred by the opening of the Rifts, and our heroes are united by a single goal: find and kill Vecna. But he has vanished — his whereabouts and plans unknown. Complicating their mission, the government has placed the town under military quarantine and intensified its hunt for Eleven, forcing her back into hiding. As the anniversary of Will’s disappearance approaches, so does a heavy, familiar dread. The final battle is looming — and with it, a darkness more powerful and more deadly than anything they’ve faced before. To end this nightmare, they’ll need everyone — the full party — standing together, one last time.\n\nWatch on Netflix: https://www.netflix.com/title/81297917\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nStranger Things 5 | Official Teaser | Netflix\nhttps://www.youtube.com/@Netflix"
                },
                "defaultAudioLanguage": "en-US"
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
                "viewCount": "15975640",
                "likeCount": "707994",
                "favoriteCount": "0",
                "commentCount": "40207"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "Tbw5t7bZxvWXgEgs_ri5x8z8p_8",
                "id": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "snippet": {
                    "title": "Netflix",
                    "description": "game over\n\n\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n",
                    "customUrl": "@netflix",
                    "publishedAt": "2012-07-17T20:45:36Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Netflix",
                        "description": "game over\n\n\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n"
                    },
                    "country": "US"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "csJrQv-CenG3HjVvoFahNPpqlhg",
            "id": "mMNHi8n-7sY",
            "snippet": {
                "publishedAt": "2025-07-18T09:45:40Z",
                "channelId": "UCeiAKuJGZrIjYvaq0nMwbJg",
                "title": "Saiyaara Movie REVIEW | Deeksha Sharma",
                "description": "Saiyaara Movie Review By Deeksha Sharma. Ahaan Panday & Aneet Padda in Mohit Suri Film Saiyaara Hits back at Aashiqui 3 Similarities with Strong Emotions, Soul-Full Music & 2 Debut Real Actors prepared for a Nostalgic Bollywood Rom-Com Ending, 1 Musician 1 heart broken writer teams up for life & love only to be challenged in a never seen before tragedy! Saiyaara Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Aashiqui 3 vs Saiyaara- Can Mohit Suri survive without Aashiqui Franchise? Do leave Comments below if you have seen the film or not!\n\n#Saiyaara #SaiyaaraReview #SaiyaaraMovie\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Filmi Indian",
                "tags": [
                    "saiyaara",
                    "saiyaara review",
                    "saiyaara movie",
                    "saiyaara trailer",
                    "saiyaara movie review",
                    "saiyaara full movie",
                    "aashiqui 3",
                    "mohit suri",
                    "Ahaan Panday",
                    "Aneet Padda",
                    "saiyaara hindi movie",
                    "teaser",
                    "trailer",
                    "review reaction",
                    "filmi indian",
                    "saiyaara song",
                    "yrf",
                    "saiyaara hindi review",
                    "saiyaara explained"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Saiyaara Movie REVIEW | Deeksha Sharma",
                    "description": "Saiyaara Movie Review By Deeksha Sharma. Ahaan Panday & Aneet Padda in Mohit Suri Film Saiyaara Hits back at Aashiqui 3 Similarities with Strong Emotions, Soul-Full Music & 2 Debut Real Actors prepared for a Nostalgic Bollywood Rom-Com Ending, 1 Musician 1 heart broken writer teams up for life & love only to be challenged in a never seen before tragedy! Saiyaara Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Aashiqui 3 vs Saiyaara- Can Mohit Suri survive without Aashiqui Franchise? Do leave Comments below if you have seen the film or not!\n\n#Saiyaara #SaiyaaraReview #SaiyaaraMovie\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian"
                }
            },
            "contentDetails": {
                "duration": "PT4M37S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1320120",
                "likeCount": "33930",
                "favoriteCount": "0",
                "commentCount": "2093"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "iQOI9tzlu_KgZmdGhc5B4RfYqO4",
                "id": "UCeiAKuJGZrIjYvaq0nMwbJg",
                "snippet": {
                    "title": "Filmi Indian",
                    "description": "Hi Deeksha Here! Living A Life Through Cinema & Sharing The Journey With You..!\n\n➤ Don't Message For ❌ SPONSORSHIP ❌\n     I am A Creator Not A Saleswoman.\n\n♥ For Haal-chaal & Feedback (thefilmiindian@gmail.com)\n",
                    "customUrl": "@filmiindian",
                    "publishedAt": "2018-07-17T16:01:32Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Filmi Indian",
                        "description": "Hi Deeksha Here! Living A Life Through Cinema & Sharing The Journey With You..!\n\n➤ Don't Message For ❌ SPONSORSHIP ❌\n     I am A Creator Not A Saleswoman.\n\n♥ For Haal-chaal & Feedback (thefilmiindian@gmail.com)\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "jt9rUMLm5x0FtkaUVQ7B2fQJvBU",
            "id": "-PXOEWsldoM",
            "snippet": {
                "publishedAt": "2025-07-18T10:30:01Z",
                "channelId": "UCFQ9AY7oyEqRS7iVXJLNSmw",
                "title": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song",
                "description": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song | Sonotek Music | Kawad Special Song\n\nSubscribe Us - @sonotekmusic \nMake Your Reels Now :-  https://www.instagram.com/reels/audio/1397480538006550\n\nSonotek Music Presents “Bhole Ka Pujari“ (Official Video) a New Latest Most Popular Haryanvi Songs Haryanavi 2025.New Bhole Baba Song, Haryanvi Dj Song, New Hr Song 2025, Haryanvi Song Starring by Masoom Sharma. This superhit Haryanvi Song Sung by Masoom Sharma. Music given by Pinna Music. Lyrics of this Bholenath Ji Haryanvi song is written by Mp Karsola. Directed By Kuldeep Rathee.  Music label by \"Sonotek Music\"\n\n#masoomsharma #bholekapujari #masoomsharmanewsong #masoom \n#masoomsharmabholekapujari #newharyanvisong #bholenath  #newharyanvisongsharyanavi2025 #haryanvisong #haryanvigane #haryanvidjsong #pinnamusic  #hrsong #sonotekmusic \n\nSong - Bhole Ka Pujari\nSinger - Masoom Sharma\nArtist - Masoom Sharma\nLyrics - Mp Karsola\nMusic - Pinna Music\nComposer - Masoom Sharma\nProject By - Ankit Vij & Yash Thukral \nEditor - Lalit Hudda\nDrone Operator - PDF \nDirected By - Kuldeep Rathee\nPoster - Ratan (Sonotek)\nDigital Work - Roshan Ekma\nLabel - Sonotek Music\n\nLOVE !! LIKE !! COMMENTS !! SUBSCRIBE\n\n♪ Full Song Available On ♪ \n♪ Spotify : https://open.spotify.com/track/6vvPYcNnp101qeETPfamIY?si=6b2d94315ad847ea\n♪ Gaana : https://gaana.com/song/bhole-ka-pujari-10\n♪ Jio Saavn : https://www.jiosaavn.com/song/bhole-ka-pujari/NyAAQCx,A3Q\n♪ Apple Music : https://music.apple.com/us/song/bhole-ka-pujari/1825816750\n♪ Amazon Prime Music : https://music.amazon.com/albums/B0FH6SBX9Y?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_bzzfnI0d5d2827hFb8Clp2JJe\n♪ YouTube Music : https://music.youtube.com/watch?v=2zY-eZ4a59Y&si=BX4uUDfIy9qLGx-w\n\nLyrics -\nHo mera bhola se bhandari\nUski mahima se nyari\nSubeh shyam rattu jau su naam uska\nHoke masti mein choor\nRave bhakti mein choor\nAur bhulu Koni Kade Vi Mai Dhaam Uska\nMai su shivji ka das\nUka dere mein re vaas\nBaba aane konya deve\nKade kasht bawli\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su mai\nTrust bawli re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic.....\n\no japu shambhu shambhu naam\nsidhe hoja sare kaam\nmai toh aau haridwar\njade ganga ji ka dhaam\nse aghoriya ka dera\ntane kuch konya bera\nburi aatma ne kar deve\nnasht bawli\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\n\nMusic....\n\nSe mane triloki te pyaar\nWohe mera sacha yaar\nSunne sab bhakta ki\nJobhi jave se kedar\nWoh se teen lok ka data\nMera Sacha Se Vidhata\nUski Bhakti Mein Aagya\nInterest Bawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath Pe karu su Mai\nTrust Bawli Re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic...\n\nO mera shankar damru wala\nKhole se kismat ka tala\nKare pahada upar tap\nPade jave po ka pala\nChhora mp karsola\nbhole pache hora boda\naaya bhakti mein sun\nsada first baawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\ntrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su\nmai trust bawli\n\nTags- \n\"bhole ka pujari\"\n\"bhole ka pujari song\"\n\"bhole ka pujari haryanvi\"\n\"bhole ka pujari haryanvi song\"\n\"bhole ka pujari masoom sharma\"\n\"masoom sharma\" \n\"masoom sharma song\"\n\"masoom sharma new song\"\n\"masoom sharma all song\"\n\"masoom sharma dj song\"\n\"masoom sharma bhole ke pujari\"\n\"masoom sharma haryanvi kawad song\"\n\"haryanvi song\"\n\"new haryanvi song\"\n\"naryanvi dj song\"\n\"new haryanvi song 2025\"\n\"new haryanvi songs haryanavi 2025\"\n\"haryanvi new song\"\n\"sonotek music\"\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Dj Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Sonotek Music",
                "tags": [
                    "bhole ka pujari",
                    "masoom sharma",
                    "masoom sharma song",
                    "bhole ka pujari masoom sharma song",
                    "kawad song by masoom sharma",
                    "kawad special song massom sharma",
                    "masoom sharma new song",
                    "masoom sharma all songs",
                    "masoom",
                    "masoom sharma kawad song",
                    "masoom sharma latest song",
                    "bhole ka pujari masoom sharma",
                    "bholenath song",
                    "sonotek music",
                    "bhole baba haryanvi song",
                    "haryanvi dj song",
                    "new haryanvi song",
                    "new bhole baba song",
                    "new haryanvi song 2025",
                    "haryanvi song",
                    "masoom sharma ke gane",
                    "hr song"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song",
                    "description": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song | Sonotek Music | Kawad Special Song\n\nSubscribe Us - @sonotekmusic \nMake Your Reels Now :-  https://www.instagram.com/reels/audio/1397480538006550\n\nSonotek Music Presents “Bhole Ka Pujari“ (Official Video) a New Latest Most Popular Haryanvi Songs Haryanavi 2025.New Bhole Baba Song, Haryanvi Dj Song, New Hr Song 2025, Haryanvi Song Starring by Masoom Sharma. This superhit Haryanvi Song Sung by Masoom Sharma. Music given by Pinna Music. Lyrics of this Bholenath Ji Haryanvi song is written by Mp Karsola. Directed By Kuldeep Rathee.  Music label by \"Sonotek Music\"\n\n#masoomsharma #bholekapujari #masoomsharmanewsong #masoom \n#masoomsharmabholekapujari #newharyanvisong #bholenath  #newharyanvisongsharyanavi2025 #haryanvisong #haryanvigane #haryanvidjsong #pinnamusic  #hrsong #sonotekmusic \n\nSong - Bhole Ka Pujari\nSinger - Masoom Sharma\nArtist - Masoom Sharma\nLyrics - Mp Karsola\nMusic - Pinna Music\nComposer - Masoom Sharma\nProject By - Ankit Vij & Yash Thukral \nEditor - Lalit Hudda\nDrone Operator - PDF \nDirected By - Kuldeep Rathee\nPoster - Ratan (Sonotek)\nDigital Work - Roshan Ekma\nLabel - Sonotek Music\n\nLOVE !! LIKE !! COMMENTS !! SUBSCRIBE\n\n♪ Full Song Available On ♪ \n♪ Spotify : https://open.spotify.com/track/6vvPYcNnp101qeETPfamIY?si=6b2d94315ad847ea\n♪ Gaana : https://gaana.com/song/bhole-ka-pujari-10\n♪ Jio Saavn : https://www.jiosaavn.com/song/bhole-ka-pujari/NyAAQCx,A3Q\n♪ Apple Music : https://music.apple.com/us/song/bhole-ka-pujari/1825816750\n♪ Amazon Prime Music : https://music.amazon.com/albums/B0FH6SBX9Y?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_bzzfnI0d5d2827hFb8Clp2JJe\n♪ YouTube Music : https://music.youtube.com/watch?v=2zY-eZ4a59Y&si=BX4uUDfIy9qLGx-w\n\nLyrics -\nHo mera bhola se bhandari\nUski mahima se nyari\nSubeh shyam rattu jau su naam uska\nHoke masti mein choor\nRave bhakti mein choor\nAur bhulu Koni Kade Vi Mai Dhaam Uska\nMai su shivji ka das\nUka dere mein re vaas\nBaba aane konya deve\nKade kasht bawli\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su mai\nTrust bawli re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic.....\n\no japu shambhu shambhu naam\nsidhe hoja sare kaam\nmai toh aau haridwar\njade ganga ji ka dhaam\nse aghoriya ka dera\ntane kuch konya bera\nburi aatma ne kar deve\nnasht bawli\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\n\nMusic....\n\nSe mane triloki te pyaar\nWohe mera sacha yaar\nSunne sab bhakta ki\nJobhi jave se kedar\nWoh se teen lok ka data\nMera Sacha Se Vidhata\nUski Bhakti Mein Aagya\nInterest Bawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath Pe karu su Mai\nTrust Bawli Re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic...\n\nO mera shankar damru wala\nKhole se kismat ka tala\nKare pahada upar tap\nPade jave po ka pala\nChhora mp karsola\nbhole pache hora boda\naaya bhakti mein sun\nsada first baawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\ntrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su\nmai trust bawli\n\nTags- \n\"bhole ka pujari\"\n\"bhole ka pujari song\"\n\"bhole ka pujari haryanvi\"\n\"bhole ka pujari haryanvi song\"\n\"bhole ka pujari masoom sharma\"\n\"masoom sharma\" \n\"masoom sharma song\"\n\"masoom sharma new song\"\n\"masoom sharma all song\"\n\"masoom sharma dj song\"\n\"masoom sharma bhole ke pujari\"\n\"masoom sharma haryanvi kawad song\"\n\"haryanvi song\"\n\"new haryanvi song\"\n\"naryanvi dj song\"\n\"new haryanvi song 2025\"\n\"new haryanvi songs haryanavi 2025\"\n\"haryanvi new song\"\n\"sonotek music\"\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Dj Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT2M44S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "438026",
                "likeCount": "10218",
                "favoriteCount": "0",
                "commentCount": "469"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "sEjiBrbqbfTmhiDn2S9OAg4HFqI",
                "id": "UCFQ9AY7oyEqRS7iVXJLNSmw",
                "snippet": {
                    "title": "Sonotek Music",
                    "description": "\"Music can change the world\". Sonotek Cassettes is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nSonotek Cassettes is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with Sonotek Cassettes",
                    "customUrl": "@sonotekmusic",
                    "publishedAt": "2011-01-29T05:37:23Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Sonotek Music",
                        "description": "\"Music can change the world\". Sonotek Cassettes is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nSonotek Cassettes is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with Sonotek Cassettes"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "aulTEzcAGeqSqVaZFI90DYVGKe0",
            "id": "8-FvwGUZBXM",
            "snippet": {
                "publishedAt": "2025-07-19T05:30:07Z",
                "channelId": "UCD3ib30j29V1jgy4cPh_jxQ",
                "title": "Every Indian in Hotel || Aditi Sharma",
                "description": "Every Indian in Hotel || Aditi Sharma\n\nYoutube Short Channel Link :  \n\nhttps://www.youtube.com/channel/UCmrOZ0rAZzmwfHSaF1AAEJQ\n\nInstagram Link:\n\nhttps://rb.gy/zbihjw \n\nSUBSCRIBE for more videos!\nTurn Notifications on and you will never miss a video again\nThank you for watching!\n\nSOURCES: \nScript By: \n\nAditi Sharma\n\n\nFOLLOW ME ON:\nFacebook: https://rb.gy/zkacdi  \nYouTube: SUBSCRIBE!  https://rb.gy/3bhgo7 \nInstagram: https://rb.gy/zbihjw \n\nCast:\n\nAditi Sharma\nDeepali\nTalim\nShiva\nkritya\n\nEdit By: \n\nAayush Tiwari\n\nShoot By: \n\nNitish Goel\nShivam Sharma\n\nThumbnail:\n\nRaj Sharma\n\nContact me at (     iamaditisharma11@gmail.com     )",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Aditi Sharma",
                "tags": [
                    "school teacher mein aaya chudail || Aditi Sharma",
                    "aditi",
                    "school main bhoot",
                    "bhoot video",
                    "funny video",
                    "comedy video",
                    "scary school",
                    "bhootiya class",
                    "bhootiya school",
                    "bhoot bangla",
                    "Badi Behan vs Choti Behan in Bhoot Bangla",
                    "BHOOT",
                    "HORROR VIDEO",
                    "BHAI BEHAN OR BHOOT",
                    "BHOOT FAMILY",
                    "BHOOT VIDEO",
                    "HORROR HOUSE",
                    "middle class school aur चुड़ैल",
                    "funny witch",
                    "chudail",
                    "horror comedy",
                    "entertainment",
                    "the haunted house",
                    "middle class bhoot",
                    "auto mai bhoot",
                    "bhoot",
                    "school teacher mein aaya Chudail"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Every Indian in Hotel || Aditi Sharma",
                    "description": "Every Indian in Hotel || Aditi Sharma\n\nYoutube Short Channel Link :  \n\nhttps://www.youtube.com/channel/UCmrOZ0rAZzmwfHSaF1AAEJQ\n\nInstagram Link:\n\nhttps://rb.gy/zbihjw \n\nSUBSCRIBE for more videos!\nTurn Notifications on and you will never miss a video again\nThank you for watching!\n\nSOURCES: \nScript By: \n\nAditi Sharma\n\n\nFOLLOW ME ON:\nFacebook: https://rb.gy/zkacdi  \nYouTube: SUBSCRIBE!  https://rb.gy/3bhgo7 \nInstagram: https://rb.gy/zbihjw \n\nCast:\n\nAditi Sharma\nDeepali\nTalim\nShiva\nkritya\n\nEdit By: \n\nAayush Tiwari\n\nShoot By: \n\nNitish Goel\nShivam Sharma\n\nThumbnail:\n\nRaj Sharma\n\nContact me at (     iamaditisharma11@gmail.com     )"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT21M56S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "136493",
                "likeCount": "1130",
                "favoriteCount": "0",
                "commentCount": "51"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "oojpotwUHHhDO5TdpRcNVs40hx0",
                "id": "UCD3ib30j29V1jgy4cPh_jxQ",
                "snippet": {
                    "title": "Aditi Sharma",
                    "description": "Welcome to our family! #ADITISHARMA!\nWe are a family based in New Delhi-India that love to entertain you. We believe in family, fun, Love and are passionate about fashion, comedy, and culture. Our vision is to capture and document real moments and stories happening in a family on a daily basis in a very practical way and post them here. \nCome back for our videos that are posted regularly on the topics of family, love, relationships, wisdom, fun and much more!! \n\nBest of all, we believe everyone is a part of our family, so don’t forget to SUBSCRIBE!!\n\nWe are thankful for your support and we always Love you!\n",
                    "customUrl": "@aditisharma4u",
                    "publishedAt": "2020-09-20T17:13:55.725335Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Aditi Sharma",
                        "description": "Welcome to our family! #ADITISHARMA!\nWe are a family based in New Delhi-India that love to entertain you. We believe in family, fun, Love and are passionate about fashion, comedy, and culture. Our vision is to capture and document real moments and stories happening in a family on a daily basis in a very practical way and post them here. \nCome back for our videos that are posted regularly on the topics of family, love, relationships, wisdom, fun and much more!! \n\nBest of all, we believe everyone is a part of our family, so don’t forget to SUBSCRIBE!!\n\nWe are thankful for your support and we always Love you!\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "-QzOrThLx0PGc6AuopDEwa8Wk1Y",
            "id": "SRscWBa1OSE",
            "snippet": {
                "publishedAt": "2025-07-18T05:30:08Z",
                "channelId": "UCOsyDsO5tIt-VZ1iwjdQmew",
                "title": "Sabba : Village Flow (Official Video) | Latest Punjabi Songs 2025 | New Punjabi Songs 2025",
                "description": "Straight from the heart of the pind, Sabba drops 'Village Flow', a desi anthem full of pride, passion, and pure Punjabi swag! This isn’t just another track — it’s a celebration of Sabba’s roots and rise.\n\nIs vaar gall sirf beats di nahi – ae taan Sabba Da Lanter ae, jisnu vekh ke poora pind hi nach paeya! 🔥\n\n#punjabimusic #latestpunjabisong #sabbadalanter\n\n\nStreaming Links :\n\nInsta\nhttps://www.instagram.com/reels/audio/1384408396005666\n\nSpotify\nhttps://open.spotify.com/album/7bySaar4oQhsod5QaZrjvV\n\nAmazon Music\nhttps://music.amazon.in/albums/B0FH27Y1LW\n\nApple Music\nhttps://music.apple.com/in/album/village-flow-single/1825339856\n\nGaana\nhttps://gaana.com/album/village-flow\n\nJioSaavn\nhttps://www.jiosaavn.com/album/village-flow/I1Asyr2DoOM_\n\nYouTube Music\nhttps://music.youtube.com/watch?v=SRscWBa1OSE&si=_DpMZ6EdS3CoD55a \n\n\nCredits :\n\nSpeed Records Presents\nSong - Village Flow\nSinger/Composer/Lyrics - Sabba\nMusic - JayB Singh\nDirection/Concept?Screenplay : Sahil Sharma\nPresentation : Meeru\nProducer - Sarabjit Saroya\nDop : Pardeep Potter\nEditor : HC Edittz\nProd. : Sahil Sharma Filmzz (Honey)\nCostume : Rajat Manchanda\nReels Shoot : Jagjit Chak\nDigital Managed By Scope Entertainment\nDigital Promotions By Speed Records Digital\nReel Promotions By Scope Digital\nLabel - Speed Records\n\nLyrics :\nNi baitha mai trakki de mathe ch jhanda gaddke\nNi utte nahio aaya thalle kise de vi laggke\nOh hun mera changa aaya kehnde pair chhad gya\nNi jehde maade time ch gye si hath chhadke\nOh lanka nahio dhayi bhave bheti aa harek de\nNi mere saale kinne hi jo bahre pye aa hate de\nNi bahoteya de rang udd janda kude face to\nNi charno da dohta baitha gaddi vich vekhke\nHo vekhi mardanya eh rang kartar de\nOh aap mar jande jehde doojeya nu maarde\nHo bahn jihdi fadi hove neeli Chhatt wale ne\nNi kitho sutt hona a laler nehri taarke\nOh chhetti hath aunde nahio uchiya udariyaan\nNi reejh na pugaiye asi vair nale yaariyan\nOh vairi voori vekhke badak maar dyidi\nNi kudi jandi vekh kde whistlaan ni maariyan\nNi gabhru rakaane bebe bapu ji to baahre na\nNa saade kolo vaade hone lagne ve laare na\nNi tere kolo main vi tere maa-pe charwaune na\nTe mere kolo ranjhe wangu pashu jaane chaare na\nNa dil to greeb bhave bhute na ameer ni\nAa jehde nal bhai kathi kri na mandeer ni\nNi susti na nede tede mitran de laggdi \nNi 24 ghante lor vich rehnda ae sareer ni\nNi bhaiyan te yakeen security jeyo z te\nHo bade dil lutte akh mittraa di red ne\nHo dabb nal lgga jo rakaane 30 bore da\nFlower bna dewe bhaida eh forehead te\nNa nimm jehe lot aune mitthi teri talk to\nNa pighluga dil eh jwaani teri hot to\nDass fer sher da ni rutba ki reh gya\nJe oh vi gya pattya rakaane cat walk to\nOh zindgi nu reejha nal maande aa baithke\nKoi chakkr ni meeru bai khada jado back te\nHo asi befikre 9 10 vje sojiye\nNi sathon gallan adhi raat honiya ni chat te\nNi chattya ni kde v yaara ne billo thukk ke\nOh jo vi kita shar-e-aam kreya ni lukk ke\nOh Kayi saale raula pake kehn asi ki aa\nTe sara kujh dssya ae mittra di chupp ne\nJo tappde aa salya nu shittra di ghaat ni\nOh fer vekhi baith jaane sara chupp chaap ni\nOhh kehnde ne ke saade naalo vadda koi vaily ni\nTe Dhaai saah ne ch*** de utte bhora maas ni\nNeet saaf rabb ne vi kujh ni lakoya kude\nTension ni len koi dinda bai saroya kude\nDhannwaad karda va saareya da dil to\nHaaye pauna si punjab kattha lentar te hoya kude\nHo dunia ta jitti baitha hun kithe haar da\nJhool jhool ture kude pota jagtar da\nOh jihna hun takk aukh vich hi aa kattli\nNi maapeya nu geda mai lwauna ik bahar da\nHo guru ghar jaake bhala sareyaa da mangda\nHo adhi cho vi adhi cheej doojeya na vand da\nHo mai ni kehnda rabb bahla deyi jawe menu\nJinna mera banda onna hi ohto mangda\n\n\nLike || Share || Spread || Love \n  \nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords \n\nSpeed Records Haryanvi\nYoutube: https://bit.ly/2kSrhZK\nInstagram: https://www.instagram.com/speedharyanviofficial \n\nSpeed Records Bhojpuri - \nYoutube: https://bit.ly/2y8HSez\nInstagram: https://bit.ly/2xM2WYL\nSnapchat: https://www.snapchat.com/add/speedbhojpuri\n\nOops TV -\nOops TV Facebook Link - https://m.facebook.com/oopstvfun/\n\nPoon Poon - \nSnapchat - https://www.snapchat.com/add/poonpoon0001\nYoutube - http://bitly.com/2hwYOnx\nFacebook - https://www.facebook.com/officialpoonpoon\nInstagram - https://instagram.com/poonpoonofficial",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Speed Records",
                "tags": [
                    "punjabi music",
                    "punjabi latest music",
                    "punjabi latest songs",
                    "punjabi romantic songs",
                    "punjabi sad songs",
                    "latest punjabi songs 2025",
                    "speed records",
                    "hit punjabi songs",
                    "New punjabi songs 2025",
                    "All new punjabi songs 2025",
                    "Hit punjabi song",
                    "punjabi new song",
                    "punjabi new movie",
                    "sabba new song",
                    "sabba all song",
                    "sabba new song all",
                    "sabba new song 2025",
                    "village flow sabba",
                    "village flow sabba new song",
                    "village flow",
                    "village flow song",
                    "new song",
                    "new latest song",
                    "sabba da lanter"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Sabba : Village Flow (Official Video) | Latest Punjabi Songs 2025 | New Punjabi Songs 2025",
                    "description": "Straight from the heart of the pind, Sabba drops 'Village Flow', a desi anthem full of pride, passion, and pure Punjabi swag! This isn’t just another track — it’s a celebration of Sabba’s roots and rise.\n\nIs vaar gall sirf beats di nahi – ae taan Sabba Da Lanter ae, jisnu vekh ke poora pind hi nach paeya! 🔥\n\n#punjabimusic #latestpunjabisong #sabbadalanter\n\n\nStreaming Links :\n\nInsta\nhttps://www.instagram.com/reels/audio/1384408396005666\n\nSpotify\nhttps://open.spotify.com/album/7bySaar4oQhsod5QaZrjvV\n\nAmazon Music\nhttps://music.amazon.in/albums/B0FH27Y1LW\n\nApple Music\nhttps://music.apple.com/in/album/village-flow-single/1825339856\n\nGaana\nhttps://gaana.com/album/village-flow\n\nJioSaavn\nhttps://www.jiosaavn.com/album/village-flow/I1Asyr2DoOM_\n\nYouTube Music\nhttps://music.youtube.com/watch?v=SRscWBa1OSE&si=_DpMZ6EdS3CoD55a \n\n\nCredits :\n\nSpeed Records Presents\nSong - Village Flow\nSinger/Composer/Lyrics - Sabba\nMusic - JayB Singh\nDirection/Concept?Screenplay : Sahil Sharma\nPresentation : Meeru\nProducer - Sarabjit Saroya\nDop : Pardeep Potter\nEditor : HC Edittz\nProd. : Sahil Sharma Filmzz (Honey)\nCostume : Rajat Manchanda\nReels Shoot : Jagjit Chak\nDigital Managed By Scope Entertainment\nDigital Promotions By Speed Records Digital\nReel Promotions By Scope Digital\nLabel - Speed Records\n\nLyrics :\nNi baitha mai trakki de mathe ch jhanda gaddke\nNi utte nahio aaya thalle kise de vi laggke\nOh hun mera changa aaya kehnde pair chhad gya\nNi jehde maade time ch gye si hath chhadke\nOh lanka nahio dhayi bhave bheti aa harek de\nNi mere saale kinne hi jo bahre pye aa hate de\nNi bahoteya de rang udd janda kude face to\nNi charno da dohta baitha gaddi vich vekhke\nHo vekhi mardanya eh rang kartar de\nOh aap mar jande jehde doojeya nu maarde\nHo bahn jihdi fadi hove neeli Chhatt wale ne\nNi kitho sutt hona a laler nehri taarke\nOh chhetti hath aunde nahio uchiya udariyaan\nNi reejh na pugaiye asi vair nale yaariyan\nOh vairi voori vekhke badak maar dyidi\nNi kudi jandi vekh kde whistlaan ni maariyan\nNi gabhru rakaane bebe bapu ji to baahre na\nNa saade kolo vaade hone lagne ve laare na\nNi tere kolo main vi tere maa-pe charwaune na\nTe mere kolo ranjhe wangu pashu jaane chaare na\nNa dil to greeb bhave bhute na ameer ni\nAa jehde nal bhai kathi kri na mandeer ni\nNi susti na nede tede mitran de laggdi \nNi 24 ghante lor vich rehnda ae sareer ni\nNi bhaiyan te yakeen security jeyo z te\nHo bade dil lutte akh mittraa di red ne\nHo dabb nal lgga jo rakaane 30 bore da\nFlower bna dewe bhaida eh forehead te\nNa nimm jehe lot aune mitthi teri talk to\nNa pighluga dil eh jwaani teri hot to\nDass fer sher da ni rutba ki reh gya\nJe oh vi gya pattya rakaane cat walk to\nOh zindgi nu reejha nal maande aa baithke\nKoi chakkr ni meeru bai khada jado back te\nHo asi befikre 9 10 vje sojiye\nNi sathon gallan adhi raat honiya ni chat te\nNi chattya ni kde v yaara ne billo thukk ke\nOh jo vi kita shar-e-aam kreya ni lukk ke\nOh Kayi saale raula pake kehn asi ki aa\nTe sara kujh dssya ae mittra di chupp ne\nJo tappde aa salya nu shittra di ghaat ni\nOh fer vekhi baith jaane sara chupp chaap ni\nOhh kehnde ne ke saade naalo vadda koi vaily ni\nTe Dhaai saah ne ch*** de utte bhora maas ni\nNeet saaf rabb ne vi kujh ni lakoya kude\nTension ni len koi dinda bai saroya kude\nDhannwaad karda va saareya da dil to\nHaaye pauna si punjab kattha lentar te hoya kude\nHo dunia ta jitti baitha hun kithe haar da\nJhool jhool ture kude pota jagtar da\nOh jihna hun takk aukh vich hi aa kattli\nNi maapeya nu geda mai lwauna ik bahar da\nHo guru ghar jaake bhala sareyaa da mangda\nHo adhi cho vi adhi cheej doojeya na vand da\nHo mai ni kehnda rabb bahla deyi jawe menu\nJinna mera banda onna hi ohto mangda\n\n\nLike || Share || Spread || Love \n  \nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords \n\nSpeed Records Haryanvi\nYoutube: https://bit.ly/2kSrhZK\nInstagram: https://www.instagram.com/speedharyanviofficial \n\nSpeed Records Bhojpuri - \nYoutube: https://bit.ly/2y8HSez\nInstagram: https://bit.ly/2xM2WYL\nSnapchat: https://www.snapchat.com/add/speedbhojpuri\n\nOops TV -\nOops TV Facebook Link - https://m.facebook.com/oopstvfun/\n\nPoon Poon - \nSnapchat - https://www.snapchat.com/add/poonpoon0001\nYoutube - http://bitly.com/2hwYOnx\nFacebook - https://www.facebook.com/officialpoonpoon\nInstagram - https://instagram.com/poonpoonofficial"
                },
                "defaultAudioLanguage": "pa"
            },
            "contentDetails": {
                "duration": "PT2M51S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1194635",
                "likeCount": "52834",
                "favoriteCount": "0",
                "commentCount": "2931"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "fTWyDJmLlBIFIUJ8kVDV48DN6Y4",
                "id": "UCOsyDsO5tIt-VZ1iwjdQmew",
                "snippet": {
                    "title": "Speed Records",
                    "description": "Speed Records, the biggest Punjabi Music Record label in the world combining feet tapping tunes accompanied with vibrant voices as the identifier of Punjabi culture. With best of artistes in Punjabi Music and a huge repertoire of hits, this is your one stop destination for Punjabi Music!\n\nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords\nWebsite - http://www.speedrecordsworld.com/",
                    "customUrl": "@speedrecords",
                    "publishedAt": "2012-11-22T10:36:15Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Speed Records",
                        "description": "Speed Records, the biggest Punjabi Music Record label in the world combining feet tapping tunes accompanied with vibrant voices as the identifier of Punjabi culture. With best of artistes in Punjabi Music and a huge repertoire of hits, this is your one stop destination for Punjabi Music!\n\nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords\nWebsite - http://www.speedrecordsworld.com/"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "72flWWcUIYyF2674o_WXg_UCc_g",
            "id": "EW4PcyuFMfo",
            "snippet": {
                "publishedAt": "2025-07-14T05:30:07Z",
                "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/maxresdefault.jpg",
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
                    "dil pe chalai churiya trending version",
                    "dil pe chalai churiya raju kalakkar",
                    "dil pe chalai churiya anjali",
                    "dil pe chalai churiya dj",
                    "dil pe chalai churiya song sonu nigam",
                    "dil pe chalai churiya raju kalakar",
                    "dil pe chalai churiya song raju",
                    "raju kalakar dil pe chalai churiya",
                    "tune dil ke rakibo sang song",
                    "anajli arora dil pe chalai churiya",
                    "rajan dil pe chalai churiya",
                    "dil pe chalai churiya"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                    "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT4M1S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "16630911",
                "likeCount": "649817",
                "favoriteCount": "0",
                "commentCount": "31683"
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
        }
    ],
    "Movie": [
        {
            "kind": "youtube#video",
            "etag": "rqJ-ozPkIKJFRvnpj5FEzsDknWc",
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
                "viewCount": "5969650",
                "likeCount": "316315",
                "favoriteCount": "0",
                "commentCount": "12762"
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
            "etag": "oDIB7o6ADrhnqBjIaEIu4Z9qamA",
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
                "viewCount": "5111279",
                "likeCount": "160125",
                "favoriteCount": "0",
                "commentCount": "3011"
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
            "etag": "RSyiUxc7vXFU5cENkUGDIt8oJlM",
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
                "viewCount": "4566851",
                "likeCount": "56389",
                "favoriteCount": "0",
                "commentCount": "2368"
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
            "etag": "OO-3lqpx-swSJ_H41XtoSw9xHY4",
            "id": "s9NBDKfVg1c",
            "snippet": {
                "publishedAt": "2025-07-18T11:34:03Z",
                "channelId": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/s9NBDKfVg1c/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "T-Series Telugu",
                "tags": [
                    "Telugu New song",
                    "Telugu Songs",
                    "T-Series",
                    "Telugu Video Songs",
                    "Telugu Hit songs",
                    "Latest telugu Songs",
                    "telugu hit songs",
                    "telugu super hit songs",
                    "latest video",
                    "Latest Telugu Songs 2025",
                    "telugu melody songs",
                    "Telugu Hits",
                    "Nuvvunte Chaley",
                    "Nuvvunte Chaley Song Promo",
                    "Nuvvunte Chaley Andhra King Taluka",
                    "Andhra King Taluka Nuvvunte Chaley",
                    "Ram Pothineni Nuvvunte Chaley",
                    "Bhagyashri Borse Nuvvunte Chaley",
                    "Ram Pothineni New Song",
                    "Ram Pothineni Telugu Love Song",
                    "Ram Pothineni"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Nuvvunte Chaley - Lyrical | Andhra King Taluka | Ram Pothineni | Bhagyashri Borse | Mahesh Babu P",
                    "description": "Presenting the full lyrical video of #NuvvunteChaley from #AndhraKingTaluka. This is more than a song. This is Sagar's love journey!\n\nAndhra King Taluka - A BIOPIC OF A FAN is a Telugu Film that brings untold emotions onto the screens. Fans celebrate cinema. But this film will celebrate fans.\n------------------------------------------ \nConnect with T-Series Telugu: 👉 http://bit.ly/SubscribeToTseriesTelugu\n------------------------------------------\n♪Full Song Available on♪ \nJioSaavn: http://bit.ly/44UG0Fk\nSpotify: http://bit.ly/3IQGAwt\nGaana: http://bit.ly/44VEIKr\nAmazon Prime Music: http://bit.ly/3GLEPjO\nYouTube Music: http://bit.ly/45aDex6\n--------------------+\n🎶 Music Slate 🎶\nCast: Ram Pothineni, Upendra, Bhagyashri Borse, Rao Ramesh, Murali Sharma, Satya, Rahul Ramakrishna, VTV Ganesh, and others\n\nCrew Details:\nStory - Screenplay - Direction: Mahesh Babu P\nProducers: Naveen Yerneni, Y. Ravi Shankar\nPresenters: Gulshan Kumar, Bhushan Kumar, T-Series Films\nBanner: Mythri Movie Makers\nCo-Producer: Shiv Chanana\nPresident (T-Series): Neeraj Kalyan\nCEO: Cherry\nMusic: Vivek & Mervin\nCinematography: Siddhartha Nuni\nEditor: Sreekar Prasad\nProduction Designer: Avinash Kolla\nExecutive Producer: Hari Tummala\nCostume Designers: Deepali Noor, Ashwin Mawle\nArt Director: Srinu\nFight Master: Pruthvi \nCo-Director: Chukka Vijay Kumar\nPublicity Designer: Anil and Bhanu\nDI: Annapurna Studios\nPRO: Vamsi-Shekar\nMarketing: First Show\nAudio: T Series Music\n\nMusic credits \nSong composed, produced and arranged by Vivek & Mervin \nSinger: Anirudh Ravichander \nLyrics: Ram Pothineni \nBacking vocals: Vivek Siva ,Mervin Solomon ,Sarah Fernandez \nRythm & Synth Production : Vivek Siva \nGrand piano ,Keys and Synth Production : Mervin Solomon\nOrchestral strings production : Mervin Solomon \nAcoustic ,Nylon & Bass Guitars : Keba Jeremiah \nSaxophone ,Clarinet & Woodwinds :Nathan \nVivek & Mervin’s Manager :Rekha Shanthakumar\nCreative Team: Sushmitha Suresh & Anita Mervin  \nMusic Manager : Vignesh Sangaran \nRecorded at VM Labs Chennai by Shervin Ebenezer ,Alfred Rajesh Kumar\nLos Pollos Labs Hyderabad ,\nAlbuquerque Records Chennai ,\nMystic Room Studios by Mani \nSong Mixed & Mastered by Vivek Siva @VM LABS Chennai\nVivek Mervin Music making video shot by Shervin Ebenezer,\n2nd Camera Man Pranav P Raj, Alfred Rajeshkumar. \nAssistant Camera man : Srikavin & Bharath\n \nMusic Label: T-Series\n---------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Telugu: http://bit.ly/SubscribeToTseriesTelugu\n👉Like us on Facebook: http://www.facebook.com/Tseriestelugu\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://bit.ly/4cGF0YV\n👉Follow us on SnapChat: https://bit.ly/4jpOwCC \nThanks Everyone for Watching Our Latest Telugu Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Telugu songs of all time."
                },
                "defaultAudioLanguage": "te"
            },
            "contentDetails": {
                "duration": "PT4M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "10022815",
                "likeCount": "218262",
                "favoriteCount": "0",
                "commentCount": "8251"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "mL8nqlhatyLCqMR2AoYljj77Zxo",
                "id": "UCnJjcn5FrgrOEp5_N45ZLEQ",
                "snippet": {
                    "title": "T-Series Telugu",
                    "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!",
                    "customUrl": "@tseriestelugu",
                    "publishedAt": "2014-06-09T05:57:42Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_kD2EVax1FrVyRDkBXzK7H5PcE0b9osnB0gW2AAdFk0O8g=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "T-Series Telugu",
                        "description": "\"Music can change the world\" T-Series is India's No.1 Music Label, believes in bringing world close together through its music.\n\nT-Series Telugu is the Official Telugu Channel of T-Series on YouTube showcasing all the latest Telugu movie songs. Enjoy and Stay connected with us!!"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "mJDqE3g-HDlms3yM97wILBP09hI",
            "id": "6lnorP0ZsZY",
            "snippet": {
                "publishedAt": "2025-07-18T08:34:16Z",
                "channelId": "UCUK49UvmYWYLiB7_bZFuFZQ",
                "title": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News",
                "description": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News\n\nFM College student case..... The Investigating Committee to be present. Directive for personal attendance to ICC members. Instructions for personal attendance at FM College today and tomorrow. On the 13th, the preliminary investigation internal report was submitted.\n\n\n#fmcollegegirlnews #OdishaBandh #CongressOdisha #BalasoreStudent  #fmcollegeincident #fmcollege #OdishaNews #FakirMohanCollege #odishapolitics  #News18Odia #OdiaNews #ଆଜିରନ୍ୟୁଜ #odishanews #oriyanews #bhubaneswarnews \n \n\nWelcome to News18 Odia, your go-to destination for the latest news and updates from across India and beyond. As one of Odisha's premier news channels, we strive to keep you informed with live coverage and breaking news as it happens.  \n\nSubscribe now and turn on notifications to stay connected with News18 Odia and stay ahead of the curve with our comprehensive news coverage. Stay informed, stay engaged, and stay connected with News18 Odia on YouTube.  \n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube  \n\nPlease visit our website https://bit.ly/2YaikeJ for the latest opinions and detailed news coverage.  \n\nFollow us on \nFacebook: https://www.facebook.com/News18Odia\nTwitter: https://twitter.com/news18odia?lang=en\nWebsite: https://bit.ly/2YaikeJ\n\nSubscribe to our channel to get the latest news and updates https://tinyurl.com/y46bt2fm",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/6lnorP0ZsZY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "News18 Odia",
                "tags": [
                    "news 18 odia",
                    "news 18 odia live",
                    "Odisha News",
                    "Odisha University Scandal",
                    "fm college case",
                    "Odia News",
                    "odisha news",
                    "news18 odia",
                    "FM College Student Case",
                    "fm college srudent case",
                    "fm college news today",
                    "fm college news today cctv footage",
                    "victim father",
                    "fm college balasore",
                    "fm college video viral",
                    "fm college news today odia",
                    "balasore fm college news today",
                    "balasore fm college cctv footage",
                    "balasore fm college case",
                    "odia news",
                    "latest odia news",
                    "local news",
                    "soumyashree"
                ],
                "categoryId": "25",
                "liveBroadcastContent": "none",
                "defaultLanguage": "or",
                "localized": {
                    "title": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News",
                    "description": "ନିଆଁ ଲାଗିବାର ଘଣ୍ଟେ ପୂର୍ବରୁ ସବୁ କହିଥିଲେ| FM College Girl's Friend Reaction | Balasore FM College News\n\nFM College student case..... The Investigating Committee to be present. Directive for personal attendance to ICC members. Instructions for personal attendance at FM College today and tomorrow. On the 13th, the preliminary investigation internal report was submitted.\n\n\n#fmcollegegirlnews #OdishaBandh #CongressOdisha #BalasoreStudent  #fmcollegeincident #fmcollege #OdishaNews #FakirMohanCollege #odishapolitics  #News18Odia #OdiaNews #ଆଜିରନ୍ୟୁଜ #odishanews #oriyanews #bhubaneswarnews \n \n\nWelcome to News18 Odia, your go-to destination for the latest news and updates from across India and beyond. As one of Odisha's premier news channels, we strive to keep you informed with live coverage and breaking news as it happens.  \n\nSubscribe now and turn on notifications to stay connected with News18 Odia and stay ahead of the curve with our comprehensive news coverage. Stay informed, stay engaged, and stay connected with News18 Odia on YouTube.  \n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube  \n\nPlease visit our website https://bit.ly/2YaikeJ for the latest opinions and detailed news coverage.  \n\nFollow us on \nFacebook: https://www.facebook.com/News18Odia\nTwitter: https://twitter.com/news18odia?lang=en\nWebsite: https://bit.ly/2YaikeJ\n\nSubscribe to our channel to get the latest news and updates https://tinyurl.com/y46bt2fm"
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT8M",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1411282",
                "likeCount": "13097",
                "favoriteCount": "0",
                "commentCount": "1141"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "_ZGR8DKzXqkSocYZnV5d54_twZw",
                "id": "UCUK49UvmYWYLiB7_bZFuFZQ",
                "snippet": {
                    "title": "News18 Odia",
                    "description": "News18 Odia is one of the Odisha’s leading news channel. Please follow up page to watch live and breaking news with latest videos added very hour. \n\nNews18 ଓଡ଼ିଆ ହେଉଛି ଓଡିଶାର ନାମୀ ଦାମୀ ନ୍ୟୁଜ ଚ୍ୟାନେଲ ଭିତରୁ ଗୋଟିଏ . ଓଡିଶାର ଛୋଟ ମୋଟ ଖବର ଆପଣ ପାଇଁ ପାରିବେ ଏହି ଚ୍ୟାନେଲ ମାଧ୍ୟମରେ\n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube\n\nPlease visit our website http://www.news18.com/ for latest opinions and detailed news coverage, Pictures, Entertainment, Sports, Cricket and Lifestyle Updates. \n\nGet latest news updates as they happen on your phone, Download our app: Android: http://bit.ly/2ussJls , iPhone: http://apple.co/2usJEEm",
                    "customUrl": "@news18odia",
                    "publishedAt": "2015-05-02T04:44:32Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lKSOQ8zd8GU5-2gdBlhzeXM8JyUd-2_4UK7Y9bOzOrPa4=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "News18 Odia",
                        "description": "News18 Odia is one of the Odisha’s leading news channel. Please follow up page to watch live and breaking news with latest videos added very hour. \n\nNews18 ଓଡ଼ିଆ ହେଉଛି ଓଡିଶାର ନାମୀ ଦାମୀ ନ୍ୟୁଜ ଚ୍ୟାନେଲ ଭିତରୁ ଗୋଟିଏ . ଓଡିଶାର ଛୋଟ ମୋଟ ଖବର ଆପଣ ପାଇଁ ପାରିବେ ଏହି ଚ୍ୟାନେଲ ମାଧ୍ୟମରେ\n\nDownload our News18 Mobile App - https://onelink.to/desc-youtube\n\nPlease visit our website http://www.news18.com/ for latest opinions and detailed news coverage, Pictures, Entertainment, Sports, Cricket and Lifestyle Updates. \n\nGet latest news updates as they happen on your phone, Download our app: Android: http://bit.ly/2ussJls , iPhone: http://apple.co/2usJEEm"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "7E4Y2bbOG2jcMG70-SE3Ak_rsTQ",
            "id": "nIj06MVH0HY",
            "snippet": {
                "publishedAt": "2025-07-18T11:30:52Z",
                "channelId": "UC7G96LIVWvicrHlQRyA3GRA",
                "title": "2025 ஆடி கிருத்திகை எந்த நாளில் வருகிறது? வழிபடும் & விரத முறை | Aadi Krithigai fasting & worship",
                "description": "#ஆடிகிருத்திகை #aadikrithigai #desamangaiyarkarasi #desamangayarkarasi #தேசமங்கையர்க்கரசி \n\nதிருப்புகழ் 1\n\nசந்தம் \nதனதனன தான தத்த தனதனன தான தத்த\nதனதனன தான தத்த    தனதான\n\nதிருப்புகழ் பாடல் \nசரணகம லால யத்தை அரைநிமிஷ நேர மட்டில்\nதவமுறைதி யானம் வைக்க   அறியாத\n\nசடகசட மூட மட்டி பவவினையி லேச னித்த\nதமியன்மிடி யால்ம யக்க    முறுவேனோ\n\nகருணைபுரி யாதி ருப்ப தெனகுறையி வேளை செப்பு\nகயிலைமலை நாதர் பெற்ற    குமரோனே\n\nகடகபுய மீதி ரத்ந மணியணிபொன் மாலே செச்சை\nகமழுமண மார்க டப்ப    மணிவோனே\n\nதருணமிதை யாமி குத்த கனமதுறு நீள்ச வுக்ய\nசகலசெல்வ யோக மிக்க    பெருவாழ்வு\n\nதகைமைசிவ ஞான முத்தி பரகதியு நீகொ டுத்து\nதவிபுரிய வேணு நெய்த்த    வடிவேலா\n\nஅருணதள பாத பத்ம மதுநிதமு மேது திக்க\nஅரியதமிழ் தான ளித்த    மயில்வீரா\n\nஅதிசயம நேக முற்ற பழநிமலை மீது தித்த\nஅழகதிரு வேர கத்தின்    முருகோனே.\n\nTHIRUPUGAZH 1 IN ENGLISH\n\nCHARANA KAMALALA YATHTHAI ARAINIMISHA NERA MATTIL\nTHAVAMURAI DHIYANAM VAIKKA    ARIYADHA\n\nSADAKASADA MOODA MATTI BHAVA VINAIYILE JANITHTHA\nTHAMIYAN MIDIYAL MAYAKKAM    URUVENO\n\nKARUNAIPURI YAADHI RUPPA DHENAKURAIYI VELAI SEPPU\nKAYILAIMALAI NATHAR PETRA     KUMARONE\n\nKADAKAPUYA MEETHI RATHNA MANIYANIPON MALAE SECHAI\nKAMAZHU MANA MAR KADAPPAM    ANIVONE\n\nTHARUNAM IDHAIYA MIGUTHTHA KANAMADHURU NEEL SAVUKYA\nSAKALASELVA YOGA MIKKA     PERUVAZHVU\n\nTHAGAIMAISIVA NYANA MUTHTHI PARAGATHIYU NEE KODUTH\nUDHAVIPURIYA VENU NEYTHTHA    VADIVELA\n\nARUNADHALA PADHA PADHMAM ADHUNIDHAMUME THUDHIKKA\nARIYATHAMIZH THAN ALITHTHA    MAYILVEERA\n\nADHISAYAM ANEGAM UTRA PAZHANIMALAI MEEDH UDHITHTHA\nAZHAGATHIRU VERAGATHTHIN    MURUGONE.\n\nதிருப்புகழ் 2\n\nசந்தம் \nதனதான தத்த தனதான தத்த\nதனதான தத்த  தனதான\n\nதிருப்புகழ் பாடல் \n\nசெகமாயை யுற்றெ னகவாழ்வில் வைத்த\nதிருமாது கெர்ப்ப     முடலூறித்\n\nதெசமாத முற்றி வடிவாய்நி லத்தில்\nதிரமாய ளித்த      பொருளாகி\n\nமகவாவி னுச்சி விழியாந நத்தில்\nமலைநேர்பு யத்தி     லுறவாடி\n\nமடிமீத டுத்து விளையாடி நித்த\nமணிவாயின் முத்தி     தரவேணும்\n\nமுகமாய மிட்ட குறமாதி னுக்கு\nமுலைமேல ணைக்க     வருநீதா\n\nமுதுமாம றைக்கு ளொருமாபொ ருட்குள்\nமொழியேயு ரைத்த     குருநாதா\n\nதகையாதெ னக்கு னடிகாண வைத்த\nதனியேர கத்தின்     முருகோனே\n\nதருகாவி ரிக்கு வடபாரி சத்தில்\nசமர்வேலெ டுத்த     பெருமாளே.\n\nTHIRUPPUGHAZH 2 IN ENGLISH \n\nSEGA MAYAI UTREN AGA VAZHVIL VAITHTHA\nTHIRUMADHU GERBAM     UDAL URI\n\nDHESA MADHA MUTRI VADIVAY NILATHTHIL\nTHIRAMAY ALITHTHA      PORULAGI\n\nMAGAVAVIN UCHCHI VIZHI ANANATHTHIL\nMALAI NER BUYATHTHIL     URAVADI\n\nMADIMEE DHADUTHTHU VILAIYADI NITHTHAM\nMANIVAYIN MUTHTHI      THARAVENUM\n\nMUGA MAYAM ITTA KURA MADHINUKKU\nMULAIMEL ANAIKKA  VARU    NEEDHA\n\nMUDHU MA MARAIKKUL ORU MA PORUTKUL\nMOZHIYE URAITHTHA      GURUNATHA\n\nTHAGAIYADH ENAKKUN ADI KANA VAITHTHA\nTHANI ERAGATHTHIN      MURUGONE\n\nTHARU KAVIRIKKU VADA PARISATHTHIL\nSAMAR VEL EDUTHTHA     PERUMALE.\n\nஆத்ம ஞான மையம்",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/nIj06MVH0HY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Athma Gnana Maiyam",
                "tags": [
                    "sollarasi",
                    "desa mangaiyarkarasi",
                    "desa mangayarkarasi",
                    "athma gnana maiyam",
                    "latest speech",
                    "variyar",
                    "variyar swamigal",
                    "krubanandha variyar",
                    "sorpozhivu",
                    "சொல்லரசி",
                    "தேச மங்கையர்க்கரசி",
                    "தேச மங்கையற்கரசி",
                    "ஆத்ம ஞான மையம்",
                    "சொற்பொழிவு",
                    "வாரியார்",
                    "வாரியார் ஸ்வாமிகள்",
                    "சுவாமிகள்",
                    "கிருபானந்த வாரியார்"
                ],
                "categoryId": "22",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "2025 ஆடி கிருத்திகை எந்த நாளில் வருகிறது? வழிபடும் & விரத முறை | Aadi Krithigai fasting & worship",
                    "description": "#ஆடிகிருத்திகை #aadikrithigai #desamangaiyarkarasi #desamangayarkarasi #தேசமங்கையர்க்கரசி \n\nதிருப்புகழ் 1\n\nசந்தம் \nதனதனன தான தத்த தனதனன தான தத்த\nதனதனன தான தத்த    தனதான\n\nதிருப்புகழ் பாடல் \nசரணகம லால யத்தை அரைநிமிஷ நேர மட்டில்\nதவமுறைதி யானம் வைக்க   அறியாத\n\nசடகசட மூட மட்டி பவவினையி லேச னித்த\nதமியன்மிடி யால்ம யக்க    முறுவேனோ\n\nகருணைபுரி யாதி ருப்ப தெனகுறையி வேளை செப்பு\nகயிலைமலை நாதர் பெற்ற    குமரோனே\n\nகடகபுய மீதி ரத்ந மணியணிபொன் மாலே செச்சை\nகமழுமண மார்க டப்ப    மணிவோனே\n\nதருணமிதை யாமி குத்த கனமதுறு நீள்ச வுக்ய\nசகலசெல்வ யோக மிக்க    பெருவாழ்வு\n\nதகைமைசிவ ஞான முத்தி பரகதியு நீகொ டுத்து\nதவிபுரிய வேணு நெய்த்த    வடிவேலா\n\nஅருணதள பாத பத்ம மதுநிதமு மேது திக்க\nஅரியதமிழ் தான ளித்த    மயில்வீரா\n\nஅதிசயம நேக முற்ற பழநிமலை மீது தித்த\nஅழகதிரு வேர கத்தின்    முருகோனே.\n\nTHIRUPUGAZH 1 IN ENGLISH\n\nCHARANA KAMALALA YATHTHAI ARAINIMISHA NERA MATTIL\nTHAVAMURAI DHIYANAM VAIKKA    ARIYADHA\n\nSADAKASADA MOODA MATTI BHAVA VINAIYILE JANITHTHA\nTHAMIYAN MIDIYAL MAYAKKAM    URUVENO\n\nKARUNAIPURI YAADHI RUPPA DHENAKURAIYI VELAI SEPPU\nKAYILAIMALAI NATHAR PETRA     KUMARONE\n\nKADAKAPUYA MEETHI RATHNA MANIYANIPON MALAE SECHAI\nKAMAZHU MANA MAR KADAPPAM    ANIVONE\n\nTHARUNAM IDHAIYA MIGUTHTHA KANAMADHURU NEEL SAVUKYA\nSAKALASELVA YOGA MIKKA     PERUVAZHVU\n\nTHAGAIMAISIVA NYANA MUTHTHI PARAGATHIYU NEE KODUTH\nUDHAVIPURIYA VENU NEYTHTHA    VADIVELA\n\nARUNADHALA PADHA PADHMAM ADHUNIDHAMUME THUDHIKKA\nARIYATHAMIZH THAN ALITHTHA    MAYILVEERA\n\nADHISAYAM ANEGAM UTRA PAZHANIMALAI MEEDH UDHITHTHA\nAZHAGATHIRU VERAGATHTHIN    MURUGONE.\n\nதிருப்புகழ் 2\n\nசந்தம் \nதனதான தத்த தனதான தத்த\nதனதான தத்த  தனதான\n\nதிருப்புகழ் பாடல் \n\nசெகமாயை யுற்றெ னகவாழ்வில் வைத்த\nதிருமாது கெர்ப்ப     முடலூறித்\n\nதெசமாத முற்றி வடிவாய்நி லத்தில்\nதிரமாய ளித்த      பொருளாகி\n\nமகவாவி னுச்சி விழியாந நத்தில்\nமலைநேர்பு யத்தி     லுறவாடி\n\nமடிமீத டுத்து விளையாடி நித்த\nமணிவாயின் முத்தி     தரவேணும்\n\nமுகமாய மிட்ட குறமாதி னுக்கு\nமுலைமேல ணைக்க     வருநீதா\n\nமுதுமாம றைக்கு ளொருமாபொ ருட்குள்\nமொழியேயு ரைத்த     குருநாதா\n\nதகையாதெ னக்கு னடிகாண வைத்த\nதனியேர கத்தின்     முருகோனே\n\nதருகாவி ரிக்கு வடபாரி சத்தில்\nசமர்வேலெ டுத்த     பெருமாளே.\n\nTHIRUPPUGHAZH 2 IN ENGLISH \n\nSEGA MAYAI UTREN AGA VAZHVIL VAITHTHA\nTHIRUMADHU GERBAM     UDAL URI\n\nDHESA MADHA MUTRI VADIVAY NILATHTHIL\nTHIRAMAY ALITHTHA      PORULAGI\n\nMAGAVAVIN UCHCHI VIZHI ANANATHTHIL\nMALAI NER BUYATHTHIL     URAVADI\n\nMADIMEE DHADUTHTHU VILAIYADI NITHTHAM\nMANIVAYIN MUTHTHI      THARAVENUM\n\nMUGA MAYAM ITTA KURA MADHINUKKU\nMULAIMEL ANAIKKA  VARU    NEEDHA\n\nMUDHU MA MARAIKKUL ORU MA PORUTKUL\nMOZHIYE URAITHTHA      GURUNATHA\n\nTHAGAIYADH ENAKKUN ADI KANA VAITHTHA\nTHANI ERAGATHTHIN      MURUGONE\n\nTHARU KAVIRIKKU VADA PARISATHTHIL\nSAMAR VEL EDUTHTHA     PERUMALE.\n\nஆத்ம ஞான மையம்"
                },
                "defaultAudioLanguage": "en-IN"
            },
            "contentDetails": {
                "duration": "PT11M11S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "439055",
                "likeCount": "11297",
                "favoriteCount": "0",
                "commentCount": "812"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "YXO50TTob8fl7bUT0NV_nh1qhzU",
                "id": "UC7G96LIVWvicrHlQRyA3GRA",
                "snippet": {
                    "title": "Athma Gnana Maiyam",
                    "description": "Welcome to Athma Gnana Maiyam.  Athma Gnana Maiyam is a dedicated YouTube channel by Smt. Desa Mangayarkarasi.  In this channel we will be posting Smt. Desa Mangayarkarasi's devotional speeches, motivational talks, other religious activities and services.\n\nThe contents of all material available on this YouTube channel are copyrighted to Athma Gnana Maiyam. All rights are reserved and the content may not be reproduced, downloaded, published or transferred in any form or by any means.\n\nAnyone making decisions based on the content of this channel should perform independent due diligence before making a final decision.",
                    "customUrl": "@athmagnanamaiyam",
                    "publishedAt": "2015-01-18T06:41:34Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/FGFz1Y0tvCnu9OiKvEbww--N3F4-7eLSU26jJhrAY_hlnUc4_1VL7jiitpV0rlwPImq051jZOw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Athma Gnana Maiyam",
                        "description": "Welcome to Athma Gnana Maiyam.  Athma Gnana Maiyam is a dedicated YouTube channel by Smt. Desa Mangayarkarasi.  In this channel we will be posting Smt. Desa Mangayarkarasi's devotional speeches, motivational talks, other religious activities and services.\n\nThe contents of all material available on this YouTube channel are copyrighted to Athma Gnana Maiyam. All rights are reserved and the content may not be reproduced, downloaded, published or transferred in any form or by any means.\n\nAnyone making decisions based on the content of this channel should perform independent due diligence before making a final decision."
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "_XgAa4MGI1KQtX40TiEYtDJRqgg",
            "id": "iKZyYdwS3Wg",
            "snippet": {
                "publishedAt": "2025-07-16T14:00:00Z",
                "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "title": "Stranger Things 5 | Official Teaser | Netflix",
                "description": "Every battle has led to this.\n\nMore about Stranger Things 5:\nThe fall of 1987. Hawkins is scarred by the opening of the Rifts, and our heroes are united by a single goal: find and kill Vecna. But he has vanished — his whereabouts and plans unknown. Complicating their mission, the government has placed the town under military quarantine and intensified its hunt for Eleven, forcing her back into hiding. As the anniversary of Will’s disappearance approaches, so does a heavy, familiar dread. The final battle is looming — and with it, a darkness more powerful and more deadly than anything they’ve faced before. To end this nightmare, they’ll need everyone — the full party — standing together, one last time.\n\nWatch on Netflix: https://www.netflix.com/title/81297917\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nStranger Things 5 | Official Teaser | Netflix\nhttps://www.youtube.com/@Netflix",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/iKZyYdwS3Wg/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Netflix",
                "tags": [
                    "Caleb McLaughlin",
                    "Cara Buono",
                    "Charlie Heaton",
                    "Chief Hopper",
                    "David Harbour",
                    "Dustin",
                    "Eleven",
                    "Finn Wolfhard",
                    "Gaten Matarazzo",
                    "Holly Wheeler",
                    "Jamie Campbell Bower",
                    "Joe Keery",
                    "Jonathan Byers",
                    "Joyce Byers",
                    "Lucas",
                    "Max",
                    "Maya Hawke",
                    "Mike Wheeler",
                    "Millie Bobby Brown",
                    "Nancy Wheeler",
                    "Natalia Dyer",
                    "Netflix",
                    "Noah Schnapp",
                    "Official Teaser",
                    "Robin Buckley",
                    "Sadie Sink",
                    "Steve Harrington",
                    "Stranger Things 5",
                    "Vecna",
                    "Will Byers",
                    "Winona Ryder"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Stranger Things 5 | Official Teaser | Netflix",
                    "description": "Every battle has led to this.\n\nMore about Stranger Things 5:\nThe fall of 1987. Hawkins is scarred by the opening of the Rifts, and our heroes are united by a single goal: find and kill Vecna. But he has vanished — his whereabouts and plans unknown. Complicating their mission, the government has placed the town under military quarantine and intensified its hunt for Eleven, forcing her back into hiding. As the anniversary of Will’s disappearance approaches, so does a heavy, familiar dread. The final battle is looming — and with it, a darkness more powerful and more deadly than anything they’ve faced before. To end this nightmare, they’ll need everyone — the full party — standing together, one last time.\n\nWatch on Netflix: https://www.netflix.com/title/81297917\n\nAbout Netflix:\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n\nStranger Things 5 | Official Teaser | Netflix\nhttps://www.youtube.com/@Netflix"
                },
                "defaultAudioLanguage": "en-US"
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
                "viewCount": "15975640",
                "likeCount": "707994",
                "favoriteCount": "0",
                "commentCount": "40207"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "Tbw5t7bZxvWXgEgs_ri5x8z8p_8",
                "id": "UCWOA1ZGywLbqmigxE4Qlvuw",
                "snippet": {
                    "title": "Netflix",
                    "description": "game over\n\n\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n",
                    "customUrl": "@netflix",
                    "publishedAt": "2012-07-17T20:45:36Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Netflix",
                        "description": "game over\n\n\nNetflix is one of the world's leading entertainment services, with over 300 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.\n"
                    },
                    "country": "US"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "csJrQv-CenG3HjVvoFahNPpqlhg",
            "id": "mMNHi8n-7sY",
            "snippet": {
                "publishedAt": "2025-07-18T09:45:40Z",
                "channelId": "UCeiAKuJGZrIjYvaq0nMwbJg",
                "title": "Saiyaara Movie REVIEW | Deeksha Sharma",
                "description": "Saiyaara Movie Review By Deeksha Sharma. Ahaan Panday & Aneet Padda in Mohit Suri Film Saiyaara Hits back at Aashiqui 3 Similarities with Strong Emotions, Soul-Full Music & 2 Debut Real Actors prepared for a Nostalgic Bollywood Rom-Com Ending, 1 Musician 1 heart broken writer teams up for life & love only to be challenged in a never seen before tragedy! Saiyaara Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Aashiqui 3 vs Saiyaara- Can Mohit Suri survive without Aashiqui Franchise? Do leave Comments below if you have seen the film or not!\n\n#Saiyaara #SaiyaaraReview #SaiyaaraMovie\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/mMNHi8n-7sY/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Filmi Indian",
                "tags": [
                    "saiyaara",
                    "saiyaara review",
                    "saiyaara movie",
                    "saiyaara trailer",
                    "saiyaara movie review",
                    "saiyaara full movie",
                    "aashiqui 3",
                    "mohit suri",
                    "Ahaan Panday",
                    "Aneet Padda",
                    "saiyaara hindi movie",
                    "teaser",
                    "trailer",
                    "review reaction",
                    "filmi indian",
                    "saiyaara song",
                    "yrf",
                    "saiyaara hindi review",
                    "saiyaara explained"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Saiyaara Movie REVIEW | Deeksha Sharma",
                    "description": "Saiyaara Movie Review By Deeksha Sharma. Ahaan Panday & Aneet Padda in Mohit Suri Film Saiyaara Hits back at Aashiqui 3 Similarities with Strong Emotions, Soul-Full Music & 2 Debut Real Actors prepared for a Nostalgic Bollywood Rom-Com Ending, 1 Musician 1 heart broken writer teams up for life & love only to be challenged in a never seen before tragedy! Saiyaara Full Movie Story Outline Explained & Positives Negatives would be shared in this Video. Aashiqui 3 vs Saiyaara- Can Mohit Suri survive without Aashiqui Franchise? Do leave Comments below if you have seen the film or not!\n\n#Saiyaara #SaiyaaraReview #SaiyaaraMovie\n\n➤ Follow Me on Instagram-\n     https://www.instagram.com/thefilmiindian"
                }
            },
            "contentDetails": {
                "duration": "PT4M37S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1320120",
                "likeCount": "33930",
                "favoriteCount": "0",
                "commentCount": "2093"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "iQOI9tzlu_KgZmdGhc5B4RfYqO4",
                "id": "UCeiAKuJGZrIjYvaq0nMwbJg",
                "snippet": {
                    "title": "Filmi Indian",
                    "description": "Hi Deeksha Here! Living A Life Through Cinema & Sharing The Journey With You..!\n\n➤ Don't Message For ❌ SPONSORSHIP ❌\n     I am A Creator Not A Saleswoman.\n\n♥ For Haal-chaal & Feedback (thefilmiindian@gmail.com)\n",
                    "customUrl": "@filmiindian",
                    "publishedAt": "2018-07-17T16:01:32Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/tzmPscCSmXXujDTaI1RVYiVBsw7xzWTOkyY-66-pVpqtQeEvTIkiiyRx06_5OI5YH9dEB36Jqw=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Filmi Indian",
                        "description": "Hi Deeksha Here! Living A Life Through Cinema & Sharing The Journey With You..!\n\n➤ Don't Message For ❌ SPONSORSHIP ❌\n     I am A Creator Not A Saleswoman.\n\n♥ For Haal-chaal & Feedback (thefilmiindian@gmail.com)\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "jt9rUMLm5x0FtkaUVQ7B2fQJvBU",
            "id": "-PXOEWsldoM",
            "snippet": {
                "publishedAt": "2025-07-18T10:30:01Z",
                "channelId": "UCFQ9AY7oyEqRS7iVXJLNSmw",
                "title": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song",
                "description": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song | Sonotek Music | Kawad Special Song\n\nSubscribe Us - @sonotekmusic \nMake Your Reels Now :-  https://www.instagram.com/reels/audio/1397480538006550\n\nSonotek Music Presents “Bhole Ka Pujari“ (Official Video) a New Latest Most Popular Haryanvi Songs Haryanavi 2025.New Bhole Baba Song, Haryanvi Dj Song, New Hr Song 2025, Haryanvi Song Starring by Masoom Sharma. This superhit Haryanvi Song Sung by Masoom Sharma. Music given by Pinna Music. Lyrics of this Bholenath Ji Haryanvi song is written by Mp Karsola. Directed By Kuldeep Rathee.  Music label by \"Sonotek Music\"\n\n#masoomsharma #bholekapujari #masoomsharmanewsong #masoom \n#masoomsharmabholekapujari #newharyanvisong #bholenath  #newharyanvisongsharyanavi2025 #haryanvisong #haryanvigane #haryanvidjsong #pinnamusic  #hrsong #sonotekmusic \n\nSong - Bhole Ka Pujari\nSinger - Masoom Sharma\nArtist - Masoom Sharma\nLyrics - Mp Karsola\nMusic - Pinna Music\nComposer - Masoom Sharma\nProject By - Ankit Vij & Yash Thukral \nEditor - Lalit Hudda\nDrone Operator - PDF \nDirected By - Kuldeep Rathee\nPoster - Ratan (Sonotek)\nDigital Work - Roshan Ekma\nLabel - Sonotek Music\n\nLOVE !! LIKE !! COMMENTS !! SUBSCRIBE\n\n♪ Full Song Available On ♪ \n♪ Spotify : https://open.spotify.com/track/6vvPYcNnp101qeETPfamIY?si=6b2d94315ad847ea\n♪ Gaana : https://gaana.com/song/bhole-ka-pujari-10\n♪ Jio Saavn : https://www.jiosaavn.com/song/bhole-ka-pujari/NyAAQCx,A3Q\n♪ Apple Music : https://music.apple.com/us/song/bhole-ka-pujari/1825816750\n♪ Amazon Prime Music : https://music.amazon.com/albums/B0FH6SBX9Y?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_bzzfnI0d5d2827hFb8Clp2JJe\n♪ YouTube Music : https://music.youtube.com/watch?v=2zY-eZ4a59Y&si=BX4uUDfIy9qLGx-w\n\nLyrics -\nHo mera bhola se bhandari\nUski mahima se nyari\nSubeh shyam rattu jau su naam uska\nHoke masti mein choor\nRave bhakti mein choor\nAur bhulu Koni Kade Vi Mai Dhaam Uska\nMai su shivji ka das\nUka dere mein re vaas\nBaba aane konya deve\nKade kasht bawli\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su mai\nTrust bawli re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic.....\n\no japu shambhu shambhu naam\nsidhe hoja sare kaam\nmai toh aau haridwar\njade ganga ji ka dhaam\nse aghoriya ka dera\ntane kuch konya bera\nburi aatma ne kar deve\nnasht bawli\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\n\nMusic....\n\nSe mane triloki te pyaar\nWohe mera sacha yaar\nSunne sab bhakta ki\nJobhi jave se kedar\nWoh se teen lok ka data\nMera Sacha Se Vidhata\nUski Bhakti Mein Aagya\nInterest Bawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath Pe karu su Mai\nTrust Bawli Re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic...\n\nO mera shankar damru wala\nKhole se kismat ka tala\nKare pahada upar tap\nPade jave po ka pala\nChhora mp karsola\nbhole pache hora boda\naaya bhakti mein sun\nsada first baawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\ntrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su\nmai trust bawli\n\nTags- \n\"bhole ka pujari\"\n\"bhole ka pujari song\"\n\"bhole ka pujari haryanvi\"\n\"bhole ka pujari haryanvi song\"\n\"bhole ka pujari masoom sharma\"\n\"masoom sharma\" \n\"masoom sharma song\"\n\"masoom sharma new song\"\n\"masoom sharma all song\"\n\"masoom sharma dj song\"\n\"masoom sharma bhole ke pujari\"\n\"masoom sharma haryanvi kawad song\"\n\"haryanvi song\"\n\"new haryanvi song\"\n\"naryanvi dj song\"\n\"new haryanvi song 2025\"\n\"new haryanvi songs haryanavi 2025\"\n\"haryanvi new song\"\n\"sonotek music\"\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Dj Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/-PXOEWsldoM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Sonotek Music",
                "tags": [
                    "bhole ka pujari",
                    "masoom sharma",
                    "masoom sharma song",
                    "bhole ka pujari masoom sharma song",
                    "kawad song by masoom sharma",
                    "kawad special song massom sharma",
                    "masoom sharma new song",
                    "masoom sharma all songs",
                    "masoom",
                    "masoom sharma kawad song",
                    "masoom sharma latest song",
                    "bhole ka pujari masoom sharma",
                    "bholenath song",
                    "sonotek music",
                    "bhole baba haryanvi song",
                    "haryanvi dj song",
                    "new haryanvi song",
                    "new bhole baba song",
                    "new haryanvi song 2025",
                    "haryanvi song",
                    "masoom sharma ke gane",
                    "hr song"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song",
                    "description": "Bhole Ka Pujari (Official Video) Masoom Sharma | New Haryanvi Song 2025 | New Bhole Baba Song | Sonotek Music | Kawad Special Song\n\nSubscribe Us - @sonotekmusic \nMake Your Reels Now :-  https://www.instagram.com/reels/audio/1397480538006550\n\nSonotek Music Presents “Bhole Ka Pujari“ (Official Video) a New Latest Most Popular Haryanvi Songs Haryanavi 2025.New Bhole Baba Song, Haryanvi Dj Song, New Hr Song 2025, Haryanvi Song Starring by Masoom Sharma. This superhit Haryanvi Song Sung by Masoom Sharma. Music given by Pinna Music. Lyrics of this Bholenath Ji Haryanvi song is written by Mp Karsola. Directed By Kuldeep Rathee.  Music label by \"Sonotek Music\"\n\n#masoomsharma #bholekapujari #masoomsharmanewsong #masoom \n#masoomsharmabholekapujari #newharyanvisong #bholenath  #newharyanvisongsharyanavi2025 #haryanvisong #haryanvigane #haryanvidjsong #pinnamusic  #hrsong #sonotekmusic \n\nSong - Bhole Ka Pujari\nSinger - Masoom Sharma\nArtist - Masoom Sharma\nLyrics - Mp Karsola\nMusic - Pinna Music\nComposer - Masoom Sharma\nProject By - Ankit Vij & Yash Thukral \nEditor - Lalit Hudda\nDrone Operator - PDF \nDirected By - Kuldeep Rathee\nPoster - Ratan (Sonotek)\nDigital Work - Roshan Ekma\nLabel - Sonotek Music\n\nLOVE !! LIKE !! COMMENTS !! SUBSCRIBE\n\n♪ Full Song Available On ♪ \n♪ Spotify : https://open.spotify.com/track/6vvPYcNnp101qeETPfamIY?si=6b2d94315ad847ea\n♪ Gaana : https://gaana.com/song/bhole-ka-pujari-10\n♪ Jio Saavn : https://www.jiosaavn.com/song/bhole-ka-pujari/NyAAQCx,A3Q\n♪ Apple Music : https://music.apple.com/us/song/bhole-ka-pujari/1825816750\n♪ Amazon Prime Music : https://music.amazon.com/albums/B0FH6SBX9Y?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_bzzfnI0d5d2827hFb8Clp2JJe\n♪ YouTube Music : https://music.youtube.com/watch?v=2zY-eZ4a59Y&si=BX4uUDfIy9qLGx-w\n\nLyrics -\nHo mera bhola se bhandari\nUski mahima se nyari\nSubeh shyam rattu jau su naam uska\nHoke masti mein choor\nRave bhakti mein choor\nAur bhulu Koni Kade Vi Mai Dhaam Uska\nMai su shivji ka das\nUka dere mein re vaas\nBaba aane konya deve\nKade kasht bawli\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su mai\nTrust bawli re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic.....\n\no japu shambhu shambhu naam\nsidhe hoja sare kaam\nmai toh aau haridwar\njade ganga ji ka dhaam\nse aghoriya ka dera\ntane kuch konya bera\nburi aatma ne kar deve\nnasht bawli\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\nTrust bawli re\n\nMusic....\n\nSe mane triloki te pyaar\nWohe mera sacha yaar\nSunne sab bhakta ki\nJobhi jave se kedar\nWoh se teen lok ka data\nMera Sacha Se Vidhata\nUski Bhakti Mein Aagya\nInterest Bawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath Pe karu su Mai\nTrust Bawli Re\nMai su bhole ka pujari\nJane duniya ya sari\nBholenath pe karu su\nMai trust bawli\n\nMusic...\n\nO mera shankar damru wala\nKhole se kismat ka tala\nKare pahada upar tap\nPade jave po ka pala\nChhora mp karsola\nbhole pache hora boda\naaya bhakti mein sun\nsada first baawli\nre mai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su mai\ntrust bawli re\nmai su bhole ka pujari\njane duniya ya sari\nbholenath pe karu su\nmai trust bawli\n\nTags- \n\"bhole ka pujari\"\n\"bhole ka pujari song\"\n\"bhole ka pujari haryanvi\"\n\"bhole ka pujari haryanvi song\"\n\"bhole ka pujari masoom sharma\"\n\"masoom sharma\" \n\"masoom sharma song\"\n\"masoom sharma new song\"\n\"masoom sharma all song\"\n\"masoom sharma dj song\"\n\"masoom sharma bhole ke pujari\"\n\"masoom sharma haryanvi kawad song\"\n\"haryanvi song\"\n\"new haryanvi song\"\n\"naryanvi dj song\"\n\"new haryanvi song 2025\"\n\"new haryanvi songs haryanavi 2025\"\n\"haryanvi new song\"\n\"sonotek music\"\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2025. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Dj Songs Haryanavi 2025. We Will Provide Best Haryanvi Songs Of All Time"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT2M44S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "438026",
                "likeCount": "10218",
                "favoriteCount": "0",
                "commentCount": "469"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "sEjiBrbqbfTmhiDn2S9OAg4HFqI",
                "id": "UCFQ9AY7oyEqRS7iVXJLNSmw",
                "snippet": {
                    "title": "Sonotek Music",
                    "description": "\"Music can change the world\". Sonotek Cassettes is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nSonotek Cassettes is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with Sonotek Cassettes",
                    "customUrl": "@sonotekmusic",
                    "publishedAt": "2011-01-29T05:37:23Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nLO_4_-wKZVyQOi8AtQslZm70fWhXmev2A5_EU7XT5Dg=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Sonotek Music",
                        "description": "\"Music can change the world\". Sonotek Cassettes is India's largest Music Label & Movie Studio, believes in bringing world close together through its music.\nSonotek Cassettes is associated with music industry from past three decades, having ample catalogue of music comprising plenty of languages that covers the length & breadth of India. We believe after silence, nearest to expressing the inexpressible is Music. So, all the music lovers who believe in magic of music come join us and live the magic of music with Sonotek Cassettes"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "aulTEzcAGeqSqVaZFI90DYVGKe0",
            "id": "8-FvwGUZBXM",
            "snippet": {
                "publishedAt": "2025-07-19T05:30:07Z",
                "channelId": "UCD3ib30j29V1jgy4cPh_jxQ",
                "title": "Every Indian in Hotel || Aditi Sharma",
                "description": "Every Indian in Hotel || Aditi Sharma\n\nYoutube Short Channel Link :  \n\nhttps://www.youtube.com/channel/UCmrOZ0rAZzmwfHSaF1AAEJQ\n\nInstagram Link:\n\nhttps://rb.gy/zbihjw \n\nSUBSCRIBE for more videos!\nTurn Notifications on and you will never miss a video again\nThank you for watching!\n\nSOURCES: \nScript By: \n\nAditi Sharma\n\n\nFOLLOW ME ON:\nFacebook: https://rb.gy/zkacdi  \nYouTube: SUBSCRIBE!  https://rb.gy/3bhgo7 \nInstagram: https://rb.gy/zbihjw \n\nCast:\n\nAditi Sharma\nDeepali\nTalim\nShiva\nkritya\n\nEdit By: \n\nAayush Tiwari\n\nShoot By: \n\nNitish Goel\nShivam Sharma\n\nThumbnail:\n\nRaj Sharma\n\nContact me at (     iamaditisharma11@gmail.com     )",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/8-FvwGUZBXM/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Aditi Sharma",
                "tags": [
                    "school teacher mein aaya chudail || Aditi Sharma",
                    "aditi",
                    "school main bhoot",
                    "bhoot video",
                    "funny video",
                    "comedy video",
                    "scary school",
                    "bhootiya class",
                    "bhootiya school",
                    "bhoot bangla",
                    "Badi Behan vs Choti Behan in Bhoot Bangla",
                    "BHOOT",
                    "HORROR VIDEO",
                    "BHAI BEHAN OR BHOOT",
                    "BHOOT FAMILY",
                    "BHOOT VIDEO",
                    "HORROR HOUSE",
                    "middle class school aur चुड़ैल",
                    "funny witch",
                    "chudail",
                    "horror comedy",
                    "entertainment",
                    "the haunted house",
                    "middle class bhoot",
                    "auto mai bhoot",
                    "bhoot",
                    "school teacher mein aaya Chudail"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Every Indian in Hotel || Aditi Sharma",
                    "description": "Every Indian in Hotel || Aditi Sharma\n\nYoutube Short Channel Link :  \n\nhttps://www.youtube.com/channel/UCmrOZ0rAZzmwfHSaF1AAEJQ\n\nInstagram Link:\n\nhttps://rb.gy/zbihjw \n\nSUBSCRIBE for more videos!\nTurn Notifications on and you will never miss a video again\nThank you for watching!\n\nSOURCES: \nScript By: \n\nAditi Sharma\n\n\nFOLLOW ME ON:\nFacebook: https://rb.gy/zkacdi  \nYouTube: SUBSCRIBE!  https://rb.gy/3bhgo7 \nInstagram: https://rb.gy/zbihjw \n\nCast:\n\nAditi Sharma\nDeepali\nTalim\nShiva\nkritya\n\nEdit By: \n\nAayush Tiwari\n\nShoot By: \n\nNitish Goel\nShivam Sharma\n\nThumbnail:\n\nRaj Sharma\n\nContact me at (     iamaditisharma11@gmail.com     )"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT21M56S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "136493",
                "likeCount": "1130",
                "favoriteCount": "0",
                "commentCount": "51"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "oojpotwUHHhDO5TdpRcNVs40hx0",
                "id": "UCD3ib30j29V1jgy4cPh_jxQ",
                "snippet": {
                    "title": "Aditi Sharma",
                    "description": "Welcome to our family! #ADITISHARMA!\nWe are a family based in New Delhi-India that love to entertain you. We believe in family, fun, Love and are passionate about fashion, comedy, and culture. Our vision is to capture and document real moments and stories happening in a family on a daily basis in a very practical way and post them here. \nCome back for our videos that are posted regularly on the topics of family, love, relationships, wisdom, fun and much more!! \n\nBest of all, we believe everyone is a part of our family, so don’t forget to SUBSCRIBE!!\n\nWe are thankful for your support and we always Love you!\n",
                    "customUrl": "@aditisharma4u",
                    "publishedAt": "2020-09-20T17:13:55.725335Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mKQbXsT0M88S2JGWRDcSbLzdpJW8G7_uOm799owKGQlrQ=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Aditi Sharma",
                        "description": "Welcome to our family! #ADITISHARMA!\nWe are a family based in New Delhi-India that love to entertain you. We believe in family, fun, Love and are passionate about fashion, comedy, and culture. Our vision is to capture and document real moments and stories happening in a family on a daily basis in a very practical way and post them here. \nCome back for our videos that are posted regularly on the topics of family, love, relationships, wisdom, fun and much more!! \n\nBest of all, we believe everyone is a part of our family, so don’t forget to SUBSCRIBE!!\n\nWe are thankful for your support and we always Love you!\n"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "-QzOrThLx0PGc6AuopDEwa8Wk1Y",
            "id": "SRscWBa1OSE",
            "snippet": {
                "publishedAt": "2025-07-18T05:30:08Z",
                "channelId": "UCOsyDsO5tIt-VZ1iwjdQmew",
                "title": "Sabba : Village Flow (Official Video) | Latest Punjabi Songs 2025 | New Punjabi Songs 2025",
                "description": "Straight from the heart of the pind, Sabba drops 'Village Flow', a desi anthem full of pride, passion, and pure Punjabi swag! This isn’t just another track — it’s a celebration of Sabba’s roots and rise.\n\nIs vaar gall sirf beats di nahi – ae taan Sabba Da Lanter ae, jisnu vekh ke poora pind hi nach paeya! 🔥\n\n#punjabimusic #latestpunjabisong #sabbadalanter\n\n\nStreaming Links :\n\nInsta\nhttps://www.instagram.com/reels/audio/1384408396005666\n\nSpotify\nhttps://open.spotify.com/album/7bySaar4oQhsod5QaZrjvV\n\nAmazon Music\nhttps://music.amazon.in/albums/B0FH27Y1LW\n\nApple Music\nhttps://music.apple.com/in/album/village-flow-single/1825339856\n\nGaana\nhttps://gaana.com/album/village-flow\n\nJioSaavn\nhttps://www.jiosaavn.com/album/village-flow/I1Asyr2DoOM_\n\nYouTube Music\nhttps://music.youtube.com/watch?v=SRscWBa1OSE&si=_DpMZ6EdS3CoD55a \n\n\nCredits :\n\nSpeed Records Presents\nSong - Village Flow\nSinger/Composer/Lyrics - Sabba\nMusic - JayB Singh\nDirection/Concept?Screenplay : Sahil Sharma\nPresentation : Meeru\nProducer - Sarabjit Saroya\nDop : Pardeep Potter\nEditor : HC Edittz\nProd. : Sahil Sharma Filmzz (Honey)\nCostume : Rajat Manchanda\nReels Shoot : Jagjit Chak\nDigital Managed By Scope Entertainment\nDigital Promotions By Speed Records Digital\nReel Promotions By Scope Digital\nLabel - Speed Records\n\nLyrics :\nNi baitha mai trakki de mathe ch jhanda gaddke\nNi utte nahio aaya thalle kise de vi laggke\nOh hun mera changa aaya kehnde pair chhad gya\nNi jehde maade time ch gye si hath chhadke\nOh lanka nahio dhayi bhave bheti aa harek de\nNi mere saale kinne hi jo bahre pye aa hate de\nNi bahoteya de rang udd janda kude face to\nNi charno da dohta baitha gaddi vich vekhke\nHo vekhi mardanya eh rang kartar de\nOh aap mar jande jehde doojeya nu maarde\nHo bahn jihdi fadi hove neeli Chhatt wale ne\nNi kitho sutt hona a laler nehri taarke\nOh chhetti hath aunde nahio uchiya udariyaan\nNi reejh na pugaiye asi vair nale yaariyan\nOh vairi voori vekhke badak maar dyidi\nNi kudi jandi vekh kde whistlaan ni maariyan\nNi gabhru rakaane bebe bapu ji to baahre na\nNa saade kolo vaade hone lagne ve laare na\nNi tere kolo main vi tere maa-pe charwaune na\nTe mere kolo ranjhe wangu pashu jaane chaare na\nNa dil to greeb bhave bhute na ameer ni\nAa jehde nal bhai kathi kri na mandeer ni\nNi susti na nede tede mitran de laggdi \nNi 24 ghante lor vich rehnda ae sareer ni\nNi bhaiyan te yakeen security jeyo z te\nHo bade dil lutte akh mittraa di red ne\nHo dabb nal lgga jo rakaane 30 bore da\nFlower bna dewe bhaida eh forehead te\nNa nimm jehe lot aune mitthi teri talk to\nNa pighluga dil eh jwaani teri hot to\nDass fer sher da ni rutba ki reh gya\nJe oh vi gya pattya rakaane cat walk to\nOh zindgi nu reejha nal maande aa baithke\nKoi chakkr ni meeru bai khada jado back te\nHo asi befikre 9 10 vje sojiye\nNi sathon gallan adhi raat honiya ni chat te\nNi chattya ni kde v yaara ne billo thukk ke\nOh jo vi kita shar-e-aam kreya ni lukk ke\nOh Kayi saale raula pake kehn asi ki aa\nTe sara kujh dssya ae mittra di chupp ne\nJo tappde aa salya nu shittra di ghaat ni\nOh fer vekhi baith jaane sara chupp chaap ni\nOhh kehnde ne ke saade naalo vadda koi vaily ni\nTe Dhaai saah ne ch*** de utte bhora maas ni\nNeet saaf rabb ne vi kujh ni lakoya kude\nTension ni len koi dinda bai saroya kude\nDhannwaad karda va saareya da dil to\nHaaye pauna si punjab kattha lentar te hoya kude\nHo dunia ta jitti baitha hun kithe haar da\nJhool jhool ture kude pota jagtar da\nOh jihna hun takk aukh vich hi aa kattli\nNi maapeya nu geda mai lwauna ik bahar da\nHo guru ghar jaake bhala sareyaa da mangda\nHo adhi cho vi adhi cheej doojeya na vand da\nHo mai ni kehnda rabb bahla deyi jawe menu\nJinna mera banda onna hi ohto mangda\n\n\nLike || Share || Spread || Love \n  \nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords \n\nSpeed Records Haryanvi\nYoutube: https://bit.ly/2kSrhZK\nInstagram: https://www.instagram.com/speedharyanviofficial \n\nSpeed Records Bhojpuri - \nYoutube: https://bit.ly/2y8HSez\nInstagram: https://bit.ly/2xM2WYL\nSnapchat: https://www.snapchat.com/add/speedbhojpuri\n\nOops TV -\nOops TV Facebook Link - https://m.facebook.com/oopstvfun/\n\nPoon Poon - \nSnapchat - https://www.snapchat.com/add/poonpoon0001\nYoutube - http://bitly.com/2hwYOnx\nFacebook - https://www.facebook.com/officialpoonpoon\nInstagram - https://instagram.com/poonpoonofficial",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/SRscWBa1OSE/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Speed Records",
                "tags": [
                    "punjabi music",
                    "punjabi latest music",
                    "punjabi latest songs",
                    "punjabi romantic songs",
                    "punjabi sad songs",
                    "latest punjabi songs 2025",
                    "speed records",
                    "hit punjabi songs",
                    "New punjabi songs 2025",
                    "All new punjabi songs 2025",
                    "Hit punjabi song",
                    "punjabi new song",
                    "punjabi new movie",
                    "sabba new song",
                    "sabba all song",
                    "sabba new song all",
                    "sabba new song 2025",
                    "village flow sabba",
                    "village flow sabba new song",
                    "village flow",
                    "village flow song",
                    "new song",
                    "new latest song",
                    "sabba da lanter"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Sabba : Village Flow (Official Video) | Latest Punjabi Songs 2025 | New Punjabi Songs 2025",
                    "description": "Straight from the heart of the pind, Sabba drops 'Village Flow', a desi anthem full of pride, passion, and pure Punjabi swag! This isn’t just another track — it’s a celebration of Sabba’s roots and rise.\n\nIs vaar gall sirf beats di nahi – ae taan Sabba Da Lanter ae, jisnu vekh ke poora pind hi nach paeya! 🔥\n\n#punjabimusic #latestpunjabisong #sabbadalanter\n\n\nStreaming Links :\n\nInsta\nhttps://www.instagram.com/reels/audio/1384408396005666\n\nSpotify\nhttps://open.spotify.com/album/7bySaar4oQhsod5QaZrjvV\n\nAmazon Music\nhttps://music.amazon.in/albums/B0FH27Y1LW\n\nApple Music\nhttps://music.apple.com/in/album/village-flow-single/1825339856\n\nGaana\nhttps://gaana.com/album/village-flow\n\nJioSaavn\nhttps://www.jiosaavn.com/album/village-flow/I1Asyr2DoOM_\n\nYouTube Music\nhttps://music.youtube.com/watch?v=SRscWBa1OSE&si=_DpMZ6EdS3CoD55a \n\n\nCredits :\n\nSpeed Records Presents\nSong - Village Flow\nSinger/Composer/Lyrics - Sabba\nMusic - JayB Singh\nDirection/Concept?Screenplay : Sahil Sharma\nPresentation : Meeru\nProducer - Sarabjit Saroya\nDop : Pardeep Potter\nEditor : HC Edittz\nProd. : Sahil Sharma Filmzz (Honey)\nCostume : Rajat Manchanda\nReels Shoot : Jagjit Chak\nDigital Managed By Scope Entertainment\nDigital Promotions By Speed Records Digital\nReel Promotions By Scope Digital\nLabel - Speed Records\n\nLyrics :\nNi baitha mai trakki de mathe ch jhanda gaddke\nNi utte nahio aaya thalle kise de vi laggke\nOh hun mera changa aaya kehnde pair chhad gya\nNi jehde maade time ch gye si hath chhadke\nOh lanka nahio dhayi bhave bheti aa harek de\nNi mere saale kinne hi jo bahre pye aa hate de\nNi bahoteya de rang udd janda kude face to\nNi charno da dohta baitha gaddi vich vekhke\nHo vekhi mardanya eh rang kartar de\nOh aap mar jande jehde doojeya nu maarde\nHo bahn jihdi fadi hove neeli Chhatt wale ne\nNi kitho sutt hona a laler nehri taarke\nOh chhetti hath aunde nahio uchiya udariyaan\nNi reejh na pugaiye asi vair nale yaariyan\nOh vairi voori vekhke badak maar dyidi\nNi kudi jandi vekh kde whistlaan ni maariyan\nNi gabhru rakaane bebe bapu ji to baahre na\nNa saade kolo vaade hone lagne ve laare na\nNi tere kolo main vi tere maa-pe charwaune na\nTe mere kolo ranjhe wangu pashu jaane chaare na\nNa dil to greeb bhave bhute na ameer ni\nAa jehde nal bhai kathi kri na mandeer ni\nNi susti na nede tede mitran de laggdi \nNi 24 ghante lor vich rehnda ae sareer ni\nNi bhaiyan te yakeen security jeyo z te\nHo bade dil lutte akh mittraa di red ne\nHo dabb nal lgga jo rakaane 30 bore da\nFlower bna dewe bhaida eh forehead te\nNa nimm jehe lot aune mitthi teri talk to\nNa pighluga dil eh jwaani teri hot to\nDass fer sher da ni rutba ki reh gya\nJe oh vi gya pattya rakaane cat walk to\nOh zindgi nu reejha nal maande aa baithke\nKoi chakkr ni meeru bai khada jado back te\nHo asi befikre 9 10 vje sojiye\nNi sathon gallan adhi raat honiya ni chat te\nNi chattya ni kde v yaara ne billo thukk ke\nOh jo vi kita shar-e-aam kreya ni lukk ke\nOh Kayi saale raula pake kehn asi ki aa\nTe sara kujh dssya ae mittra di chupp ne\nJo tappde aa salya nu shittra di ghaat ni\nOh fer vekhi baith jaane sara chupp chaap ni\nOhh kehnde ne ke saade naalo vadda koi vaily ni\nTe Dhaai saah ne ch*** de utte bhora maas ni\nNeet saaf rabb ne vi kujh ni lakoya kude\nTension ni len koi dinda bai saroya kude\nDhannwaad karda va saareya da dil to\nHaaye pauna si punjab kattha lentar te hoya kude\nHo dunia ta jitti baitha hun kithe haar da\nJhool jhool ture kude pota jagtar da\nOh jihna hun takk aukh vich hi aa kattli\nNi maapeya nu geda mai lwauna ik bahar da\nHo guru ghar jaake bhala sareyaa da mangda\nHo adhi cho vi adhi cheej doojeya na vand da\nHo mai ni kehnda rabb bahla deyi jawe menu\nJinna mera banda onna hi ohto mangda\n\n\nLike || Share || Spread || Love \n  \nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords \n\nSpeed Records Haryanvi\nYoutube: https://bit.ly/2kSrhZK\nInstagram: https://www.instagram.com/speedharyanviofficial \n\nSpeed Records Bhojpuri - \nYoutube: https://bit.ly/2y8HSez\nInstagram: https://bit.ly/2xM2WYL\nSnapchat: https://www.snapchat.com/add/speedbhojpuri\n\nOops TV -\nOops TV Facebook Link - https://m.facebook.com/oopstvfun/\n\nPoon Poon - \nSnapchat - https://www.snapchat.com/add/poonpoon0001\nYoutube - http://bitly.com/2hwYOnx\nFacebook - https://www.facebook.com/officialpoonpoon\nInstagram - https://instagram.com/poonpoonofficial"
                },
                "defaultAudioLanguage": "pa"
            },
            "contentDetails": {
                "duration": "PT2M51S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1194635",
                "likeCount": "52834",
                "favoriteCount": "0",
                "commentCount": "2931"
            },
            "chDetails": {
                "kind": "youtube#channel",
                "etag": "fTWyDJmLlBIFIUJ8kVDV48DN6Y4",
                "id": "UCOsyDsO5tIt-VZ1iwjdQmew",
                "snippet": {
                    "title": "Speed Records",
                    "description": "Speed Records, the biggest Punjabi Music Record label in the world combining feet tapping tunes accompanied with vibrant voices as the identifier of Punjabi culture. With best of artistes in Punjabi Music and a huge repertoire of hits, this is your one stop destination for Punjabi Music!\n\nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords\nWebsite - http://www.speedrecordsworld.com/",
                    "customUrl": "@speedrecords",
                    "publishedAt": "2012-11-22T10:36:15Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lTIClTxbIfXAJHtzwqInxzY5h7PnvI9thZffyXeoa6xsA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Speed Records",
                        "description": "Speed Records, the biggest Punjabi Music Record label in the world combining feet tapping tunes accompanied with vibrant voices as the identifier of Punjabi culture. With best of artistes in Punjabi Music and a huge repertoire of hits, this is your one stop destination for Punjabi Music!\n\nEnjoy & stay connected with us!\n► Subscribe to Speed Records : http://bit.ly/SpeedRecords\n► Like us on Facebook: https://www.facebook.com/SpeedRecords\n► Follow us on Twitter: https://twitter.com/Speed_Records\n► Follow us on Instagram: https://instagram.com/speedrecords\n► Follow on Snapchat : https://www.snapchat.com/add/speedrecords\nWebsite - http://www.speedrecordsworld.com/"
                    },
                    "country": "IN"
                }
            }
        },
        {
            "kind": "youtube#video",
            "etag": "72flWWcUIYyF2674o_WXg_UCc_g",
            "id": "EW4PcyuFMfo",
            "snippet": {
                "publishedAt": "2025-07-14T05:30:07Z",
                "channelId": "UCq-Fj5jknLsUf-MWSy4_brA",
                "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/EW4PcyuFMfo/maxresdefault.jpg",
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
                    "dil pe chalai churiya trending version",
                    "dil pe chalai churiya raju kalakkar",
                    "dil pe chalai churiya anjali",
                    "dil pe chalai churiya dj",
                    "dil pe chalai churiya song sonu nigam",
                    "dil pe chalai churiya raju kalakar",
                    "dil pe chalai churiya song raju",
                    "raju kalakar dil pe chalai churiya",
                    "tune dil ke rakibo sang song",
                    "anajli arora dil pe chalai churiya",
                    "rajan dil pe chalai churiya",
                    "dil pe chalai churiya"
                ],
                "categoryId": "10",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Dil Pe Chalai Churiya (Trending Version) | Sonu Nigam | Raju Kalakar, Anjali, Rajan, Rishabh,Deepak",
                    "description": "Presenting the highly demanded song \"Dil Pe Chalai Churiya (Trending Version), Feat. the viral sensation - Raju Kalakar, Anjali Arora, Rajan, Rishabh & Deepak.\n\n#DilPeChalaiChuriya \n\nCredits:\nSong - Dil Pe Chalai Churiya\nMovie/Album - Bewafa Sanam \nSinger - Sonu Nigam\nMusic Director - Nikhil-Vinay\nLyricist - Pyam Saeedi\nMusic Label - T-Series\n\nVideo Credits:\nDirection & Choreography – Mudassar Khan\nDirector of Photography (DOP) – Vishal Sinha\nExecutive Producer – Moinn Kkhan\nProduction Company – AF5 Creations\nCostume Designer – Bosky Sheth\nProduction Designer – Sonali Mandal\nProduction Managers – Sachin Prajapati & Deepanshu Tanwar\nAssistant Choreographers – Darshan Mandilya, Subhash Naidu & Anshu Rathore\n1st AC – Satish Kumar\nFocus Puller – Sachin Pawle\nSteadicam Operator – Ejaz\nEditor – Oswin Reveredo\nDI Colorist – Ritaban Biswas\n\nDownload Desibeats - https://bit.ly/4bEaNcJ\nDownload Tapbeats -  https://bit.ly/4bY3hcZ\n\n___________________________________\nEnjoy & stay connected with us!\n👉 Subscribe to T-Series: https://youtube.com/tseries\n👉 Like us on Facebook: https://www.facebook.com/tseriesmusic\n👉 Follow us on X: https://twitter.com/tseries\n👉 Follow us on Instagram: https://instagram.com/tseries.official\n👉 Follow us on Snapchat: https://snapchat.com/t/lHs719Qu"
                },
                "defaultAudioLanguage": "hi"
            },
            "contentDetails": {
                "duration": "PT4M1S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "contentRating": {},
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "16630911",
                "likeCount": "649817",
                "favoriteCount": "0",
                "commentCount": "31683"
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
        }
    ]
}

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
            maxResults: 12
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

const qVideosFetcher = async (title = "") => {
    try {
        const videos = await youtube.videos.list({
            part: "snippet, statistics, contentDetails",
            q: title,
            chart: "mostPopular",
            type: "video",
            maxResults: 12,
            regionCode: "IN",
            relevanceLanguage: "en",
            order: "date",
            videoDuration: "medium"
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

const exploreVideos = asyncHandler(async (req, res) => {

    try {
        // const Now = await videosFetcher()
        // const Music = await videosFetcher(10)
        // const Gaming = await videosFetcher(20)
        //const Comedy = await qVideosFetcher("comedy")
        // const Podcast = await qVideosFetcher("podcast")
        // const Movie = await qVideosFetcher("movie trailer OR review OR interview")

        const Now = v.Now
        const Music = v.Music
        const Gaming = v.Gaming
        const Podcast = v.Podcast
        const Movie = v.Movie


        const data = { Now, Music, Gaming, Podcast, Movie }

        if (!data) throw new ApiError(500, "Something went wrong while fetching videos to explore")

        return res
            .status(200)
            .json(new ApiResponse(200, data, "Got all videos to explore"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching videos to explore")
    }

})

const hv = asyncHandler(async(req, res) => {
    const hvi = await videosFetcher()

    if(!hvi) throw new ApiError(500, "Some shite went wrong")
        // console.log(hvi);
        

    return res
    .status(200)
    .json(new ApiResponse(200, hvi, "Got it"))
})

export {
    exploreVideos,
    hv
}