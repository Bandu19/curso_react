import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ONE PuncH', 'Hola2'])
    console.log(categories)
    
    const onAddCategory = (newCategoria) =>{
        // Agrega valores al array y hace copia
        console.log(newCategoria)
        setCategories([...categories,newCategoria]) // Desestructuración de arreglo
    }

 
 return (
    <>  
        {/* titulo */}
        <h1>Hola GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            // setCategories = {setCategories}
            onNewCategory = {event => onAddCategory(event)}
        />
        
        {/* Listado de gif */}
        <ol>
            {
                categories.map(category =>{
                    return <li key={category}>{category}</li>
                })
            }
        </ol>

    </>
  )
}
