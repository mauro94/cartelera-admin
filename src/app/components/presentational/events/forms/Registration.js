import React from 'react'
import {
    TextField,
    TextFieldArea,
    FieldSingleDate,
    NumberField,
    ToggleField
} from 'Presentational/elements/Input'
import { Entity } from 'Helpers/object'

export const EventsFormsRegistration = (props) => (
    <React.Fragment>

        <div className='registration-toggler'>
            <ToggleField label='hasRegistration' {...props} />

            {props.values.hasRegistration &&
                <TextFieldArea label='registrationMessage' {...props} />
            }

            {!props.values.hasRegistration &&
                <TextField label='registrationUrl' {...props} />
            }
        </div>

        <TextFieldArea label='requirementsToRegister' {...props} />

        <ToggleField label='hasCapacity' {...props} />

        {props.values.hasCapacity && <NumberField label='maxCapacity' {...props} />}

        <ToggleField label='hasDeadline' {...props} />

        {props.values.hasDeadline && <FieldSingleDate label='registrationDeadline' {...props} />}

    </React.Fragment>
)