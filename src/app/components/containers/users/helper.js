import { Labels, UserTypes } from 'Helpers/constants'

export const getIndex = (objects, match) => (
    objects.findIndex(obj => obj.id == match.params.id)
)

export const compareUsers = (a, b) => {
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

export const userDictionary = (list) => {
    let dictionary = {}
    list = list.sort((a, b) => compareUsers(a, b))
    dictionary['admins'] = list.filter(
        user => (user.userType == UserTypes.Admin))
    dictionary['sponsors'] = list.filter(
        user => (user.userType == UserTypes.Sponsor))
    return dictionary
}