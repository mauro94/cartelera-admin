import { createBrowserHistory } from 'history'
import axios from 'axios'

export function sessionIsOpen(session) {
    return !isEmpty(session.current)
}

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null
}

export const request = axios.create({
    baseURL: 'https://reqres.in/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export const history = createBrowserHistory()