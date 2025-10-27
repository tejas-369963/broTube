import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import VideoListCard from '../../components/VideoListCard'
import ListCover from '../../components/ListCover'
import Circle from '../../icons/Circle'
import { Down_svg, Like_svg, LikeIcon, SearchIcon } from '../../icons'
import Loader from '../../components/Loader'
import HomeVideoCard from '../../components/HomeVideoCard'

function LikedVideos() {

	const [videos, setVideos] = useState([])
	const [initLoading, setInitLoading] = useState("init")
	const [loading, setLoading] = useState(false)
	const [nextPageToken, setNextPageToken] = useState("")

	const user = useSelector(state => state.auth.userData)

	const fetchVideos = (async () => {
		console.log("yo");

		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/playlist/LL?pageToken=${nextPageToken || ""}`, { withCredentials: true })
			console.log(res.data.data.resData);
			setVideos(prev => [...prev, ...res.data.data.resData])
			setNextPageToken(res.data.data.nextPageToken)
		} catch (err) {
			console.error('Failed to fetch video:', err.message);
		} finally {
			setLoading(false)
			setInitLoading(false)
		}
	})

	useEffect(() => {
		if (user)
			fetchVideos()
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && nextPageToken && !loading) {
				fetchVideos()
			}
		})
		const sentinel = document.getElementById("likedVidsScroll")

		if (sentinel) observer.observe(sentinel)

		return () => observer.disconnect()

	}, [nextPageToken, loading])

	return !loading && user === null

		? <div className="w-full h-full flex flex-col justify-center items-center text-center -mt-12 space-y-2">
			<h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
				Login to see
			</h1>
			<h2 className="text-xl font-medium text-[var(--primary)]">
				Your Liked Videos
			</h2>
		</div>

		: initLoading ? <Loader />
			: (
				<>
					{videos.length ?
						<div className='max-w-7xl mx-auto h-fit flex flex-col gap-x-4 gap-y-8 pb-4'>
							<div className='flex items-center gap-4 pt-4'>
								<h1>Liked Videos</h1>
							</div>
							{videos?.map((video) => (
								<div className='sm:flex gap-4' key={video.id}>
									<HomeVideoCard
										id={video.contentDetails.videoId}
										title={video?.snippet?.title}
										thumbnail={video?.snippet?.thumbnails?.high?.url}
										customUrl={video?.chDetails?.snippet?.customUrl}
										channelProfile={video?.chDetails?.snippet?.thumbnails?.default?.url}
										channelName={video?.snippet?.videoOwnerChannelTitle}
										views={video.vDetails?.statistics?.viewCount}
										likes={video.vDetails?.statistics?.likeCount}
										publishedAt={video?.contentDetails?.videoPublishedAt}
										duration={video.vDetails?.contentDetails?.duration}
										ply={true}
									/>
								</div>
							))}
							{videos.length > 11 ? <div id='likedVidsScroll' className='h-px '></div> : ""}
						</div>
						:
						<div className='w-full h-full flex justify-center items-center'>
							<h2>No Videos</h2>
						</div>
					}
				</>
			)
}

export default LikedVideos
