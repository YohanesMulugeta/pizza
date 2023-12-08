import MovieCard from './MovieCard';
import MovieFeature from './MovieFeature';
import BoxWithHideAndDisplay from '../reusables/BoxWithHideAndDisplay';

function ListBox({ movies }) {
  const movieLists = movies?.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie}>
      <MovieFeature icon="🗓" feature={movie.Year} />
    </MovieCard>
  ));

  return (
    <BoxWithHideAndDisplay>
      <ul className="list">{movieLists}</ul>
    </BoxWithHideAndDisplay>
  );
}

export default ListBox;
