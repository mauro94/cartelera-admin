// import {
//     CategoryActions,
//     Status
// } from 'Helpers/constants'

// var defaultState = {
//     all: [],
//     status: Status.Ready,
//     error: {}
// }

// function category(state = defaultState, action) {
//     console.log("category reducer")
//     switch (action.type) {
//         case CategoryActions.All:
//             return {
//                 ...state,
//                 all: action.object,
//                 status: action.status,
//                 error: action.error,
//             }
//         case CategoryActions.Update:
//             if (action.status == Status.Ready) {
//                 let index = state.all.findIndex(category => category.id == action.object.id)
//                 if (index != -1){
//                     state.all.splice(index, 1)
//                 }
//             }
//             return {
//                 ...state,
//                 current: action.object || state.current,
//                 status: action.status,
//                 error: action.error,
//                 all: state.all
//             }
//         case CategoryActions.Create:
//             let all = state.all
//             if (action.status == Status.Ready) {
//                 all = [...state.all, action.object]
//                 return {
//                     ...state,
//                     all: all,
//                     status: action.status,
//                     error: action.error
//                 }
//             }
//         default:
//             return state
//     }
// }

// export default category

import { CategoryActions, Entity } from 'Helpers/index'
import { StateManager } from './helper'

function category(state = StateManager.defaultState, action) {
    switch (action.type) {
        case CategoryActions.All:
            return StateManager.all(state, action)
        case CategoryActions.Create:
            return StateManager.create(state, action)
        case CategoryActions.Get:
            let newState = Object.assign({}, state)
            let showIndex = newState.all.findIndex(category =>
                (category.id == action.object))
            let newShow = newState.all[showIndex]
            newShow.selected = true
            if (!Entity.isEmpty(state.show)) {
                newState.show.selected = false
            }
            return {
                ...newState,
                show: newShow,
                action: action.type
            }
        case CategoryActions.Update:
            return StateManager.update(state, action)
        default:
            return state
    }
}

export default category