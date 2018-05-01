import React from 'react'
import Avatar from 'react-avatar';

const CategoryAvatar = (props) => (
    <Avatar
        color={getCatRandomColor(props.category)}
        size={props.size}
        round={true}
        name={getInitials(props.category)} />
)

const getInitials = (category) => {
    return (category.name[0] + ' ' + category.name[1])
}

const defaultColors = [
    '#2A9D8F',
    '#C95234',
    '#392F5A',
    '#DBB632',
    '#CC356C',
    '#67ae3f',
];

function _stringAsciiCodeSum(value) {
    return [...value]
        .map(letter => letter.charCodeAt(0))
        .reduce((current, previous) => previous + current);
}

export
    function getCatRandomColor(value, colors = defaultColors) {
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

export default CategoryAvatar