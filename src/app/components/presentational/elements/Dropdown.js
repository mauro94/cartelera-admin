import React from 'react'
import { DownArrow } from 'Images/downArrow'

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        let splicedData = { ...props.data.options }
        delete splicedData[Object.keys(props.data.options)[props.data.selected]]
        this.state = {
            selected: props.data.options[props.data.selected],
            showOptions: false,
            options: splicedData
        }
        this.toggleOptions = this.toggleOptions.bind(this)
        this.handleSelect = this.props.handleSelect
    }

    componentWillReceiveProps(nextProps) {
        let splicedData = { ...nextProps.data.options }
        delete splicedData[Object.keys(nextProps.data.options)[nextProps.data.selected]]
        this.setState({
            selected: nextProps.data.options[nextProps.data.selected],
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
            <React.Fragment>
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
                        <div key={key} onClick={() => this.handleSelect(key, this.props)}>
                            {this.state.options[key]}
                        </div>
                    )}
                </div>}
            </React.Fragment>
        )
    }
}
