import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { load } from 'Containers/hoc'
import { faTrashAlt, faEdit, faTimesCircle } from '@fortawesome/fontawesome-free-regular'

const CategoriesList = (props) => {
    return (
        <div className='content'>
            <div className='list'>
                {props.categories.map((c, i) =>
                    <CategoryRow category={c} key={'category-' + c.id + '-' + i} />
                )}
            </div>
        </div>
    )
}

const CategoryRow = ({ category }) => (
    <div key={'category-' + category.id} className='list-item'>
        <div className='list-item-data'>{category.name}</div>
        <div className='list-item-data edit'>
            <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faTimesCircle} />
            <FontAwesomeIcon icon={faTrashAlt} />
        </div>
    </div>
)

export default load('categories', CategoriesList)
