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

function Video() {

	const { v } = useParams()

	const vId = v.slice(2)

	const dispatch = useDispatch()

	const [video, setVideo] = useState({})
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")

	useEffect(() => {
		const fetchVideo = async () => {
			if (loading) return
			setLoading(true)
			if (initLoading === "init") setInitLoading(true)
			try {
				const res = await axios.get(`https://brotube-server.onrender.com/api/v1/home/${vId}`)
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

	// dispatch(toggle(false));

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
		<div className='w-full h-full text-center flex justify-center items-center'><h1>Loading</h1></div>
		: (
			<div className='w-full h-full netHight flex gap-8'>
				<div className='vd w-full overflow-y-auto '>
					<section className=''>
						<div className='aspect-video rounded-xl overflow-hidden'>
							<VideoPlayer videoId={vId} />
						</div>
						<div className='pb-4'>
							<h2 className='pt-6 '>{video.video[0].snippet.title}</h2>

							<div className='flex flex-wrap gap-4'>
								<div className='flex grow justify-between gap-4 pt-4'>
									<div className='h-12 flex gap-3'>
										<Link className='flex' to={`/${video.channel[0]?.snippet.customUrl}`}><img className='rounded-full' src={video?.channel[0]?.snippet?.thumbnails.medium.url} alt="" /></Link>
										<div className=''>
											<div className='flex gap-2 items-center'>
												<Link to={`/${video.channel[0]?.snippet.customUrl}`}><h3 className=''>{video.video[0]?.snippet?.channelTitle}</h3></Link>
												<Tick fill="var(--text-muted)" />
											</div>
											<p className='gText smallT'>{`${convertViews(video?.channel[0]?.statistics?.subscriberCount)} subscribers`}</p>
										</div>
										<button className='h-10 my-auto px-6 py-2 ml-2 rounded-full prime text-black w500'>Subscribe</button>
									</div>
								</div>
								<div className='flex items-center gap-4 pt-4 exs overflow-x-auto'>
									<div className='flex gap-2'>
										<div className='flex items-center'>
											<button
												className='h-10 flex items-center gap-2 px-6 py-2 rounded-l-full bgGray'
											>
												<Like_svg stroke='var(--svgHi)' />
												<p>{`${convertViews(video?.video[0]?.statistics?.likeCount)}`}</p>
											</button>
											<div className='bgGray h-full py-1 '><div className='vert h-full'></div></div>
											<button
												className='h-10 flex items-center gap-2 px-6 py-2 rounded-r-full bgGray'
											>
												<DisLikeIcon stroke='var(--svgHi)' />
											</button>
										</div>
										<button>
											<ShareIcon className='bgGray p-2 min-h-10 min-w-10 rounded-full' stroke='var(--svgHi)' />
										</button>
										<button>
											<AddIcon className='bgGray p-2 min-h-10 min-w-10 rounded-full' fill='var(--svgHi)' />
										</button>
										<button>
											<Watch_svg className='bgGray p-2 min-h-10 min-w-10 rounded-full' fill='var(--svgHi)' stroke={'var(--svgHi)'} />
										</button>
										<button>
											<DotsIcon className='bgGray p-2 min-h-10 min-w-10 rounded-full' fill='var(--svgHi)' />
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='p-4 borderG rounded-2xl'>
							<Des text={video?.video[0]?.snippet?.description} views={video?.video[0]?.statistics.viewCount} date={video?.video[0]?.snippet?.publishedAt}/>
						</div>
					</section>
					<section className={`sug pt-8 ${isSizeSmall ? "" : "hidden"}`}>
						<div className='pb-4'><h2>Related Videos</h2></div>
						<Suggestions tags={video.video[0]?.snippet.tags?.[0]} />
					</section>
					<section className=''>
						<Comments vId={vId} />
					</section>
				</div>
				<section className={`sidSug w-xl netHight overflow-y-auto sticky top-0 ${isSizeSmall ? "hidden" : ""}`}>
					<div className='sticky top-0 bg-dark pb-4 z-10'><h2>Related Videos</h2></div>
					<Suggestions tags={video.video[0]?.snippet.tags?.[0]} v={true} />
				</section>
			</div>
		)
}

export default Video
