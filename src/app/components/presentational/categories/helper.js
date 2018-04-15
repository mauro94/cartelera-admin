import { Entity } from 'Helpers/index'

export const getDefaultCategoryId = (categories) => {
    if (!Entity.isEmpty(categories)) {
        return categories[0].id
    }
    return -2
}