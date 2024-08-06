import React from 'react'
import './NewPost.css'

import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewPost() {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const createPost = async(e) => {//função para criar um novo post
        e.preventDefault();//previne o comportamento padrão do formulário

        const post = { title, body, userId: 1 }//cria um objeto com os dados do novo post

        await blogFetch.post('/posts', {
            body : post,

        })//envia a requisição para a API
        navigate('/')//redireciona para a página inicial
    }

    return (
        <div className='new-post'>
            <h2>Inserir novo Post:</h2>
            <form onSubmit={(e)=> createPost(e)}>
                <div className='form-control'>
                    <label htmlFor='body'>Titulo:</label>
                    <input type='text' placeholder='Digite o Titulo' id='title' name='title' onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='body'>Conteúdo:</label>
                    <textarea placeholder='Digite o Conteúdo' id='body' name='body' onChange={(e)=> setBody(e.target.value)}/>
                </div>
                <button type='submit' value={"Criar Post"} className='btn'>Inserir</button>
            </form>

        </div>
    )
}

export default NewPost