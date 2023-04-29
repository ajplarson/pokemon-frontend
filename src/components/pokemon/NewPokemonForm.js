import { Button, Form } from "react-bootstrap";
import { useRef } from "react";
import PropTypes from "prop-types";

function NewPokemonForm(props) {
  const nameInputRef = useRef();
  const typeInputRef = useRef();
  const numberInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const submittedPokemon = {
      name: nameInputRef.current.value,
      type: typeInputRef.current.value,
      pokedexNumber: numberInputRef.current.value,
    };
    props.onAdd(submittedPokemon);

    console.log(submittedPokemon);
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Pokemon Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Pokemon name"
          ref={nameInputRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>Pokemon Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="(i.e., water, fire)"
          ref={typeInputRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNumber">
        <Form.Label>Pokemon Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter number (i.e., #152)"
          ref={numberInputRef}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add your New Pokemon!
      </Button>
    </Form>
  );
}
NewPokemonForm.propTypes = {
  onAdd: PropTypes.func,
};
export default NewPokemonForm;
