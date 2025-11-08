import { useEffect, useState } from 'react'
import {
	SearchIcon,
	LogoIcon,
	HamIcon,
} from '../icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toggle } from '../Store/sBarToggleSlice.js'
import { detect } from '../Store/deviceSlice.js'
import ProfileCard from './ProfileCard'
import { login } from '../Store/authSlice'
import { useNavigate } from 'react-router-dom'
import SafeImage from './SafeImage.jsx'

const clickHandler = () => {
	window.location.href = `${import.meta.env.VITE_API_URL}/api/v1/user/google`
}

const getDeviceType = () => {
	const userAgent = navigator.userAgent.toLowerCase();

	if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
		return 'mobile';
	} else if (/tablet|ipad/i.test(userAgent)) {
		return 'tablet';
	} else {
		return 'desktop';
	}
}

const profHandler = () => {

	const card = document.querySelector(".profC")
	const main = document.querySelector("main")

	if (card.classList.contains("hidden")) {
		card.classList.remove("hidden")
		main.classList.add(["overflow-hidden", "pr-2"])
	}
	else {
		card.classList.add("hidden")
		main.classList.remove(["overflow-hidden", "pr-2"])
	}
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
		//	 name: "Create",
		//	 Icon: CreateIcon,
		// },
		// {
		//	 name: "Notification",
		//	 Icon: NotifIcon,
		// },
		// {
		//	 name: "Setting",
		//	 Icon: SettingIcon,
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
		//	 name: "Signup"
		// }
	]
}

function Header() {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const isToggled = useSelector(state => state.sidebar.toggled)

	const sidebarToggle = () => {
		dispatch(toggle(!isToggled))
	}

	dispatch(getDeviceType)

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loginChecker = async () => {

			try {
				const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/loggedIn`, { withCredentials: true })
				console.log(res.data);

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
	const [searchQuery, setSearchQuery] = useState("")

	useEffect(() => {
		if (window.matchMedia("(max-width: 441px)").matches)
			setIsSizeSmall(true)
		else
			setIsSizeSmall(false)
	}, [])

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.ctrlKey && e.key === 'k') {
				e.preventDefault()
				const searchInput = document.querySelector('input[placeholder="Search"]')
				if (searchInput) {
					searchInput.focus()
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
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

	const handleSearch = (e) => {

		e.preventDefault()

		if (!searchQuery.trim()) return

		navigate(`/search?q=${encodeURIComponent(searchQuery)}`)

	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter")
			handleSearch(e)
	}

	const searchHandler = () => {
		navigate(`/search`)
	}

	const device = getDeviceType()

	return (
		<>
			<header style={{}} className='absolute w-full top-0 z-30 sm:bg-[var(--bg-darkDim)] bg-[var(--bg-darkerDim)] backdrop-blur-3xl'>
				<nav className="h-18 w-full pr-6 pb-2 flex justify-between items-center">
					<div className="flex pr-2">
						<button className="pr-6 pl-[1.54rem] cursor-pointer" onClick={sidebarToggle}><HamIcon fill="var(--svgHi)" /></button>
						<Link to={"/"} className='min-w-28 flex items-center'>
							<LogoIcon className='' fill="var(--primary)" />
							<h1 className='logoText' >BroTube</h1>
						</Link>
					</div>
					<div className={`searchF w-2/5 max-w-2xl max-sm:hidden`} >
						<form onSubmit={handleSearch} className={`flex items-center py-2 border border-[var(--border)] bg-[var(--bg-darkDim)] rounded-full cursor-pointer max-sm:bg-[var(--bg-dark)]`}>
							<SearchIcon className=' mx-4 ' fill={"var(--highlight)"} />
							<input
								className='grow mr-4 text-[var(--text)] bg-transparent outline-none'
								type='text'
								placeholder='Search'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								onKeyDown={handleKeyPress}
							/>
							{device === "desktop" ? <div className='flex gap-1 pr-4 max-[51rem]:hidden'><span className='px-1 font-extrabold text-[.72rem] text-[var(--highlight)] border rounded bg-[var(--bg-light)]'>Ctrl K</span></div> : ""}
						</form>
					</div>
					{
						loading ? <div className='w-20 ' />
							:
							<div className={`flex items-center pl-2 max-sm:gap-2`}>
								<SearchIcon className='h-7.5 w-7.5 sm:hidden cursor-pointer' onClick={searchHandler} fill={"var(--highlight)"} />
								{
									user ?
										<>
											{navItems.with.map(({ name, Icon }) => (
												<div className='flex' key={name}>
													{name === "Profile" ?
														<>
															{user ?
																<>
																	<button id='profBtn' onClick={profHandler} className='w-8 h-8 cursor-pointer rounded-full overflow-hidden border border-[var(--highlight)]' key={name}>
																		<SafeImage
																			id={"profImg"}
																			src={user.picture}
																			alt="product"
																			place={"user"}
																		/>
																	</button>
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
												className='px-4 py-1.5 font-bold rounded-full cursor-pointer bg-[var(--text)] text-[var(--bg)]'
											>
												{item.name}
											</button>
										))
								}
							</div>
					}
				</nav>
			</header>
			{user
				? <div className='profC absolute top-16 right-6 z-30 rounded-xl overflow-hidden hidden'>
					<ProfileCard />
				</div>
				: ""
			}
		</>
	)
}

export default Header
