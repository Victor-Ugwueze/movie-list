import React from 'react';
import './style.css';

export default function MovieCard({ episode }) {
  const { image } = episode;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={image ? image.medium : ''}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <p className="card-text">
          {episode.summary
            ? `${episode.summary.substring(0, 255).replace('<p>', '')}...`
            : ''}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Season: {episode.season}</li>
        <li className="list-group-item">AirDate: {episode.airdate}</li>
      </ul>
      <div className="card-body">
        <a href="#" className={episode.url}>
          View Movie
        </a>
      </div>
    </div>
  );
}
