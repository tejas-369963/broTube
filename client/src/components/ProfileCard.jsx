import { Logout, RightArrow_svg } from "../icons"
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../Store/authSlice.js'
import axios from 'axios'
import Switch from "../icons/Switch.jsx"
import { Link, useLocation, useParams } from "react-router-dom"
import { ApiError } from "../../../server/src/utils/ApiError.js"
import { useEffect, useInsertionEffect } from "react"
import SafeImage from './SafeImage.jsx'

function ProfileCard() {

	const dispatch = useDispatch()
	const location = useLocation()
	const {v} = useParams()
	
	const logoutHandler = async () => {
		console.log("h");

		try {
			const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/logout`, { withCredentials: "include" })

			console.log("-->", res);

			dispatch(logout())

		} catch (err) {
			console.error('Failed to fetch user login status:', err.message);
		}
	}

	const switchHandler = async () => {

		const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/logout`, { withCredentials: "include" })

		if (!res) throw new ApiError(500, "Couldn't logout user")

		dispatch(logout())

		window.location.href = `${import.meta.env.VITE_API_URL}/api/v1/user/google`

	}

	useEffect(() => {
		const handleDocClick = (e) => {

			const card = document.querySelector(".profC")
			const main = document.querySelector("main")
			const explore = document.querySelector("#explore")

			if (e.target.attributes.id) {
				e.preventDefault()

				if ((e.target.attributes.id.value === "profImg" || e.target.attributes.id.value === "profBtn")) {
					if (!card.classList.contains("hidden")) {
						card.classList.remove("hidden")
						if (location.pathname === "/explore") {
							explore.classList.add("overflow-hidden")
							explore.classList.add("pr-1")
						}
						else {
							if(!v){
							main.classList.add("overflow-hidden")
							main.classList.add("mr-1")
							}
						}
					}
					else {
						card.classList.add("hidden")
						if (location.pathname === "/explore") {
							explore.classList.remove("overflow-hidden")
							explore.classList.remove("pr-1")
						}
						else {
							if(!v){
							main.classList.remove("overflow-hidden")
							main.classList.remove("mr-1")
							}
						}
					}
				}
			}
			else {
				card.classList.add("hidden")
				if (location.pathname === "/explore") {
					explore.classList.remove("overflow-hidden")
					explore.classList.remove("pr-1")
				}
				else {
					if(!v){
					main.classList.remove("overflow-hidden")
					main.classList.remove("mr-1")
					}
				}
			}
		}

		document.addEventListener('click', handleDocClick)

		return () => {
			document.removeEventListener('click', handleDocClick)
		}

	}, [location])


	const user = useSelector(state => state.auth.userData)

	return (
		<>
			<div className=' flex flex-col w-2xs py-2 backdrop-blur-3xl bg-[var(--pro)] '>
				<div className='flex gap-4 px-5 py-2'>
					<div className='w-12 h-12 bg-[var(--border-muted)] rounded-full overflow-hidden'>
						<SafeImage
							src={user.picture}
							alt="product"
							place={"user"}
						/>
					</div>
					<div>
						<p className='w500 '>{user.name}</p>
						<p className='w500 pb-2'>{user.customUrl}</p>
						<Link to={`/${user.customUrl}`} >
							<span className='text-[var(--primary)]' >View your channel</span>
						</Link>
					</div>
				</div>
				<div className='w-full h-px my-2 bg-[var(--border)]' />
				<div className="flex justify-between items-center px-5 py-2 cursor-pointer hover:bg-[var(--border-mutedDim)]">
					<div onClick={switchHandler} className='flex items-center gap-4' >
						<Switch className="" fill={"var(--svgHi)"} />
						<span className="smallT">Switch account</span>
					</div>
					<RightArrow_svg fill={"var(--svgHi)"} />
				</div>
				<div onClick={logoutHandler} className='flex items-center gap-4 px-5 py-2 cursor-pointer hover:bg-[var(--border-mutedDim)]'>
					<Logout fill={"var(--svgHi)"} />
					<span className="smallT">Log out</span>
				</div>
			</div>
		</>
	)
}

export default ProfileCard
