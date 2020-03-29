import React from 'react';
import MovieCard from '../components/CardEpisode';
import { useMovie } from '../context/movie-context';
import Loader from '../components/Loader';

export default function MovieList() {
  const { status, error, movie } = useMovie();

  if (status === 'pending') return <Loader className="full-page" />;

  let { episodes } = movie._embedded;

  return (
    <div className="error-block d-flex justify-content-center">
      {error ? (
        <div
          className={`alert alert-${error.status === 404 ? 'secondary' : 'danger'}`}
          role="alert"
        >
          {error.message}
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
        <h1>{movie.name}</h1>
          {episodes.map(episode => (
            <MovieCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </div>
  );
}
