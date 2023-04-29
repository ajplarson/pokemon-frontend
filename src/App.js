import { Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import AllPokemonPage from "./pages/AllPokemon";
import FavoritesPage from "./pages/Favorites";
import NewPokemonPage from "./pages/NewPokemon";

function App() {
  return (
    <Container fluid>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Routes>
          <Route path="/" element={<AllPokemonPage />} />
          <Route path="/new" element={<NewPokemonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Row>
    </Container>
  );
}

export default App;
