import React from 'react'
import { Link } from 'react-router-dom'//aqui eu importei o componente Link do react-router-dom que é um componente que renderiza um link para outra rota da aplicação.
import './Navbar.css'

function Navbar() {
    return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>Blog</Link>{/*aqui eu renderizei o componente Link que recebe a propriedade to com o valor '/' que é a rota da página inicial da aplicação.*/}
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>{/*aqui eu renderizei o componente Link que recebe a propriedade to com o valor '/' que é a rota da página inicial da aplicação.*/}
            </li>
            <li>
                <Link to={`/new`} className="new-btn">Novo post</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar