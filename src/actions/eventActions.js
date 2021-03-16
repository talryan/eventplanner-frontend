export const fetchEvents = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/events')
        .then(resp => resp.json())
        .then(event => dispatch({ type: 'FETCH_EVENTS', payload: event}))
    }
}

export const addEvent = (event) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/grads', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(event => dispatch({ type: 'ADD_EVENT', payload: event}))
    }
}