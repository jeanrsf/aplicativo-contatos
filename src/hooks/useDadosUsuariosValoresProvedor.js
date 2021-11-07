import { useState } from 'react'
import { useDadosAutenticacao } from './useDadosAutenticacao'


export const useDadosUsuariosValoresProvedor = () => {
    const [listaDeContatos, setListaDeContatos] = useState([])
    const [modalAddContato, setModalAddContato] = useState(false)
    const [modalExcluir, setModalExcluir] = useState(false)
    const [modalEditar, setModalEditar] = useState(false)
    const { token } = useDadosAutenticacao()

    async function carregarUsuarios() {

        const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json()
        setListaDeContatos(data)
    }

    return {
        modalAddContato,
        setModalAddContato,
        modalExcluir,
        setModalExcluir,
        modalEditar,
        setModalEditar,
        carregarUsuarios,
        listaDeContatos

    }
}