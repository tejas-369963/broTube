import { useState, useEffect } from 'react'
import VideoCard from '../../components/HomeVideoCard/HomeVideoCard'
import { useDispatch } from 'react-redux'
import { login } from '../../Store/authSlice'
import axios from 'axios'

function Home() {

	const dispatch = useDispatch()	

	useEffect(() => {
		const loginChecker = async () => {

			try {
				const res = await axios.get("https://brotube-server.onrender.com/api/v1/user/loggedIn", { withCredentials: true })
				console.log(res.data);

				const user = res.data.data?.userInfo

				dispatch(login(user))

			} catch (err) {
				console.error('Failed to fetch user login status:', err.message);
			} finally {
				setLoading(false)
			}
		}

		loginChecker()

	}, [])

	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get("https://brotube-server.onrender.com/api/v1/home")
				setVideos(res.data || [])
				console.log(res.data);
				
			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}

		fetchVideos()

	}, [])

	return loading ? <div className='w-full h-full text-center flex justify-center items-center'><h1>Loading</h1></div>
		: (
			<div className='vc w-full gap-x-4 gap-y-8'>
				{videos?.map((video) => (
					<div key={video.id}>
						<VideoCard
							id={video.id}
							title={video?.snippet?.title}
							thumbnail={video?.snippet?.thumbnails.high.url}
							customUrl={video?.chDetails?.snippet.customUrl}
							channelProfile={video?.chDetails?.snippet.thumbnails.default.url}
							channelName={video?.snippet?.channelTitle}
							views={video?.statistics.viewCount}
							publishedAt={video?.snippet?.publishedAt}
							duration={video.contentDetails?.duration}
						/>
					</div>
				))}
			</div>
		)
}

export default Home
