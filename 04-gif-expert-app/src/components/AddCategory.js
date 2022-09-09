import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValor, setInputValor] = useState('')
    // console.log(setCategories)

    const cambiarValor = ({ target }) => {
        // console.log(target.value)
        setInputValor(target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValor.trim().length <= 1) return // Elimina espaciados de un input
        // console.log(inputValor.trim())

        // setCategories( categories => [inputValor, ...categories])
        onNewCategory(inputValor.trim())
        setInputValor('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Escribe"
                value={inputValor}
                onChange={cambiarValor}
            />
        </form>
    )
}

