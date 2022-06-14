// Funciones en JS
const saludar = function (saludar) {
  return `Hola, ${saludar}`;
};
//
const saludar2 = (saludar2) => `Hola ${saludar2}`;
//
const saludar3 = (saludar3) => {
  return `HOLA ${saludar3} Como estas ${saludar3}`;
};
//
const saludar4 = () => "Hola Mundo";

// console.log(saludar("Goku"));
console.log(saludar);
console.log(saludar2("JOSUE"));
console.log(saludar3("MANDO"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ASDA121",
    username: "El_Papi123",
  };
};

console.log(getUser());

// Regresar este Objeto de Manera Implisita
const getAdmin = () => ({
  uid: "asdasdsad",
  username: "El_JEFE_JEFES_123",
});

const admin = getAdmin();
console.log(admin);

// Tarea
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC454",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

// 1. Transformar a una función de Flecha
// 2. Tiene que retornar un OBJETO IMPLICITO
// 3. Pruebas

const getUsuarioActivos = (nombre) => ({
  uid: "ABC454",
  username: nombre,
});
const usuarioActivo2 = getUsuarioActivos("Oscar");
console.log(usuarioActivo2);
