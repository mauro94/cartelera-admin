import React from 'react'
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom'
import 'Style/common/layouts/expandedList.scss'

const Tablet = props => <Responsive {...props} minWidth={1120} />
const Mobile = props => <Responsive {...props} maxWidth={1119} />

const ExpandedList = (props) => (
    <React.Fragment>
        <div className='list'>
            {props.items.map((item, index) => {
                let isSelected = isActive(props.location,
                    props.linkPaths[index])
                return (
                    <React.Fragment key={'Row-' + item.id}>
                        <Row
                            backgroundColor={props.colors && isSelected ?
                                props.colors[index] : ''}
                            selectedClassName={isSelected ? ' selected' : ''}
                            item={item}
                            linkPath={props.linkPaths[index]}>
                            {props.entries[index]}
                        </Row>
                        {
                            props.renderSelectedItem && isSelected &&
                            <Mobile>
                                <div className='small-display'>
                                    {props.selectedItem}
                                </div>
                            </Mobile>
                        }
                    </React.Fragment>
                )
            })}
        </div>
        {
            props.renderSelectedItem &&
            <Tablet>
                <div className='large-display'>
                    {props.selectedItem}
                </div>
            </Tablet>
        }
    </React.Fragment>
)

const Row = (props) => (
    <React.Fragment>
        <Link
            id={`list-item-${props.item.id}`}
            to={props.linkPath}
            key={'Item-' + props.item.id}
            className={`list-item ${props.selectedClassName}`}
            style={{ backgroundColor: props.backgroundColor }}>
            {props.children}
        </Link>
    </React.Fragment>
)

export const isActive = (location, path) => (
    location.pathname == path ||
    location.pathname == `${path}/editar`
)

export default ExpandedList