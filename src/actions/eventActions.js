export const fetchEvents = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/events')
        .then(resp => resp.json())
        .then(grads => dispatch({ type: 'FETCH_EVENTS', payload: grads}))
    }
}
