import { Modal } from "../modal"
import "./styles.css"
import { useDadosAutenticacao } from '../hooks/useDadosAutenticacao'
import { useDadosUsuarios } from '../hooks/useDadosUsuarios'

export function ModalExcluir({ contato }) {

    const { token } = useDadosAutenticacao()
    const { modalExcluir, setModalExcluir, carregarUsuarios } = useDadosUsuarios()

    async function handleDelete() {

        await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${contato.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        carregarUsuarios()
        setModalExcluir(false)
    }

    return (
        <>
            {modalExcluir && <Modal className={'card-modal-excluir'}
                titulo={'Confirma a exclusão?'}
                textoBotao={'EXCLUIR'}
                textoSegundoBotao={'CANCELAR'}
                botaoOnClick={handleDelete}
                setModalExcluir={setModalExcluir}
                segundoBotaoOnclick={() => setModalExcluir(false)}
            >
                <span>{`Deseja excluir o contato de ${contato.nome}`}</span>
            </Modal>}
        </>
    );
}