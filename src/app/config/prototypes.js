Object.prototype.snakeCase = (name) => {
    var snakeCase = require('snake-case');
    var snakeObject = this
    snakeObject[name] = {}
    for (var key in this) {
        snakeObject[name][snakeCase(key)] = this[key]
    }
    return snakeObject
}

Object.prototype.sharesKeysWith = (obj) => {
    aKeys = Object.keys(this).sort()
    bKeys = Object.keys(obj).sort()
    return JSON.stringify(aKeys) === JSON.stringify(bKeys)
}

Object.prototype.empty = () => {
    return !this
        || (Object.keys(this).length === 0)
        || this == null
        || this.length == 0
}

Object.prototype.spanishDate = () => {
    let d = new Date(this)
    return d.getDate() + " de " + Month[d.getMonth()]
}

Array.prototype.filled = () => {
    for (var key in this) {
        if (!this[key] && (typeof this[key] != 'boolean'))
            return false
    }
    return true
}

String.prototype.initialToUpper = () => {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.initials = () => {
    let names = this.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials;
}