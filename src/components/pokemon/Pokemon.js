import PropTypes from "prop-types";
import { useContext } from "react";
import { Button, Badge, Card } from "react-bootstrap";
import FavoritesContext from "../../store/favorites-context";

function Pokemon({ id, pokedexNumber, name, image, type }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatus() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        pokedexNumber: pokedexNumber,
        name: name,
        image: image,
        type: type,
      });
    }
  }

  return (
    <>
      <Card key={id}>
        <Card.Img src={image} alt="image of ${name}" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="text-muted">{pokedexNumber}</Card.Subtitle>
          <Card.Text>
            {type === "fire" && (
              <Badge pill bg="danger">
                Type: {type}
              </Badge>
            )}
            {type === "grass" && (
              <Badge pill bg="success">
                Type: {type}
              </Badge>
            )}
            {type === "water" && (
              <Badge pill bg="info">
                Type: {type}
              </Badge>
            )}
            {type !== "fire" && type !== "grass" && type !== "water" && (
              <Badge pill bg="dark">
                Type: {type}
              </Badge>
            )}
          </Card.Text>
          {itemIsFavorite ? (
            <Button
              variant="outline-warning"
              size="sm"
              onClick={toggleFavoriteStatus}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={toggleFavoriteStatus}
            >
              Add to Favorites
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  pokedexNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Pokemon;
