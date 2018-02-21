import { serverUrl, fetchHeader } from 'Config/constants'
import { request } from 'Config/helper'
import * as session from './session'

export var thunks = {
    session: session
}

export function post(object, route) {
    return request.post(route, object)
        .then(response => {
            return response.data
        },
            error => {
                return error
            }
        )
}