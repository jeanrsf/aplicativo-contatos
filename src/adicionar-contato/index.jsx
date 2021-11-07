import { useState } from "react"
import { useDadosUsuarios } from '../hooks/useDadosUsuarios'
import { useDadosAutenticacao } from '../hooks/useDadosAutenticacao'
import { Modal } from "../modal"
import "./styles.css"

export function AdicionarContato() {
    const [formulario, setFormulario] = useState({ nome: '', email: '', telefone: '' })
    const { modalAddContato, setModalAddContato, carregarUsuarios } = useDadosUsuarios()
    const { token } = useDadosAutenticacao()

    async function handleSubmit(event) {
        event.preventDefault()
        const body = {
            nome: formulario.nome,
            email: formulario.email,
            telefone: formulario.telefone
        }

        const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        carregarUsuarios()
        setModalAddContato(false)
        limparCampos()
    }
    function handleChange(event) {
        setFormulario((estadoAnterior) => {
            return { ...estadoAnterior, [event.target.name]: event.target.value }
        })
    }
    function limparCampos() {
        setFormulario({ nome: '', email: '', telefone: '' })
    }
    return (
        <>
            {modalAddContato && <Modal
                className={'card-modal'}
                titulo={'Novo Contato'}
                textoBotao={'ADICIONAR'}
                textoSegundoBotao={'LIMPAR'}
                botaoOnClick={handleSubmit}
                segundoBotaoOnclick={limparCampos}
            >
                <form action="" className="formulario-modal" onSubmit={handleSubmit}>
                    <input name="nome" type="text" value={formulario.nome} onChange={handleChange} placeholder="Nome" />
                    <input name="email" type="text" value={formulario.email} onChange={handleChange} placeholder="E-mail" />
                    <input name="telefone" type="text" value={formulario.telefone} onChange={handleChange} placeholder="Telefone" />
                </form>
            </Modal>}
        </>
    )
}