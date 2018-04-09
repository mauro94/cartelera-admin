import { Months } from './constants'
export const Format = {
    snakeCase: (name, obj) => {
        var snakeCase = require('snake-case');
        var snakeObject = obj
        snakeObject[name] = {}
        for (var key in obj) {
            snakeObject[name][snakeCase(key)] = obj[key]
        }
        return snakeObject
    },
    dateInSpanish: (obj) => {
        let d = new Date(obj)
        return d.getDate() + " de " + Months[d.getMonth()]
    },
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

export const Entity = {
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