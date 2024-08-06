import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

//pages
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

//aqui eu fiz a configuração das rotas da aplicação e renderizei o componente App com o RouterProvider que recebe o router como propriedade e o router é criado com o método createBrowserRouter que recebe um array de objetos com as rotas da aplicação e cada objeto tem um elemento que é o componente que será renderizado e um children que é um array de objetos com as rotas filhas do componente pai.
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewPost />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
