
import React from "react";
import "../App.css";

const PokemonCard = ({ pokemonDatas }) => {
    console.log(pokemonDatas)
  return (
    <div className="pokemon-container">
      {pokemonDatas?.map((pokemon, idx) => (
        <div className="pokemon-card" key={idx}>
          <div className="pokemon-image">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div>
            <p className="pokemon-number">#{pokemon.number}</p>
          </div>
          <div>
            <p className="pokemon-name">{pokemon.name}</p>
            <p className="pokemon-type">Types: {pokemon.types}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
