// Desestructuración Arreglos.
const personajes = ["Arreglo1", "Arreglo2", "Arreglo3"];
const [, , p3] = personajes; // EJEMPLO Desestructuración Arreglos.
console.log(p3);

// Segundo Ejercisio.
const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

///////////////////////////////////------{-->TAREA<--}------////////////////////////////////

const usarEstado = (valor) => {
  return [
    valor,
    // Este es una Funcion
    () => {
      console.log("Hola Mundo");
    },
  ];
};

// 1. El primer valor del arr se llamara nombre
// 2. Se llamara setNombre

const [nombre, setNombre] = usarEstado("Goku");
console.log(nombre); // Se llama a la variable
setNombre(); // Se llama a la funcion

const funtion = (v1) => {
  return [
    v1,
    () => {
      console.log("HOLA MUNDO");
    },
  ];
};

const [nVariable, nFuncion2] = funtion("Nvariable");
console.log(nVariable);
nFuncion2();
