import React from 'react'
import { createBrowserHistory } from 'history'
import * as SessionFunctions from './session'
import * as FormatFunctions from './format'
export const Session = SessionFunctions
export const Format = FormatFunctions
export * from './constants'

export const history = createBrowserHistory()

export const isActive = to => (match, location) => location.pathname.includes(to)

export const getInitials = (user) => {
    return user.firstName ?
        `${user.firstName[0]} ${user.lastName[0]}`
        : user.email[0]
}

export const getUserTitle = (user) => {
    return user.firstName ?
        `${user.firstName} ${user.lastName}`
        : user.email
}