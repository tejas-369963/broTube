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
	const [loading, setLoading] = useState(true)

	const user = useSelector(state => state.auth.userData)

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const res = await axios.get("http://localhost:5000/api/v1/playlist", { withCredentials: true })
				setPlaylists(res.data || [])
				console.log(res.data);

			} catch (err) {
				console.error('Failed to fetch video:', err.message);
			} finally {
				setLoading(false)
			}
		}

		fetchVideos()

	}, [])

	return user === null ? <div className='w-full h-full flex flex-col justify-center items-center'><h1>Login to see </h1><h2>Playlists</h2></div>
		: loading ?
			<Loader />
			:
			(
				<div className="max-w-7xl mx-auto">
					<h1>All Play Lists</h1>
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
					</div>
				</div>
			)
}

export default Playlists
