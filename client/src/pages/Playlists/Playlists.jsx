import { useEffect } from "react"
import PlaylistCover from "../../components/PlaylistCover"
import { useState } from "react"
import axios from "axios"
import ListCover from "../../components/ListCover"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Playlists() {

  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)

  const user = useSelector(state => state.auth.userData)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://brotube-server.onrender.com/api/v1/playlist", { withCredentials: true })
        setPlaylists(res.data || [])
        console.log(res.data);
        
      } catch (err) {
        console.error('Failed to fetch video:', err.message);
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()

  }, [])

  return !user ? <div className='w-full h-full flex flex-col justify-center items-center'><h1>Login to see </h1><h2>Playlists</h2></div> 
	:   loading ?
    <div className='w-full h-full text-center flex justify-center items-center'>
      <h1>Loading</h1>
    </div>
    :
    (
      <div className="w-full">
        {playlists.map((playlist) => (
          <Link to={`/playlists/p=${playlist.id}`} key={playlist.id}>
            <ListCover
              className={"p-6 "}
              id={playlist?.id}
              title={playlist.snippet.title}
              thumbnail={playlist?.snippet?.thumbnails.medium.url}
              customUrl={playlist?.chDetails?.snippet.customUrl}
              views={playlist?.statistics?.viewCount}
              publishedAt={playlist?.snippet?.publishedAt}
              total={playlist.contentDetails.itemCount}
              duration={99}
            />
          </Link>
        ))}
      </div>
    )
}

export default Playlists
