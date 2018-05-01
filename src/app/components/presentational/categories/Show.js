import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, Labels } from 'Helpers/index'
import { Remove as RemoveCategory, Toggle as ToggleCategory } from 'Containers/categories'
import { Button } from 'Presentational/elements'

const ShowCategory = (props) => {
    let selectedItem = document.getElementById(`list-item-${props.category.id}`)
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    return <div className='expanded-selection'>
        <Title category={props.category} />
        <Details category={props.category} />
        <Actions category={props.category} />
    </div>
}

const Actions = (props) => (
    <div className='actions'>
        {props.category.totalCount == 0 && <RemoveCategory categoryToRemove={props.category} />}
        {props.category.upcomingCount == 0 && <ToggleCategory categoryToToggle={props.category} />}
        <Link to={`/categorias/${props.category.id}/editar`}>
            <Button>
                <FontAwesomeIcon icon={faPencilAlt} /> Editar
            </Button>
        </Link>
    </div>
)

const Title = (props) => (
    <div className='title'>
        <div className='name'>
            {props.category.name}
        </div>
    </div>
)

const Details = (props) => (
    <div className='details-wrapper'>
        <div className='labels'>
            <div className='label'>{Format.capitalize(Labels.enabled)}</div>
            <div className='label'>{Format.capitalize(Labels.pastEvents)}</div>
            <div className='label'>{Format.capitalize(Labels.upcomingEvents)}</div>
            <div className='label'>{Format.capitalize(Labels.totalEvents)}</div>
        </div>
        <div className='details'>
            <div className='value'>
                {props.category.enabled ? 'Activo' : 'Inactivo'}
            </div>
            <div className='value'>
                {props.category.pastCount}
            </div>
            <div className='value'>
                {props.category.upcomingCount}
            </div>
            <div className='value'>
                {props.category.totalCount}
            </div>
        </div>
        
    </div>
)

export default ShowCategory