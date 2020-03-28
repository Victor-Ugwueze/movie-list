import React from 'react';
import MovieCard from '../components//MovieCard';
import { useMovie } from '../context/movie-context';
import Loader from '../components/Loader';

export default function MovieList() {
  const { status, error, movie } = useMovie();

  if (status) return <Loader className="d-flex full-page" />;

  let { episodes } = movie._embedded;

  return (
    <div className="error-block d-flex justify-content-center">
      {error ? (
        <div className="alert alert-info" role="alert">{error}</div>
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
