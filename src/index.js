import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import StarRating from './components/StarRating';
// import App from './App';

// import './index.css';

const root = createRoot(document.getElementById('root'));

function Test() {
  const [rating, setRating] = useState(0);

  console.log(rating);

  return (
    <StarRating
      onSet={setRating}
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']}
    />
  );
}

root.render(
  <React.StrictMode>
    <Test />
    <StarRating
      maxRating={5}
      size={20}
      className="test"
      color="tomato"
      defaultRating={3}
    />
  </React.StrictMode>
);
// root.render(<App />);
