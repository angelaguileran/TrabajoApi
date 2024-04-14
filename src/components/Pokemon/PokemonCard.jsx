import { Card } from "react-bootstrap";

const PokemonCard = ({ filteredPokemon, capitalizeFirstLetter }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {filteredPokemon.map((pokemon, index) => (
        <div key={pokemon.id} className="mx-2 my-2">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Header as="h5">
              {capitalizeFirstLetter(pokemon.name)}
            </Card.Header>
            <div className="d-flex">
              {" "}
              <Card.Img
                variant="top"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <Card.Img
                variant="top"
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
              />
            </div>

            <Card.Body>
              <Card.Text>N° PokeDex: {pokemon.id}</Card.Text>{" "}
            </Card.Body>
            <Card.Footer>
              <Card.Text>Peso: {pokemon.weight}KG</Card.Text>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
