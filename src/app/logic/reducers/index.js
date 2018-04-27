import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import currentUser from './currentUser'
import category from './category'
import registree from './registree'

const reducers = combineReducers({
    currentUser,
    event,
    user,
    category,
    registree
})

export default reducers