export const clientsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CLIENTS':
            return action.payload
        default:
            return state
    }
}