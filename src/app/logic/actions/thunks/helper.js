import axios from 'axios'
import { Session, Status } from 'Helpers/index'
import { createAction } from 'Logic/actions'

export const normalRequest = (
    axios.create({
        //baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
        baseURL: 'https://cartelera-api.herokuapp.com/',
        headers: {
            'Accept': 'application/vnd.cartelera-api.v1',
        }
    })
)

export const authorizedRequest = (
    axios.create({
        //baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
        baseURL: 'https://cartelera-api.herokuapp.com/',
        headers: {
            'Accept': 'application/vnd.cartelera-api.v1',
            'Authorization': `Bearer ${Session.token()}`
        }
    })
)

export const api = ({ dispatch, actionType, request, onSuccess, onError }) => {
    dispatch(createAction(actionType, null, null, Status.WaitingOnServer))
    request()
        .then(response => {
            if (onSuccess) {
                onSuccess()
            }
            dispatch(createAction(
                actionType,
                response.data,
                null,
                Status.Ready
            ))
        })
        .catch(error => {
            if (onError) {
                onError(error)
            }
            dispatch(createAction(
                actionType,
                null,
                error.response ? error.response.data : error.message,
                Status.Failed
            ))
        })
}