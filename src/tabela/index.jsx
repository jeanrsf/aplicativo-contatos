import iconeExcluir from '../assets/iconeExcluir.svg';
import iconeEditar from '../assets/iconeEditar.svg';
import { useDadosUsuarios } from '../hooks/useDadosUsuarios';
import { ModalExcluir } from '../excluir-contato';
import { EditarContato } from '../editar-contato';

export const Tabela = () => {
  const { setModalExcluir, setModalEditar, listaDeContatos } = useDadosUsuarios();
  return (
    <table>
      <thead>
        <tr className='cabecalho-tabela'>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {listaDeContatos.map((contato) => {
          return (
            <>
              <ModalExcluir contato={contato} />
              <EditarContato contato={contato} />
              <tr key={contato.id}>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.telefone}</td>
                <td>
                  <img
                    className='icone-editar'
                    alt='Desenho de um lápis'
                    src={iconeEditar}
                    onClick={() => setModalEditar(true)}
                  />
                </td>
                <td>
                  <img
                    className='icone-excluir'
                    alt='Desenho de uma lixeira'
                    src={iconeExcluir}
                    onClick={() => setModalExcluir(true)}
                  />
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
