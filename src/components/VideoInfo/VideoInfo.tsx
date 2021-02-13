import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { convertTime } from "../../helpers/convertTime";
import AdvancesOptions from "./AdvancesOptions";
import DownloadLinks from "./DownloadLinks";
import VideoImg from "./VideoImg";



const VideoInfo: React.FC = () => {
  const { loading, videoInfo } = useAppContext();
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [downloadTitle, setDowloadTitle] = useState("");

  console.log(videoInfo);

  useEffect(() => {
    if (videoInfo) {
      setDowloadTitle(videoInfo.title);
    }
  }, [videoInfo]);

  const showAdvanced = () => {
    setShowAdvancedOptions(true);
  };
  const closeAdvanced = () => {
    setShowAdvancedOptions(false);
  };

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
    viewCount,
    likes,
  } = videoInfo;

  return (
    <>
      <article className="video">
        <div className="video-inner">
          <VideoImg url={thumbnails[thumbnails.length-1].url} />
          <div className="video__info">
            <h3 className="video__info-title">{title}</h3>
            <h5>{author.name}</h5>
            <p>views: {viewCount}</p>
            <p>{likes} 👍</p>
            <p>publish date: {publishDate}</p>
            <p>duration: {convertTime(lengthSeconds)}</p>
            <DownloadLinks
              showAdvanced={showAdvanced}
              videoId={videoId}
              downloadTitle={downloadTitle}
            />
          </div>
        </div>
      </article>
      {showAdvancedOptions && (
        <AdvancesOptions
          lengthSeconds={+lengthSeconds}
          downloadTitle={title}
          closeAdvanced={closeAdvanced}
          videoId={videoId}
        />
      )}
    </>
  );
};

export default VideoInfo;
