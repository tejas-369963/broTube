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
            const res = await axios.get("http://localhost:5000/api/v1/user/logout", { withCredentials: "include" })

            console.log("-->", res);

            dispatch(logout())

        } catch (err) {
            console.error('Failed to fetch user login status:', err.message);
        }
    }

    const switchHandler = async () => {

        const res = await axios.get("http://localhost:5000/api/v1/user/logout", { withCredentials: "include" })

        if (!res) throw new ApiError(500, "Couldn't logout user")

        dispatch(logout())

        window.location.href = "http://localhost:5000/api/v1/user/google"

    }

    const profHandler = () => {

        const card = document.querySelector(".profC")

        if (card.classList.contains("hidden"))
            card.classList.remove("hidden")
        else
            card.classList.add("hidden")

    }

    const user = useSelector(state => state.auth.userData)

    return (
        <>
            <div className='flex flex-col gap-4 p-4  ' style={{ backgroundColor: "var(--cd)" }} >
                <div className='flex gap-3'>
                    <div className='w-10.5 h-10.5 rounded-full overflow-hidden'>
                        <img src={user.picture} alt="" />
                    </div>
                    <div>
                        <h2 className='w500'>{user.name}</h2>
                        <h2 className='w500'>{user.customUrl}</h2>
                        <Link to={`/${user.customUrl}`} onClick={profHandler}>
                            <p className='smallT pt-2 ' style={{ color: "var(--primary)" }}>View your channel</p>
                        </Link>
                    </div>
                </div>
                <div className='w-full' style={{ height: "1px", backgroundColor: "var(--border)" }} />
                <div className="flex justify-between">
                    <div onClick={switchHandler} className='flex items-center gap-4 cursor-pointer' >
                        <Switch fill={"var(--svgHi)"} />
                        <p>Switch Accounts</p>
                    </div>
                    <RightArrow_svg fill={"var(--svgHi)"} />
                </div>
                <div onClick={logoutHandler} className='flex items-center gap-4 cursor-pointer'>
                    <Logout fill={"var(--svgHi)"} />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}

export default ProfileCard
