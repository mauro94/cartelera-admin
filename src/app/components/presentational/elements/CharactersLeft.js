import React, { Fragment } from 'react'
import { CharacterCount } from 'Helpers/constants'

export class CharactersLeft extends React.Component {
    constructor() {
        super()
        this.state = {
            remaining: CharacterCount
        }
    }

    componentWillMount() {
        this.setState({
            remaining: CharacterCount
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({remaining: CharacterCount-nextProps.description.length});
    }

    render() {
        return <label className={`character-count ${((this.props.touched && this.props.errors) ? 'message-error' : '')}`}>
        {this.state.remaining} caracteres restantes
        </label>
    }
}