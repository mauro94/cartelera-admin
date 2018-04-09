import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

export class DatePickerElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment(),
            placeholder: props.placeholder
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
    }

    handleChange({ startDate, endDate }) {
        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate

        if (startDate.isAfter(endDate)) {
            endDate = startDate
        }

        this.setState({ startDate: startDate, endDate: endDate })
    }

    handleChangeStart(startDate) {
        this.handleChange({ startDate: startDate })
    }

    handleChangeEnd(endDate) {
        this.handleChange({ endDate: endDate })
    }

    render() {
        if (this.props.type == "selectsStart")
            return (
                <DatePicker
                    showTimeSelect
                    timeFormat="HH:mm"
                    minDate={moment()}
                    maxDate={moment().add(1, "year")}
                    dateFormat="LLL"
                    timeCaption="Tiempo"
                    placeholderText={this.state.placeholder}
                    locale="es-mx"
                    isClearable={true}
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
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
                    placeholderText={this.state.placeholder}
                    locale="es-mx"
                    isClearable={true}
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
            )
    }
}

