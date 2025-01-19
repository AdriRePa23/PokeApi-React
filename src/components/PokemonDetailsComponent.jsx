import React from 'react'
import './PokemonDetailsComponent.css'

function PokemonDetailsComponent(props) {
    const { pokemon } = props;
  return (
    <section className="selected-pokemon">
        <div className="pokemon-container">
            <h2 className="pokemon-text">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-text" />

            <h3 className="pokemon-stats">{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</h3>
            <h3 className="pokemon-stats">{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</h3>
            <h3 className="pokemon-stats">{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</h3>
            <h3 className="pokemon-stats">{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</h3>
            <h3 className="pokemon-stats">{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</h3>
            <h3 className="pokemon-stats">{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</h3>



        </div>
    </section>
  )
}

export default PokemonDetailsComponent