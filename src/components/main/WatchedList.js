import MovieCard from './MovieCard';
import MovieFeature from './MovieFeature';

function WatchedList({ watched }) {
  const watchedList = watched.map((movie) => {
    return (
      <MovieCard movie={movie} key={movie.imdbID}>
        <MovieFeature icon="⭐️" feature={movie.imdbRating} />
        <MovieFeature icon="🌟" feature={movie.userRating} />
        <MovieFeature icon="⏳" feature={`${movie.runtime} min`} />
      </MovieCard>
    );
  });

  return <ul className="list">{watchedList}</ul>;
}

export default WatchedList;
