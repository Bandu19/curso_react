import { UsePokemon } from "../data/UsePokemon ";

export const HeroesList = ({ url }) => {
  const estado = UsePokemon(url);
  const { cargando, data } = estado;
  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <div className="cards" style={{ width: "14rem" }}>
          <div className="card-header">
            <h5 className="card-title">{data.id}</h5>
          </div>

          <div className="card-body">
            <img
              src={data.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
          </div>
          <div className="card-footer">
            <p className="card-text text-capitalize">{data.forms[0].name}</p>
          </div>
        </div>
      )}
    </div>
  );
};
