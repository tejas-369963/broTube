import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "./Loader"
import HomeVideoCard from "./HomeVideoCard.jsx"
import { nanoid } from "@reduxjs/toolkit"

function Suggestions({ tags, v= false }) {

	const [suggestions, setSuggestions] = useState([])
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")

	const fetchSuggestions = (async () => {
		if(loading) return
		setLoading(true)
		if(initLoading === "init") setInitLoading(true)
			try {
		const res = await axios.post(`https://brotube-server.onrender.com/api/v1/home/sug`, { tags })
		setSuggestions(prev => [...prev, ...res.data.data.suggestions])
		console.log("sug --->", res.data);

		} catch (error) {
			console.error('Failed to fetch suggestion:', error.message)
		}
		finally {
			setLoading(false)
			setInitLoading(false)
		}
	})

	useEffect(() => {
		fetchSuggestions()
	}, [])

	return initLoading ? <Loader /> : (
		<>
			<div className={`${v ? "" : "tvc w-full gap-x-4 gap-y-8"}`}>
	
				{suggestions?.map((vid) => (
						<div key={nanoid()} className={`${v ? "flex gap-2" : ""}`} >
							<HomeVideoCard
								id={vid.id.videoId}
								title={vid?.snippet?.title}
								thumbnail={vid?.snippet?.thumbnails.high.url} 
								channelName={vid?.snippet?.channelTitle}
								views={vid?.statistics.viewCount}
								publishedAt={vid?.snippet?.publishedAt}
								duration={vid.contentDetails?.duration}
								v={v}
							/>
						</div>
					))}
			</div>
			{v ? "" : <button className='w-full py-1.5 my-4 border border-[var(--border-muted)] rounded-full text-[var(--primary)] smallT'>Show more</button>}
		</>
	)
}

export default Suggestions
