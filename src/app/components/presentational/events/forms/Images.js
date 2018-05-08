import React, { Fragment } from 'react'
import { ImageUploader } from 'Presentational/elements'

export const EventsFormsImages = (props) => (
    <div className="add-photos-container">
        <ImageUploader
            label='photo'
            {...props} />
        <ImageUploader
            label='schedule'
            {...props} />
    </div>
)
