import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Menu from './components/Manu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
