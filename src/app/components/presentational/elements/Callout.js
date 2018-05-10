import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/fontawesome-free-solid'
import { Plus } from 'Images/plus'
import { Button } from './Button'

export default class Callout extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            showCallout: false
        }
    }

    handleClick() {
        if (!this.state.showCallout) {
            // attach/remove event handler
            document.addEventListener('click',
                this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click',
                this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showCallout: !prevState.showCallout,
        }))
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return
        }

        this.handleClick()
    }

    render() {
        return (
            <div className="action-callout">
                <div ref={node => { this.node = node; }}>
                    <div className='add'>
                        {this.state.showCallout &&
                            <CalloutInput inputRef={(el) => { this.inputRef = el }} placeholder={this.props.placeholder} type={this.props.type} icon={this.props.icon} />
                        }
                        {!this.state.showCallout &&
                            <Button
                                type='icon-button primary'
                                handleClick={this.handleClick}>
                                <div className='plus'>
                                    <Plus />
                                </div>
                            </Button>
                        }
                        {this.state.showCallout &&
                            <Button
                                type='icon-button primary'
                                handleClick={() =>
                                    this.props.add(this.inputRef.value)}>
                                <FontAwesomeIcon icon={faCheck} />
                            </Button>}
                    </div>
                </div>
            </div>
        )
    }
}

const CalloutInput = (props) => (
    <div className='callout-input'>
        <div className='input-with-icon'>
            <FontAwesomeIcon icon={props.icon} />
            <input
                placeholder={props.placeholder}
                type={props.type}
                ref={props.inputRef}
            />
        </div>
        <div className='pointer'></div>
    </div>
)