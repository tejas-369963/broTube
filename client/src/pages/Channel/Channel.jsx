import { useEffect, useState } from "react"
import Loader from "../../components/Loader"
import axios from "axios"
import { convertDateToString, convertViews } from "../../utils/convertStuff"
import { SearchIcon, StickIcon, Tick, ViIcon } from "../../icons"
import VideoCard from "../../components/HomeVideoCard/HomeVideoCard"
import { nanoid } from "@reduxjs/toolkit"
import { Link } from "react-router-dom"
import ListCover from "../../components/ListCover"
import Close from "../../icons/Close"
import World from "../../icons/World"
import User from "../../icons/User"
import I from "../../icons/I"
import PlayBtn from "../../icons/PlayBtn"

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
	const [active, setActive] = useState("Home")
	const [videos, setVideos] = useState([])
	const [data, setData] = useState({})
	const [playlists, setPlaylists] = useState([])
	const [loading, setLoading] = useState(true)
	const [initLoading, setInitLoading] = useState("init")
	const [isAboutActive, setIsAboutActive] = useState(false)

	useEffect(() => {
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		const loginChecker = async () => {

			try {
				const res = await axios.get(`http://brotube-server.onrender.com/api/v1/channel/${"UCPjaNv8GlIamrxCbqincG_g"}`, { withCredentials: true })

				setChannel(res.data.data.channelInfo)

				// const user = res.data.data?.userInfo

				// dispatch(login(user))

			} catch (err) {
				console.error('Failed to fetch user login status:', err.message);
			} finally {
				setLoading(false)
				setInitLoading(false)
			}
		}

		loginChecker()

	}, [])

	const navItems = [
		{
			tag: "Home",
			url: "/"
		},
		{
			tag: "Videos",
			url: "/videos"
		},
		{
			tag: "Playlists",
			url: "/playlists"
		},
		// {
		// 	tag: "About",
		// 	url: "/vlog"
		// },
	]

	useEffect(() => {
		switch (active) {
			case "Home":
				setVideoTag("")
				break;
			case "Videos":
				setVideoTag("/videos")
				setData({ uploadsId: channel.contentDetails.relatedPlaylists.uploads })
				break;
			case "Playlists":
				setVideoTag("/playlists")
				setData({ channelId: channel.id })
				break;
			// case "About":
			// 	setVideoTag("/about")
			// 	break;

			default:
				break;
		}
	}, [active])

	useEffect(() => {
		setLoading(true)

		const fetchVideos = async () => {
			try {
				const res = await axios.post(`http://brotube-server.onrender.com/api/v1/channel${videoTag}`, { data }, { withCredentials: true })
				if (active === "Videos")
					setVideos(res.data.data.resData)
				else if (active === "Playlists")
					setPlaylists(res.data.data.resData)

				console.log(res.data);

			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}

		if (channel) fetchVideos()

	}, [videoTag, channel])

	const aboutHandler = () => {
		setIsAboutActive(!isAboutActive)
	}

	const closeHandler = () => {
		setIsAboutActive(false)
	}

	return initLoading ? <Loader /> : (
		<>
			<div className={`absolute top-0 left-0 bg-[var(--bg-dim)] z-30 w-full h-full flex items-center justify-center ${isAboutActive ? "" : "hidden"}`}>
				<div className="flex flex-col gap-2 max-w-md px-6 pt-6 pb-9 mt-[-3rem] bg-[var(--cd)] backdrop-blur-xl rounded-2xl">
					<div className="flex justify-between">
						<h2 className="pb-6">{channel.snippet.title}</h2>
						<div onClick={closeHandler} className="cursor-pointer m-[-.3rem]"><Close /></div>
					</div>
					<div>
						<h2>Description</h2>
						<p className="smallT py-2">{channel.snippet.description}</p>
					</div>
					<div className="">
						<h2>More Info</h2>
						<ul className="flex flex-col gap-4 pt-2">
							<li className="flex items-center gap-2">
								<World />
								<p className="smallT">{channel.brandingSettings.channel.country}</p>
							</li>
							<li className="flex items-center gap-2">
								<I fill="var(--text)" />
								<p className="smallT">Joined {convertDateToString(channel.snippet.publishedAt)}</p>
							</li>
							<li className="flex items-center gap-2">
								<PlayBtn className={"w-5 h-5 mx-0.5 border rounded-[.2rem]"} />
								<p className="smallT">{convertViewsToIn(channel.statistics.videoCount)} videos</p>
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
			<div className=" relative max-w-7xl h-full mx-auto ">
				<div>
					<div className="relative">
						<div className="w-full aspect-[6/1] rounded-2xl overflow-hidden">
							<img className="w-full h-full object-cover" src={channel?.brandingSettings.image.bannerExternalUrl || ""} alt="" />
						</div>
						<div className="flex justify-between gap-4">
							<div className="flex justify-between gap-4 ml-4">
								<div className="max-sm:max-w-27 sm:max-w-27 md:max-w-27 lg:max-w-33 max-sm:mt-[-2rem] sm:mt-[-2rem] md:mt-[-2.4rem] lg:mt-[-3.8rem]">
									<img className=" rounded-full" src={channel.snippet.thumbnails.medium.url} alt="" />
								</div>
								<div className="pt-3 w-full">
									<div className="flex gap-2 items-center pb-2">
										<h1>{channel.snippet.title}</h1>
										<Tick fill="var(--text-muted)" />
									</div>
									<div className=" relative w-full h-6 overflow-hidden pr-13">
										<span className=" text-[var(--text-muted)]">
											<span>{channel.snippet.customUrl} • </span>
											<span>{convertViews(channel.statistics.subscriberCount)} subscribers • </span>
											<span>{convertViews(channel.statistics.videoCount)} videos • </span>
											<span>{description(channel.snippet.description)}</span>
										</span>
										<button
											onClick={aboutHandler}
											className=" absolute top-0 right-0  text-[var(--primary)] bg-[var(--bg)]"
										>
											...more
										</button>
									</div>
								</div>
							</div>
							<button className="h-fit px-4 py-2 mt-4 rounded-full bg-[var(--primary)] text-[var(--bg)] font-[500]">Subscribe</button>
						</div>
					</div>
					<ul className='nav flex gap-18 gText smallT px-6 pt-9 bg-dark z-10 overflow-x-auto exnav' style={{ position: "sticky", top: "-1rem" }}>
						{navItems?.map((item) => (
							<li key={item?.tag}>
								<p className={`pb-3 cursor-pointer ${active === item?.tag ? "wText" : ""}`} onClick={() => setActive(item?.tag)}>{item?.tag}</p>
								{active === item?.tag ? <div className='h-0.75 w-6 rounded-t-2xl mx-auto prime'></div> : ""}
							</li>
						))}
						<li className="cursor-pointer"><SearchIcon fill="var(--text-muted)"/></li>
					</ul>
					<div className="w-full bg-[var(--border-muted)]" />
				</div>
				{loading ? <Loader />
					: <div className="w-full gap-x-4 gap-y-8 p-6 pb-3 vc border-t border-t-[var(--border-muted)]">
						{active === "Videos" ?
							videos?.map((video) => (
								<div key={nanoid()}>
									<VideoCard
										id={video.id}
										title={video.snippet?.title}
										thumbnail={video?.snippet?.thumbnails.high.url}
										customUrl={video?.chDetails?.snippet.customUrl}
										channelName={video?.snippet?.channelTitle}
										// views={video?.statistics.viewCount}
										publishedAt={video?.snippet?.publishedAt}
										duration={video.contentDetails?.duration}
										e={true}
										ch={true}
									/>
								</div>
							))
							: ""
						}

					</div>
				}

				{active === "Playlists" ?
					playlists.map((playlist) => (
						<Link to={`/playlists/p=${playlist.id}`} key={playlist.id}>
							<ListCover
								className={"p-6 "}
								id={playlist?.id}
								title={playlist.snippet.title}
								thumbnail={playlist?.snippet?.thumbnails.medium.url}
								customUrl={playlist?.chDetails?.snippet.customUrl}
								// views={playlist?.statistics?.viewCount}
								publishedAt={playlist?.snippet?.publishedAt}
								total={playlist.contentDetails.itemCount}
								duration={99}
							/>
						</Link>
					))
					: ""
				}
			</div>
		</>
	)
}

export default Channel
