import React from 'react'

export const CheckboxPublished = () => (
    <div className="filter-checkbox filter-link-1">
        <label className="checkbox-label">
            Publicados
            <input type="checkbox" defaultChecked={true} />
            <span className="checkmark"></span>
        </label>
    </div>
)

export const CheckboxCanceled = ({ checkboxClass: checkboxClass }) => (
    <div className={checkboxClass}>
        <label className="checkbox-label">
            Cancelados
            <input type="checkbox" defaultChecked={true} />
            <span className="checkmark"></span>
        </label>
    </div>
)