import React from 'react';
import './style.css';

export default function MovieCard({ episode }) {
  const { image } = episode;
  const regex = /(<p>)|(<\/p>)/gi;
  console.log(episode)
  return (
    <div className="card">
    {image ? <img
        className="card-img-top"
        src={image ? image.medium : ''}
        alt="Episode Card preview"
      />
      : <div className="card-no-img"> No preview image</div>
    }
      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <p className="card-text">
          {episode.summary
            ? `${episode.summary.substring(0, 255).replace(regex, '\n')}...`
            : ''}
            <a href={episode.url} >See more</a>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Season {episode.season} Episode {episode.number}</li>
        <li className="list-group-item">AirDate: {episode.airdate}</li>
      </ul>
    </div>
  );
}
