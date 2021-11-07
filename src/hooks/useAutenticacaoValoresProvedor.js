import { useState } from 'react'

export const useAutenticacaoValoresProvedor = () => {
    const [token, setToken] = useState('')
        // const [modalAddContato, setModalAddContato] = useState(false)
        // const [modalExcluir, setModalExcluir] = useState(false)
        // const [modalEditar, setModalEditar] = useState(false)
        // const [listaDeContatos, setListaDeContatos] = useState([])

    // async function carregarUsuarios() {

    //     const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //     })
    //     const data = await response.json()
    //     console.log("array", data)
    //     setListaDeContatos(data)
    // }

    return {
        token,
        setToken,
        // modalAddContato,
        // setModalAddContato,
        // modalExcluir,
        // setModalExcluir,
        // modalEditar,
        // setModalEditar,
        // carregarUsuarios,
        // listaDeContatos

    }

}