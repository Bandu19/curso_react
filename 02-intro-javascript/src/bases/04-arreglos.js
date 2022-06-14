// Arreglos
// const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5]; // Otra manera de utilizar el operedor Spread

const arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

// Un ejemplo de llamar un callback
const arreglo4 = arreglo3.map((numero2) => {
  return numero2 * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);
