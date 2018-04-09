import React from 'react'
import EditUserForm from 'Containers/users/Edit'
import { UserForms, Labels, Format } from 'Helpers/index'
import 'Style/users/edit.scss'

const EditUser = (props) => (
    <div className='edit'>
        <div className='label'>
            <FormLabels array={['firstName',
                'lastName', 'office', 'phoneNumber', 'campus']} />
        </div>
        <EditUserForm
            form={UserForms.Basic}
            user={{ ...props.user, isNewbie: false }} />
    </div>
)

const FormLabels = ({ array }) => (
    array.map((label, index) => (
        <div key={`Label-${index}`}>
            {Format.capitalize(Labels[label])}
        </div>
    ))
)

export default EditUser