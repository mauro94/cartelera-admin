import { Entity } from 'Helpers/index'
export const getDefaultCategoryId = (categories) => {
    if (!Entity.isEmpty(categories)) {
        return categories[0].id
    }
    return -2
}

export const getPath = (props) => (
    `/categorias/${props.item.id}`
)

export const isActive = (props) => (
    props.location.pathname == getPath(props) ||
    props.location.pathname == `${getPath(props)}/editar`
)