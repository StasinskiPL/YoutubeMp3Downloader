import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  videoId: string;
  downloadTitle: string;
  lengthSeconds: number;
  closeAdvanced: () => void;
}

const AdvancesOptions: React.FC<Props> = ({
  videoId,
  downloadTitle,
  closeAdvanced,
  lengthSeconds,
}) => {
  const [title, setTitle] = useState(downloadTitle);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(lengthSeconds);

  return (
    <section className="options">
      <div className="options-inner">
        <div className="options-btn-wrapper">
          <button onClick={closeAdvanced}>
            <FaTimes />
          </button>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
{/* 
        <div>
          <label htmlFor="start">Start Time:</label>
          <input
            name="start"
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(+e.target.value)}
            min={0}
            max={lengthSeconds}
            step={1}
          />
        </div>

        <div>
          <label htmlFor="end">End Time:</label>
          <input
            name="end"
            type="number"
            value={endTime}
            onChange={(e) => setEndTime(+e.target.value)}
            min={0}
            max={lengthSeconds}
            step={1}
          />
        </div> */}
        <div className="video__info-download">
          <a
            href={`http://localhost:4000/download/mp3?id=${videoId}&title=${title}
            &start=${startTime}&end=${endTime}`}
            target="blank"
          >
            Download Mp3
          </a>
          <a
            href={`http://localhost:4000/download/mp4?id=${videoId}&title=${title}
            &start=${startTime}&end=${endTime}`}
            target="blank"
          >
            Download Mp4
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvancesOptions;
