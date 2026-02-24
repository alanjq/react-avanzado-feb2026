import { useContext, useState } from "react"
import { AppContext } from "./AppContext"
import { SelectorIdioma } from "./SelectorIdioma"


export default function App() {
  const API_KEY = "21b772f9974095874fd6ed3eb48e3610" // process.env.API_KEY
  const API_URL = (ciudad: string) => `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`

  const context = useContext(AppContext)

  const [nombreCiudad, setNombreCiudad] = useState('Monterrey')

  // evento de cambio de texto en input
  const cambiarTexto = (e) => {
    let valorActual = e.target.value
    setNombreCiudad(valorActual)
    console.log('setNombreCiudad:', valorActual)
    // console.log('param2:', param2)
  }

  // Forma de Javascript vanilla
  /*   document.getElementById('texto_ciudad')?.addEventListener("change", function(e){
      console.log('cambió el texto', e.target)
    })
     */
    
  const handleBuscar = () => {
    fetch(API_URL(nombreCiudad))
    .then(res=>res.json())
    .then((datos)=>{
        console.log('resultados:', datos)
    })
  }

  return (<div>
    <h1>Eventos</h1>
    <label>Idioma actual: {context.idioma}</label>
    <form>
      <label>Escribe la ciudad</label>
      <input type="text" placeholder="Escribe la ciudad" onChange={cambiarTexto} defaultValue={nombreCiudad} />

      {/* <input type="text" onChange={(e)=>cambiarTexto(e, "Otro valor")} /> */}

      <SelectorIdioma />

      <button type="button" onClick={handleBuscar}>Buscar</button>


    </form>
  </div>)
}