// contexto
const idioma = "español"

var pantalla = {
    idioma: 'Español',
    
    // toma a componente como padre
    // Sin contexto
    componente1(){
        window.idioma = "Inglès"
        console.log('ejemplo (sin contexto)', idioma)
    },
    
    // Usando contexto
    componente2: () => {
        window.idioma = "Otro"
        console.log('ejemplo (contexto)', idioma)
    }
}