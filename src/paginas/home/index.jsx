import "./styles.css"
import { useDadosUsuarios } from '../../hooks/useDadosUsuarios'
import { AdicionarContato } from "../../adicionar-contato"
import { Tabela } from '../../tabela';

export default function Home() {
  const { setModalAddContato,erro } = useDadosUsuarios();

  return (
    <>
      <AdicionarContato />
      <header className='header'>
        <h1>kontacts</h1>
      </header>
     {erro&&<div className='erro'>
        Ocorreu um erro ao cadastrar o contato.
      </div>}
      <div>
        <button onClick={() => setModalAddContato(true)} className='btn-add'>
          Adicionar
        </button>
        <Tabela />
      </div>
    </>
  );
}
