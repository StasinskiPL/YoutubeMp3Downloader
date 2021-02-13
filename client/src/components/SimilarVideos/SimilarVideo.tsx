import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import fetchVideoInfo from "../../api/youtube";
import { convertTime } from "../../helpers/convertTime";

interface Props {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  published: string;
  duration: number;
  richThumbnails:string;
}

const SimilarVideo: React.FC<Props> = ({
  id,
  thumbnail,
  title,
  views,
  published,
  duration,
  richThumbnails,
}) => {
  const { setSimilarVideos, setVideoInfo, setLoading } = useAppContext();
  const [showSlids , setShowSlids] = useState(false)

  const fetchVideo = () => {
    setLoading(true);
    setSimilarVideos([]);
    setVideoInfo(null);

    fetchVideoInfo("/info", {
      params: {
        URL: id,
      },
    })
      .then((res) => {
        setVideoInfo(res.data.info.videoDetails);
        setSimilarVideos(res.data.info.related_videos);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <article className="similar__video">
      <div className="similar__video-img-wrapper" onClick={fetchVideo}>
        <img onMouseEnter={()=>{setShowSlids(true)}}
          onMouseLeave={()=>setShowSlids(false)}
        loading="lazy" src={showSlids ? richThumbnails :thumbnail} alt={title} />
      </div>
      <h5 onClick={fetchVideo}>{title}</h5>
      <div className="similar__video-infos">
        <p>views: {views}</p>
        <p>{convertTime(duration)}</p>
        <p>added {published.replace("Streamed", "")}</p>
      </div>
      <div className="similar__video-download-wrapper">
        <a
          href={`http://localhost:4000/download/mp3?id=${id}&title=${title}`}
          target="blank"
        >
          Download Mp3
        </a>
      </div>
    </article>
  );
};

export default SimilarVideo;
