// RUTA MADRE
import { Navigate, Route, Routes } from "react-router";
//
import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

// import { DcPage } from "../heroes/pages/DcPage";
// import { MarvelPage } from "../heroes/pages/MarvelPage";

//

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
