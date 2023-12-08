import MovieFeature from './MovieFeature';

const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Summary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <MovieFeature icon="#️⃣" feature={`${watched.length} movies`} />
        <MovieFeature icon="⭐️" feature={avgImdbRating} />
        <MovieFeature icon="🌟" feature={avgUserRating} />
        <MovieFeature icon="⏳" feature={`${avgRuntime} min`} />
      </div>
    </div>
  );
}

export default Summary;
