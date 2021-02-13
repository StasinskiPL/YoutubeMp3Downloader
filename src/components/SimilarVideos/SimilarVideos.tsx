import React from "react";
import { useAppContext } from "../../context/AppContext";
import SimilarVideo from "./SimilarVideo";

const SimilarVideos = () => {
  const { similarVideos } = useAppContext();
  return (
    <section className="similar">
        {similarVideos.length > 0 &&
          <h2 className="similar-title">
              Similar Videos
          </h2>
        }
      <div className="similar-inner">
        {similarVideos.map((video) => {
          const { id, title, thumbnails,short_view_count_text,published,length_seconds } = video;
          return (
            <SimilarVideo
              id={id}
              title={title}
              thumbnail={thumbnails[thumbnails.length -1].url}
              views={short_view_count_text}
              key={id}
              published={published}
              duration={length_seconds}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SimilarVideos;
