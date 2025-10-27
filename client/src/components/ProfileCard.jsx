import { Logout, RightArrow_svg } from "../icons"
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../Store/authSlice.js'
import axios from 'axios'
import Switch from "../icons/Switch.jsx"
import { Link } from "react-router-dom"
import { ApiError } from "../../../server/src/utils/ApiError.js"

function ProfileCard() {

	const dispatch = useDispatch()

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

	const profHandler = () => {

		const card = document.querySelector(".profC")

		if (card.classList.contains("hidden")){
			card.classList.remove("hidden")
		}
		else{
			card.classList.add("hidden")
		}
	}

	const user = useSelector(state => state.auth.userData)

	return (
		<>
			<div className='flex flex-col w-2xs gap-2 py-2 backdrop-blur-3xl bg-[var(--pro)] '>
				<div className='flex gap-3 px-4 pt-6'>
					<div className='w-12 h-12 bg-[var(--highlight)] rounded-full overflow-hidden'>
						<img src={user.picture} alt="" />
					</div>
					<div>
						<p className='w500 '>{user.name}</p>
						<p className='w500 pb-2'>{user.customUrl}</p>
						<Link to={`/${user.customUrl}`} onClick={profHandler}>
							<span className='smallT  ' style={{ color: "var(--primary)" }}>View your channel</span>
						</Link>
					</div>
				</div>
				<div className='w-full h-[1px] mt-2 bg-[var(--border)]'/>
				<div className="flex justify-between items-center px-6 py-2 cursor-pointer hover:bg-[var(--border-mutedDim)]">
					<div onClick={switchHandler} className='flex items-center gap-4' >
						<Switch fill={"var(--svgHi)"} />
						<p>Switch Accounts</p>
					</div>
					<RightArrow_svg fill={"var(--svgHi)"} />
				</div>
				<div onClick={logoutHandler} className='flex items-center gap-4 px-6 py-2 cursor-pointer hover:bg-[var(--border-mutedDim)]'>
					<Logout fill={"var(--svgHi)"} />
					<p>Log out</p>
				</div>
			</div>
		</>
	)
}

export default ProfileCard
