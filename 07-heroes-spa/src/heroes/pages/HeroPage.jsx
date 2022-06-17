import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPages = () => {
  //OBTENER los parametros
  // TIENE QUE VER CON HeroesRoutes.jsx el <Route> del <HeroPages>
  // const { id, ...rest } = useParams(); // Desustructuramos// CUIDADO
  // console.log(id, rest);
  const { id } = useParams();
  const hero = getHeroById(id);
  console.log(hero);

  const navegador = useNavigate();

  const onNavigateBack = () => {
    /**
     *
     */
    navegador(-1, {
      replace: true,
    });
  };

  // SI EL HEROE NO EXISTE
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const heroImage = `/assets/heroes/heroes/${hero.id}.jpg`;

  return (
    <>
      <div className="row mt-4">
        <h1>{hero.publisher}</h1>

        <div className="col-4">
          <img
            src={heroImage}
            alt={hero.superhero}
            className="img-thumbnail"
          ></img>
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b>
              {hero.alter_ego}
            </li>

            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.publisher}
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <ul>
            <li className="list-group-item">
              <p>{hero.characters}</p>
            </li>
          </ul>
          <button className="btn btn-outline-primary" onClick={onNavigateBack}>
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};
