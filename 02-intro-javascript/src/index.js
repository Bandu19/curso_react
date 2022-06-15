// Import, export y funciones comunes de arreglos
import { heroes } from "./data/heroes";

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

/** OTRA MANERA  */

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(2));

// Find? ==> filter
const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroeByOwner("Marvel"));
