import React from 'react'
import { load } from 'Containers/hoc'
import { Entity } from 'Helpers/object'
import { SelectedCategoryRoutes } from 'Presentational/categories'
import { ExpandedList, CategoryAvatar, getCatRandomColor, EmptyCategories } from 'Presentational/elements'

const CategoriesList = (props) => {
    if (Entity.isEmpty(props.categories)) {
        return <EmptyCategories />
    }
    let listData = {
        entries: [],
        linkPaths: [],
        colors: []
    }
    props.categories.forEach(category => {
        listData.entries.push(<Entry category={category} />)
        listData.linkPaths.push(`/categorias/${category.id}`)
        listData.colors.push(getCatRandomColor(category))
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

const Entry = (props) => {
    return (
        <React.Fragment>
            <CategoryAvatar category={props.category} size={50} />
            <div className='category-title'>
                {props.category.name}
            </div>
        </React.Fragment>
    )
}

export default load('categories', CategoriesList)
