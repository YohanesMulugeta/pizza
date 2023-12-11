function MovieCard({ movie, children, onClick }) {
  return (
    <li onClick={onClick}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>{children}</div>
    </li>
  );
}

export default MovieCard;
