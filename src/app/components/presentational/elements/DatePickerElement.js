import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { TextFieldDate } from 'Presentational/elements/Input'

export class DatePickerElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(props.values[props.field.name].startDateTime) || moment(),
            endDate: moment(props.values[props.field.name].endDateTime) || moment()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            startDate: moment(nextProps.values[nextProps.field.name].startDatetime),
            endDate: moment(nextProps.values[nextProps.field.name].endDatetime),
        })
    }

    handleChange({ startDate, endDate }) {
        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate

        if (startDate.isAfter(endDate)) {
            endDate = startDate
        }

        this.props.updateFormik(this.props.field.name, formatToRange(startDate, endDate), this.props.setFieldValue, this.props.setTouched, this.props.touched)
    }

    handleChangeStart(startDate) {
        this.handleChange({ startDate: startDate })
    }

    handleChangeEnd(endDate) {
        this.handleChange({ endDate: endDate })
    }

    render() {
            return (
                <div className='date-container'>
                    {!this.props.hideStart && <div className='date-picker'>
                        <DatePicker
                            customInput={<TextFieldDate fieldId='startDatetime' {...this.props}/>}
                            showTimeSelect
                            timeFormat="HH:mm"
                            minDate={moment()}
                            maxDate={moment().add(1, "year")}
                            dateFormat="LLL"
                            timeCaption="Hora"
                            locale="es-mx"
                            selected={this.state.startDate}
                            selectsStart
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart}
                            shouldCloseOnSelect={true}
                        />
                        <span className='separator'> </span>
                        </div>
                    }
                    {!this.props.hideEnd && 
                        <div className='date-picker'>
                        <DatePicker
                            customInput={<TextFieldDate fieldId='endDatetime' {...this.props}/>}
                            showTimeSelect
                            timeFormat="HH:mm"
                            minDate={moment()}
                            maxDate={moment().add(1, "year")}
                            dateFormat="LLL"
                            timeCaption="Hora"
                            locale="es-mx"
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd}
                            shouldCloseOnSelect={true}
                        />
                        <span className='separator'> </span>
                        </div>
                    }
                </div>
            )
    }
}

const RoundMoment = (props) => {
    let remainder = 30 - (moment().minute() % 30)
    return moment(moment()).add(remainder, "minutes")
}

const formatToRange = (startDatetime, endDatetime) => {
    let dateRange = {
        "startDatetime" : startDatetime.format(),
        "endDatetime" : endDatetime.format()
    }
    return dateRange;
}