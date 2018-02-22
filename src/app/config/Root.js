import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from 'Logic/reducers'
import Routes from 'Config/Routes'

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    ))

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
)

export default Root