import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonListComponent from './components/PokemonListComponent';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <h1 className='title'>Pokédex</h1>
      <PokemonListComponent />
      {showScroll && (
        <button className='scroll-to-top' onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default App;