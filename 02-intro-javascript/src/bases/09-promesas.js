// PROMESAS
// const promesas = new Promise(); // Promesa Normal
import { getHeroeById, getHeroeByOwner } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("2, segundos despues");
//     const p1 = getHeroeById(2);
//     // resolve(p1);
//     // console.log(heroe);
//     reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// //then ==> Si la promesa se hizo correctamente
// // promesa.then((heroe) => {
// //   console.log("heroe", heroe);
// // });

// // catch ==> Cuando te dio un error
// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

//finaly ==> Se ejecuta despues del catch o then

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const v1 = getHeroeById(id);
      //SI ES TRUE
      if (v1) {
        resolve(v1);
      }
      // SI ES FALSE
      else {
        reject("No se pudo encontrar el heroe");
      }
    }, 1000);
  });

  return promesa;
};

getHeroeByIdAsync(1)
  // .then((heroe) => console.log("Heroe", heroe))
  .then(console.log)
  // .catch((err) => console.warn(err));
  .catch(console.warn);

const getHeroeByOwnerAsync = (owner) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const v2 = getHeroeByOwner(owner);
      if (v2 == v2) {
        resolve(v2);
      } else {
        reject("No esta la clasificacion");
      }
    }, 1000);
  });

  return promesa;
};

getHeroeByOwnerAsync("DC").then(console.log).catch(console.warn);
