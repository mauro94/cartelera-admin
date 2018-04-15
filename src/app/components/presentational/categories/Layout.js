import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Add as AddCategory, List as CategoriesList } from 'Containers/categories'

const CategoriesLayout = (props) => (
    <div className='categories-page'>
        <div>
            <h1>Categorías</h1>
            <div className='tool-bar'>
                <AddCategory query={props.match.params.type} />
            </div>
        </div>
        <CategoriesList />
    </div>
)

export default CategoriesLayout