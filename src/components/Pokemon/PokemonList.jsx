import { useState } from "react";
import Buscador from "../Buscador/Buscador";
import PokeApi from "./PokeApi";
import PokemonCard from "./PokemonCard";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonList = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = () => {
    const sortedPokemon = [...pokemonDetails].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setPokemonDetails(sortedPokemon);
  };

  const handleReverseSort = () => {
    const sortedPokemon = [...pokemonDetails].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setPokemonDetails(sortedPokemon);
  };

  const filteredPokemon = pokemonDetails.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Buscador
        setSearchTerm={setSearchTerm}
        handleSort={handleSort}
        handleReverseSort={handleReverseSort}
      />
      <PokeApi setPokemonDetails={setPokemonDetails} />
      <PokemonCard
        capitalizeFirstLetter={capitalizeFirstLetter}
        filteredPokemon={filteredPokemon}
      />
    </>
  );
};

export default PokemonList;
