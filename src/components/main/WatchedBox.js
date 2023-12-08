import { useState } from 'react';
import BoxWithHideAndDisplay from '../reusables/BoxWithHideAndDisplay';
import Summary from './Sumarry';
import WatchedList from './WatchedList';

function WatchedBox({ tempWatchedData }) {
  const [watched] = useState(tempWatchedData);

  return (
    <BoxWithHideAndDisplay>
      <Summary watched={watched} />
      <WatchedList watched={watched} />
    </BoxWithHideAndDisplay>
  );
}

export default WatchedBox;
