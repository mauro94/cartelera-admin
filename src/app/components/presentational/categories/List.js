import React from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { getPath, isActive } from './helper'
import { load } from 'Containers/hoc'

const CategoriesList = (props) => {
    return (
        <div className='list'>
            {props.categories.map((category, index) =>
                <Entry
                    index={index}
                    key={'Category-' + category.id + '-' + index}
                    category={category}
                    location={props.location} />
            )}
        </div>
    )
}

const Entry = (props) => (
    <Row key={'Category-' + props.category.id}
        item={props.category}
        location={props.location}>
        <RowTitle category={props.category} />
    </Row>
)

const Row = (props) => (
    <Link
        id={`list-item-${props.item.id}`}
        to={getPath(props)}
        key={'Item-' + props.item.id}
        className={`list-item ${ isActive(props) ? 'selected' : ''}`}>
        <div
            key={`Item-${props.item.id}-data-0`}
            className='list-item-data'>
            {props.children}
        </div>
    </Link>
)

const RowTitle = (props) => (
    <React.Fragment>
        <div className='category-title'>
            {props.category.name}
        </div>
    </React.Fragment>
)

export default load('categories', CategoriesList)
