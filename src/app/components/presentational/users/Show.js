import React from 'react'
import { UserAvatar, Tag } from 'Presentational/elements';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { faPhone, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, Labels } from 'Helpers/index'

const UserShow = (props) => (
    <div className='show'>
        <Title user={props.user} />
        <Details user={props.user} />
        <Actions enabled={props.user.enabled} />
    </div>
)

const Actions = (props) => (
    <div className='actions'>
        <button className={'enabled ' + props.enabled ? 'disable' : 'enable'}>
            {props.enabled ? 'Desactivar' : 'Activar'}
        </button>
        <button className='edit'>
            <FontAwesomeIcon icon={faPencilAlt} />Editar
        </button>
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
            {getUserTitle(props.user)}
        </div>
        <div className='title-tag green'>
            {props.user.isNewbie && <Tag>Nuevo</Tag>}
        </div>
    </div>
)

const Details = (props) => (
    <div className='details'>
        <DetailEntry label='email'>
            {<FontAwesomeIcon icon={faEnvelope} /> && props.user.email}
        </DetailEntry>
        <DetailEntry label='enabled'>
            {props.user.enabled ? 'Activo' : 'Inactivo'}
        </DetailEntry>
        <DetailEntry label='phoneNumber'>
            {<FontAwesomeIcon icon={faPhone} /> && props.user.phoneNumber}
        </DetailEntry>
        <DetailEntry label='office'>
            {props.user.office}
        </DetailEntry>
        <DetailEntry label='campus'>
            {props.user.campus}
        </DetailEntry>
    </div>
)

const DetailEntry = (props) => (
    <div className={'entry ' + props.label}>
        <div className='label'>{Format.capitalize(Labels[props.label])}</div>
        <div className='value'>
            {props.children}
        </div>
    </div>
)

export default UserShow