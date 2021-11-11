import { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import imagemCadastro from '../../assets/Imagem_Direita.png';
import carregarCadastro from '../../servicos/cadastrarUsuario';

function Cadastro() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const history = useHistory();

  function handleFormulario(event) {
    event.preventDefault();

    if (!formulario.nome || !formulario.email || !formulario.senha) {
      return;
    }

    const body = {
      nome: formulario.nome,
      email: formulario.email,
      senha: formulario.senha,
    };

    carregarCadastro({ body, history });
  }
  function handleChange(event) {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  }

  return (
    <div className='cadastro' onSubmit={handleFormulario}>
      <div className='card-cadastro'>
        <h1>Cadastre-se</h1>
        <form className='formulario'>
          <input name='nome' type='text' value={formulario.nome} onChange={handleChange} placeholder='Nome' />
          <input name='email' type='text' value={formulario.email} onChange={handleChange} placeholder='Email' />
          <input name='senha' type='password' value={formulario.senha} onChange={handleChange} placeholder='Senha' />
          <button type='submit'>Cadastrar</button>
          <button className='cancelar' type='button'>
            Cancelar
          </button>
        </form>
        <span className='direcionamento'>
          <a href='/login'>Já tem cadastro? Clique aqui!</a>
        </span>
      </div>
      <img className='imagem-cadastro' src={imagemCadastro} alt='' />
    </div>
  );
}
export default Cadastro;
