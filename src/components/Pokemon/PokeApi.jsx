import { useEffect } from "react";

const PokeApi = ({ setPokemonDetails }) => {
  useEffect(() => {
    const fetchAllPokemonDetails = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      const data = await response.json();
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((resp) => resp.json())
      );
      const pokemonDetails = await Promise.all(promises);
      setPokemonDetails(pokemonDetails);
      console.log(pokemonDetails);
    };
    fetchAllPokemonDetails();
  }, [setPokemonDetails]);

  return null;
};

export default PokeApi;
