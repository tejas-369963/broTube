import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "./Loader"
import HomeVideoCard from "./HomeVideoCard"

function Playlist() {

	const { p } = useParams()

	const pId = p.slice(2)

	const [videos, setVideos] = useState([])
	const [initLoading, setInitLoading] = useState("init")
	const [loading, setLoading] = useState(false)
	const [nextPageToken, setNextPageToken] = useState("")

	const fetchVideos = (async () => {
		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/playlist/p?pageToken=${nextPageToken || ""}`, { pId }, { withCredentials: true })
			setVideos(prev => [...prev, ...res.data.data.resData])
			setNextPageToken(res.data.data.nextPageToken)
			console.log(res.data.data);

		} catch (err) {
			console.error('Failed to fetch video:', err.message);
		} finally {
			setLoading(false)
			setInitLoading(false)
		}
	})

	useEffect(() => {
		fetchVideos()
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && nextPageToken && !loading) {
				fetchVideos()
			}
		})
		const sentinel = document.getElementById("playlistScroll")

		if (sentinel) observer.observe(sentinel)

		return () => observer.disconnect()
	}, [nextPageToken, loading])

	return initLoading ? <Loader />
		: (
			<>
				{/* <h1></h1> */}
				{videos.length ?
					<div className='max-w-7xl mx-auto h-fit flex flex-col gap-x-4 gap-y-8 pb-4'>
						{videos?.map((video) => (
							<div className='sm:flex gap-4' key={video.id}>
								<HomeVideoCard
									id={video.contentDetails.videoId}
									title={video?.snippet?.title}
									thumbnail={video?.snippet?.thumbnails?.high?.url}
									channelId={video?.chDetails.id}
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
						{videos.length > 11 ? <div id='playlistScroll' className='h-px'></div> : ""}
					</div>
					:
					<div className='w-full h-full flex justify-center items-center'>
						<h2>No Videos</h2>
					</div>
				}
			</>
		)
}

export default Playlist
