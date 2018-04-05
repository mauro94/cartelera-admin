import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import category from './category'

const reducers = combineReducers({
    user,
    event,
    category
})

export default reducers