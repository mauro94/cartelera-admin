import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import currentUser from './currentUser'
import category from './category'

const reducers = combineReducers({
	currentUser,
    event,
    user,
    category
})

export default reducers