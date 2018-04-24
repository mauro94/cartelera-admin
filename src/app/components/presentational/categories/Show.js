import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, CategoryLabels } from 'Helpers/index'
import { Remove as RemoveCategory, Toggle as ToggleCategory } from 'Containers/categories'
import { Button } from 'Presentational/elements'

const ShowCategory = (props) => {
    let selectedItem = document.getElementById(`list-item-${props.category.id}`)
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
    <div className='details'>
        <DetailEntry label='enabled'>
            {props.category.enabled ? 'Activa' : 'Inactiva'}
        </DetailEntry>
        <DetailEntry label='pastEvents'>
            {props.category.pastCount}
        </DetailEntry>
        <DetailEntry label='upcomingEvents'>
            {props.category.upcomingCount}
        </DetailEntry>
        <DetailEntry label='totalEvents'>
            {props.category.totalCount}
        </DetailEntry>
    </div>
)

const DetailEntry = (props) => (
    <div className={'entry ' + props.label}>
        <div className='label'>{Format.capitalize(CategoryLabels[props.label])}</div>
        <div className='value'>
            {props.children}
        </div>
    </div>
)

export default ShowCategory