import MovieCard from './MovieCard';
import MovieFeature from './MovieFeature';

function ListBox({ movies }) {
  const movieLists = movies?.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie}>
      <MovieFeature icon="🗓" feature={movie.Year} />
    </MovieCard>
  ));

  return <ul className="list">{movieLists}</ul>;
}

export default ListBox;
