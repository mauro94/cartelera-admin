import { serverUrl, fetchHeader } from 'Config/constants'
import { request } from 'Config/helper'
import * as session from './session'
import { SubmissionError } from 'redux-form'

export var thunks = {
    session: session
}

export function post(object, route) {
    return request.post(route, object)
        .then(response => {
            return response
        })
        .catch(err => { throw err })
}