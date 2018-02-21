import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import session from './session'

const reducers = combineReducers({
    session,
    form: formReducer
})

export default reducers