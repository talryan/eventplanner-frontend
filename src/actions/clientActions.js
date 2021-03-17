export const fetchClients = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/clients')
        .then(resp => resp.json())
        .then(clients => dispatch({ type: 'FETCH_CLIENTS', payload: clients}))
    }
}

export const addClient = (addClient) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/events', {
            method: 'POST',
            body: JSON.stringify(addClient),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(addClient => dispatch({ type: 'ADD_CLIENT', payload: addClient}))
    }
   
}