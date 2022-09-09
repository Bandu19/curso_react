export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KUk1OyyHACZOzRi6orxgv2OvbMQEAy17&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    // Devolviendo o Creando un objeto implicito
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    /**
     *  Retornando en un Array con un Object dentro Ejemplo:
     *  [
     *     0{
     *          id:'12312',
     *          title: 'asdasd',
     *          url: 'http://asdasdsad'
     *      },
     *     1{
     *          id:'12312',
     *          title: 'asdasd',
     *          url: 'http://asdasdsad'
     *      },
     *     2{
     *          id:'12312',
     *          title: 'asdasd',
     *          url: 'http://asdasdsad'
     *      },
     *  ]
    */
    console.log(gifs)

    return gifs
}

