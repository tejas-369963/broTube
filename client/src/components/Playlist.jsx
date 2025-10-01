import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loader from "./Loader"
import HomeVideoCard from "./HomeVideoCard"

function Playlist() {

	const { p } = useParams()

	const pId = p.slice(2)

	const [videos, setPlaylists] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.post(`https://brotube-server.onrender.com/api/v1/playlist/p`, { pId }, { withCredentials: true })
				setPlaylists(res.data || [])
				console.log(res);

			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}

		fetchVideos()

	}, [])

	return loading ? <Loader />
		: (
			<>
				{/* <h1></h1> */}
				{videos.length ?
					<div className='max-w-7xl mx-auto h-fit flex flex-col gap-x-4 gap-y-8 pb-4'>
						{videos?.map((video) => (
							<div className='sm:flex gap-3' key={video.id}>
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
