import { Entity } from 'Helpers/index'
export const getDefaultUserId = (users) => {
    if (!Entity.isEmpty(users)) {
        return users[0].id
    }
    return -2
}

export const getPath = (props) => (
    `/usuarios/${props.type}/${props.item.id}`
)

export const isActive = (props) => (
    props.location.pathname == getPath(props) ||
    props.location.pathname == `${getPath(props)}/editar`
)