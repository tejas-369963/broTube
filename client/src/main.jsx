import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './Store/store.js'
import {Provider} from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Search from './pages/Search/Search.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Shorts from './pages/Shorts/Shorts.jsx'
import History from './pages/History/History.jsx'
import WatchLater from './pages/WatchLater/WatchLater.jsx'
import LikedVideos from './pages/LikedVideos/LikedVideos.jsx'
import Playlists from './pages/Playlists/Playlists.jsx'
import Collections from './pages/Collections/Collections.jsx'
import Subs from './pages/Subs/Subs.jsx'
import Video from './pages/Video/Video.jsx'
import Channel from './pages/Channel/Channel.jsx'
import Playlist from './components/Playlist.jsx'
import Trending from './pages/Trending.jsx'


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App/>}>
			<Route path='' element={<Home />} />
			<Route path='/search' element={<Search />} />
			<Route path='/explore' element={<Explore />} >
				<Route path='' element={<Trending />} />
			</Route>
			<Route path='/shorts' element={<Shorts />} />
			<Route path='/history' element={<History />} />
			<Route path='/watchLater' element={<WatchLater />} />
			<Route path='/likedVideos' element={<LikedVideos />} />
			<Route path='/playlists' element={<Playlists />} />
			<Route path='/u/playlists/:p' element={<Playlist />} />
			<Route path='/playlists/:p' element={<Playlist />} />
			<Route path='/collections' element={<Collections />} />
			<Route path='/subscriptions' element={<Subs />} />
			<Route path='/watch/:v' element={<Video />} />
			<Route path='/:ch' element={<Channel />} />
		</Route>
	)
)

createRoot(document.getElementById('root')).render(
	<>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</>,
)
