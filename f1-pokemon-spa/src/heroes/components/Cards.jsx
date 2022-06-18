import React from "react";
import { HeroesList } from "./HeroesList";

export const Cards = ({ results }) => {
  return (
    <div className="container">
      <ul className="Cards">
        {/* aqui tenemos que mapear los results para obtener url de
                  cada uno de los 20 pokemones.
              */}
        {results.map((p) => (
          <li className="card-item" key={p.name}>
            <HeroesList url={p.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
