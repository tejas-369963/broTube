import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../Store/currentVideoSlice'
import { convertDate, convertViews, convertDateToString } from '../../utils/convertStuff'
import {
	Tick,
	ViIcon,
	DateIcon,
	DisLikeIcon,
	ReplyIcon,
	Like_svg,
	ShareIcon,
	AddIcon,
	Watch_svg,
	DotsIcon,
} from '../../icons'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Des from '../../components/Des'
import { useState } from 'react'
import VideoPlayer from '../../components/VideoPlayer'
import { toggle } from '../../Store/sBarToggleSlice'
import Suggestions from '../../components/Suggestions'
import Comments from '../../components/Comments'
import Loader from '../../components/Loader'
import SafeImage from '../../components/SafeImage'

function Video() {

	const { v } = useParams()

	const vId = v.slice(2)

	const dispatch = useDispatch()

	dispatch(toggle(false));

	const [video, setVideo] = useState({})
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")

	useEffect(() => {
		const fetchVideo = async () => {
			if (loading) return
			setLoading(true)
			if (initLoading === "init") setInitLoading(true)
			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/home/${vId}`)
				setVideo(res.data)
				console.log(res.data);

			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
				setInitLoading(false)
			}
		}
		fetchVideo()
	}, [vId])

	const [isSizeSmall, setIsSizeSmall] = useState(window.matchMedia("(max-width: 1280px)").matches)

	useEffect(() => {
		if (window.matchMedia("(max-width: 1280px)").matches)
			setIsSizeSmall(true)
		else
			setIsSizeSmall(false)
	}, [])

	const resizeHandler = () => {
		if (window.matchMedia("(max-width: 1280px)").matches) {
			setIsSizeSmall(true)
		}
		else {
			setIsSizeSmall(false)
		}
	}

	window.addEventListener("resize", resizeHandler)

	return initLoading ?
		<Loader />
		// http://localhost:5173/watch/v=3u0bGaim7Fs
		: (
			<div className='w-full h-dvh flex gap-8 -mt-18'>
				<div className='vd w-full overflow-x-hidden'>
					<div className='w-full mt-18 aspect-video rounded-xl overflow-hidden'>
						<VideoPlayer videoId={vId} />
					</div>
					<section className='max-sm:pl-0 max-lg:pl-6'>
						<div className='pb-4'>
							<p className='pt-6 sm:text-[1.45rem] text-[1.125rem] font-[500] '>{video.video[0].snippet.title}</p>

							<div className='flex flex-wrap  gap-4'>
								<div className='flex grow justify-between gap-4 pt-4'>
									<div className='h-12 flex gap-3'>
										<Link className='h-12 w-12 rounded-full overflow-hidden' to={`/ch=${video.channel[0]?.id}`}>
											<SafeImage
												src={video?.channel[0]?.snippet?.thumbnails.medium.url}
												alt="product"
												className="w-full"
												place={"user"}
											/>
										</Link>
										<div className=''>
											<div className='flex gap-2 items-center'>
												<Link to={`/ch=${video.channel[0]?.id}`}><p className='sm:text-[1.125rem] sm:font-[500]'>{video.video[0]?.snippet?.channelTitle}</p></Link>
												{/* <Tick fill="var(--text-muted)" /> */}
											</div>
											<p className='gText max-sm:text-sm'>{`${convertViews(video?.channel[0]?.statistics?.subscriberCount)} subscribers`}</p>
										</div>
									</div>
								</div>
								<div className='flex gap-2'>
									<div className='flex items-center gap-1'>
										<ViIcon fill='var(--highlight)' />
										<span className=' text-[var(--text-muted)]'>{`${convertViews(video?.video[0]?.statistics.viewCount)}`}</span>
									</div>
									<div className='flex items-center gap-1'>
										<DateIcon fill='var(--highlight)' />
										<span className=' text-[var(--text-muted)]'>{`${convertDateToString(video?.video[0]?.snippet?.publishedAt)}`}</span>
									</div>
								</div>
							</div>
						</div>
						{video?.video[0]?.snippet?.description
							? <div className='p-4 borderG rounded-2xl'>
								<Des text={video?.video[0]?.snippet?.description} />
							</div>
							: <div className='w-full h-px bg-[var(--border-muted)]'></div>
						}
					</section>
					<section className={`sug pt-8 max-sm:pl-0 max-lg:pl-6 ${isSizeSmall ? "" : "hidden"}`}>
						<div className='pb-4'><h2>Trending Videos</h2></div>
						<Suggestions tags={video.video[0]?.snippet.tags?.[0]} />
					</section>
					<section className='max-sm:pl-0 max-lg:pl-6'>
						<Comments vId={vId} />
					</section>
				</div>
				<section className={`sidSug w-xl mt-18 overflow-y-auto ${isSizeSmall ? "hidden" : ""}`}>
					<div className='sticky -top-0.5 bg-[var(--bg-dark)] py-4 z-10'><h2>Trending Videos</h2></div>
					<Suggestions tags={video.video[0]?.snippet.tags?.[0]} v={true} />
				</section>
			</div>
		)
}

export default Video
