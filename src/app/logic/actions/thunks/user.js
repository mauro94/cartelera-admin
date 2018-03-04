import {
    UserActions,
    Status
} from 'Config/constants'
import { createAction } from 'Logic/actions'
import { request, setSession, rmSession, history, getToken, setCurrentUserNewbie } from 'Config/helper'

export const login = (loginAttempt) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Login, null,
            null, Status.WaitingOnServer))
        request.post('/auth_user', loginAttempt)
            .then(response => {
                setSession(response.data.authToken, response.data.id, response.data.isNewbie)
                dispatch(createAction(UserActions.Login, response.data, null, Status.Ready))
                history.push(response.data.isNewbie ? '/newbie' : '/')
            })
            .catch((error) => {
                // setErrors({error: "There's been an error"})
                dispatch(
                    createAction(UserActions.Login, null, error.response.data.error,
                        Status.Failed))
            })
    }
}

export const get = (id) => {
    return (dispatch) => {
        dispatch(createAction(UserActions.Get, null,
            null, Status.WaitingOnServer))
        request.get('/users/' + id, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                dispatch(createAction(UserActions.Get, response.data, null, Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Get, null, error.response.data,
                        Status.Failed))
            })
    }
}

export const logout = () => {
    //TODO: server call for logging out
    return (dispatch) => {
        rmSession()
        dispatch(
            createAction(UserActions.Logout, null, null,
                Status.Ready))
        history.replace('/login')
    }
}

export const update = (profileDetails) => {
    let snakeProfileDetails = {
        user : {
            password: profileDetails.password,
            password_confirmation: profileDetails.password,
            first_name: profileDetails.firstName,
            last_name: profileDetails.lastName,
            office: profileDetails.office,
            phone_number: profileDetails.phoneNumber,
            campus: profileDetails.campus,
            is_newbie: false
        }
    }

    return (dispatch) => {
        dispatch(createAction(UserActions.Update, null,
            null, Status.WaitingOnServer))
        request.put('/users/' + profileDetails.id, snakeProfileDetails, {
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        })
            .then(response => {
                let rookie = {
                    ...response.data,
                    isNewbie: false
                }
                setCurrentUserNewbie(false)
                dispatch(
                    createAction(UserActions.Update, rookie, null,
                        Status.Ready))
            })
            .catch((error) => {
                dispatch(
                    createAction(UserActions.Update, null, error.response.data,
                        Status.Failed))
            })
    }
}
