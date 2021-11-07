import { useContext } from 'react'
import { AutenticacaoContexto } from '../contextos/AutenticacaoContexto'

export const useDadosAutenticacao = () => {
    return useContext(AutenticacaoContexto)
}