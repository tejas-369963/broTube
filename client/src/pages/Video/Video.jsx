import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../Store/currentVideoSlice'
import { convertDate, convertViews, convertDateToString } from '../../utils/convertStuff'
import {
	Tick,
	ViIcon,
	DateIcon,
	LikeIcon,
	PipeIcon,
	DisLikeIcon,
	ShareIcon,
	AddIcon,
	WtlIcon,
	DotsIcon,
	StickIcon,
	SearchIcon,
	ReplyIcon,
	Like_svg,
	Watch_svg
} from '../../icons'
import { useEffect } from 'react'
import axios from 'axios'
import VideoCard from '../../components/HomeVideoCard/HomeVideoCard'
import { Link } from 'react-router-dom'
import Des from '../../components/Des'
import { useState } from 'react'
import VideoPlayer from '../../components/VideoPlayer'

function Video() {

	const { v } = useParams()

	const vId = v.slice(2)

	const [video, setVideo] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchVideo = async () => {
			try {
				const res = await axios.get(`https://brotube-server.onrender.com/api/v1/home/${vId}`)
				setVideo(res.data)
			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}
		fetchVideo()
	}, [vId])

	// const isSizeSmall = document.querySelector("main")

	const [isSizeSmall, setIsSizeSmall] = useState(window.matchMedia("(max-width: 1280px)").matches)

	useEffect(() => {
		if(window.matchMedia("(max-width: 1280px)").matches)
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

	return loading ?
		<div className='w-full h-full text-center flex justify-center items-center'><h1>Loading</h1></div>
		: (
			<div className='w-full h-full netHight flex gap-6'>
				<div className='vd w-full overflow-y-auto '>
					<section className=' '>
						<div className='aspect-video rounded-xl overflow-hidden'>
							<VideoPlayer videoId={vId} />
						</div>
						<div className='pb-6'>
							<h1 className='py-4'>{video?.video[0]?.snippet?.title}</h1>
							<div className='flex justify-between'>
								<div className='h-12 gap-4 flex  '>
									<img className='rounded-full' src={video?.channel[0]?.snippet?.thumbnails.medium.url} alt="" />
									<div className=''>
										<div className='flex gap-2 items-center'>
											<h2 className=''>{video.video[0]?.snippet?.channelTitle}</h2>
											<Tick fill="var(--text-muted)" />
										</div>
										<p className='gText smallT'>{`${convertViews(video?.channel[0]?.statistics?.subscriberCount)} subscribers`}</p>
									</div>
									<button className='h-10 my-auto px-6 py-2 rounded-full prime text-black w500'>Subscribe</button>
								</div>
								<div className='flex items-center gap-4'>
									<div className='flex items-center gap-1'>
										<ViIcon fill='var(--svgHi)' />
										<p>{`${convertViews(video?.video[0]?.statistics.viewCount)}`}</p>
									</div>
									<div className='flex items-center gap-1'>
										<DateIcon fill='var(--svgHi)' />
										<p>{`${convertDateToString(video?.video[0]?.snippet?.publishedAt)}`}</p>
									</div>
									<div className='flex gap-2'>
										<div className='flex items-center'>
											<button
												className='h-10 flex items-center gap-2 px-6 py-2 rounded-l-full bgGray'
											>
												<Like_svg stroke='var(--svgHi)' />
												<p>{`${convertViews(video?.video[0]?.statistics.likeCount)}`}</p>
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
							<Des text={video?.video[0]?.snippet?.description} />
						</div>
					</section>
					<section className={`sug min-w-md pt-8 ${isSizeSmall ? "" : "hidden"}`}>
						{/* <div className='w-full flex smallT w500'>
							<button className='flex h-9 gap-2 px-4 py-2 bgWhite text-black rounded-l-full'>
								<img className='h-4.5' src={stick} alt="" />
								Suggestions
							</button>
							<button className='px-6 py-2 gText borderG'>
								Transcripts
							</button>
							<button className='px-10 py-2 gText borderG rounded-r-full'>
								Live Chat
							</button>
						</div> */}
						<div className='pb-4'><h2>Related Videos</h2></div>
						<div className='tvc pb-4 '>
							{/* <h2 className='smallT w500'>From {video.video[0]?.snippet?.channelTitle}</h2> */}

							{video?.suggestions?.map((vid) => (
								<div key={vid.id.videoId} >
									<VideoCard
										id={vid.id.videoId}
										title={vid?.snippet?.title}
										thumbnail={vid?.snippet?.thumbnails.high.url}
										channelName={vid?.snippet?.channelTitle}
										// views={vid?.statistics.viewCount}
										publishedAt={vid?.snippet?.publishedAt}
									/>
								</div>
							))}
						</div>
						<button className='w-full py-1 border border-[var(--border-muted)] rounded-full text-[var(--primary)]'>Show more</button>
					</section>
					<section className=''>
						<div className='py-8'>
							<h2>Comments </h2>
							<div className='flex justify-between pt-6'>
								<div className='flex gap-2'>
									<button className='flex items-center gap-2 px-4 py-1 rounded-lg bgWhite text-black'><StickIcon fill='var(--bg)' /><p className='smallT w500'>Top</p></button>
									<button className='px-4 py-1 rounded-lg borderG'><p className='smallT w500'>Most Liked</p></button>
									<button className='px-4 py-1 rounded-lg borderG'><p className='smallT w500'>Newest</p></button>
									<button className='px-4 py-1 rounded-lg borderG'><p className='smallT w500'>Timed</p></button>
									<button className='px-4 py-1 rounded-lg borderG'><p className='smallT w500'>Topics</p></button>
								</div>
								<search className='w-1/3 flex gap-2 px-4 py-1.5 borderG rounded-full'><SearchIcon fill={"var(--highlight)"} /><span className='gText'>Search comments</span></search>
							</div>
						</div>
						<div>
							<div className='py-2'>
								{video?.comments.map((comment) => (
									<div className='py-5' key={comment.id}>
										<div className='flex '>
											{comment?.snippet.topLevelComment?.snippet.authorProfileImageUrl ? <div className='min-h-12 max-h-12 min-w-12 max-w-12 rounded-full overflow-hidden'><img src={comment?.snippet.topLevelComment?.snippet.authorProfileImageUrl} alt="" /></div> : <div className='min-h-12 max-h-12 min-w-12 max-w-12 bgGray rounded-full'></div>}
											<div className='pl-2'>
												<div className='flex gap-2'>
													<div className='smallT  pb-2.5'>
														{comment?.snippet.topLevelComment?.snippet.authorDisplayName}
													</div>
													<span className='ssmallT gText'>{convertDate(comment?.snippet.topLevelComment?.snippet.publishedAt)}</span>
												</div>
												<div className='pb-2.5'>
													{comment?.snippet.topLevelComment?.snippet.textDisplay}
												</div>
											</div>
										</div>
										<div className='flex gap-6 pl-14 py-1  smallT'>
											<div className='flex items-center'>
												<button
													className='h-8 flex items-center gap-2 px-4 rounded-l-full bgGray'
												>
													<Like_svg stroke='var(--svgHi)' />
													<p>{`${convertViews(video?.video[0]?.statistics.likeCount)}`}</p>
												</button>
												<div className='bgGray h-full py-1 '><div className='vert h-full'></div></div>
												<button
													className='h-8 flex items-center gap-2 px-4 rounded-r-full bgGray'
												>
													<DisLikeIcon stroke='var(--svgHi)' />
												</button>
											</div>
											<div className='flex items-center '>
												{comment?.snippet?.totalReplyCount ?
													<>
														<button className={`flex items-center gap-2 px-4 py-1 bgGray ${comment?.snippet?.canReply ? "rounded-l-full" : "rounded-full"}`}>
															<ReplyIcon fill='var(--svgHi)' />
															{`${convertViews(comment?.snippet?.totalReplyCount) || ""}`}
														</button>
													</> : ""
												}
												{comment?.snippet?.totalReplyCount && comment?.snippet?.canReply ? <div className='bgGray h-full py-1 '><div className='vert h-full'></div></div> : ""}
												{comment?.snippet?.canReply ?
													<>
														<button className={`h-8 flex items-center gap-2 px-4 py-1.5 ${comment?.snippet?.canReply ? "rounded-full" : "rounded-r-full"} bgGray `}>
															Reply
														</button>
													</> : ""
												}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
				<section className={`sidSug min-w-md netHight overflow-y-auto sticky top-0 ${isSizeSmall ? "hidden" : ""}`}>
					{/* <div className='w-full flex smallT w500'>
							<button className='flex h-9 gap-2 px-4 py-2 bgWhite text-black rounded-l-full'>
								<img className='h-4.5' src={stick} alt="" />
								Suggestions
							</button>
							<button className='px-6 py-2 gText borderG'>
								Transcripts
							</button>
							<button className='px-10 py-2 gText borderG rounded-r-full'>
								Live Chat
							</button>
						</div> */}
					<div className='sticky top-0 bg-dark pb-4 z-10'><h2>Related Videos</h2></div>
					<div className=''>
						{/* <h2 className='smallT w500'>From {video.video[0]?.snippet?.channelTitle}</h2> */}

						{video?.suggestions?.map((vid) => (
							<div className='flex pb-4 ' key={vid.id.videoId} >
								<VideoCard
									id={vid.id.videoId}
									title={vid?.snippet?.title}
									thumbnail={vid?.snippet?.thumbnails.high.url}
									channelName={vid?.snippet?.channelTitle}
									// views={vid?.statistics.viewCount}
									publishedAt={vid?.snippet?.publishedAt}
									d={false}
									l={true}
								/>
							</div>
						))}
					</div>
				</section>
			</div>
		)
}

export default Video
