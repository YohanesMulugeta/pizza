import { useEffect, useState } from 'react';

function Search({ setMovies, setIsLoading, setError, KEY }) {
  const [query, setQuery] = useState('');
  const [debounce, setDebounce] = useState('');

  useEffect(
    function () {
      (async () => {
        try {
          if (query) {
            setIsLoading(true);
            setError('');

            const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

            const res = await fetch(url);

            if (!res.ok) throw new Error('Something went wrong with fetching movies');

            const { Search, Response } = await res.json();

            console.log(Search);

            if (Response === 'False')
              throw new Error('Movie not found! Try with different title.');

            setMovies(Search);
          }
        } catch (err) {
          setError(err.message);
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      })();
    },
    [setMovies, query, setIsLoading]
  );

  useEffect(
    function () {
      const timeoutId = setTimeout(() => {
        setQuery(debounce);
      }, 300);

      return () => clearTimeout(timeoutId);
    },
    [debounce]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={debounce}
      onChange={(e) => setDebounce(e.target.value)}
    />
  );
}

export default Search;
