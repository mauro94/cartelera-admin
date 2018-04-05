import React from 'react'
import Avatar from 'react-avatar';
import { getInitials } from 'Global/helper'

const UserAvatar = (props) => (
    <Avatar
        size={props.size}
        round={true}
        name={getInitials(props.user)} />
)

export default UserAvatar