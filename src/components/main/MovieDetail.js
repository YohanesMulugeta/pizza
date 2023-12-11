import { useEffect } from 'react';

function MovieDetail({ selectedMovie, KEY, onCloseMovie }) {
  // useEffect(() => {
  //   (async () => {
  //     if (selectedMovie) {
  //       const res = await fetch(`http://www.omdbapi.com/?apikey=[yourkey]&`);
  //     }
  //   })();
  // }, [selectedMovie]);

  return (
    <div className="details">
      {selectedMovie}
      <button onClick={onCloseMovie} className="btn-back">
        &larr;
      </button>
    </div>
  );
}

export default MovieDetail;
