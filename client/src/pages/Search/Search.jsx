import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Loader from '../../components/Loader.jsx'
import HomeVideoCard from "../../components/HomeVideoCard.jsx"
import { useNavigate, useSearchParams } from "react-router-dom"
import SearchIcon from "../../icons/SearchIcon.jsx"

function Search() {

	const [searchQuery, setSearchQuery] = useState("")
	const [searchParams, setSearchParams] = useSearchParams()
	const [suggestions, setSuggestions] = useState([])
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState()
	const searchRef = useRef(null)

	const navigate = useNavigate()

	const fetchSuggestions = (async (qu = q) => {
		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {

			const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/search?q=${encodeURIComponent(qu)}`, { withCredentials: true })
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

	const handleSearch = (e) => {

		e.preventDefault()

		if (!searchQuery.trim()) return

		searchRef.current.blur()
		
		setSearchParams({q: encodeURIComponent(searchQuery)})

	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter"){
			e.preventDefault()
			handleSearch(e)
		}
	}

	useEffect(() => {

		if (searchRef.current) {
			searchRef.current.focus()
		}
		if (searchParams.get("q")) {
			setLoading(true)
			setSuggestions([])
			fetchSuggestions(searchParams.get("q"))
		}
	}, [searchParams])

	return initLoading
		? <Loader />
		: (
			<>
				<div className={`sm:hidden w-dvw fixed left-0 top-0 pt-3 px-3 bg-[var(--bg-dark)]  z-50 `}>
					<form onSubmit={handleSearch} className={`flex items-center py-2 borderG rounded-full cursor-pointer max-sm:bg-[var(--bg-dark)]`}>
						<SearchIcon className=' mx-4 ' fill={"var(--highlight)"} />
						<input
							ref={searchRef}
							id="search"
							className='grow mr-4 text-[var(--text)] bg-transparent outline-none'
							type='text'
							placeholder='Search'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyDown={handleKeyPress}
						/>
					</form>
				</div>
				{suggestions.length
					? <div className='max-w-7xl mx-auto gap-x-4 gap-y-8'>
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
					: ""
				}
			</>
		)
}

export default Search
