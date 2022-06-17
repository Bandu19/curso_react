import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPages = () => {
  //OBTENER los parametros
  // TIENE QUE VER CON HeroesRoutes.jsx el <Route> del <HeroPages>
  // const { id, ...rest } = useParams(); // Desustructuramos// CUIDADO
  // console.log(id, rest);
  const { id } = useParams();
  const hero = getHeroById(id);
  console.log(hero);

  // SI EL HEROE NO EXISTE
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return <h1>{hero.superhero}</h1>;
};
