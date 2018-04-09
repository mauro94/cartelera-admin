import { Entity } from 'Helpers/object'
const SessionKeys = Object.freeze({
    Token: 'SESSION_TOKEN',
    Id: 'SESSION_USER_ID',
    IsNewbie: 'SESSION_USER_IS_NEWBIE'
})

export const Session = {
    create: (token, id, isNewbie) => {
        localStorage.setItem(SessionKeys.Token, token)
        localStorage.setItem(SessionKeys.Id, id)
        localStorage.setItem(SessionKeys.IsNewbie, isNewbie)
    },
    getUserId: () => {
        return localStorage.getItem(SessionKeys.Id)
    },
    getToken: () => {
        return localStorage.getItem(SessionKeys.Token)
    },
    isNewbie: () => {
        return (localStorage.getItem(SessionKeys.IsNewbie) == 'true')
    },
    exists: () => {
        return !Entity.isEmpty(localStorage.getItem(SessionKeys.Token))
    },
    destroy: () => {
        localStorage.removeItem(SessionKeys.Token)
        localStorage.removeItem(SessionKeys.Id)
        localStorage.removeItem(SessionKeys.IsNewbie)
    },
    setNewbie: (isNewbie) => {
        localStorage.setItem(SessionKeys.IsNewbie, isNewbie)
    }
}