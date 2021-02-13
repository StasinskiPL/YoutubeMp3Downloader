import React from "react";

interface Props {
  videoId: string;
  downloadTitle: string;
  showAdvanced: () => void;
}

const DownloadLinks: React.FC<Props> = ({ downloadTitle, videoId,showAdvanced }) => {
  return (
    <div className="video__info-download">
      <a
        href={`http://localhost:4000/download/mp3?id=${videoId}&title=${downloadTitle}`}
        target="blank"
      >
        Download Mp3
      </a>
      <a
        href={`http://localhost:4000/download/mp4?id=${videoId}&title=${downloadTitle}`}
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
