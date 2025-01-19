import React from 'react'
import PokemonCardComponent from './PokemonCardComponent'

function PokemonListComponent() {
  return (
    <ul className='pokemon-list'>
        <PokemonCardComponent />
    </ul>
  )
}

export default PokemonListComponent