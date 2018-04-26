import React from 'react'
import { load } from 'Containers/hoc'
import { Entity } from 'Helpers/object'
import { SelectedCategoryRoutes } from 'Presentational/categories'
import { ExpandedList } from 'Presentational/elements'

const CategoriesList = (props) => {
    let listData = {
        entries: [],
        linkPaths: []
    }
    props.categories.forEach(category => {
        listData.entries.push(<Entry category={category} />)
        listData.linkPaths.push(`/categorias/${category.id}`)
    })
    return (
        <ExpandedList
            {...listData}
            items={props.categories}
            location={props.location}
            selectedItem={
                <SelectedCategoryRoutes
                    categoriesAreEmpty={Entity.isEmpty(props.categories)}
                    categories={props.categories} />}
            renderSelectedItem={props.renderSelectedCategoryRoutes} />
    )
}

const Entry = (props) => (
    <div className='category-title'>
        {props.category.name}
    </div>
)

export default load('categories', CategoriesList)
