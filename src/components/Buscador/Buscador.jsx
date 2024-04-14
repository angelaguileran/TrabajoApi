import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Buscador = ({ setSearchTerm, handleSort, handleReverseSort }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <Form>
      <Form.Group controlId="search" className="mx-5 my-3">
        <Form.Control
          type="text"
          placeholder="Buscar Pokémon"
          value={searchInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-center mb-2">
        <Button variant="primary" className="mx-2" onClick={handleSort}>
          Orden Alfabético
        </Button>
        <Button variant="primary" onClick={handleReverseSort}>
          Orden Alfabético Inverso
        </Button>
      </div>
    </Form>
  );
};

export default Buscador;
