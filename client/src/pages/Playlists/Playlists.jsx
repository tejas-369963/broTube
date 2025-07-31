import { useEffect } from "react"
import PlaylistCover from "../../components/PlaylistCover"
import { useState } from "react"
import axios from "axios"
import ListCover from "../../components/ListCover"
import { Link } from "react-router-dom"

function Playlists() {

  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://brotube-server.onrender.com/api/v1/playlist", { withCredentials: true })
        setPlaylists(res.data || [])
      } catch (err) {
        console.error('Failed to fetch video:', err.message);
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()

  }, [])

  return loading ?
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
              total={playlists.length}
              duration={99}
            />
          </Link>
        ))}
      </div>
    )
}

export default Playlists
