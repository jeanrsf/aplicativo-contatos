import { createContext } from 'react'
import { useDadosUsuariosValoresProvedor } from '../hooks/useDadosUsuariosValoresProvedor'

export const UsuariosContexto = createContext()

export const DadosProvedor = (props) => {
    const valoresDoUsuario = useDadosUsuariosValoresProvedor()
    return (
        <UsuariosContexto.Provider value={valoresDoUsuario}>
            {props.children}
        </UsuariosContexto.Provider>
    )
}