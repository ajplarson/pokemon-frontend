import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // eslint-disable-next-line no-unused-vars
  addFavorite: (favoriteItem) => {},
  // eslint-disable-next-line no-unused-vars
  removeFavorite: (pokemonId) => {},
  // eslint-disable-next-line no-unused-vars
  itemIsFavorite: (pokemonId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteItem) {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.concat(favoriteItem);
    });
  }

  function removeFavoriteHandler(pokemonId) {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.filter((item) => item.id !== pokemonId);
    });
  }

  function itemIsFavoriteHandler(pokemonId) {
    return userFavorites.some((item) => item.id === pokemonId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

FavoritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
