import React from 'react'
import { createBrowserHistory } from 'history'
import axios from 'axios'

export function isEmpty(object) {
    return !object || (Object.keys(object).length === 0) || object == null
}

export const request = axios.create({
    baseURL: 'https://5a8e3738b5a3130012909abb.mockapi.io/api',
    timeout: 1000
})

export const history = createBrowserHistory()

export const makeOption = function(element) {
    return <option key={element.key} value={element.key}> {element.text} </option>
}