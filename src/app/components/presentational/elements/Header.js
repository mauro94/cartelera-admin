import React from 'react'
import { NavLink } from 'react-router-dom'
import { Format } from 'Helpers/index'

const Header = (props) => {
    let type = props.match.params.type.replace(/s$/, '')
    return <div className='title'>
        <h1>{Format.capitalize(props.match.params.type)}</h1>
        <h1 className='toggle-title-filter'>
            <NavLink to={`/${props.mainPath}/${unactiveLocation(props.match, props.filter)}`}>
                {` / ${unactiveLocation(props.match, props.filter)}`}
            </NavLink>
        </h1>
        {props.children}
    </div>
}

const unactiveLocation = (match, filter) => (
    match.params.type == filter[0] ? filter[1] : filter[0]
)

export default Header