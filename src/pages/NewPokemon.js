import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NewPokemonForm from "../components/pokemon/NewPokemonForm";

function NewPokemonPage() {
  const navigate = useNavigate();

  function addPokemonHandler(data) {
    fetch("http://localhost:8080/api/pokemon", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Origin, Content-Type",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <Row>
      <h2>Add a new Pokemon</h2>
      <NewPokemonForm onAdd={addPokemonHandler} />
    </Row>
  );
}

export default NewPokemonPage;
