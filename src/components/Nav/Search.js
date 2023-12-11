import { useEffect, useState } from 'react';

const KEY = '83c8782f';

function Search({ setMovies }) {
  const [query, setQuery] = useState('');
  const [debounce, setDebounce] = useState('');

  useEffect(
    function () {
      (async () => {
        if (query) {
          const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

          const response = await fetch(url);

          const { Search } = await response.json();

          if (Search) setMovies(Search);
        }
      })();
    },
    [setMovies, query]
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
