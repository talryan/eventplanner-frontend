export const fetchEvents = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/events')
        .then(resp => resp.json())
        .then(events => dispatch({ type: 'FETCH_EVENTS', payload: events}))
    }
}

export const addEvent = (newEvent) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/events', {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(newEvent => dispatch({ type: 'ADD_EVENT', payload: newEvent}))
    }
   
}