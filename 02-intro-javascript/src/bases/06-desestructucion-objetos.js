// Desestructuración Objetos
/**
 * Para mas Información.
 * Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

//Llamar el objeto literal

// const { nombre, edad, clave } = persona; // EJEMPLO de Desestructuración

// console.log(nombre, edad, clave);

///////////////////////////////////------{-->RETO<--}------////////////////////////////////

const usuarioPersonal = ({ nombre, edad, clave, rango = "Capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    lattng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

// const avenger = useContext(persona);  // EJEMPLO de Desestructuración

///////////////////////////////------{-->RESULTADO<--}------//////////////////////////////////////

const { nombreClave, anios, lattng } = usuarioPersonal(persona);
const { lat, lng } = lattng; // EJEMPLO de Desestructuración

console.log(nombreClave, anios);

console.log(lat, lng);
