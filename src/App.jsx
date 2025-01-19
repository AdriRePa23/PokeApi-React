import { useState } from 'react'
import './App.css'
import PokemonListComponent from './components/PokemonListComponent'
import PokemonDetailsComponent from './components/PokemonDetailsComponent'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState()

  return (
    <>
      {selectedPokemon && (
        <div className='selected-pokemon'>
          <h2>Pokémon seleccionado: {selectedPokemon.name}</h2>
          <PokemonDetailsComponent pokemon={selectedPokemon} />
          </div>
      )}
      <h2>Lista de Pokémon</h2>
      <PokemonListComponent selectedPokemon={setSelectedPokemon} />
    </>
  )
}

export default App
