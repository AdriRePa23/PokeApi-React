import React, { useState } from 'react';
import './FormularioComponente.css';

function FormularioComponente(props) {
  const [desde, setDesde] = useState(1);
  const [hasta, setHasta] = useState(10);
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre) {
      props.getPokemonByName(nombre);
    } else {
      props.getPokemon(desde, hasta);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buscar Pokémon</h2>
      <fieldset className='form-fieldset'>
        <legend className='legend-fieldset'>Buscar Pokémon por rango</legend>
        <label htmlFor="desde" className='label-form'>Desde:</label>
        <input
          type="number"
          id="desde"
          name="desde"
          value={desde}
          min="1"
          max={props.totalPokemon}
          onChange={(e) => setDesde(e.target.value)}
          className='input-form'
        />
        <label htmlFor="hasta" className='label-form'>Hasta:</label>
        <input
          type="number"
          id="hasta"
          name="hasta"
          value={hasta}
          min="1"
          max={props.totalPokemon}
          onChange={(e) => setHasta(e.target.value)}
          className='input-form'
        />
        <button type="submit" className='btn-form'>Buscar</button>
      </fieldset>
      <fieldset className='form-fieldset'>
        <legend className='legend-fieldset'>Buscar Pokémon por nombre</legend>
        <label htmlFor="nombre" className='label-form'>Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className='input-form'
        />
        <button type="submit" className='btn-form'>Buscar</button>
      </fieldset>
    </form>
  );
}

export default FormularioComponente;