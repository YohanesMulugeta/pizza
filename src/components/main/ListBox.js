import MovieCard from './MovieCard';
import MovieFeature from './MovieFeature';

function ListBox({ movies, setMovieId }) {
  function handleOnMovieClick(movie) {
    setMovieId((selectedMovie) => (selectedMovie === movie.imdbID ? null : movie.imdbID));
  }

  const movieLists = movies?.map((movie) => (
    <MovieCard onClick={() => handleOnMovieClick(movie)} key={movie.imdbID} movie={movie}>
      <MovieFeature icon="🗓" feature={movie.Year} />
    </MovieCard>
  ));

  return <ul className="list list-movies">{movieLists}</ul>;
}

export default ListBox;
