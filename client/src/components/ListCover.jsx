import { Link } from 'react-router-dom'
import { Tick, Dots, ViIcon, DateIcon, Like_svg, DisLikeIcon, ShareIcon, Playlist_svg } from '../icons'
import { convertDate, convertDateToString, convertViews } from '../utils/convertStuff'
import Play from '../icons/Play'
import Duration from '../icons/Duration'
import Download from '../icons/Download'
import Plus from '../icons/Plus'

function ListCover({
	className = "",
	id="",
	title = "",
	thumbnail = null,
	views = "",
	publishedAt = "",
}) {

	views = convertViews(views)

	publishedAt = convertDateToString(publishedAt)

	return (

		<div className={`${className}`} >
			<div className='w-[calc(100%-2rem)] mx-auto h-2 -mb-1 rounded-t-full bg-gray-500'/>
			<div className='w-[calc(100%-1rem)] mx-auto h-2 -mb-1 rounded-t-full bg-gray-400'/>
			<Link to={`/playlists/p=${id}`} className={`cov aspect-video `}>
				<img className='h-full w-full rounded-xl overflow-hidden object-cover ' src={thumbnail} alt="" />
			</Link>

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
