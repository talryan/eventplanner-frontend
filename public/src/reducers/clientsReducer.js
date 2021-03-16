export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CLIENTS':
            return action.payload
        default:
            return state
    }
}