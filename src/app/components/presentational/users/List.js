import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { load } from 'Containers/hoc'
import { Entity } from 'Helpers/object'
import { SelectedUserRoutes } from './Layout'
import { UserAvatar, getRandomColor, ExpandedList, EmptyElement } from 'Presentational/elements'

const UsersList = (props) => {
    let emptyMsg
    if(props.type == 'sponsors') {
        emptyMsg = <div>
                    <div>No existen sponsors</div>
                    <div>Crea un sponsor nuevo</div>
                    </div>
    }
    else {
        emptyMsg = <div>
                    <div>No existen admins</div>
                    <div>Crea un admin nuevo</div>
                    </div>
    }

    let listData = {
        entries: [], 
        linkPaths: [],
        colors: []
    }
    props.users.forEach(user => {
        listData.entries.push(<Entry user={user} />)
        listData.linkPaths.push(`/usuarios/${props.type}/${user.id}`)
        listData.colors.push(getRandomColor(user))
    })
    return (
        (!Entity.isEmpty(props.users) ? 
            <EmptyElement>
                {emptyMsg}
            </EmptyElement> :
            <ExpandedList
                {...listData}
                items={props.users}
                location={props.location}
                selectedItem={
                    <SelectedUserRoutes
                        usersAreEmpty={Entity.isEmpty(props.users)}
                        users={props.users} />}
                renderSelectedItem={props.renderSelectedUserRoutes} />)
    )
}

const Entry = (props) => {
    return <React.Fragment>
        <UserAvatar user={props.user} size={50} />
        <div className='title-and-email'>
            <div className='title'>
                {props.user.firstName || ''} {props.user.lastName || ''}
            </div>
            <div className='email'>
                <FontAwesomeIcon icon={faEnvelope} /> {props.user.email || ''}
            </div>
        </div>
    </React.Fragment>
}

export default load('users', UsersList)