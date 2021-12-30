import { useState } from "react"
import { useDadosAutenticacao } from '../hooks/useDadosAutenticacao'
import { useDadosUsuarios } from "../hooks/useDadosUsuarios"
import { Modal } from "../modal"
import "./styles.css"

export function EditarContato({ contato }) {
    const [formulario, setFormulario] = useState({ nome: contato.nome || "", email: contato.email || "", telefone: contato.telefone || '' })
    const { token } = useDadosAutenticacao()
    const { modalEditar, setModalEditar, carregarUsuarios } = useDadosUsuarios()

    async function handleSubmit(event) {
      event.preventDefault();

      const body = {
        nome: formulario.nome,
        email: formulario.email,
        telefone: formulario.telefone,
      };
      const response = await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${contato.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      carregarUsuarios();
      setModalEditar(false);
    }

    function handleChange(event) {
        setFormulario((estadoAnterior) => {
            return { ...estadoAnterior, [event.target.name]: event.target.value }
        })
    }
    return (
        <>
            {modalEditar && <Modal
                className={'card-modal'}
                titulo={'Editar Contato'}
                textoBotao={'SALVAR'}
                textoSegundoBotao={'CANCELAR'}
                botaoOnClick={handleSubmit}
                segundoBotaoOnclick={() => setModalEditar(false)}
            >
                <form action="" className="formulario-modal" onSubmit={handleSubmit}>
                    <input name="nome" type="text" value={formulario.nome} onChange={handleChange} />
                    <input name="email" type="text" value={formulario.email} onChange={handleChange} />
                    <input name="telefone" type="text" value={formulario.telefone} onChange={handleChange} />
                </form>
            </Modal>}
        </>
    )
}