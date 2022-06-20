import { useState, useEffect } from "react";
// import axios from "axios";

export const UsePoki = (id) => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // hacemos la petición get
      .then((res) => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then((res) =>
        setName([
          res.name,
          res.base_experience,
          res.sprites.other.home.front_default,
          res.stats[0].base_stat,
          res.stats[1].base_stat,
          res.stats[2].base_stat,
          res.stats[3].base_stat,
        ])
      ); // cuando hayamos terminado (then) actualizamos el estado nombre
  }, []);

  return (
    <div className="row mt-4">
      <h1>{name[0]}</h1>

      <div className="col-4">
        <img src={name[2]} alt={name[0]} className="img-thumbnail"></img>
      </div>

      <div className="col-8">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b className="text-muted">N°Pokemon: </b>
            {id}
          </li>
          <li className="list-group-item">
            <b>HP:</b>
            {name[3]}
          </li>

          <li className="list-group-item">
            <b>Experiencia: </b>
            {name[1]}
          </li>
          <li className="list-group-item">
            <b>Ataque: </b>
            {name[4]}
          </li>
        </ul>

        <h5 className="mt-3">Datos Interesantes</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Defensa: </b>
            {name[5]}
          </li>
          <li className="list-group-item">
            <b>Especial: </b>
            {name[6]}
          </li>
        </ul>
      </div>
    </div>
  );
};
