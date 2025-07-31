import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {

	const [isToggled, setIsToggled] = useState(false)

	const toggle = useSelector(state => state.sidebar.toggled)

	useEffect(() => {
		if(window.matchMedia("(max-width: 1300px)").matches){
            setIsToggled(toggle)
        }
        else {
            setIsToggled(false)
        }
	}, [toggle])
	
    window.addEventListener("resize", () => setIsToggled(false))

	return (
		<>
			<Header />
			<div className='netHight flex gap-6 mr-0.5'>
				<Sidebar />
				<main className={`overflow-x-hidden mx-auto pr-6 ${ isToggled ? "pl-30" : ""}`}>
					<Outlet />
				</main>
			</div>
		</>
	)
}

export default App
