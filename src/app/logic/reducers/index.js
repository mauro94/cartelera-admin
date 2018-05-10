import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import currentUser from './currentUser'
import category from './category'
import registree from './registree'
import genericServerCall from './genericServerCall'

const reducers = combineReducers({
    currentUser,
    event,
    user,
    category,
    registree,
    genericServerCall
})

export default reducers