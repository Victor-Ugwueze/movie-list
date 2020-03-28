import React, { useState } from 'react';
import MovieCard from '../components//MovieCard';
import { useMovie } from '../context/movie-context';
import Loader from '../components/Loader';

export default function MovieList() {
  const { status, error, movie } = useMovie();

  if (status === 'pending') return <Loader className="full-page" />;
  let episodes = movie._embedded.episodes;

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          {episodes.map(episode => (
            <MovieCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
}
