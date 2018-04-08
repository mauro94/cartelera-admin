import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import currentUser from './currentUser'

const reducers = combineReducers({
    currentUser,
    event,
    user
})

export default reducers