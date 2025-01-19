import React from 'react';
import './PokemonDetailsComponent.css';

function PokemonDetailsComponent(props) {
  const { pokemon } = props;
  return (
    <section className="selected-pokemon">
      <div className="pokemon-container">
        <h2 className="pokemon-text">{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img" />
        {pokemon.stats.map((stat, index) => (
          <h3 key={index} className="pokemon-stats">
            {stat.stat.name}: {stat.base_stat}
          </h3>
        ))}
      </div>
    </section>
  );
}

export default PokemonDetailsComponent;