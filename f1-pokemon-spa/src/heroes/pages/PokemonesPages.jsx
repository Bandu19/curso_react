import { useState } from "react";
import { Cards } from "../components/Cards";
import { UsePokemon } from "../data/UsePokemon ";

export const PokemonesPages = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=50");

  const estado = UsePokemon(url);
  const { cargando, data } = estado;

  cargando ? console.log("cargando") : console.log(data.results);

  return (
    <>
      {
        // SI ES CIERTO
        cargando ? (
          //
          <h1>Cargando...</h1>
        ) : (
          // SI ES FALSO
          <Cards results={data.results} />
        )
      }
    </>
  );
};
