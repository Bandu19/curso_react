// ASYNC

// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve("htpps://asdasdasd.com");
//   });
//   return promesa;
// };

// getImagenPromesa().then(console.log);

// Transformar una funcion a que retorne su
// retorn por defecto en una promesa.
const getImage = async () => {
  try {
    const apikey = "tZOqRBTBInCsYumreKFSURMBATvhdCFK";
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?apikey=${apikey}`
    );
    const { data } = await respuesta.json(); // Desestructuración Objetos
    const { url } = data.images.original; // Desestructu
    console.log(url);
    const img = document.createElement("img");

    img.src = url;

    document.body.append(img);
  } catch (err) {
    // manejo del error.
    console.error(err);
  }
};
getImage();
