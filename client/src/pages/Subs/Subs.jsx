import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Loader from '../../components/Loader'
import { convertViews } from '../../utils/convertStuff.js'
import Up from '../../icons/Up.jsx'
import Down_svg from '../../icons/Down_svg.jsx'
import HomeVideoCard from '../../components/HomeVideoCard.jsx'

function Subs() {

	const [subs, setSubs] = useState([])
	const [subCount, setSubCount] = useState(null)
	const [videos, setVideos] = useState(null)
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")
	const user = useSelector(state => state.auth.userData)
	const [nextPageToken, setNextPageToken] = useState("")

	const fetchSubs = (async () => {
		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.get(`https://brotube-server.onrender.com/api/v1/user/subs?pageToken=${nextPageToken || ""}`, { withCredentials: true })
			setSubs(prev => [...prev, ...res.data.subs])
			// setSubs(res.data.subs)
			setSubCount(res.data.totalSubs)
			setNextPageToken(res.data.nextPageToken)
			// dispatch(updateVToken(res.data.nextPageToken || null))
			console.log(res.data);

		} catch (err) {
			console.error('Failed to fetch video:', err.message);
		} finally {
			setLoading(false)
			setInitLoading(false)
		}
	});

	useEffect(() => {
		fetchSubs()
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && nextPageToken && !loading) {
				fetchSubs()
			}
		})
		const sentinel = document.getElementById("subsScroll")

		if (sentinel) observer.observe(sentinel)

		return () => observer.disconnect()
	}, [nextPageToken, loading])

	const fetchVideos = async (id) => {
		setLoading(true)
		try {
			const res = await axios.post(`https://brotube-server.onrender.com/api/v1/channel/videos`, { id, totalVideos: 5 }, { withCredentials: true })
			setVideos(res.data.data.resData)

			console.log(res.data);

		} catch (err) {
			console.error('Failed to fetch video:', err.message);
		} finally {
			setLoading(false)
		}
	}

	const videosHandler = (e) => {


	}

	const dropDownHandler = (e, id) => {
		if (e.parentNode.previousSibling) {
			setVideos(null)
			const subChVideos = document.querySelectorAll(".subChVideos")
			const down = document.querySelectorAll(".down")
			const up = document.querySelectorAll(".up")
			for (let i = 0; i < subChVideos.length; i++) {
				const element = subChVideos[i];
				down[i].classList.add("hidden")
				up[i].classList.remove("hidden")
				element.classList.add("hidden")
			}
			e.parentNode.classList.add("hidden")
			e.parentNode.previousSibling.classList.remove("hidden")
			e.parentNode.parentNode.parentNode.parentNode.nextSibling.classList.remove("hidden")
			fetchVideos(id)
		}
		else if (e.parentNode.nextSibling) {
			e.parentNode.nextSibling.classList.remove("hidden")
			e.parentNode.classList.add("hidden")
			e.parentNode.parentNode.parentNode.parentNode.nextSibling.classList.add("hidden")
		}
	}

	return user === null ? <div className='w-full h-full text-center flex flex-col justify-center items-center'><h1>Login to see </h1><h2>Subscriptions</h2></div>
		: initLoading ? <Loader />
			: (
				<div className='max-w-7xl mx-auto'>
					<h1 className='py-4'>All Subscriptions</h1>
					<div className='py-4'>
						{subs.map(channel => (
							<div className='' key={channel.id}>
								<div className='flex justify-between py-4'>
									<div className='flex gap-4'>
										<img className='h-12.5 rounded-full' src={channel.snippet.thumbnails.medium.url} alt="" />
										<div>
											<h3>{channel.snippet.title}</h3>
											<p className='text-[var(--text-muted)]'>{convertViews(channel.chDetails.statistics.subscriberCount)} subscribers</p>
										</div>
									</div>
									<div className='flex items-center gap-6'>
										<button className='gap-2 px-4 py-2 rounded-full bg-[var(--bg-light)]'>Subscribed </button>
										<div className='bg-[var(--bg)) rounded-full overflow-hidden'>
											<Down_svg fill="var(--text)" id={`${channel.id}`} className='down   y-1 x-1 hover:bg-[var(--bg-light)] text-center  cursor-pointer hidden ' onClick={(e) => dropDownHandler(e.target, channel.chDetails.contentDetails.relatedPlaylists.uploads)} b={true} />
											<Up fill="var(--text)" id={`${channel.chDetails.id}`} className=' up   y-2 x-2 hover:bg-[var(--bg-light)] text-center  cursor-pointer ' onClick={(e) => dropDownHandler(e.target, channel.chDetails.contentDetails.relatedPlaylists.uploads)} b={true} />
										</div>
									</div>
								</div>
								<div className='subChVideos hidden'>
									{loading ? <Loader h={1} />
										: <div className="flex w-full gap-x-4 gap-y-8 p-6 overflow-x-scroll hideScroll">
											{videos ? videos.map((video) => (
												<div key={video.id} className='min-w-xs'>
													<HomeVideoCard
														id={video.id}
														title={video.snippet?.title}
														thumbnail={video?.snippet?.thumbnails.high.url}
														customUrl={video?.chDetails?.snippet.customUrl}
														channelName={video?.snippet?.channelTitle}
														views={video?.statistics.viewCount}
														publishedAt={video?.snippet?.publishedAt}
														duration={video.contentDetails?.duration}
													/>
												</div>
											)) : ""}

										</div>
									}
								</div>
								<div className='h-px bg-[var(--border-muted)]' />
							</div>
						))}
						{subs.length ? <div id='subsScroll' className='h-px '></div> : ""}
					</div>
				</div>
			)
}

export default Subs
