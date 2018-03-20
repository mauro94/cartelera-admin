import React from 'react'
import { DownArrow } from 'Images/downArrow'

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        let splicedData = { ...props.data }
        delete splicedData[Object.keys(props.data)[0]]
        this.state = {
            selected: props.data[Object.keys(props.data)[0]],
            showOptions: false,
            options: splicedData
        }
        this.toggleOptions = this.toggleOptions.bind(this)
    }

    select(option) {
        let splicedData = { ...this.props.data }
        delete splicedData[option]
        this.setState({
            selected: this.props.data[option],
            showOptions: false,
            options: splicedData
        })
    }

    toggleOptions() {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    render() {
        return (
            <div className='selected-and-hidden'>
                <div className={
                    'select' + (this.state.showOptions ? ' focused' : '')
                }
                    onClick={() => this.toggleOptions()}>
                    <div>{this.state.selected}</div>
                    <div className='down-arrow'>
                        <DownArrow />
                    </div>
                </div>
                {this.state.showOptions && <div className='hidden-select'>
                    {Object.keys(this.state.options).map((key) =>
                        <div key={key} onClick={() => this.select(key)}>
                            {this.state.options[key]}
                        </div>
                    )}
                </div>}
            </div>
        )
    }
}
