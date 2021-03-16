
import { combineReducers } from 'redux'

import { eventsReducer } from './eventsReducer'
import { clientsReducer } from './clientsReducer'



export const rootReducer = combineReducers({
    events: eventsReducer,
    clients: clientsReducer
})