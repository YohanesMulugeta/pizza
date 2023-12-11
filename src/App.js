import { useState } from 'react';
import BoxWithHideAndDisplay from './components/reusables/BoxWithHideAndDisplay';
import ListBox from './components/main/ListBox';
import Main from './components/main/Main';
import WatchedBox from './components/main/WatchedBox';
import Nav from './components/Nav/Nav';
import NumResults from './components/Nav/NumRestults';
import Search from './components/Nav/Search';
import MovieDetail from './components/main/MovieDetail';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = '83c8782f';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [selectedMovie, setMovieId] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Nav>
        <Search
          KEY={KEY}
          setMovies={setMovies}
          setIsLoading={setIsLoading}
          setError={setError}
        />
        <NumResults movies={movies} />
      </Nav>

      <Main>
        <BoxWithHideAndDisplay>
          {!isLoading && !error && <ListBox movies={movies} setMovieId={setMovieId} />}
          {error && <ErrorMessage message={error} />}
          {isLoading && <Loader />}
        </BoxWithHideAndDisplay>
        <BoxWithHideAndDisplay>
          {selectedMovie ? (
            <MovieDetail
              KEY={KEY}
              selectedMovie={selectedMovie}
              onCloseMovie={() => setMovieId(null)}
            />
          ) : (
            <WatchedBox selectedMovie={selectedMovie} tempWatchedData={tempWatchedData} />
          )}
        </BoxWithHideAndDisplay>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  console.log(message);
  return (
    <p className="error">
      <span>☠️</span> {message}
    </p>
  );
}
