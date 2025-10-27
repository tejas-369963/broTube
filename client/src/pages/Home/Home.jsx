import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Store/authSlice'
import axios from 'axios'
import { updateVToken } from '../../Store/nextPageTokenSlice.js'
import Loader from '../../components/Loader'
import HomeVideoCard from '../../components/HomeVideoCard.jsx'

function Home() {

	const dispatch = useDispatch()	

	useEffect(() => {
		const loginChecker = async () => {

			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/loggedIn`, { withCredentials: true })
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
	const nextPageToken = useSelector(state => state.token.vToken)
	
	const fetchVideos = (async () => {
		if(loading) return
		setLoading(true)
		if(initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/home?pageToken=${nextPageToken || ""}`, {withCredentials: true})
			setVideos(prev => [...prev, ...res.data.resData])
			dispatch(updateVToken(res.data.nextPageToken || null ))	
			console.log(res.data.resData);
			
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
				fetchVideos()
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
						<HomeVideoCard
							id={video.id}
							title={video?.snippet?.title}
							thumbnail={video?.snippet?.thumbnails.high.url}
							channelId={video?.chDetails.id}
							channelProfile={video?.chDetails?.snippet.thumbnails.default.url}
							channelName={video?.snippet?.channelTitle}
							views={video?.statistics.viewCount}
							publishedAt={video?.snippet?.publishedAt}
							duration={video.contentDetails?.duration}
						/>
					</div>
				))}
				{videos.length > 11 ? <div id='scroll-sentinel' className='h-px'></div> :  ""}
			</div>
		)
}

export default Home
