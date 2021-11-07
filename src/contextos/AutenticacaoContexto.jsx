import { createContext } from 'react'
import { useAutenticacaoValoresProvedor } from '../hooks/useAutenticacaoValoresProvedor'

export const AutenticacaoContexto = createContext({})

export const AutenticacaoProvedor = (props) => {
    const valoresContexto = useAutenticacaoValoresProvedor()
    return (
        <AutenticacaoContexto.Provider value={valoresContexto}>
            {props.children}
        </AutenticacaoContexto.Provider>
    )
}

