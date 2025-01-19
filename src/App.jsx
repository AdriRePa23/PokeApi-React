import { useState } from 'react'
import './App.css'
import PokemonListComponent from './components/PokemonListComponent'
import PokemonDetailsComponent from './components/PokemonDetailsComponent'


function App() {
  return (
    <>
      <h1 className='title'>Pokédex</h1>
      <PokemonListComponent />
    </>
  )
}

export default App
