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

  const fetchPokemon = async (index) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      if (!response.ok) {
        throw new Error('Error en la red');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error encontrando pokémon con el id ${index}:`, error);
      return null;
    }
  };

  const fetchPokemonByName = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Ha ocurrido un error en la red');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error encontrando un pokémon con el nombre ${name}:`, error);
      return null;
    }
  };

  const getPokemonList = async (desde, hasta) => {
    const pokemonArray = [];
    for (let i = desde; i <= hasta; i++) {
      const pokemon = await fetchPokemon(i);
      if (pokemon) {
        pokemonArray.push(pokemon);
      } else {
        break;
      }
    }
    setPokemonList(pokemonArray);
  };

  const getPokemonByName = async (name) => {
    try {
      const pokemon = await fetchPokemonByName(name);
      if (pokemon) {
        setPokemonList([pokemon]);
      } else {
        setPokemonList([]);
      }
    } catch (error) {
      console.error('Error encontrando un pokémon con ese nombre:', error);
      setPokemonList([]);
    }
  };

  const clearSelectedPokemon = () => {
    setSelectedPokemon(null);
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
      <FormularioComponente getPokemon={getPokemonList} getPokemonByName={getPokemonByName} />
      {selectedPokemon && (
        <div className='selected-pokemon'>
          <h2>Pokémon seleccionado: {selectedPokemon.name}</h2>
          <PokemonDetailsComponent pokemon={selectedPokemon} clearSelectedPokemon={clearSelectedPokemon} />
        </div>
      )}
      <ul className='pokemon-list'>
        {pokemonCards}
      </ul>
    </div>
  );
}

export default PokemonListComponent;