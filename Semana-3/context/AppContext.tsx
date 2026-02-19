import { createContext, useState } from "react";


interface IAppContext {
    isModoOscuro: boolean,
    toggleModo: ()=>void,
    getTextColor: ()=>string,
    getBgColor: ()=>string
}

export const AppContext:IAppContext = createContext({})

interface IAppProvider {
    children: any
}

export const AppProvider = ({ children }: IAppProvider) => {
    // Con estos controlamos el modo oscuro
    const [isModoOscuro, setIsModoOscuro] = useState(false)

    // Colores
    const DARK = '#000080'
    const LIGHT = '#c7c7fc'

    // Trae el color de letra según se necesita
    const getTextColor = () => isModoOscuro ? LIGHT : DARK

    const getBgColor = () => isModoOscuro ? DARK : LIGHT

    // Con este cambiamos de oscuro a claro y viceversa
    const toggleModo = () => setIsModoOscuro(!isModoOscuro)

    return (
        // Valores compartidos son los que estan dentro de "value"
        <AppContext.Provider value={{ toggleModo, isModoOscuro, getTextColor, getBgColor }}>
            {children}
        </AppContext.Provider>
    )
}
