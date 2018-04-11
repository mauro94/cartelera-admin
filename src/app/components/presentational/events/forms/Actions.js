import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"

export const EventsFormsActions = ({ handleSubmit, error, errors, touched, isSubmitting }) => (
    <div className="event-actions-container">
        <button className="button-submit">
            Guardar cambios
        </button>
        <button className="button">
            Vista previa
        </button>
        <button className="button">
            Cancelar
        </button>
    </div>
)