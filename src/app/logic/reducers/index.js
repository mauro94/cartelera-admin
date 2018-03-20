import { combineReducers } from 'redux'
import user from './user'
import event from './event'

const reducers = combineReducers({
    user,
    event
})

export default reducers