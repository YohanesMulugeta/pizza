import { useState } from 'react';

import Summary from './Sumarry';
import WatchedList from './WatchedList';

function WatchedBox({ tempWatchedData }) {
  const [watched] = useState(tempWatchedData);

  return (
    <>
      <Summary watched={watched} />
      <WatchedList watched={watched} />
    </>
  );
}

export default WatchedBox;
