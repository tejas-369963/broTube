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
		setSuggestions(res.data.data.suggestions)
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
	}, [tags])

	return initLoading ? <Loader /> : (
		<>
			<div className={`${v ? "" : "tvc w-full"}`}>
	
				{suggestions?.map((vid) => (
						<div key={vid.id} className={`${v ? "flex gap-2" : ""}`} >
							<HomeVideoCard
								id={vid.id}
								title={vid?.snippet?.title}
								thumbnail={vid?.snippet?.thumbnails.high.url} 
								channelName={vid?.snippet?.channelTitle}
								channelId={vid.snippet.channelId}
								views={vid?.statistics.viewCount}
								publishedAt={vid?.snippet?.publishedAt}
								duration={vid.contentDetails?.duration}
								v={v}
								d={true}
							/>
						</div>
					))}
			</div>
			{v ? "" : <div className='w-full h-px my-4 bg-[var(--border-muted)]'/>}
		</>
	)
}

export default Suggestions
