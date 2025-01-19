import React from 'react';
import './PokemonCardComponent.css';

function PokemonCardComponent(props) {
  const { pokemon, selectPokemon } = props;
  return (
    pokemon.id ? (
      <li className='pokemon-card' onClick={() => selectPokemon(pokemon)}>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name} 
          className="pokemon-img" 
        />
      </li>
    ) : (
      <h2 className='loading'>Cargando...</h2>
    )
  );
}

export default PokemonCardComponent;