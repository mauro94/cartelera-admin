import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

export class DatePickerElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: RoundMoment(),
            endDate: RoundMoment(),
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
            return (
                <React.Fragment>
                    <div className="form-field">
                    <DatePicker
                        showTimeSelect
                        timeFormat="HH:mm"
                        minDate={moment()}
                        maxDate={moment().add(1, "year")}
                        dateFormat="LLL"
                        timeCaption="Tiempo"
                        placeholderText="Fecha y Hora inicio"
                        locale="es-mx"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    />
                    </div>
                    <div className="form-field">
                    <DatePicker
                        showTimeSelect
                        timeFormat="HH:mm"
                        minDate={moment()}
                        maxDate={moment().add(1, "year")}
                        dateFormat="LLL"
                        timeCaption="Tiempo"
                        placeholderText="Fecha y Hora fin"
                        locale="es-mx"
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                    />
                    </div>
                </React.Fragment>
            )
    }
}

const RoundMoment = () => {
    let remainder = 30 - (moment().minute() % 30)
    return moment(moment()).add(remainder, "minutes")
}