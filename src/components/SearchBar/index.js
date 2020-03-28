import React, { useState } from 'react';
import './style.css';
import { useMovie } from '../../context/movie-context';

export default function Searchbar({ onInputChange }) {
  const [input, setInput] = useState('');
  const { setCurrentMovie } = useMovie();
  function handleSubmit(event) {
    event.preventDefault();
    if (input !== '') {
      setCurrentMovie(input);
    }
  }

  return (
    <nav class="navbar navbar-light fixed-top bg-light justify-content-between mb-20">
      <a class="navbar-brand" href="/" >Movie App</a>
      <form class="form-inline" onSubmit={handleSubmit}>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={event => setInput(event.target.value)}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
