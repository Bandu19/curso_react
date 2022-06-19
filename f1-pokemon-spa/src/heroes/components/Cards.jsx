import React from "react";
import { HeroesList } from "./HeroesList";

export const Cards = ({ results }) => {
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-5">
      {/* aqui tenemos que mapear los results para obtener url de
                  cada uno de los 20 pokemones.
              */}
      {results.map((p) => (
        <HeroesList key={p.name} url={p.url} />
      ))}
    </div>
  );
};
