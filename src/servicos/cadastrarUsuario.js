function CarregarCadastro({ body, history }) {

    fetch('https://cubos-api-contacts.herokuapp.com/usuarios', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((resJson) => {
            history.push('/login');
        });
}

export default CarregarCadastro