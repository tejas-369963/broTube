import { useEffect, useState } from "react"
import VideoCard from "../components/HomeVideoCard"
import axios from "axios"
import { nanoid } from "@reduxjs/toolkit"

function Trending() {

	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/explore`)
				setVideos(res.data.data)
				console.log(res.data);

			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}

		fetchVideos()

	}, [])

	return loading ? "" : (
		<div className={`w-full gap-x-4 gap-y-8 p-6 pb-3 tvc`} style={{ borderTop: "1px solid var(--border-muted)", marginTop: '.03rem' }}>
			{videos?.map((video) => (
				<div key={nanoid()}>
					<VideoCard
						id={video.id}
						title={video.snippet?.title}
						thumbnail={video?.snippet?.thumbnails.high.url}
						customUrl={video?.chDetails?.snippet.customUrl}
						channelProfile={video?.chDetails?.snippet.thumbnails.default.url}
						channelName={video?.snippet?.channelTitle}
						views={video?.statistics.viewCount}
						publishedAt={video?.snippet?.publishedAt}
						duration={video.contentDetails?.duration}
						e={true}
					/>
				</div>
			))}
		</div>
	)
}

export default Trending
