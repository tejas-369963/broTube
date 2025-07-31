import { useEffect, useRef } from "react";
import { loadYouTubeAPI } from "../utils/loadYouTubeAPI";

function VideoPlayer({ videoId }) {
  const playerRef = useRef(null);

  useEffect(() => {
    let player;

    loadYouTubeAPI().then((YT) => {
      player = new YT.Player(playerRef.current, {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo(); // Autoplay with sound
          },
        },
      });
    });

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, [videoId]);

  return <div ref={playerRef}></div>;
}

export default VideoPlayer;
