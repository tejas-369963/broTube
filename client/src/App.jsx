import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {

	const [isToggled, setIsToggled] = useState(false)

	const toggle = useSelector(state => state.sidebar.toggled)

	const { v } = useParams()

	useEffect(() => {
		if(window.matchMedia("(max-width: 1300px)").matches || v){
            setIsToggled(toggle)
        }
        else {
            setIsToggled(false)
        }
	}, [toggle])

	const [isSizeSmall, setIsSizeSmall] = useState(window.matchMedia("(max-width: 639px)").matches)

	useEffect(() => {
		if (window.matchMedia("(max-width: 639px)").matches)
			setIsSizeSmall(true)
		else
			setIsSizeSmall(false)
	}, [])

	const resizeHandler = () => {
		if (window.matchMedia("(max-width: 639px)").matches) {
			setIsSizeSmall(true)
		}
		else {
			setIsSizeSmall(false)
		}
	}

	window.addEventListener("resize", resizeHandler)
	
    window.addEventListener("resize", () => setIsToggled(false))

	return (
		<>
			<Header />
			<div className={`netHight flex gap-6.75 mr-0.5`}>
				<Sidebar />
				<main className={`overflow-x-hidden mx-auto ${ isToggled && !isSizeSmall ? "pl-24" : ""} ${ isSizeSmall ? "pl-2 pr-2" : "pr-4.5"}`}>
					<Outlet />
				</main>
			</div>
		</>
	)
}

export default App
