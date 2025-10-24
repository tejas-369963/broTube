import axios from "axios"
import { useEffect, useState } from "react"
import Loader from '../../components/Loader.jsx'
import HomeVideoCard from "../../components/HomeVideoCard.jsx"
import { nanoid } from "@reduxjs/toolkit"
import { useNavigate, useSearchParams } from "react-router-dom"
import VideoListCard from "../../components/VideoListCard.jsx"

function Search() {

	const [searchParams, setSearchParams] = useSearchParams()
	const [q, setQ] = useState(searchParams.get("q") || "")
	const [suggestions, setSuggestions] = useState([])
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")

	const navigate = useNavigate()

	const fetchSuggestions = (async (qu=q) => {
		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {

			const res = await axios.get(`http://localhost:5000/api/v1/search?q=${encodeURIComponent(qu)}`, { withCredentials: true })
			console.log("sug --->", res.data.data.suggestions);
			setSuggestions(res.data.data.suggestions)

		} catch (error) {
			console.error('Failed to fetch suggestion:', error.message)
		}
		finally {
			setLoading(false)
			setInitLoading(false)
		}
	})

	useEffect(() => {
		setLoading(true)
		setSuggestions([])
		fetchSuggestions(searchParams.get("q"))
	}, [searchParams])

	return initLoading ? <Loader /> : (
		<>
			<div className='max-w-7xl mx-auto gap-x-4 gap-y-8'>
				{suggestions?.map((video) => (
					<>
						<div className='sm:flex gap-4 pb-6' key={video.id}>
							<HomeVideoCard
								id={video.id}
								title={video?.snippet?.title}
								thumbnail={video?.snippet?.thumbnails?.high?.url}
								channelId={video?.chDetails.id}
								channelProfile={video?.chDetails?.snippet?.thumbnails?.default?.url}
								channelName={video?.snippet?.channelTitle}
								views={video.statistics?.viewCount}
								likes={video.statistics?.likeCount}
								publishedAt={video?.snippet?.publishedAt}
								duration={video.contentDetails?.duration}
								ply={true}
							/>
						</div>
					</>
				))}
			</div>
		</>
	)
}

export default Search
