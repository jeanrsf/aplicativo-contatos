import './styles.css';
import { useState } from 'react';
import { useDadosAutenticacao } from '../../hooks/useDadosAutenticacao';
import { useHistory } from 'react-router-dom';
import imagemLogin from '../../assets/Imagem_Esquerda_2.png';
import { logarUsuario } from '../../servicos/usuariosServicos';

const estadoInicial = { email: '', senha: '' };

export default function Login() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const { setToken } = useDadosAutenticacao();
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    if (!formulario.email || !formulario.senha) {
      return;
    }

    const body = {
      email: formulario.email,
      senha: formulario.senha,
    };

    const resposta = await logarUsuario(body);
    if (!resposta.token) {
      return;
    }
    setToken(resposta.token);
    history.push('/home');
  }
  function handleChange(event) {
    setFormulario((estadoAnterior) => {
      return { ...estadoAnterior, [event.target.name]: event.target.value };
    });
  }

  return (
    <div className='card'>
      <img className='imagem-login' src={imagemLogin} alt='Mão feminina segurando um celular' />
      <div className='card-login'>
        <div className='card-login-conteudo'>
          <span>Bem vindo</span>
          <h1>Faça o login com sua conta</h1>
          <form className='formulario' onSubmit={handleLogin}>
            <input
              id='email'
              name='email'
              type='text'
              value={formulario.email}
              onChange={handleChange}
              placeholder='E-mail'
            />
            <input
              id='senha'
              name='senha'
              type='password'
              value={formulario.senha}
              onChange={handleChange}
              placeholder='Senha'
            />
            <button type='submit'>Login</button>
            <a className='direcionamento' href='/cadastro'>
              Não tem cadastro? Clique aqui!
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
