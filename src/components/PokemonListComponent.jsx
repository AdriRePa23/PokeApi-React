import React, { useEffect, useState } from 'react';
import PokemonCardComponent from './PokemonCardComponent';
import './PokemonListComponent.css';
import FormularioComponente from './FormularioComponente';
import PokemonDetailsComponent from './PokemonDetailsComponent';

function PokemonListComponent(props) {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList(1, 10);
  }, []);

  const fetchPokemons = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  };

  const getPokemonList = async (desde, hasta) => {
    const pokemonArray = [];
    for (let i = desde; i <= hasta; i++) {
      const pokemon = await fetchPokemons(i);
      pokemonArray.push(pokemon);
    }
    setPokemonList(pokemonArray);
  };

  const pokemonCards = pokemonList.map((pokemon) => (
    <PokemonCardComponent
      key={pokemon.id}
      pokemon={pokemon}
      selectPokemon={setSelectedPokemon}
    />
  ));

  return (
    <div>
      <FormularioComponente getPokemon={getPokemonList} />
      {selectedPokemon && (
        <div className='selected-pokemon'>
          <h2>Pokémon seleccionado: {selectedPokemon.name}</h2>
          <PokemonDetailsComponent pokemon={selectedPokemon} />
        </div>
      )}
      <ul className='pokemon-list'>
        {pokemonCards}
      </ul>
    </div>
  );
}

export default PokemonListComponent;