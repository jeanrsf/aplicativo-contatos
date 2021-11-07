import { useState } from "react"
import "./styles.css"
import { useHistory } from 'react-router-dom'
import imagemCadastro from "../../assets/Imagem_Direita.png"


function Cadastro(params) {
    const [formulario, setFormulario] = useState({ nome: '', email: '', senha: '' })
    const history = useHistory()

    async function handleFormulario(event) {
        event.preventDefault()

        if (!formulario.nome || !formulario.email || !formulario.senha) {
            return
        }

        const body = {
            nome: formulario.nome,
            email: formulario.email,
            senha: formulario.senha
        }

        fetch('https://cubos-api-contacts.herokuapp.com/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(resJson => {
            history.push('/login')
        })
    }

    function handleChange(event) {
        setFormulario({ ...formulario, [event.target.name]: event.target.value })
    }

    return (
        <div className="cadastro" onSubmit={handleFormulario}>
            <div className="card-cadastro">
                <h1>Cadastre-se</h1>
                <form className="formulario">
                    <input name="nome" type="text" value={formulario.nome} onChange={handleChange} placeholder="Nome" />
                    <input name="email" type="text" value={formulario.email} onChange={handleChange} placeholder="Email" />
                    <input name="senha" type="password" value={formulario.senha} onChange={handleChange} placeholder="Senha" />
                    <button type="submit">CADASTRAR</button>
                    <button className="cancelar" type="submit">CANCELAR</button>
                </form>
                <span>Já tem cadastro? Clique aqui!</span>
            </div>
            <img className="imagem-cadastro" src={imagemCadastro} alt="" />
        </div>
    )
}
export default Cadastro