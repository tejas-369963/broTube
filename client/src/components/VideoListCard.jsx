import { Link } from 'react-router-dom'
import { Tick, Dots, ViIcon, DateIcon, Like_svg, DisLikeIcon } from '../icons'
import { convertDate, convertDateToString, convertDuration, convertViews } from '../utils/convertStuff'
import Move from '../icons/Move'
import Circle from '../icons/Circle'

const t = (ti) => {

	// if (d && ti.length > 45)
	//	 return `${ti.slice(0, 45)}...`

	// else if (!d && ti.length > 45)
	//	 return `${ti.slice(0, 45)}...`

	return ti
}

function VideoListCard({
	className = "",
	id,
	title = "",
	thumbnail = null,
	customUrl = "",
	channelProfile = null,
	channelName = "",
	views = "",
	likes = "",
	publishedAt = "",
	duration = "",
	s = false
}) {

	views = convertViews(views)

	publishedAt = convertDateToString(publishedAt)

	duration = convertDuration(duration)

	return (

		<div className={`flex justify-between ${className}`} >
			<div className='flex gap-4 relative'>
				{s
					? ""
					: <div className='flex flex-col justify-center pr-1'>
						<div className=' absolute top-0'>
							<Circle stroke='var(--svgHi)' />
						</div>
						<Move fill='var(--svgHi)' />
					</div>
				}
				<Link to={`/watch/v=${id}`}>
					<div className={`relative cov min-w-64.5 ${s ? "w-sm" : "max-w-64.5"}  rounded-xl overflow-hidden aspect-video `}>
						<img className='h-full w-full object-cover' src={thumbnail} alt="" />
						<div className='absolute right-1 bottom-1 px-1 bg-[var(--bg-darkDim)] rounded-sm ssmallT'>{duration}</div>
					</div>
				</Link>

				<div className={`gText`}>
					<h2 className=' ln wText'>{t(title)}</h2>

					<div className="flex gap-4 py-6 smallT">
						<div className='flex items-center gap-1'>
							<ViIcon fill='var(--border)' />
							<span>{views ? views : "0"} </span>
						</div>
						<div className='flex items-center gap-1'>
							<DateIcon fill='var(--border)' />
							<span className=''> {publishedAt}</span>
						</div>
						<div className='flex items-center'>
							<button
								className='h-8 flex items-center gap-2 px-4 rounded-l-full bgGray'
							>
								<Like_svg stroke='var(--svgHi)' />
								<p>{`${convertViews(likes)}`}</p>
							</button>
							<div className='bgGray h-full py-1 '><div className='vert h-full'></div></div>
							<button
								className='h-8 flex items-center gap-2 px-4 rounded-r-full bgGray'
							>
								<DisLikeIcon stroke='var(--svgHi)' />
							</button>
						</div>
					</div>

					<div className='flex gap-3'>
						<Link
							to={`/${customUrl}`}
							className='cursor-pointer'>
							{channelProfile? <img className='h-7 rounded-full' src={channelProfile} alt="" /> : <div className='w-7 h-7 bg-[var(--highlight)] rounded-full'/>}
						</Link>

						<div className='flex items-center smallT'>
							<Link to={`/${customUrl}`}><span className='pr-2 cursor-pointer hover:text-[var(--text)]'>{channelName}</span></Link>
							<Tick fill="var(--text-muted)" />
						</div>
					</div>
				</div>
			</div>
			<div className='h-6 rounded-full cursor-pointer'>
				<Dots fill="var(--text)" />
			</div>
		</div>
	)
}

export default VideoListCard
