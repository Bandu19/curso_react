import { Navigate, Route, Routes } from "react-router";
import { DcPage, HeroPages, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui";
// import { SearchPages } from "../pages/SearchPages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPages />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
