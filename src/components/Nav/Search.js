import { useEffect, useState } from 'react';

const KEY = '83c8782f';

function Search({ setMovies }) {
  const [query, setQuery] = useState('');
  const [debounce, setDebounce] = useState('');

  const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

  useEffect(
    function () {
      if (query)
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.Search) setMovies(data.Search);
          });
    },
    [setMovies, query, url]
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
