import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ONE PuncH', 'Hola2'])
    console.log(categories)
    
    const onAddCategory = (newCategoria) =>{
        // Agrega valores al array y hace copia
        // console.log(newCategoria)

        // convierte todo a minuscula para hace la validadcion
        const sameCategory = categories.find(element => element.toLocaleLowerCase() === newCategoria.toLocaleLowerCase())
        console.log(sameCategory)
        if ( !sameCategory ) setCategories([newCategoria, ...categories]) // Desestructuración de arreglo            
    }

 return (
    <>  
        {/* titulo */}
        <h1>Hola GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            onNewCategory = {event => onAddCategory(event)}
        />
        
        {/* Listado de gif */}
        <ol>
            {
                categories.map(category =>(
                    <GifGrid
                        key = {category}
                        category = {category}
                    />
                ))
            }
        </ol>

    </>
  )
}
