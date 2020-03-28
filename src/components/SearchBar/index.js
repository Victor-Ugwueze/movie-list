import React, { useState } from 'react';
import './style.css';
import { useMovie } from '../../context/movie-context';

export default function Searchbar({ onInputChange }) {
  const [input, setInput] = useState('');
  const { setCurrentMovie } = useMovie();

  const handleSubmit = event => {
    event.preventDefault();
    if (input !== '') {
      setCurrentMovie(input);
    }
  }

  return (
    <nav className="navbar navbar-light fixed-top bg-light justify-content-between mb-20">
      <a className="navbar-brand" href="/" >Movie App</a>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={event => setInput(event.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
