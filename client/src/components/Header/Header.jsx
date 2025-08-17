import {
    HamIcon,
    SearchIcon,
    MiceIcon,
    CreateIcon,
    NotifIcon,
    SettingIcon,
    LogoIcon,
} from '../../icons'
import ProfileCard from '../ProfileCard.jsx'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../Store/sBarToggleSlice.js'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { login } from '../../Store/authSlice.js'

const clickHandler = () => {
    window.location.href = "https://brotube-server.onrender.com/api/v1/user/google"
}

const profHandler = () => {

    const card = document.querySelector(".profC")

    if (card.classList.contains("hidden"))
        card.classList.remove("hidden")
    else
        card.classList.add("hidden")

}

const refectUrl = (str) => {

    const slashes = str.replaceAll("%2F", "/")
    const colons = slashes.replaceAll("%3A", ":")
    const equals = colons.replaceAll("%3D", "=")

    return equals

}

const navItems = {
    with: [
        // {
        //     name: "Create",
        //     Icon: CreateIcon,
        // },
        // {
        //     name: "Notification",
        //     Icon: NotifIcon,
        // },
        // {
        //     name: "Setting",
        //     Icon: SettingIcon,
        // },
        {
            name: "Profile",
            Icon: "",
        },
    ],
    without: [
        {
            name: "Login"
        },
        // {
        //     name: "Signup"
        // }
    ]
}

function Header() {

    const dispatch = useDispatch()

    const isToggled = useSelector(state => state.sidebar.toggled)

    const sidebarToggle = () => {
        dispatch(toggle(!isToggled))
    }

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loginChecker = async () => {

            try {
                const res = await axios.get("https://brotube-server.onrender.com/api/v1/user/loggedIn", { withCredentials: true })
                // console.log(res.data);

                const user = res.data.data?.userInfo

                dispatch(login(user))

            } catch (err) {
                console.error('Failed to fetch user login status:', err.message);
            } finally {
                setLoading(false)
            }
        }

        loginChecker()

    }, [])

    const user = useSelector(state => state.auth.userData)

    const [isSizeSmall, setIsSizeSmall] = useState(window.matchMedia("(max-width: 441px)").matches)

    useEffect(() => {
        if (window.matchMedia("(max-width: 441px)").matches)
            setIsSizeSmall(true)
        else
            setIsSizeSmall(false)
    }, [])

    const resizeHandler = () => {
        if (window.matchMedia("(max-width: 441px)").matches) {
            setIsSizeSmall(true)
        }
        else {
            setIsSizeSmall(false)
        }
    }

    window.addEventListener("resize", resizeHandler)

    return (
        <header className='sticky top-0 mainBg z-10'>
            <nav className="h-18 w-full pr-6 pb-2 flex justify-between items-center">
                <div className="flex pr-2">
                    <button className="pr-6 pl-[1.5rem] cursor-pointer" onClick={sidebarToggle}><HamIcon fill="var(--svgHi)" /></button>
                    <Link to={"/"} className='min-w-28 flex items-center '>
                        <LogoIcon className='' fill="var(--primary)" />
                        <h1 className='logoText' >BroTube</h1>
                    </Link>
                </div>
                {isSizeSmall ?
                    ""
                    :
                    <search className='w-2/5 flex items-center justify-between py-2 borderG rounded-full cursor-pointer'>
                        <div className="flex">
                            <SearchIcon className='mx-4' fill={"var(--highlight)"} />
                            <span className='' style={{ color: "var(--highlight)" }}>Search</span>
                        </div>
                        <MiceIcon className='mx-4' fill={"var(--highlight)"} />
                    </search>
                }
                {
                    loading ? <div className='w-30 ' />
                        :
                        <div className={`flex items-center pl-2 ${isSizeSmall ? "gap-2" : ""}`}>
                            {
                                user ?
                                    <>
                                        {isSizeSmall ? <SearchIcon className='h-7.5 w-7.5' fill={"var(--highlight)"} /> : ""}
                                        {navItems.with.map(({ name, Icon }) => (
                                            <div className='flex' key={name}>
                                                {name === "Profile" ?
                                                    <>
                                                        {user ?
                                                            <>
                                                                <button onClick={profHandler} className='w-8 h-8 cursor-pointer rounded-full overflow-hidden' key={name}>
                                                                    <img src={user.picture} alt="" />
                                                                </button>
                                                                <div className='profC absolute top-16 right-6 backdrop-blur-xl rounded-xl overflow-hidden hidden'>
                                                                    <ProfileCard />
                                                                </div>
                                                            </>
                                                            :
                                                            ""
                                                        }
                                                    </>
                                                    :
                                                    <button className='cursor-pointer' key={name}>
                                                        <Icon className='h-6 m-1 rounded-full' fill={"var(--svgHi)"} />
                                                    </button>
                                                }
                                            </div>
                                        ))
                                        }
                                    </>
                                    :
                                    navItems.without.map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={clickHandler}
                                            className='px-4 py-1.5 font-bold rounded-full cursor-pointer'
                                            style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
                                        >
                                            {item.name}
                                        </button>
                                    ))
                            }
                        </div>
                }
            </nav>
        </header>
    )
}

export default Header
