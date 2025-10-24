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
	const [loading, setLoading] = useState(true)

	const user = useSelector(state => state.auth.userData)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get("http://localhost:5000/api/v1/playlist/LL", { withCredentials: true })
				setVideos(res.data)
				console.log(res.data);
			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}

		fetchVideos()

	}, [])

	return user === null ? <div className='w-full h-full flex flex-col justify-center items-center'><h1>Login to see</h1> <h2>Liked Videos</h2></div> 
	:  loading ? <Loader />
		: (
			<>
				{videos.length ?
					<div className='max-w-7xl mx-auto h-fit flex flex-col gap-x-4 gap-y-8 pb-4'>
						<div className='flex items-center gap-4 pt-4'>
							<Like_svg className='w-11 h-11 rounded-full flex items-center justify-center bg-[var(--primary)]' isActive={true} fill={"black"}/>
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
