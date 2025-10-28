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
		: (
			<div className='w-full h-full  flex gap-8'>
				<div className='vd w-full overflow-x-hidden '>
					<section className='pt-18'>
						<div className='aspect-video rounded-xl overflow-hidden'>
							<VideoPlayer videoId={vId} />
						</div>
						<div className='pb-4'>
							<p className='pt-6 sm:text-[1.45rem] text-[1.125rem] font-[500] '>{video.video[0].snippet.title}</p>

							<div className='flex flex-wrap gap-4'>
								<div className='flex grow justify-between gap-4 pt-4'>
									<div className='h-12 flex gap-3'>
										<Link className='flex' to={`/ch=${video.channel[0]?.id}`}><img className='rounded-full' src={video?.channel[0]?.snippet?.thumbnails.medium.url} alt="" /></Link>
										<div className=''>
											<div className='flex gap-2 items-center'>
												<Link to={`/ch=${video.channel[0]?.id}`}><p className='sm:text-[1.125rem] sm:font-[500]'>{video.video[0]?.snippet?.channelTitle}</p></Link>
												{/* <Tick fill="var(--text-muted)" /> */}
											</div>
											<p className='gText max-sm:text-sm'>{`${convertViews(video?.channel[0]?.statistics?.subscriberCount)} subscribers`}</p>
										</div>
									</div>
								</div>
								<div className='flex gap-2 pb-3'>
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
							: ""
						}
					</section>
					<section className={`sug pt-8 ${isSizeSmall ? "" : "hidden"}`}>
						<div className='pb-4'><h2>Trending Videos</h2></div>
						<Suggestions tags={video.video[0]?.snippet.tags?.[0]} />
					</section>
					<section className=''>
						<Comments vId={vId} />
					</section>
				</div>
				<section className={`sidSug w-xl netHight overflow-y-auto sticky top-0 ${isSizeSmall ? "hidden" : ""}`}>
					<div className='sticky top-0 bg-dark pb-4 z-10'><h2>Trending Videos</h2></div>
					<Suggestions tags={video.video[0]?.snippet.tags?.[0]} v={true} />
				</section>
			</div>
		)
}

export default Video
