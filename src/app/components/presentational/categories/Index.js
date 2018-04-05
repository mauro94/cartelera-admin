import React from 'react'
import AddCategory from 'Containers/AddCategory'
import Categories from 'Containers/Categories'

const CategoriesIndex = () => {
    return (
        <div className='categories-page'>
            <header>
                <h1>Categorías</h1>
            </header>
            <div className='content'>
                <header className='secondary'>
                    <AddCategory />
                </header>
                <Categories />
            </div>
        </div>
    )
}
export default CategoriesIndex