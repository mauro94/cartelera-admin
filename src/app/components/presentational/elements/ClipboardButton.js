import React from 'react'
import { findDOMNode } from 'react-dom'
import ReactTooltip from 'react-tooltip'
import { Button } from 'Presentational/elements'

export class ClipboardButton extends React.Component {
    constructor(props) {
        super(props)
        this.copyTextToClipboard = this.copyTextToClipboard.bind(this)
    }

    copyTextToClipboard(elementId) {
        let copyText = document.getElementById(elementId)
        copyText.select()
        document.execCommand("Copy", false);
    }

    render() {
        return (
            <React.Fragment>
                <div ref="copyTooltip" data-tip='Lista de correos copiada' className="tooltip-div"></div>
                <div className='large-button-container'>
                    <Button
                        type='dark lg'
                        handleClick={(event) => {
                            event.preventDefault()
                            setTimeout(() => {
                                ReactTooltip.show(findDOMNode(this.refs.copyTooltip))
                            }, 500);

                            this.copyTextToClipboard('registree-emails-to-copy')
                            setTimeout(() => {
                                ReactTooltip.hide(findDOMNode(this.refs.copyTooltip))
                            }, 2000);
                        }}>
                        {this.props.buttonText}
                    </Button>
                </div>
                <ReactTooltip className='linger' place="top" type="dark" effect="solid" />
            </React.Fragment>
        )
    }

}


export default Button