import React, { useRef, useState } from "react";
import fetchVideoInfo from "../../api/youtube";
import { useAppContext } from "../../context/AppContext";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [error, setError] = useState<string | null>(null);

  const { setLoading, setVideoInfo, setSimilarVideos,reset } = useAppContext();

  const clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    reset();
    const validation = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const match = inputRef.current.value.match(validation);
    if (match) {
      fetchVideoInfo("/info", {
        params: {
          URL: inputRef.current.value,
        },
      })
        .then((res) => {
          setVideoInfo(res.data.info.videoDetails);
          setSimilarVideos(res.data.info.related_videos);
        })
        .catch(() => {
          setError("Someting went wrong, try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError("Your Url doesn`t match");
    }
  };

  return (
    <div className="search-wrapper">
      <form className="search" onSubmit={(e) => clickHandler(e)}>
        <input
          ref={inputRef}
          placeholder="Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q"
          className={`search-input ${error && "error"}`}
          type="search"
          />
        <button className="search-btn" type="submit" aria-label="search">
          Search
        </button>
      </form>
          {error && <p className="search-error">{error}</p>}
    </div>
  );
};

export default Search;
