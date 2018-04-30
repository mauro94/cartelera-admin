import { Months } from './constants'
import SnakeCase from 'snake-case'
export const Format = {
    snakeCase: (name, obj) => {
        let snakeObject = {}
        snakeObject[name] = {}
        for (var key in obj) {
            snakeObject[name][SnakeCase(key)] = obj[key]
        }
        return snakeObject
    },
    dateInSpanish: (obj) => {
        let d = new Date(obj)
        return d.getDate() + " de " + Months[d.getMonth()]
    },
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    },
    sortUsers: (list) => {
        list = list.sort((a, b) => compareUsers(a, b))
        return list
    }
}

const compareUsers = (a, b) => {
    if (!a.firstName && !b.firstName) {
        if (a.email > b.email)
            return 1
        else if (a.email < b.email)
            return -1
        return 0
    }
    else if ((!a.firstName && b.firstName) || a.firstName > b.firstName)
        return 1
    else if ((a.firstName && !b.firstName) || b.firstName > a.firstName)
        return -1
    return 0
}

export const Entity = {
    getIndexFromPath: (objects, match) => {
        return objects.findIndex(obj => obj.id == match.params.id)
    },
    isEmpty: (obj) => {
        return !obj
            || (Object.keys(obj).length === 0)
            || obj == null
            || obj.length == 0
    },
    hasEmptyElements: (array) => {
        for (var key in array) {
            if (!array[key] && (typeof array[key] != 'boolean'))
                return true
        }
        return false
    }
}