import React from 'react'
import {
    TextField,
    TextFieldArea,
    FieldSingleDate,
    ToggleField
} from 'Presentational/elements/Input'
import { Entity } from 'Helpers/object'

export const EventsFormsRegistration = (props) => (
    <React.Fragment>

        {!Entity.isEmpty(props.error) && <p className='message-error'>{props.error}</p>}

        <div className='registration-toggler'>
            <ToggleField label='hasRegistration' {...props} />

            {props.values.hasRegistration == "on" &&
                <TextFieldArea label='registrationMessage' {...props} />
            }

            {props.values.hasRegistration == "off" &&
                <TextField label='registrationUrl' {...props} />
            }
        </div>

        <TextFieldArea label='requirementsToRegister' {...props} />

        <ToggleField label='hasDeadline' {...props} />

        {props.values.hasDeadline == "on" && <FieldSingleDate label='registrationDeadline' {...props} />}

    </React.Fragment>
)