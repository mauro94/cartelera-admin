import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, CategoryLabels } from 'Helpers/index'
import { Remove as RemoveCategory } from 'Containers/categories'
import 'Style/categories/show.scss'

const ShowCategory = (props) => (
    <div className='show'>
        <Title category={props.category} />
        <Details category={props.category} />
        <Actions category={props.category} />
    </div>
)

const Actions = (props) => (
    <div className='actions'>
        <RemoveCategory categoryToRemove={props.category}/>
        <button className={'enabled ' + props.category.enabled ? 'disable' : 'enable'}>
            {props.category.enabled ? 'Desactivar' : 'Activar'}
        </button>
        <Link to={`/categorias/${props.category.id}/editar`}>
            <button className='edit'>
                <FontAwesomeIcon icon={faPencilAlt} /> Editar
            </button>
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
            {props.category.name}
        </DetailEntry>
        <DetailEntry label='upcomingEvents'>
            {props.category.name}
        </DetailEntry>
        <DetailEntry label='totalEvents'>
            {props.category.name}
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