import './App.css'
import { Saludo } from './components/Saludo'

function App() {

  return (<div>
    <h1>My First React App</h1>
    <Saludo nombre="Danette" />
    <Saludo nombre="Fernanda" />
    <Saludo nombre="Omar" />
    <Saludo nombre="German" />
    <Saludo nombre="Mauricio" />
  </div>)
}

export default App
