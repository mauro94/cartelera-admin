import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { TextFieldDate } from 'Presentational/elements/Input'

export class DatePickerElement extends React.Component {
    constructor(props) {
        super(props)
        let startDate = props.values[props.field.name].startDatetime
        let endDate = props.values[props.field.name].endDatetime
        this.state = {
            startDate: moment(startDate),
            endDate: moment(endDate)
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        let nextStart = nextProps.values[nextProps.field.name].startDatetime
        let prevStart = this.props.values[nextProps.field.name].startDatetime
        let nextEnd = nextProps.values[nextProps.field.name].endDatetime
        let prevEnd = this.props.values[nextProps.field.name].endDatetime
        if (nextStart != prevStart) {
            this.setState({
                startDate: moment(nextStart)
            })
        }
        if (nextEnd != prevEnd) {
            this.setState({
                endDate: moment(nextEnd)
            })
        }
    }

    handleChange({ startDate, endDate }) {
        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate

        if (startDate.isAfter(endDate)) {
            endDate = startDate
        }

        this.props.updateFormik(formatToRange(startDate, endDate))
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
                        customInput={<TextFieldDate fieldId='startDatetime' {...this.props} />}
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
                            customInput={<TextFieldDate fieldId='endDatetime' {...this.props} />}
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
                        <span className='separator'></span>
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
        "startDatetime": startDatetime.format(),
        "endDatetime": endDatetime.format()
    }
    return dateRange;
}