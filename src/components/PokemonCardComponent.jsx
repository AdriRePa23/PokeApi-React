import React, { useEffect, useState } from 'react'
import './PokemonCardComponent.css'

function PokemonCardComponent(props) {
    const { pokemon } = props;

  return (
    pokemon.id ? (
    <li className='pokemon-card'>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="pokemon-img" />
        <h3 className="pokemon-text">{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</h3>
        <h3 className="pokemon-text">{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</h3>
        <h3 className="pokemon-text">{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</h3>
        <h3 className="pokemon-text">{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</h3>
        <h3 className="pokemon-text">{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</h3>
        <h3 className="pokemon-text">{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</h3>
       
        
    </li>
    ) : (
        <h2 className='loading'>Cargando...</h2>
    )
  )
}

export default PokemonCardComponent