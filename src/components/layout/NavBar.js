import { useContext } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

import FavoritesContext from "../../store/favorites-context";

function NavBar() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <>
      <header className={classes.header}>
        <Image
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon Logo"
        />
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/new">Add New</Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
