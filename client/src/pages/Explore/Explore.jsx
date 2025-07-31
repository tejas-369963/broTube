import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Trending_svg,
  Music_svg,
  Gaming_svg
} from '../../icons'
import ExploreComp from '../../components/ExploreComp/ExploreComp'

function Explore() {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/explore")
        setVideos(res.data)
        console.log(res.data);
        
      } catch (err) {
        console.error('Failed to fetch video:', err.message);
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()

  }, [])

  const navItems = [
    {
      tag: "Now",
      vid: videos.Now,
      url: "/trending-now"
    },
    {
      tag: "Music",
      vid: videos.Music,
      url: "/trending-music"
    },
    {
      tag: "Gaming",
      vid: videos.Gaming,
      url: "/trending-gaming"
    },
    {
      tag: "Movie",
      vid: videos.Movie,
      url: "/trending-movies"
    },
    {
      tag: "Podcast",
      vid: videos.Podcast,
      url: "/trending-comedy"
    },
  ]

  return loading ? <div className='w-full h-full text-center flex justify-center items-center'><h1>Loading</h1></div>
    : (
      <div className='w-full overflow-hidden borderG rounded-3xl' style={{ height: "calc(100dvh - 5.7rem)" }}>
        <div className='w-full h-full overflow-y-scroll '>
          <ExploreComp Icon={Trending_svg} title={"Trending"} trending={videos?.data} navItems={navItems} className={"tvc"} />
        </div>
      </div>
    )
}

export default Explore
