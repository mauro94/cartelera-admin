import React from 'react'
import { history } from 'Helpers/index'
import { ModalAlert, FeedbackModal } from 'Presentational/elements'
import { load } from 'Containers/hoc'

const ShowRegistrees = (props) => {
    ModalAlert({
        modal: RegistreesModal,
        registrees: props.registrees,
        event: props.event
    })
    return <div></div>
}

export const RegistreesModal = (props) => (
    <FeedbackModal
        title={`Personas registradas a ${props.event.name}`}
        handleOk={() => {
            props.onClose()
            history.replace(`/eventos/${props.event.id}/editar`)
        }}>
        <div className='list'>
            {props.registrees.map(r => (
                <div className='list-item'>
                    {r['user_email']}
                </div>
            ))}
        </div>
    </FeedbackModal>
)

export default load('registrees', ShowRegistrees)