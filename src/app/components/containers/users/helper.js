import { Labels, UserTypes } from 'Helpers/constants'

export const getIndex = (objects, match) => (
    objects.findIndex(obj => obj.id == match.params.id)
)