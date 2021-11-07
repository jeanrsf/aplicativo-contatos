import "./styles.css"
import { useDadosUsuarios } from '../../hooks/useDadosUsuarios'
import { AdicionarContato } from "../../adicionar-contato"
import { ModalExcluir } from "../../excluir-contato"
import { EditarContato } from "../../editar-contato"
import iconeExcluir from "../../assets/iconeExcluir.svg"
import iconeEditar from "../../assets/iconeEditar.svg"

export default function Home() {
    const { setModalAddContato, setModalExcluir, setModalEditar, listaDeContatos } = useDadosUsuarios()

    return (
        <>
            <AdicionarContato />
            <div className="header">
                <h1>KONTACTS</h1>
            </div>
            <div>
                <button onClick={() => setModalAddContato(true)} className="btn-add">Adicionar</button>
                <table>
                    <thead>
                        <tr className="cabecalho-tabela">
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th></th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody >
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
                                            <img className="icone-editar" alt="" src={iconeEditar} onClick={() => setModalEditar(true)} />
                                        </td>
                                        <td>
                                            <img className="icone-excluir" alt="" src={iconeExcluir} onClick={() => setModalExcluir(true)} />
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}