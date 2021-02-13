import React from "react";
import { BASE_URL } from "../../api/youtube";

interface Props {
  videoId: string;
  downloadTitle: string;
  showAdvanced: () => void;
}

const DownloadLinks: React.FC<Props> = ({ downloadTitle, videoId,showAdvanced }) => {
  return (
    <div className="video__info-download">
      <a
        href={`${BASE_URL}/download/mp3?id=${videoId}&title=${downloadTitle}`}
        target="blank"
      >
        Download Mp3
      </a>
      <a
        href={`${BASE_URL}/download/mp4?id=${videoId}&title=${downloadTitle}`}
        target="blank"
      >
        Download Mp4
      </a>
      <button onClick={showAdvanced}>
          Advanced
      </button>
    </div>
  );
};

export default DownloadLinks;
