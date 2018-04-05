import React from 'react'
import { Status } from 'Global/constants'
import { createBrowserHistory } from 'history'

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