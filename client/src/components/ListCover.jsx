import { Link } from 'react-router-dom'
import { Tick, Dots, ViIcon, DateIcon, Like_svg, DisLikeIcon, ShareIcon, Playlist_svg } from '../icons'
import { convertDate, convertDateToString, convertViews } from '../utils/convertStuff'
import Play from '../icons/Play'
import Duration from '../icons/Duration'
import Download from '../icons/Download'
import Plus from '../icons/Plus'
import SafeImage from './SafeImage'

function ListCover({
	className = "",
	id = "",
	title = "",
	thumbnail = null,
	views = "",
	publishedAt = "",
	total = ""
}) {

	views = convertViews(views)

	publishedAt = convertDateToString(publishedAt)

	return (

		<div className={`${className}`} >
			<div className='w-[calc(100%-2rem)] mx-auto h-2 rounded-t-full max-md:-mb-[.3rem] -mb-1 bg-gray-500' />
			<div className='w-[calc(100%-1rem)] mx-auto h-2 rounded-t-full max-md:-mb-[.3rem] -mb-1 bg-gray-400' />
			<div className={`relative cov max-md:rounded-md rounded-lg overflow-hidden aspect-video `}>
				<SafeImage
					src={thumbnail}
					alt=""
					className="h-full w-full bg-[var(--border-muted)] object-cover"
					place={"video"}
				/>
				{/* <img className='h-full w-full bg-[var(--border-muted)] object-cover ' src={thumbnail} alt="" /> */}
				<span className='absolute bottom-1 right-1'>
					<div className='flex items-center gap-1 px-1 rounded-sm bg-[var(--cd)]'>
						<Playlist_svg stroke={"white"} w={"18"} h={"18"} />
						<span className='text-sm'> {`${total} ${total > 1 ? "videos" : "video"} `}</span>
					</div>
				</span>
			</div>

			<div className="">
				<h4 className='py-2 max-h-15 overflow-hidden  ln wText'>{title}</h4>
				<Link to={`/playlists/p=${id}`}>
					<span className='text-[var(--text-muted)] smallT hover:text-[var(--text)]'>View full PlayList</span>
				</Link>
			</div>
		</div>
	)
}

export default ListCover
