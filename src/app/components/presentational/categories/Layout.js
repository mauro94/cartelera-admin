import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Add as AddCategory, List as CategoriesList } from 'Containers/categories'
import { Entity } from 'Helpers/object'
import { ShowCategory, EditCategory } from 'Presentational/categories'
import 'Style/common/layouts/expandedList.scss'

const CategoriesLayout = (props) => (
    <div className='page-container'>
        <Route path='/categorias' render={CategoriesPage} />
    </div>
)

const CategoriesPage = (props) => (
    <React.Fragment>
        <Header match={props.match} />
        <div className='expanded-list'>
            <CategoriesList />
        </div>
    </React.Fragment>
)

const Header = (props) => (
    <div className='title'>
        <div className="top-container">
            <h1> Categorías </h1>
            <div className='actions-container'>
                <div className='tool-bar'>
                    <AddCategory />
                </div>
            </div>
        </div>
    </div>
)

export const SelectedCategoryRoutes = (props) => (
    <React.Fragment>
        <Route
            exact
            path='/categorias'
            render={({ match }) => {
                if (!props.categoriesAreEmpty) {
                    return <Redirect to={`/categorias/${props.categories[0].id}`} />
                }
            }} />
        <Route
            exact
            path='/categorias/:id/editar'
            render={({ match }) => (
                <EditCategory category={props.categories[Entity.getIndexFromPath(props.categories, match)]} />
            )} />
        <Route
            exact
            path='/categorias/:id'
            render={({ match }) => (
                <ShowCategory category={props.categories[Entity.getIndexFromPath(props.categories, match)]} />
            )} />
    </React.Fragment>
)

export default CategoriesLayout