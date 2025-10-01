import { Link } from 'react-router-dom'
import { Tick, Dots } from '../icons'
import { convertDate, convertDuration, convertViews } from '../utils/convertStuff'
const t = (ti, d,) => {

	if (d && ti.length > 54)
		return `${ti.slice(0, 54)}...`

	else if (!d && ti.length > 45)
		return `${ti.slice(0, 45)}...`

	return ti
}

function HomeVideoCard({
	id,
	title = "",
	thumbnail = null,
	channelId,
	channelProfile = null,
	channelName = "",
	views = "",
	publishedAt = "",
	duration = "",
	d = true,
	v = false,
	ply = false
}) {

	views = convertViews(views)

	publishedAt = convertDate(publishedAt)

	duration = convertDuration(duration)

	return (
		<>
			<Link to={`/watch/v=${id}`} className=''>
				<div className={` relative cov mb-3 ${ply ? "sm:max-w-sm" : ""} ${!v ? "rounded-xl mb-2" : "w-42 rounded-md"} overflow-hidden aspect-video `}>
					<img className='h-full w-full object-cover ' src={thumbnail} alt="" />
					<div className='absolute right-1 bottom-1 px-1 bg-[var(--bg-darkDim)] rounded-sm ssmallT'>{duration}</div>
				</div>
			</Link>

			<div className={`w-full flex  justify-between gText`}>
				<div className='flex gap-2 grow'>

					{channelProfile ?
						<Link
							to={`/ch=${channelId}`}
							className={`min-w-12 mt-1 cursor-pointer ${ply ? "sm:hidden" : ""}`}>
							<img className='h-10.5 rounded-full' src={channelProfile} alt="" />
						</Link>
						: ""
					}

					<div className='flex flex-col w-full'>
						{v ? <h4 className='w-full min-h-6 max-h-12 overflow-hidden ln wText '>{title}</h4> : <h3 className='w-full min-h-7 max-h-14.5  overflow-hidden ln wText '>{title}</h3>}

						<div className='smallT '>
							<div className='flex items-center'>
								<Link to={`/ch=${channelId}`}>
									{ply
										? <div className={`flex items-center gap-1 sm:py-4`}>
											<img className='h-7 rounded-full cursor-pointer max-sm:hidden' src={channelProfile} alt="" />
											<span className={`pr-2 max-w-[calc(93%)] overflow-hidden hover:text-[var(--text)] ${v ? "text-[.75rem] h-5" : "h-6"}`}>{channelName}</span>
										</div>
										: <span className={`pr-2 max-w-[calc(93%)] overflow-hidden hover:text-[var(--text)] ${v ? "text-[.75rem] h-5" : "h-6"}`}>{channelName}</span>
									}
								</Link>
								<Tick fill="var(--text-muted)" />
							</div>

							<div className={`${v ? "text-[.75rem]" : ""}`}>
								<span>{views} {views ? "views •" : ""} </span>
								<span> {publishedAt}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeVideoCard
