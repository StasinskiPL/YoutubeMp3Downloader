import { useAppContext } from "../../context/AppContext";
import VideoImg from "./VideoImg";

const VideoInfo: React.FC = () => {
  const { loading, videoInfo } = useAppContext();

  console.log(videoInfo);

  if (!videoInfo) {
    return null;
  }
  if (loading) {
    return <p>loading...</p>;
  }
  const {
    thumbnails,
    title,
    publishDate,
    lengthSeconds,
    videoId,
    author,
  } = videoInfo;

  return (
    <article className="video">
      <div className="video-inner">
        <VideoImg url={thumbnails[3].url} />
        <div className="video__info">
          <h3 className="video__info-title">{title}</h3>
          <h5>{author.name}</h5>
          <p>publish date: {publishDate}</p>
          <p>duration: {lengthSeconds} seconds </p>
          <div className="video__info-download">
          <a href={`http://localhost:4000/download?id=${videoId}`} target="blank">Download</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideoInfo;
