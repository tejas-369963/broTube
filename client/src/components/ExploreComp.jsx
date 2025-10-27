import { useState } from 'react'
import { Link } from 'react-router-dom'
import {RightArrow_svg} from '../icons'
import { useEffect } from 'react'
import {nanoid} from '@reduxjs/toolkit'
import HomeVideoCard from './HomeVideoCard'

function ExportComp({Icon, title, trending, navItems, className}) {

	const [active, setActive] = useState("Now")
	const [videos, setVideos] = useState([])

	useEffect(() => {
		switch (active) {
			case "Now":
				setVideos(trending?.Now)
				break;
			case "Music":
				setVideos(trending?.Music)
				break;
			case "Gaming":
				setVideos(trending?.Gaming)
				break;
			case "Movie":
				setVideos(trending?.Movie)
				break;
			case "Podcast":
				setVideos(trending?.Podcast)
				break;
		
			default:
				break;
		}
	}, [active])

	return (
		<div className='w-full'>
			<div className='flex justify-between items-center p-6 pb-3'>
				<div className='flex items-center gap-6'>
					<Icon fill={"var(--bg)"}/>
					<h1>{title}</h1>
				</div>
			</div>
			<ul className='nav flex gap-16 gText smallT px-6 pt-9 -z-10' style={{position: "sticky", top: "-1rem"}}>
				{navItems?.map((item) => (
					<li key={item?.tag}>
						<p className={`pb-3 cursor-pointer ${active === item?.tag ? "wText" : ""}`} onClick={() => setActive(item?.tag)}>{item?.tag}</p>
						{active === item?.tag ? <div className='h-0.75 w-6 rounded-t-2xl mx-auto prime'></div> : ""}
					</li>
				))}
			</ul>
			<div className={`w-full gap-x-4 gap-y-8 p-6 pb-3 ${className}`} style={{borderTop: "1px solid var(--border-muted)", marginTop: '.03rem'}}>
				{videos?.map((video) => (
					<div key={nanoid()}>
						<HomeVideoCard
							id={video.id}
							title={video?.snippet?.title}
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
				
			</div>
		</div>
	)
}

export default ExportComp
