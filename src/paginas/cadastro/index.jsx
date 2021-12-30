import { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import imagemCadastro from '../../assets/Imagem_Direita.png';
import { cadastrarUsuario } from "../../servicos/usuariosServicos";

function Cadastro() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    senha: "",
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

    cadastrarUsuario({ body, history });
  }
  function handleChange(event) {
    setFormulario({ ...formulario, [event.target.name]: event.target.value });
  }

  return (
    <div className="cadastro" onSubmit={handleFormulario}>
      <div className="card-cadastro">
        <div className="card-cadastro-conteudo">
          <h1>Cadastre-se</h1>
          <form className="formulario">
            <input name="nome" type="text" value={formulario.nome} onChange={handleChange} placeholder="Nome" />
            <input name="email" type="text" value={formulario.email} onChange={handleChange} placeholder="Email" />
            <input name="senha" type="password" value={formulario.senha} onChange={handleChange} placeholder="Senha" />
            <button className="cadastrar" type="submit">
              Cadastrar
            </button>
            <button className="btn-cancelar" type="button">
              Cancelar
            </button>
          </form>
          <a className="direcionamento" href="/">
            Já tem cadastro? Clique aqui!
          </a>
        </div>
      </div>
      <img className="imagem-cadastro" src={imagemCadastro} alt="Agenda" />
    </div>
  );
}
export default Cadastro;
