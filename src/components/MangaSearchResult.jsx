import React, { createElement, useState } from "react";

export const MangaSearchResult = ({ attr, populate }) => {
  const { cover, title, id, attributes } = attr;
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="MangaSearchResult">
      {!isLoaded && <div className="coverLoading"></div>}
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        src={cover}
        alt={`${title} cover`}
      />
      <a
        onClick={populate}
        id={id}
        cover={cover}
        title={title}
        href={`#${title}`}
      >
        {title}
      </a>
    </div>
  );
};
