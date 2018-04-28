import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { TextFieldDate } from 'Presentational/elements/Input'
export class DateSinglePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: moment(props.values[props.field.name])
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            date: moment(nextProps.values[nextProps.field.name])
        })
    }

    handleChange(date) {
        this.props.updateFormik(date.format())
    }

    render() {
        return (
            <div className='date-container'>
                <div className='date-picker'>
                    <label>
                        <DatePicker
                            customInput={<TextFieldDate fieldId={this.props.field.name} {...this.props} />}
                            showTimeSelect
                            timeFormat="HH:mm"
                            minDate={moment()}
                            maxDate={moment().add(1, "year")}
                            dateFormat="LLL"
                            timeCaption="Hora"
                            locale="es-mx"
                            selected={this.state.date}
                            onChange={this.handleChange}
                            shouldCloseOnSelect={true}
                            ref="singlepicker"
                        />
                    </label>
                    <span className='separator'> </span>
                </div>
            </div>
        )
    }
}