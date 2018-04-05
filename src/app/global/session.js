import { Format } from 'Global/'
const SessionKeys = Object.freeze({
    Token: 'SESSION_TOKEN',
    Id: 'SESSION_USER_ID',
    IsNewbie: 'SESSION_USER_IS_NEWBIE'
})

export const set = (token, id, isNewbie) => {
    localStorage.setItem(SessionKeys.Token, token)
    localStorage.setItem(SessionKeys.Id, id)
    localStorage.setItem(SessionKeys.IsNewbie, isNewbie)
}

export const userId = () => {
    return localStorage.getItem(SessionKeys.Id)
}

export const token = () => {
    return localStorage.getItem(SessionKeys.Token)
}

export const isNewbie = (isNewbie = null) => {
    if (isNewbie)
        return (localStorage.getItem(SessionKeys.IsNewbie) == 'true')
    localStorage.setItem(SessionKeys.IsNewbie, isNewbie)
}

export const exists = () => {
    return !Format.empty(localStorage.getItem(SessionKeys.Token))
}

export const rm = () => {
    localStorage.removeItem(SessionKeys.Token)
    localStorage.removeItem(SessionKeys.Id)
    localStorage.removeItem(SessionKeys.IsNewbie)
}
