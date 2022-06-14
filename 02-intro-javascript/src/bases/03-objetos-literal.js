const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 55545454,
    lat: 4545456,
    lng: 4445464,
  },
};

// Crear un objeto dentro tiene una propiedad
// console.log({ persona: persona }); o
console.table({ persona });

console.log(persona);

// const persona2 = persona; // Copia de referencia

const persona2 = { ...persona };
persona2.nombre = "Peter";

//
console.log(persona); // Devolver la EL objeto literal ORIGINAL
console.log(persona2); // Este es la Copia del objeto.
