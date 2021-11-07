import { useContext } from 'react'
import { UsuariosContexto } from '../contextos/DadosUsuarios'

export const useDadosUsuarios = () => {
    return useContext(UsuariosContexto)
}



