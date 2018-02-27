import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'

const reducers = combineReducers({
    user,
    form: formReducer
})

export default reducers