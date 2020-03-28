import React, { useState } from 'react';

import { useFetchMovie } from '../hooks/movies';

const MovieContext = React.createContext();


function MovieProvider(props){
  const [input, setCurrentMovie] = useState('merlin');
  const  { movie, status, error } = useFetchMovie(input);
  return (
    <MovieContext.Provider value={{ movie, status, error, setCurrentMovie }} {...props}/>
  )
}


const useMovie = () => React.useContext(MovieContext);


export { MovieProvider, useMovie };