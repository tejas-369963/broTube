import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Trending_svg,
  Music_svg,
  Gaming_svg
} from '../../icons'
import { nanoid } from '@reduxjs/toolkit'
import VideoCard from '../../components/HomeVideoCard'
import Loader from '../../components/Loader'

function Explore() {

  const [videoTag, setVideoTag] = useState("")
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
	setLoading(true)
	const fetchVideos = async () => {
	  try {
		const res = await axios.get(`https://brotube-server.onrender.com/api/v1/explore${videoTag}`)
		setVideos(res.data.data)
		console.log(res.data);

	  } catch (err) {
		console.error('Failed to fetch video:', err.message);
	  } finally {
		setLoading(false)
	  }
	}

	fetchVideos()

  }, [videoTag])

  const navItems = [
	{
	  tag: "Now",
	  url: "/"
	},
	{
	  tag: "Music",
	  url: "/music"
	},
	{
	  tag: "Gaming",
	  url: "/gaming"
	},
	{
	  tag: "Sports",
	  url: "/sports"
	},
	{
	  tag: "Vlog",
	  url: "/vlog"
	},
  ]

  const [active, setActive] = useState("Now")

  useEffect(() => {
	switch (active) {
	  case "Now":
		setVideoTag("")
		break;
	  case "Music":
		setVideoTag("/music")
		break;
	  case "Gaming":
		setVideoTag("/gaming")
		break;
	  case "Sports":
		setVideoTag("/sports")
		break;
	  case "Vlog":
		setVideoTag("/vlog")
		break;

	  default:
		break;
	}
  }, [active])

  return (
	<div className='w-full overflow-hidden borderG rounded-3xl' style={{ height: "calc(100dvh - 5.7rem)" }}>
	  <div className='w-full h-full overflow-y-scroll '>
		<div className='w-full'>
		  <div className='flex justify-between items-center p-6 pb-3'>
			<div className='flex items-center gap-4'>
			  <Trending_svg fill={"var(--bg)"} />
			  <h1>{"Trending"}</h1>
			</div>
		  </div>
		  <ul className='nav flex gap-16 gText smallT px-6 pt-9 bg-dark z-10 overflow-x-auto exnav' style={{ position: "sticky", top: "-1rem" }}>
			{navItems?.map((item) => (
			  <li key={item?.tag}>
				<p className={`pb-3 cursor-pointer ${active === item?.tag ? "wText" : ""}`} onClick={() => setActive(item?.tag)}>{item?.tag}</p>
				{active === item?.tag ? <div className='h-0.75 w-6 rounded-t-2xl mx-auto prime'></div> : ""}
			  </li>
			))}
		  </ul>
		  {loading ? <Loader h={2}/>
			: <div className="w-full gap-x-4 gap-y-8 p-6 pb-3 tvc border-t border-t-[var(--border-muted)]">
			  {videos?.map((video) => (
				<div key={nanoid()}>
				  <VideoCard
					id={video.id}
					title={video.snippet?.title}
					thumbnail={video?.snippet?.thumbnails.high.url}
					channelId={video?.chDetails.id}
					channelProfile={video?.chDetails?.snippet.thumbnails.default.url}
					channelName={video?.snippet?.channelTitle}
					views={video?.statistics.viewCount}
					publishedAt={video?.snippet?.publishedAt}
					duration={video.contentDetails?.duration}
					d={true}
					e={true}
				  />
				</div>
			  ))}
			</div>}
		</div>
	  </div>
	</div>
  )
}

export default Explore