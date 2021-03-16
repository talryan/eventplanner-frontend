// react-redux, redux, thunk

import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App'
import { rootReducer } from './reducers/rootReducer'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'



//create store for redux => createStore{} 1. reducer 2. devTools

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

render(

        <Provider store={store}>
                <App />
                <Router />
        </Provider>,
    document.getElementById('root')
);