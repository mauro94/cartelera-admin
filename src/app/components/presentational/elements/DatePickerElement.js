import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

export class DatePickerElement extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
    }

    componentWillMount() {
        this.setState({
            startDatetime:this.props.startDatetime != "" ? moment(this.props.startDatetime) : RoundMoment(),
            endDatetime: this.props.endDatetime != "" ? moment(this.props.endDatetime) : RoundMoment()
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.startDatetime != this.props.startDatetime || nextProps.endDatetime != this.props.endDatetime)
        this.setState({
            startDatetime: ((nextProps.startDatetime != "")? moment(nextProps.startDatetime) : RoundMoment()),
            endDatetime: ((nextProps.endDatetime != "")? moment(nextProps.endDatetime)  : RoundMoment())
        })
    }

    handleChange({ startDatetime, endDatetime }) {
        this.props.handleChangeDatePicker({ 
            startDatetime: startDatetime, 
            endDatetime: endDatetime 
        })
    }

    handleChangeStart(startDate) {
        this.handleChange({ 
            startDatetime: startDate, 
            endDatetime:  this.state.endDatetime
        })
    }

    handleChangeEnd(endDate) {
        this.handleChange({ 
            startDatetime: this.state.startDatetime, 
            endDatetime:  endDate
        })
    }

    render() {
        if (this.props.name == "startDatetime")
            return (
                <DatePicker
                    showTimeSelect
                    timeFormat="HH:mm"
                    minDate={moment()}
                    maxDate={moment().add(1, "year")}
                    dateFormat="LLL"
                    timeCaption="Tiempo"
                    placeholderText="Fecha y hora inicio"
                    locale="es-mx"
                    selected={this.state.startDatetime}
                    selectsStart
                    startDatetime={this.state.startDatetime}
                    endDatetime={this.state.endDatetime}
                    onChange={this.handleChangeStart}
                    name={this.props.name}
                    value={this.state.startDatetime}
                />
            )
        else
            return (
                <DatePicker
                    showTimeSelect
                    timeFormat="HH:mm"
                    minDate={moment()}
                    maxDate={moment().add(1, "year")}
                    dateFormat="LLL"
                    timeCaption="Tiempo"
                    placeholderText="Fecha y hora fin"
                    locale="es-mx"
                    selected={this.state.endDatetime}
                    selectsEnd
                    startDatetime={this.state.startDatetime}
                    endDatetime={this.state.endDatetime}
                    onChange={this.handleChangeEnd}
                    name={this.props.name}
                />
            )
    }
}

const RoundMoment = () => {
    let remainder = 30 - (moment().minute() % 30)
    return moment(moment()).add(remainder, "minutes")
}