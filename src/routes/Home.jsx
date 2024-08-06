import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
const Home = () => {

    const [posts, setPosts] = useState([]);//aqui eu criei um estado chamado posts que é um array vazio e a função setPosts que será responsável por atualizar o estado posts.
    const getPosts = async () => {//aqui eu criei uma função chamada getPosts que é assíncrona.
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");//aqui eu fiz uma requisição GET para a API JSONPlaceholder que retorna uma lista de posts.
            
            const data = response.data;//aqui eu armazenei a lista de posts na variável data.

            setPosts(data);//aqui eu atualizei o estado posts com a lista de posts retornada pela API.

        } catch (error) {
            console.error(error);
            
        }  
    };
    useEffect(() => {
        getPosts();
    }, []);//aqui eu usei o hook useEffect para chamar a função getPosts quando o componente Home for montado.



    return (
        <div>
            <h1>Ultimos Posts</h1>
            {posts.length === 0 ? (<p>Carregando...</p>) : (<p>Carregou</p>)}
        </div>
    )
}

export default Home