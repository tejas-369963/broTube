import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
// import VideoListCard from '../../components/VideoListCard'
import ListCover from '../../components/ListCover'
import Circle from '../../icons/Circle'
import { Down_svg, SearchIcon } from '../../icons'

function WatchLater() {

	// const dispatch = useDispatch()

	// const user = document.cookie

	// if (user) dispatch(login(user))

	const [videos, setVideos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/playlist/WL`, { withCredentials: true })
				setVideos(res.data)
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
			<>
				{videos.length ?
					<div className='w-full h-fit flex flex-col gap-x-4 gap-y-8 pb-4'>
						<ListCover
							className={"p-6 rounded-3xl border border-[var(--border-muted)]"}
							id={videos[0]?.id}
							title={"Watch Later"}
							thumbnail={videos[0]?.snippet?.thumbnails.high.url}
							customUrl={videos[0]?.chDetails?.snippet.customUrl}
							views={videos[0]?.statistics?.viewCount}
							publishedAt={videos[0]?.snippet?.publishedAt}
							total={videos.length}
							duration={99}
						/>
						<div className='flex justify-between'>
							<div className='flex items-center gap-4'>
								<Circle />
								<div className='flex items-center px-4 py-2 rounded-lg' style={{ backgroundColor: "var(--bg-light)", color: "var(--text-muted)" }}>
									<span className='smallT' >Sort by:</span>
									<span className='smallT pl-2 pr-3' style={{ color: "var(--text)" }}>Relevance</span>
									<Down_svg fill={"var(--svgHi)"} />
								</div>
							</div>
							<div className='flex items-center w-1/3 max-w-96 gap-4 px-4 py-1 rounded-full' style={{ backgroundColor: "var(--bg-light)" }}>
								<SearchIcon fill='var(--highlight)' />
								<span className='smallT' style={{ color: "var(--highlight)" }}>Search Playlist</span>
							</div>
						</div>
						{videos?.map((video) => (
							<div className='' key={video.id}>
								{/* <VideoListCard
									id={video.id}
									title={video?.snippet?.title}
									thumbnail={video?.snippet?.thumbnails?.high?.url}
									customUrl={video?.chDetails?.snippet?.customUrl}
									channelProfile={video?.chDetails?.snippet?.thumbnails?.default?.url}
									channelName={video?.snippet?.videoOwnerChannelTitle}
									views={video.vDetails?.statistics?.viewCount}
									likes={video.vDetails?.statistics?.likeCount}
									publishedAt={video?.contentDetails?.videoPublishedAt}
									duration={video.vDetails?.contentDetails?.duration}
								/> */}
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

export default WatchLater
