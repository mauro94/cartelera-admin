import {
    CategoryActions,
    Status
} from 'Config/constants'

import { request, history, getToken } from 'Config/helper'
import { createAction } from 'Logic/actions'

export const create = (name) => {
    return (dispatch) => {
        dispatch(createAction(CategoryActions.Create, null,
            null, Status.WaitingOnServer))
        request.post('/categories/', { category: { name: name } }, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(
                    createAction(
                        CategoryActions.Create,
                        response.data,
                        null,
                        Status.Ready
                    ))
            })
            .catch((error) => {
                dispatch(
                    createAction(
                        CategoryActions.Create,
                        null,
                        error.response.data,
                        Status.Failed
                    ))
            })
    }
}

export const all = () => {
    return (dispatch) => {
        dispatch(createAction(CategoryActions.All, null,
            null, Status.WaitingOnServer))
        request.get('/categories', {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(
                    createAction(
                        CategoryActions.All,
                        response.data,
                        null,
                        Status.Ready
                    ))
            })
            .catch((error) => {
                dispatch(
                    createAction(CategoryActions.All, null, error.response.data,
                        Status.Failed))
            })
    }
}