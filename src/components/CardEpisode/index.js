import React from 'react';
import './style.css';
import ReactHtmlParser from 'react-html-parser';

export default function MovieCard({ episode }) {
  const { image } = episode;
  const regex = /(<p>)|(<\/p>)/gi;
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
        <h5 className="card-title">{episode.name}</h5>
       <ul className="list-group list-group-flush">
        <li className="list-group-item">Season {episode.season} Episode {episode.number}</li>
        <li className="list-group-item">AirDate: {episode.airdate}</li>
      </ul>
        <p className="card-text">
          {/* {episode.summary
            ? `${episode.summary.substring(0, 255).replace(regex, '\n')}...`
            : ''}
            <a href={episode.url} >See more</a> */}
        </p>
        {ReactHtmlParser(episode.summary)}
      </div>
    </div>
   </a>
  );
}
