import { Link } from 'react-router-dom'
import { Tick, Dots, ViIcon, DateIcon, Like_svg, DisLikeIcon, ShareIcon } from '../icons'
import { convertDate, convertDateToString, convertViews } from '../utils/convertStuff'
import Play from '../icons/Play'
import Duration from '../icons/Duration'
import Download from '../icons/Download'
import Plus from '../icons/Plus'

function ListCover({
    className = "",
    id,
    title = "",
    thumbnail = null,
    customUrl,
    views = "",
    publishedAt = "",
    total,
    duration = ""
}) {

    views = convertViews(views)

    publishedAt = convertDateToString(publishedAt)

    return (

        <div className={`flex justify-between ${className}`} >
            <div className='flex gap-4 relative'>

                <div className={`cov min-w-83 max-w-83  min-h-46.75 max-h-46.75 rounded-xl overflow-hidden aspect-video `}>
                    <img className='h-full w-full object-cover ' src={thumbnail} alt="" />
                </div>

                <div className={`gText`}>
                    <h2 className='pt-2 pb-7.5 ln wText'>{title}</h2>

                    <div className="flex gap-4 pb-6 smallT">
                        <div className='flex items-center gap-1'>
                            <ViIcon fill='var(--border)' />
                            <span className='smallT'>{views ? views + " views" : "0"} </span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Play />
                            <span className='smallT'> {`${total} ${total > 1 ? "videos" : "video"} `}</span>
                        </div>
                        {duration === "" ? "" : <div className='flex items-center gap-1'>
                            <Duration fill="var(--border-muted)" />
                            <span className='smallT'> {`${99} duration`}</span>
                        </div>}
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        <button className='flex gap-2 pl-4 pr-6 py-1 w500 rounded-full' style={{ backgroundColor: "var(--primary)", color: "var(--bg-dark)" }}>
                            <Play />
                            <span >Play All</span>
                        </button>

                        <button className='flex gap-2 pl-4 pr-6 py-1 w500 rounded-full' style={{ backgroundColor: "var(--bg-light)", color: "var(--text)" }}>
                            <ShareIcon />
                            <span >Share</span>
                        </button>

                        <button className='flex gap-2 pl-4 pr-6 py-1 w500 rounded-full' style={{ backgroundColor: "var(--bg-light)", color: "var(--text)" }}>
                            <Plus />
                            <span >Add video</span>
                        </button>

                        <button className='flex gap-2 pl-4 pr-6 py-1 w500 rounded-full' style={{ backgroundColor: "var(--bg-light)", color: "var(--text)" }}>
                            <Download />
                            <span >download</span>
                        </button>
                    </div>

                </div>
            </div>
            <div className='h-6 rounded-full cursor-pointer'>
                <Dots fill="var(--text)" />
            </div>
        </div>
    )
}

export default ListCover
