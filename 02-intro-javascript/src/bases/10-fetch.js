const apikey = "tZOqRBTBInCsYumreKFSURMBATvhdCFK";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apikey}`);

peticion
  .then((resp) => resp.json()) //RETORNA UNA PROMESA
  .then(({ data }) => {
    // console.log(data.images.original.url);
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement("img");

    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
//PROMESA ENCADENA
