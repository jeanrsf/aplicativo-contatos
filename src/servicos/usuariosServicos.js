export const cadastrarUsuario = ({ body, history }) => {
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
};

export const logarUsuario = async(body) => {
    const response = await fetch(`https://cubos-api-contacts.herokuapp.com/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};