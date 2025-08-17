import { Link } from 'react-router-dom'
import { Tick, Dots } from '../../icons'
import { convertDate, convertDuration, convertViews } from '../../utils/convertStuff'
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
	customUrl,
	channelProfile = null,
	channelName = "",
	views = "",
	publishedAt = "",
	duration = "",
	d = true
}) {

	views = convertViews(views)

	publishedAt = convertDate(publishedAt)

	duration = convertDuration(duration)

	return (
		<>
			<Link to={`/watch/v=${id}`}>
				<div className={` relative cov ${d ? "rounded-xl" : "max-w-42 max-h-24.75 rounded-md"} overflow-hidden aspect-video `}>
					<img className='h-full w-full object-cover ' src={thumbnail} alt="" />
					<div className='absolute right-1 bottom-1 px-1 bg-[var(--bg-darkDim)] rounded-sm ssmallT'>{duration}</div>
				</div>
			</Link>

			<div className={`w-full flex  justify-between  ${d ? "py-3" : ""} gText`}>
				<div className='flex gap-2 grow'>

					{channelProfile ?
						<Link
							to={`/${customUrl}`}
							className='min-w-12 cursor-pointer'>
							<img className='h-10.5 rounded-full' src={channelProfile} alt="" />
						</Link>
						: ""
					}

					<div className='flex flex-col  w-full'>
						<h3 className='w-full min-h-4 max-h-14 overflow-hidden ln wText '>{title}</h3>

						<div className='smallT '>
							<Link
								to={`/${customUrl}`}
								className='flex items-center'>
								<span className='pr-2 max-w-[calc(93%)] h-6 overflow-hidden hover:text-[var(--text)]'>{channelName}</span>
								<Tick fill="var(--text-muted)" />
							</Link>

							<div className="">
								<span>{views} {views ? "views •" : ""} </span>
								<span> {publishedAt}</span>
							</div>
						</div>
					</div>
				</div>
				{d ? <div className='h-6.5 rounded-full cursor-pointer'>
					<Dots fill="var(--text)" />
				</div> : ""}
			</div>
		</>
	)
}

export default HomeVideoCard
