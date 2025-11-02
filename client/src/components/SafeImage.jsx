import { useState } from "react";
import bannerPlaceholder from '../assets/bannerPlaceholder.png'
import videoPlaceholder from '../assets/videoPlaceholder.png'
import userPlaceholder from '../assets/userPlaceholder.png'

function SafeImage({ id, place, src, alt, className }) {

  const [error, setError] = useState(false);

  return (
    <img
        id={id}
      src={
        error
          ? place === "banner" ? bannerPlaceholder : place === "video" ? videoPlaceholder : place === "user" ? userPlaceholder : ""
          : src
      }
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default SafeImage;
