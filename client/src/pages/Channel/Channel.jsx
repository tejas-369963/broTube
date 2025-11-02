import { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import axios from "axios"
import { convertDateToString, convertViews, formatDescription } from "../../utils/convertStuff"
import { SearchIcon, StickIcon, Tick, ViIcon } from "../../icons"
import VideoCard from "../../components/HomeVideoCard"
import { nanoid } from "@reduxjs/toolkit"
import { Link, useParams } from "react-router-dom"
import ListCover from "../../components/ListCover"
import Close from "../../icons/Close"
import World from "../../icons/World"
import User from "../../icons/User"
import I from "../../icons/I"
import PlayBtn from "../../icons/PlayBtn"
import SafeImage from "../../components/SafeImage"

const description = (str) => {

	const res = str.slice(0, 36)

	return res

}

const convertViewsToIn = (n) => {

	const num = Number(n)

	const temp = num.toLocaleString("IN")

	const str = temp.toString()

	const res = str.replaceAll(".", ",")

	return res
}

function Channel() {

	const [channel, setChannel] = useState(null)
	const [videoTag, setVideoTag] = useState("")
	const [active, setActive] = useState("")
	const [videos, setVideos] = useState([])
	const [id, setId] = useState({})
	const [playlists, setPlaylists] = useState([])
	const [nextPageToken, setNextPageToken] = useState("")
	const [loading, setLoading] = useState(false)
	const [vLoading, setVLoading] = useState("init")
	const [initLoading, setInitLoading] = useState("init")
	const [isAboutActive, setIsAboutActive] = useState(false)
	const [descriptionText, setDescriptionText] = useState("")
	const { ch } = useParams()

	const channelId = ch.split("=")

	useEffect(() => {
		if (initLoading === "init") setInitLoading(true)
		const vid = async () => {

			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/channel/${channelId[1]}`, { withCredentials: true })

				setChannel(res.data.data.channelInfo)

				console.log(res.data)

			} catch (err) {
				console.error('Failed to fetch user login status:', err.message);
			} finally {
				setInitLoading(false)
			}
		}

		vid()

	}, [])

	const navItems = [
		{
			tag: "Videos",
			url: "/videos"
		},
		{
			tag: "Playlists",
			url: "/playlists"
		}
	]

	useEffect(() => {
		setNextPageToken("")
		setPlaylists([])
		setVideos([])
		if (active === "" && channel)
			setActive("Videos")
		switch (active) {
			case "Videos":
				setVideoTag("/videos")
				setId({ id: channel.contentDetails.relatedPlaylists.uploads })
				break;
			case "Playlists":
				setVideoTag("/playlists")
				setId({ id: channel.id })
				break;
		}
	}, [active, channel])

	const fetchVideos = async () => {
		setLoading(true)
		if (vLoading === "init") setVLoading(true)

		try {
			const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/channel${videoTag}?pageToken=${nextPageToken || ""}`, { id: id.id }, { withCredentials: true })
			console.log(res.data)
			if (active === "Videos") {

				setVideos(prev => [...prev, ...res.data.data.resData])
				setNextPageToken(res.data.data.nextPageToken)

			}
			else if (active === "Playlists") {
				setPlaylists(prev => [...prev, ...res.data.data.resData])
				setNextPageToken(res.data.data.nextPageToken)
			}
		} catch (err) {
			console.error('Failed to fetch video:', err.message);
		} finally {
			setLoading(false)
			setVLoading(false)
		}
	}

	useEffect(() => {

		if (channel) fetchVideos()

	}, [videoTag, channel])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && nextPageToken && !loading) {
				fetchVideos()
			}
		})

		const sentinel = document.getElementById(`${videoTag === "/videos" ? "chVidScroll" : "chPlyScroll"}`)

		if (sentinel) observer.observe(sentinel)

		return () => observer.disconnect()

	}, [nextPageToken, loading])

	const aboutHandler = (e) => {
		if (e.target.classList.contains("blank") || e.target.classList.contains("close"))
			setIsAboutActive(false)
		else if (e.target.classList.contains("more"))
			setIsAboutActive(true)

	}

	const closeHandler = () => {
		setIsAboutActive(false)
	}

	return initLoading ? "" : (
		<>
			<div className={`blank absolute  pt-9 top-0 left-0 bg-[var(--bg-dim)] z w-full h-full flex items-center justify-center ${isAboutActive ? "" : "hidden"} z-50`} onClick={(e) => aboutHandler(e)}>
				<div className="relative flex flex-col gap-2 sm:min-w-xs max-w-md max-h-4/5 mx-3 px-2 py-6 bg-[var(--cd)] backdrop-blur-xl rounded-2xl overflow-x-hidden">
					<div className="flex justify-between">
						<h2 className="pb-4 px-4">{channel.snippet.title}</h2>
						<div onClick={closeHandler} className="close mr-2 -mt-2"><Close className={"cursor-pointer p-1 w-9 h-9 rounded-full hover:bg-[var(--border)]"} /></div>
					</div>
					<div className="w-full px-4 overflow-x-hidden">
						<div className="pt-2">
							<h3 className="font-[600]">Description</h3>
							<p className="smallT py-3" dangerouslySetInnerHTML={{ __html: formatDescription(channel.snippet.description) }}></p>
						</div>
						<div className="pt-2">
							<h3 className="font-[600]">More Info</h3>
							<ul className="flex flex-col gap-4 pt-3">
								<li className="flex items-center gap-2">
									<World />
									<p className="smallT">{channel.brandingSettings.channel.country}</p>
								</li>
								<li className="flex items-center gap-2">
									<I fill="var(--text)" />
									<p className="smallT">Joined {convertDateToString(channel.snippet.publishedAt)}</p>
								</li>
								<li className="flex items-center gap-2">
									<PlayBtn className={"w-5 h-5 mx-0.5 border rounded-full"} />
									<p className="smallT ">{convertViewsToIn(channel.statistics.videoCount)} videos</p>
								</li>
								<li className="flex items-center gap-2">
									<User />
									<p className="smallT">{convertViews(channel.statistics.subscriberCount)} subscribers</p>
								</li>
								<li className="flex items-center gap-2">
									<ViIcon fill="var(--text)" />
									<p className="smallT">{convertViewsToIn(channel.statistics.viewCount)} views</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className=" max-w-7xl h-full mx-auto ">
				<div className="">
					<div className="">
						<div className="w-full aspect-[6/1] sm:rounded-xl lg:rounded-2xl overflow-hidden">
							<SafeImage
								src={channel?.brandingSettings.image.bannerExternalUrl}
								alt="product"
								className="w-full h-full object-cover"
								place={"banner"}
							/>
						</div>
						<div className="flex justify-between gap-4">
							<div className="flex justify-between gap-4 ml-4">
								<div className="max-sm:max-w-27 sm:max-w-27 md:max-w-27 lg:max-w-33 max-sm:mt-[-2rem] sm:mt-[-2rem] md:mt-[-2.4rem] lg:mt-[-3.8rem]">
									<SafeImage
										src={channel.snippet.thumbnails.medium.url}
										alt="product"
										className="border border-[var(--highlight)] rounded-full"
										place={"user"}
									/>

								</div>
								<div className="pt-3 w-full">
									<h1 className="pb-2">{channel.snippet.title}</h1>
									<div className=" relative w-full h-6 text-sm overflow-hidden pr-13">
										<span className=" text-[var(--text-muted)]">
											<span className="text-[var(--text)]">{channel.snippet.customUrl} • </span>
											<span>{convertViews(channel.statistics.subscriberCount)} subscribers • </span>
											<span>{convertViews(channel.statistics.videoCount)} videos • </span>
											<span>{description(channel.snippet.description)}</span>
										</span>
										<button
											onClick={aboutHandler}
											className="more absolute top-0 right-0  text-[var(--primary)] bg-[var(--bg)]"
										>
											...more
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ul className='nav flex items-center gap-18 gText smallT px-6 pt-9 border-b border-b-[var(--border-muted)] z-10 overflow-x-auto exnav'>
						{navItems?.map((item) => (
							<li key={item?.tag}>
								<p className={`pb-3 cursor-pointer ${active === item?.tag ? "wText" : ""}`} onClick={() => setActive(item?.tag)}>{item?.tag}</p>
								{active === item?.tag ? <div className='h-0.75 w-6 rounded-t-2xl mx-auto prime'></div> : ""}
							</li>
						))}
					</ul>
				</div>
				{vLoading ? <Loader h={1} />
					: active === "Videos" ?
						<div className="w-full gap-x-4 gap-y-8 p-6 pb-3 vc">
							{videos?.map((video) => (
								<div key={video.id}>
									<VideoCard
										id={video.id}
										title={video.snippet?.title}
										thumbnail={video?.snippet?.thumbnails.high.url}
										customUrl={video?.chDetails?.snippet.customUrl}
										channelName={video?.snippet?.channelTitle}
										views={video?.statistics.viewCount}
										publishedAt={video?.snippet?.publishedAt}
										duration={video.contentDetails?.duration}
										e={true}
										ch={true}
									/>
								</div>
							))}
							{videos.length ? <div id='chVidScroll' className='h-px'></div> : ""}
						</div>
						: ""
				}

				{vLoading ? ""
					: active === "Playlists" ?
						<div className="py-6 pvc w-full gap-x-4 gap-y-8">
							{playlists.map((playlist) => (
								<div key={playlist.id}>
									<ListCover
										className={""}
										id={playlist?.id}
										title={playlist.snippet.title}
										thumbnail={playlist?.snippet?.thumbnails.medium.url}
										total={playlist.contentDetails.itemCount}
									/>
								</div>
							))}
							{playlists.length ? <div id='chPlyScroll' className='h-px'></div> : ""}
						</div>
						: ""
				}
			</div>
		</>
	)
}

export default Channel