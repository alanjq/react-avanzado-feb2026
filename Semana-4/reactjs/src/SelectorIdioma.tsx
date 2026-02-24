import { useContext } from "react"
import { AppContext } from "./AppContext"

export function SelectorIdioma() {
    const context = useContext(AppContext)
    console.log('context', context)

    return (
        <select onChange={context.setIdioma}>
            <optgroup>
                <option disabled>Idioma actual</option>
                <option>{context.idioma}</option>
            </optgroup>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
        </select>
    )
}