// RUTA MADRE o ROUTER PADRE
import { Route, Routes } from "react-router";
//
import { HeroesRoutes } from "../heroes";

// import { DcPage } from "../heroes/pages/DcPage";
// import { MarvelPage } from "../heroes/pages/MarvelPage";

//

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
