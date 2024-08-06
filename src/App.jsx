import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import './styles/App.css'
function App() {
// aqui eu renderizei o componente Outlet que é um componente do react-router-dom que renderiza o componente que corresponde a rota atual da aplicação.
  return (
    <div className="App">
    <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
