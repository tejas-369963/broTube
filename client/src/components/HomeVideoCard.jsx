import { Link } from 'react-router-dom'
import { Tick, Dots } from '../icons'
import { convertDate, convertDuration, convertViews } from '../utils/convertStuff'
import SafeImage from './SafeImage'
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
	d = false,
	v = false,
	ply = false
}) {

	views = convertViews(views)

	publishedAt = convertDate(publishedAt)

	duration = convertDuration(duration)

	return (
		<>
			<Link to={`/watch/v=${id}`} className=''>
				<div className={` relative cov mb-3 bg-[var(--border-muted)] ${ply ? "sm:max-w-sm sm:min-w-3xs" : ""} ${!v ? `sm:rounded-xl mb-2 ${d ? "" : "max-sm:-mx-2"}` : "w-42 rounded-md"} overflow-hidden aspect-video `}>
					{thumbnail
						? <>
							<SafeImage
								src={thumbnail}
								alt="product"
								className="h-full w-full object-cover"
								place={"video"}
							/>
							<div className='absolute right-1 bottom-1 px-1 bg-[var(--cd)] rounded-sm ssmallT'>{duration}</div>
						</>
						: ""
					}
				</div>
			</Link>

			<div className={`w-full flex  justify-between gText`}>
				<div className='w-full flex gap-2'>

					{channelProfile && !v ?
						<Link
							to={`/ch=${channelId}`}
							className={`min-w-10.5 h-10.5 mt-1 rounded-full cursor-pointer bg-[var(--border-muted)] ${ply ? "sm:hidden" : ""}`}>
							<SafeImage
								src={channelProfile}
								alt="product"
								className="h-10.5 rounded-full"
								place={"user"}
							/>
						</Link>
						: ""
					}

					<div className='w-[calc(100%-3.34rem)] flex flex-col'>
						{v ? <h4 className='w-full min-h-6 max-h-11 overflow-hidden ln wText '>{title}</h4> : <h3 className='w-full min-h-6 max-h-13 overflow-hidden ln wText '>{title}</h3>}

						<div className='w-full smallT  pt-1'>
							<div className='w-full overflow-hidden flex items-center'>
								{channelId
									? <Link to={`/ch=${channelId}`}>
										{ply
											? <div className={`flex items-center gap-2 sm:py-4`}>
												<SafeImage
													src={channelProfile}
													alt="product"
													className="w-7 h-7 rounded-full bg-[var(--border-muted)] cursor-pointer max-sm:hidden"
													place={"user"}
												/>
												<div className={`pr-2 overflow-hidden hover:text-[var(--text)]  ${v ? "text-[.75rem] h-5" : "h-6"}`}>{channelName}</div>
											</div>
											: <div className={`pr-2 overflow-hidden hover:text-[var(--text) ${v ? "text-[.75rem] h-5" : "h-6"}`}>{channelName}</div>
										}
									</Link>
									: <div className={`pr-2 overflow-hidden ${v ? "text-[.75rem] h-5" : "h-6"}`}>{channelName}</div>
								}
								{/* <Tick fill="var(--text-muted)" /> */}
							</div>

							<div className={`${v ? "text-[.75rem]" : ""}`}>
								<span>{views} {views ? "views •" : ""} </span>
								<span> {publishedAt || ""}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeVideoCard
