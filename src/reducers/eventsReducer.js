export const eventsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_EVENTS':
            return action.payload
            
        case 'FETCH_CLIENT_EVENTS':
            return action.payload
        default: 
        return state
    
    }
}


