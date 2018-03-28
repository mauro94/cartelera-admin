import React from 'react'
import { isEmpty } from 'Config/helper'

export const FormMessageWelcome = ({ mail }) => (
    <p>         
        ¡Hola {mail}! <br/>
        Antes de continuar, por favor completa tus datos:
    </p>
)

export const FormMessageEditProfile = ({ name }) => (
    <p>         
        ¡Hola {name}! <br/>
        Aqui puedes modificar los datos de tu pérfil:
    </p>
)

export const FormButtonSubmit = ({ errors, isSubmitting, isEditProfile, touched }) => {
    if (!isEditProfile) 
        return (
            <button className="button-submit" disabled={((
                touched.firstName && !errors.firstName &&
                touched.lastName && !errors.lastName &&
                touched.password && !errors.password &&
                touched.passwordConfirm && !errors.passwordConfirm &&
                touched.office && !errors.office &&
                touched.phoneNumber && !errors.phoneNumber && 
                !errors.campus &&
                !isSubmitting) ? false : true)}>
                Continuar
            </button>
        )
    else 
        return(
            <button className="button-submit" 
                    disabled={
                        !isEmpty(errors) || 
                        isSubmitting }>
                Actualizar
            </button>
        )   
}

export const FormButtonSubmitPassword = ({ errors, isSubmitting, touched }) => {
    return (
        <button className="button-submit" disabled={((
            touched.password && !errors.password &&
            touched.passwordConfirm && !errors.passwordConfirm &&
            !isSubmitting) ? false : true)}>
            Cambiar Contraseña
        </button>
    )
}

export const FormButtonSignout = ({ logout, isEditProfile }) => {
    if (!isEditProfile) 
        return (
            <button className="button-newbie-logout" onClick={logout}>Cerrar Sesión</button>
        )
    else 
        return(
            <button hidden className="button-newbie-logout">Cerrar Sesión</button>
        )
    
}