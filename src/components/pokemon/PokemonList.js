import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

function PokemonList(props) {
  return (
    <Container>
      <Row>
        {props.data.map((currentPokemon) => {
          return (
            <Col
              className="col-sm-4 col-md-4 col-lg-2 col-xl-2"
              style={{ paddingTop: "5px" }}
              key={currentPokemon.id}
            >
              <Pokemon
                key={currentPokemon.id}
                id={currentPokemon.id}
                pokedexNumber={currentPokemon.pokedexNumber}
                name={currentPokemon.name}
                image={currentPokemon.image}
                type={currentPokemon.type}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

PokemonList.propTypes = {
  data: PropTypes.array,
};

export default PokemonList;
