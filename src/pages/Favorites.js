import { useContext } from "react";
import { Row } from "react-bootstrap";
import PokemonList from "../components/pokemon/PokemonList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  console.log(favoritesCtx.favorites);
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <Row>
        <h4>Whoops! Nothing here...</h4>
        <h5>Head back to all to add a favorite!</h5>{" "}
      </Row>
    );
  } else {
    content = <PokemonList data={favoritesCtx.favorites} />;
  }
  return (
    <Row>
      <h2>My Favorites</h2>
      {content}
    </Row>
  );
}

export default FavoritesPage;
