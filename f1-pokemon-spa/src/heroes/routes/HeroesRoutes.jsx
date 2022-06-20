// RUTA HIJO

import { Navigate, Route, Routes } from "react-router";
import { PokiPages, PokemonesPages, SearchPage } from "../pages";
import { Navbar } from "../../ui";

// import { SearchPages } from "../pages/SearchPages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="pokemons" element={<PokemonesPages />} />

          <Route path="search" element={<SearchPage />} />
          {/* MANDAR UN COMODIN ES DECIR UN SEGMENTO */}
          <Route path="pokemons/:id" element={<PokiPages />} />

          <Route path="/" element={<Navigate to="/pokemons" />} />
        </Routes>
      </div>
    </>
  );
};
