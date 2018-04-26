import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { faLock, faLockOpen, faPhone, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, Labels } from 'Helpers/index'
import { Button, UserAvatar, Tag } from 'Presentational/elements'

const UserShow = (props) => {
    let selectedItem = document.getElementById(`list-item-${props.user.id}`)
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    return <div className='expanded-selection'>
        <Title user={props.user} />
        <Details user={props.user} />
        <Actions enabled={props.user.enabled} id={props.user.id} />
    </div>
}

const ToggleEnable = (props) => {
    if (props.enabled) {
        return (
            <React.Fragment>
                <FontAwesomeIcon icon={faLock} />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faLockOpen} />
        </React.Fragment>
    )
}

const Actions = (props) => (
    <div className='actions'>
        <Button
            type={props.enabled ? 'danger' : 'primary'}>
            <ToggleEnable enabled={props.enabled} />
        </Button>
        <Link to={`${props.id}/editar`}>
            <Button>
                <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
        </Link>
    </div>
)

const getUserTitle = (user) => {
    return user.firstName ?
        `${user.firstName} ${user.lastName}`
        : user.email
}

const Title = (props) => (
    <div className='title'>
        <UserAvatar user={props.user} size={100} />
        <div className='name'>
            <p>{getUserTitle(props.user)}</p>
        </div>
        <div className='title-tag green'>
            {props.user.isNewbie && <Tag>Nuevo</Tag>}
        </div>
    </div>
)

const Details = (props) => (
    <div className='details-wrapper'>
        <div className='labels'>
            <div className='label'>{Format.capitalize(Labels.email)}</div>
            <div className='label'>{Format.capitalize(Labels.enabled)}</div>
            <div className='label'>{Format.capitalize(Labels.phoneNumber)}</div>
            <div className='label'>{Format.capitalize(Labels.office)}</div>
            <div className='label'>{Format.capitalize(Labels.campus)}</div>
        </div>
        <div className='details'>
            <div className='value'>
                {<FontAwesomeIcon icon={faEnvelope} /> && props.user.email}
            </div>
            <div className='value'>
                {props.user.enabled ? 'Activo' : 'Inactivo'}
            </div>
            <div className='value'>
                {<FontAwesomeIcon icon={faPhone} /> && props.user.phoneNumber}
            </div>
            <div className='value'>
                {props.user.office}
            </div>
            <div className='value'>
                {props.user.campus}
            </div>
        </div>
    </div>
)


export default UserShow