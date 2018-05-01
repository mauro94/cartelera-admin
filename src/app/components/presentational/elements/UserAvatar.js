import React from 'react'
import Avatar from 'react-avatar';

const UserAvatar = (props) => (
    <Avatar
        color={getRandomColor(props.user)}
        size={props.size}
        round={true}
        name={getInitials(props.user)} />
)

const getInitials = (user) => {
    if (user.firstName) {
        if (user.lastName) {
            return user.firstName[0] + ' ' + user.lastName[0]
        }
        return user.firstName[0] + ' '
    }
    return user.email[0]
}

const defaultColors = [
    '#2F6690',
    '#FF6B35',
    '#B33F62',
    '#DBB632',
    '#00BFB2',
    '#67ae3f',
];

function _stringAsciiCodeSum(value) {
    return [...value]
        .map(letter => letter.charCodeAt(0))
        .reduce((current, previous) => previous + current);
}

export
    function getRandomColor(value, colors = defaultColors) {
    // if no value is passed, always return transparent color otherwise
    // a rerender would show a new color which would will
    // give strange effects when an interface is loading
    // and gets rerendered a few consequent times
    if (!value)
        return 'transparent';

    // value based random color index
    // the reason we don't just use a random number is to make sure that
    // a certain value will always get the same color assigned given
    // a fixed set of colors
    value = getInitials(value)
    const sum = _stringAsciiCodeSum(value);
    const colorIndex = (sum % colors.length);
    return colors[colorIndex];
}

export default UserAvatar