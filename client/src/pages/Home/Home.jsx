import { useState, useEffect } from 'react'
import VideoCard from '../../components/HomeVideoCard/HomeVideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Store/authSlice'
import axios from 'axios'
import { data } from 'react-router-dom'
import { updateToken } from '../../Store/nextPageTokenSlice'
import Loader from '../../components/Loader'

function Home() {

	const dispatch = useDispatch()	

	useEffect(() => {
		const loginChecker = async () => {

			try {
				const res = await axios.get("http://brotube-server.onrender.com/api/v1/user/loggedIn", { withCredentials: true })
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
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")
	const nextPageToken = useSelector(state => state.token.token)
	
	const fetchVideos = (async () => {
		if(loading) return
		setLoading(true)
		if(initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.get(`http://brotube-server.onrender.com/api/v1/home?pageToken=${nextPageToken || ""}`, {withCredentials: true})
			setVideos(prev => [...prev, ...res.data.resData])
			dispatch(updateToken(res.data.nextPageToken || ""))	
			console.log(videos);
			
		} catch (err) {
			console.error('Failed to fetch video:', err.message);
		} finally {
			setLoading(false)
			setInitLoading(false)
		}
	});

	useEffect(() => {
		fetchVideos()
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if(entry.isIntersecting && nextPageToken && !loading){
				fetchVideos(nextPageToken)
			}
		})
		const sentinel = document.getElementById("scroll-sentinel")

		if(sentinel) observer.observe(sentinel)

		return () => observer.disconnect()
	}, [nextPageToken, loading])

	return initLoading ? <Loader />
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
				{videos.length ? <div id='scroll-sentinel' className='h-px'></div> :  ""}
			</div>
		)
}

export default Home
