import axios from 'axios'
import { Session, Status } from 'Helpers/index'
import { createAction } from 'Logic/actions'

export const request = (
    axios.create({
        //baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
        baseURL: 'https://cartelera-api.herokuapp.com/'
    })
)

const acceptHeader = { 'Accept': 'application/vnd.cartelera-api.v1' }

export const headers = {
    withoutAuth: () => acceptHeader,
    withAuth: () => ({
        ...acceptHeader,
        'Authorization': `Bearer ${Session.getToken()}`
    })
}

export const serverCall = ({ dispatch, actionType, call, onSuccess, onError }) => {
    dispatch(createAction(actionType, null, null, Status.WaitingOnServer))
    call()
        .then(response => {
            if (onSuccess) {
                onSuccess(response)
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
            let reducerError = {
                data: error.response.data,
                status: error.response.status
            }
            dispatch(createAction(
                actionType,
                null,
                reducerError,
                Status.Failed
            ))
        })
}