import React from "react";

interface Props {
  url: string;
}

const VideoImg: React.FC<Props> = ({ url }) => {
  return (
    <div className="video-img-wrapper">
      <img
        src={url}
        className="video-img"
        loading="lazy"
        alt="video thumbnail"
      />
    </div>
  );
};

export default VideoImg;
