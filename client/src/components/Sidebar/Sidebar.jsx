import {
    Home_svg,
    Explore_svg,
    Shorts_svg,
    History_svg,
    Watch_svg,
    Like_svg,
    Playlist_svg,
    Collection_svg,
    Subs_svg,
    Down_svg
} from '../../icons/index.js'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../Store/sBarToggleSlice.js'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Sidebar() {

    const navItems = [
        {
            name: "Home",
            Icon: Home_svg,
            url: "/"
        },
        {
            name: "Explore",
            Icon: Explore_svg,
            url: "/explore"
        },
        // {
        //     name: "Shorts",
        //     Icon: Shorts_svg,
        //     url: "/shorts"
        // },
        {
            name: "divider",
        },
        // {
        //     name: "History",
        //     Icon: History_svg,
        //     url: "/history"
        // },
        // {
        //     name: "Watch Later",
        //     Icon: Watch_svg,
        //     url: "/watchLater"
        // },
        {
            name: "Liked Videos",
            Icon: Like_svg,
            url: "/likedVideos"
        },
        {
            name: "Playlists",
            Icon: Playlist_svg,
            url: "/playlists",
            dropDown: true
        },
        {
            name: "divider",
        },
        {
            name: "Collections",
            Icon: Collection_svg,
            url: "/collections",
            dropDown: true
        },
        {
            name: "Subscriptions",
            Icon: Subs_svg,
            url: "/subscriptions",
            dropDown: true
        },
        {
            name: "divider",
        }
    ]

    const { v } = useParams()

    const [isToggled, setIsToggled] = useState()

    const [trig, setTrig] = useState(false)

    const toggleStatus = useSelector(state => state.sidebar.toggled)

    const dispatch = useDispatch()

    useEffect(() => {
        if (window.matchMedia("(max-width: 1300px)").matches || v) {
            if (trig === false) {
                setIsToggled(false)
                dispatch(toggle(false))
                setTrig(true)
            }
            if (trig) {
                setIsToggled(toggleStatus)
            }
        }
        else {
            setIsToggled(toggleStatus)
            setTrig(false)
        }
    }, [toggleStatus])

    const resizeHandler = () => {
        if (window.matchMedia("(max-width: 1300px)").matches || v) {
            setIsToggled(false)
            dispatch(toggle(false))
        }
        else {
            setIsToggled(toggleStatus)
        }
    }

    window.addEventListener("resize", resizeHandler)

    const [isSizeSmall, setIsSizeSmall] = useState(window.matchMedia("(max-width: 639px)").matches)

	useEffect(() => {
		if (window.matchMedia("(max-width: 639px)").matches)
			setIsSizeSmall(true)
		else
			setIsSizeSmall(false)
	}, [])

	const resizHandler = () => {
		if (window.matchMedia("(max-width: 639px)").matches) {
			setIsSizeSmall(true)
		}
		else {
			setIsSizeSmall(false)
		}
	}

	window.addEventListener("resize", resizHandler)

    return (
        <>
            <aside className={`h-full z-30 ${isToggled ? window.matchMedia("(max-width: 1300px)").matches || v ? "w-dvw z-10 absolute bg-[var(--bg-dim)]" : "min-w-68" : "min-w-20.5 max-w-20.5"} ${isSizeSmall && !isToggled  ? "hidden" : ""}`}>
                <nav className={`h-full mx-[-.2rem] ${isToggled ? "min-w-68 max-w-68" : "max-w-20.5 min-w-20.5"} sidT  smallT w500 bg-dark`}>
                    <ul className={`px-4 ${isToggled ? "min-w-68 max-w-68" : "min-w-20.5 max-w-20.5"}`}>
                        {navItems.map(({ name, Icon, url, dropDown }) => (
                            <li key={Math.random()} className='pb-0.5' >
                                {name != "divider" ? <NavLink
                                    to={url}
                                    className={({ isActive }) => `flex justify-between px-3 py-3 rounded-lg`}
                                    style={({ isActive }) => ({backgroundColor: `${isActive ? "var(--bg-light)" : ""}`})}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className='flex items-center'>
                                                <Icon className={`pr-5 ${isToggled ? "min-h-6 max-h-6" : "flex items-center min-h-6 max-h-6"}`} isActive={isActive} fill="var(--primary)" stroke="var(--svgHi)" />
                                                {isToggled ? <p>{name}</p> : null}
                                            </div>

                                            {isToggled && dropDown ?
                                                <div className='flex '>
                                                    <div className='vert mx-3'></div>
                                                    {<Down_svg className="h- " fill="var(--text)" />}
                                                </div>
                                                :
                                                null
                                            }
                                        </>
                                    )}
                                </NavLink>
                                    : <div className="my-2 mx-2 hori"></div>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar
