export const snakeCase = (name, obj) => {
    var snakeCase = require('snake-case');
    var snakeObject = obj
    snakeObject[name] = {}
    for (var key in obj) {
        snakeObject[name][snakeCase(key)] = obj[key]
    }
    return snakeObject
}

export const sharesKeysWith = (a, b) => {
    aKeys = Object.keys(a).sort()
    bKeys = Object.keys(b).sort()
    return JSON.stringify(aKeys) === JSON.stringify(bKeys)
}

export const empty = (obj) => {
    return !obj
        || (Object.keys(obj).length === 0)
        || obj == null
        || obj.length == 0
}

export const spanishDate = (obj) => {
    let d = new Date(obj)
    return d.getDate() + " de " + Month[d.getMonth()]
}

export const filled = (array) => {
    for (var key in array) {
        if (!array[key] && (typeof array[key] != 'boolean'))
            return false
    }
    return true
}

export const initialToUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const initials = (str) => {
    let names = str.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials;
}