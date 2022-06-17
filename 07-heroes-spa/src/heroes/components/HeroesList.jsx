import React from "react";
import { getHeroesByPublisher } from "../helpers";

export const HeroesList = ({ publisher }) => {
  /**
   * Aqui en el metodo getHeroesByPublisher devuelve todos
   * lo que eran de "DC Comics" o "Marvel" en la variable
   * heroes.
   */

  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        //Siempre es obligatorio poner un IDENTIFICADOR
        <li key={hero.id}>
          {/*  */}
          {hero.superhero}
        </li>
      ))}
    </ul>
  );
};
