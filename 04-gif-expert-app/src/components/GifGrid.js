import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GifAPI"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

    const [imagenes, setImagenes] = useState([])

    const getImagenes = async () => {
        const newImages = await getGifs(category)
        setImagenes(newImages)
    }


    useEffect(() => {
        getImagenes()
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    imagenes.map((image) => (
                        <GifItem
                            key={image.id}
                            // Operador Spread
                            // Es para Jalar Datos de todos los componentes del Objeto
                            {...image}
                        />
                    ))
                }

            </div>


        </>
    )
}
