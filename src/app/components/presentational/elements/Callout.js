import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { faCheck } from '@fortawesome/fontawesome-free-solid'

export default class Callout extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            showCallout: false
        };
    }

    handleClick() {
        if (!this.state.showCallout) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showCallout: !prevState.showCallout,
        }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    render() {
        return (
            <div ref={node => { this.node = node; }}>
                <div className='add'>
                    {this.state.showCallout &&
                        <CalloutInput inputRef={(el) => { this.inputRef = el }} />
                    }
                    {!this.state.showCallout &&
                        <button
                            className='new'
                            onClick={this.handleClick}>
                            Nuevo
                        </button>
                    }
                    {this.state.showCallout &&
                        <button
                            className='new'
                            onClick={() => this.props.add(this.inputRef.value)}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>}
                </div>
            </div>
        )
    }
}

const CalloutInput = (props) => (
    <div className='callout-input'>
        <div className='input-with-icon'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
                placeholder='example@example.com'
                type='email'
                ref={props.inputRef}
            />
        </div>
        <div className='pointer'></div>
    </div>
)