import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import { history, loggedIn } from 'Config/helper'
import { Status } from 'Config/constants'

class Home extends React.Component {

}

const navbar = () => (<p></p>)

const main = () => (<p></p>)

export var sponsorComponents = {
    navbar: navbar,
    main: main
}

export var adminComponents = {
    navbar: navbar,
    main: main
}