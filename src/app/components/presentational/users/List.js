import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { getPath, isActive } from './helper'
import { load } from 'Containers/hoc'
import { UserAvatar } from 'Presentational/elements'

const UsersList = (props) => {
    return (
        <div className='list'>
            {props.users.map((user, index) =>
                <Entry
                    index={index}
                    key={'User-' + user.id + '-' + index}
                    type={props.type}
                    user={user}
                    location={props.location} />
            )}
        </div>
    )
}

const Entry = (props) => (
    <Row key={'User-' + props.user.id}
        item={props.user}
        type={props.type}
        location={props.location}>
        <UserAvatar user={props.user} size={50} />
        <RowTitle user={props.user} />
    </Row>
)

const Row = (props) => (
    <Link
        to={getPath(props)}
        key={'Item-' + props.item.id}
        className={`list-item ${
            isActive(props) ?
                'selected' : ''}`}>
        {props.children.map(
            (data, index) => (
                <div
                    key={`Item-${props.item.id}-data-${index}`}
                    className='list-item-data'>
                    {data}
                </div>
            )
        )}
    </Link>
)

const RowTitle = (props) => (
    <React.Fragment>
        <div className='title'>
            {props.user.firstName || ''} {props.user.lastName || ''}
        </div>
        <div className='email'>
            <FontAwesomeIcon icon={faEnvelope} /> {props.user.email || ''}
        </div>
    </React.Fragment>
)

export default load('users', UsersList)