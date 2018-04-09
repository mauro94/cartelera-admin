import React from 'react'
import Avatar from 'react-avatar';

const UserAvatar = (props) => (
    <Avatar
        size={props.size}
        round={true}
        name={getInitials(props.user)} />
)

const getInitials = (user) => {
    return user.firstName ?
        `${user.firstName[0]} ${user.lastName[0]}`
        : user.email[0]
}

export default UserAvatar