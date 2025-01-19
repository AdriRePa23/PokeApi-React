import React, { useEffect, useState } from 'react'
import PokemonCardComponent from './PokemonCardComponent'
import './PokemonListComponent.css'

function PokemonListComponent() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList(10);
  }, []);


  const fetchPokemons = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  }

  const getPokemonList = async (cantidad) => { 
    const pokemonArray = [];
    for (let i = 1; i <= cantidad; i++) {
      const pokemon = await fetchPokemons(i);
      pokemonArray.push(pokemon);
    }
    setPokemonList(pokemonArray);
  }

  const pokemonCards = pokemonList.map((pokemon) => {
    return <PokemonCardComponent key={pokemon.id} pokemon={pokemon} />;
  });


  return (
    <ul className='pokemon-list'>
        {pokemonCards}
    </ul>
  )
}

export default PokemonListComponent