import { useEffect } from "react"
import PlaylistCover from "../../components/PlaylistCover"
import { useState } from "react"
import axios from "axios"
import ListCover from "../../components/ListCover"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Loader from "../../components/Loader"

function Playlists() {

	const [playlists, setPlaylists] = useState([])
	const [initLoading, setInitLoading] = useState("init")
	const [loading, setLoading] = useState(false)
	const [nextPageToken, setNextPageToken] = useState(null)

	const user = useSelector(state => state.auth.userData)

	const fetchVideos = (async () => {
		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.get(`https://brotube-server.onrender.com/api/v1/playlist?pageToken=${nextPageToken || ""}`, { withCredentials: true })
			setPlaylists(prev => [...prev, ...res.data.data.resData])
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
		if (user)
			fetchVideos()

	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && nextPageToken && !loading) {
				fetchVideos()
			}
		})
		const sentinel = document.getElementById("playlistsScroll")

		if (sentinel) observer.observe(sentinel)

		return () => observer.disconnect()

	}, [nextPageToken, loading])

	return !loading && user === null
		? <div className="w-full h-full flex flex-col justify-center items-center text-center -mt-12 space-y-2">
			<h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
				Login to see
			</h1>
			<h2 className="text-xl font-medium text-[var(--primary)]">
				Your Playlists
			</h2>
		</div>
		: initLoading ?
			<Loader />
			:
			(
				<div className="max-w-7xl mx-auto py-2">
					<h1 className="py-2">All Play Lists</h1>
					<div className=" pvc py-6">
						{playlists.map((playlist) => (
							<div key={playlist.id}>
								<ListCover
									id={playlist?.id}
									title={playlist.snippet.title}
									thumbnail={playlist?.snippet?.thumbnails.medium.url}
									customUrl={playlist?.chDetails?.snippet.customUrl}
									views={playlist?.statistics?.viewCount}
									publishedAt={playlist?.snippet?.publishedAt}
									total={playlist.contentDetails.itemCount}
									duration={99}
								/>
							</div>
						))}
						{playlists.length > 12 ? <div id='playlistsScroll' className='h-px border '></div> : ""}
					</div>
				</div>
			)
}

export default Playlists
