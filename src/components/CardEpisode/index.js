import React from 'react';
import './style.css';
import ReactHtmlParser from 'react-html-parser';

export default function MovieCard({ episode }) {
  const { image } = episode;
  return (
   <a href={episode.url}>
     <div className="card">
    {image ? <img
        className="card-img-top"
        src={image ? image.medium : ''}
        alt="Episode Card preview"
      />
      : <div className="card-no-img"> No preview image</div>
    }
      <div className="card-body">
        <h5 className="card-title">{episode.name} ({episode.airdate.split('-')[0]})</h5>
        <h6 class="card-subtitle mb-2 text-muted">Season {episode.season} Episode {episode.number}</h6>
        {episode.summary && ReactHtmlParser(episode.summary)}
      </div>
    </div>
   </a>
  );
}
