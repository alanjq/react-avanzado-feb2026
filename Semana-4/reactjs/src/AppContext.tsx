import { createContext, useState } from "react";

interface IAppContext {
    idioma?: string,
    setEnglish?: any,
    setSpanish?: any,
    isOscuro?: boolean,
    activaModoClaro?: any,
    activaModoOscuro?: any,
    toggleModoOscuro?: any,
    children?: any
}

export const AppContext = createContext({})

export function AppContextProvider({ children }: IAppContext) {
    // Las variables y métodos a compartir por toda la aplicación
    const [idioma, setIdioma] = useState('(elige un idioma)')
    const [isOscuro, setIsOscuro] = useState(false)

    const activaModoOscuro = () => setIsOscuro(true)
    const activaModoClaro = () => setIsOscuro(false)
    const toggleModoOscuro = () => setIsOscuro(!isOscuro)
    
    // const setEnglish = () => setIdioma('English')
    // const setSpanish = () => setIdioma('Español')
    const setSelectedIdioma = (e) => setIdioma(e.target.value)

    // el componente de contexto
    return <AppContext.Provider value={{ idioma, setIdioma: setSelectedIdioma, isOscuro, activaModoClaro, activaModoOscuro, toggleModoOscuro }}>
        {children}
    </AppContext.Provider>
}