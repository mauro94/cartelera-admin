import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'

const CategoriesList = ({ categories }) => (
    <div className='list'>
        {categories.map((c, i) =>
            <CategoryRow category={c} key={'category-' + c.id + '-' + i} />
        )}
    </div>
)

const CategoryRow = ({ category }) => (
    <div key={'category-' + category.id} className='list-item'>
        <div className='list-item-data'>{category.name}</div>
        <div className='list-item-data edit'>
            <TagIcon child={<FontAwesomeIcon icon={faTrashAlt} />} />
        </div>
    </div>
)


export default CategoriesList