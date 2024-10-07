import Navbar from "./Navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";

function App() {
  const [pokemonDatas, setPokemonDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();
            
            const detailedData = await Promise.all(
              data.results.map(async (pokemon) => {
                const pokemonDetailResponse = await fetch(pokemon.url);
                const pokemonDetailData = await pokemonDetailResponse.json();
                return {
                  name: pokemonDetailData.name,
                  image: pokemonDetailData.sprites.front_default,
                  types: pokemonDetailData.types[0].type.name,
                  number: pokemonDetailData.base_experience,
                };
              })
            );
    

      console.log(detailedData);
      setPokemonDatas(detailedData);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="pokemon-container">
        <PokemonCard pokemonDatas={pokemonDatas}  />
      </div>
    </div>
  );
}

export default App;


