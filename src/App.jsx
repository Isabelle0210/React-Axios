import { Outlet } from "react-router-dom"
function App() {
// aqui eu renderizei o componente Outlet que é um componente do react-router-dom que renderiza o componente que corresponde a rota atual da aplicação.
  return (
    <div className="App">
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
