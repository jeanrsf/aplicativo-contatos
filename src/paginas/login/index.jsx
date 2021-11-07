import './styles.css';
import { useState } from 'react';
import { useDadosAutenticacao } from '../../hooks/useDadosAutenticacao';
import { useHistory } from 'react-router-dom'
import imagemLogin from "../../assets/Imagem_Esquerda_2.png"



export default function Login() {
    const [formulario, setFormulario] = useState({ email: '', senha: '' })
    const { token, setToken } = useDadosAutenticacao()
    const history = useHistory()

    async function handleLogin(event) {
        event.preventDefault()

        if (!formulario.email || !formulario.senha) {
            return
        }

        const body = {
            email: formulario.email,
            senha: formulario.senha
        }
        const response = await fetch(`https://cubos-api-contacts.herokuapp.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        setToken(data.token)
        console.log(token);
        history.push('/home')

    }
    function handleChange(event) {
        setFormulario((estadoAnterior) => {
            return { ...estadoAnterior, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="card" >
            <img className="imagem-login" src={imagemLogin} alt="" />
            <div className="card-login">
                <h3>Bem vindo</h3>
                <h1>Faça o login com sua conta</h1>
                <form className="formulario" onSubmit={handleLogin}>
                    <input id="email" name="email" type="text" value={formulario.email} onChange={handleChange} placeholder="E-mail" />
                    <input id="senha" name="senha" type="password" value={formulario.senha} onChange={handleChange} placeholder="Senha" />
                    <button type="submit">LOGIN</button>
                    <span className="direcionamento">Não tem cadastro? Clique aqui!</span>
                </form>
            </div>
        </div>
    )
}
