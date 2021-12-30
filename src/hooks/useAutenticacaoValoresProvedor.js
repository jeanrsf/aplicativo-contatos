import { useState } from 'react'

export const useAutenticacaoValoresProvedor = () => {
    const [token, setToken] = useState('');

    return {
        token,
        setToken,
    };

}