import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { UserAvatar } from 'Presentational/elements';

const List = ({ users, show, selectedIndex }) => (
    <div className='list'>
        {users.map((user, index) =>
            <Entry
                user={user}
                key={'User-' + user.id + '-' + index}
                index={index}
                show={show}
                selected={index == selectedIndex} />
        )}
    </div>
)

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(user) {
        this.props.show(this.props.index)
    }

    render() {
        return (
            <Row key={'User-' + this.props.user.id}
                item={this.props.user}
                select={this.handleSelect}
                selected={this.props.selected}>
                <UserAvatar user={this.props.user} size={50} />
                <RowTitle user={this.props.user} />
            </Row>
        )
    }
}

const Row = (props) => (
    <div
        key={'Item-' + props.item.id}
        className={`list-item ${props.selected ? 'selected' : ''}`}
        onClick={() => props.select(props.item)}>
        {props.children.map(
            (data, index) => (
                <div
                    key={`Item-${props.item.id}-data-${index}`}
                    className='list-item-data'>
                    {data}
                </div>
            )
        )}
    </div>
)

const RowTitle = (props) => (
    <React.Fragment>
        <div className='title'>
            {props.user.firstName || ''} {props.user.lastName || ''}
        </div>
        <div className='email'>
            <FontAwesomeIcon icon={faEnvelope} /> {props.user.email || ''}
        </div>
    </React.Fragment>
)

export default List