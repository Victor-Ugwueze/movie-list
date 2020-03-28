import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchMovie(searchInput) {
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState("pending");
    const [error, setError] = useState(null)

   useEffect(() => {
      async function search(){
        setStatus('pending');
        let url = `https://api.tvmaze.com/singlesearch/shows?q=${searchInput}&embed=episodes`;
        try {
          let result = await axios.get(url)
          setMovie(result.data);
          setError(null);
          setStatus("finished");
        }catch({ response }){
          if( response && response.status === 404) {
            setError({ status: 404, message: 'movie not found' })
          } else {
             setError({ status: 500, message: 'Server error, please try again...' })
          }
          setStatus("finished");
        }
      }
        search();
    }, [searchInput]);
    return {
        movie,
        status,
        error
    }
}