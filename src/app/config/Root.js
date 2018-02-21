import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from 'Logic/reducers'
import Routes from 'Config/Routes'

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    ))

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
)

export default Root