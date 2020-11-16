import { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'SET_MOVIE':
      return {
        ...state,
        movie: action.data,
        error: null,
        status: 'finished',
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
        status: 'finished',
      };
    default:
      throw new Error();
  }
}

export function useFetchMovie(searchInput) {
  const [state, dispatch] = useReducer(reducer, {
    movie: null,
    status: 'pending',
    error: null,
  });

  const baseURL = process.env.REACT_APP_API_URL

  useEffect(() => {
    async function search() {
      dispatch({ type: 'SET_STATUS', status: 'pending' });
      let url = `${baseURL}shows?q=${searchInput}&embed=episodes`;
      try {
        let result = await axios.get(url);
        dispatch({ type: 'SET_MOVIE', data: result.data });
      } catch ({ response }) {
        if (response && response.status === 404) {
          dispatch({
            type: 'SET_ERROR',
            error: { status: 404, message: 'movie not found' },
          });
        } else {
          dispatch({
            type: 'SET_ERROR',
            error: {
              status: 500,
              message: 'Server error, please try again...',
            },
          });
        }
      }
    }
    search();
  }, [searchInput]);
  return {
    ...state,
  };
}
