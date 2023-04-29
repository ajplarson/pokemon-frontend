import { Row } from "react-bootstrap";
import PokemonList from "../components/pokemon/PokemonList";
import { useState, useEffect } from "react";

function AllPokemonPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemon, setLoadedPokemon] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/api/pokemon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Origin, Content-Type",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setIsLoading(false);
        setLoadedPokemon(responseJson._embedded.pokemons);
      });
  }, []);

  if (isLoading) {
    return (
      <Row>
        <p>Loading...</p>
      </Row>
    );
  }
  return (
    <Row>
      <Row>
        <h2>All Pokemon</h2>
      </Row>
      <Row>
        {" "}
        <PokemonList data={loadedPokemon} />
      </Row>
    </Row>
  );
}

export default AllPokemonPage;
