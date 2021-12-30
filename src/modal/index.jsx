import "./styles.css"
import { useDadosUsuarios } from '.././hooks/useDadosUsuarios'
import iconeFechar from "../assets/iconeFechar.svg"

export function Modal({ botaoOnClick, segundoBotaoOnclick, textoBotao, textoSegundoBotao, titulo, children, className }) {
    const { setModalAddContato, setModalExcluir, setModalEditar } = useDadosUsuarios()

    function fecharModal() {
        setModalAddContato(null)
        setModalExcluir(null)
        setModalEditar(null)
    }

    return (
      <div className='modal'>
        <div className={className}>
          <img className='icone-fechar' src={iconeFechar} onClick={fecharModal} alt='Botão de fechar' />
          <h1>{titulo} </h1>
          {children}
          <button type='submit' onClick={botaoOnClick} className='adicionar'>
            {textoBotao}
          </button>
          <button type='reset' onClick={segundoBotaoOnclick} className='limpar'>
            {textoSegundoBotao}
          </button>
        </div>
      </div>
    );
}
