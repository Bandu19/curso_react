import { Link } from "react-router-dom";
import { UsePokemon } from "../data/UsePokemon ";

export const HeroesList = ({ url }) => {
  const estado = UsePokemon(url);
  const { cargando, data } = estado;
  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <div className="card-columns">
          <div className="card">
            <div className="card-img-top img-fluid">
              <img
                src={data.sprites.other.home.front_default} //MANDAR A LLAMAR LA IMAGEN //56:33
                className="card-img"
                alt="SuperHero"
              />
            </div>
            <div className="text-center card-block">
              <h4 className="card-text">{data.forms[0].name}</h4>
              <p className="text-muted">#0{data.id}</p>
              <Link to={`/pokemons/${data.id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
