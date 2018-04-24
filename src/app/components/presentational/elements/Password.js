import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid'

export class Password extends React.Component {
    constructor () {
        super()
        this.state = {
            viewPassword : false
        }
        this.togglePassword = this.togglePassword.bind(this)
    }

    togglePassword () {
        this.setState({viewPassword : !this.state.viewPassword})
    }

    render() {
        return (
        <div className="form-field">
            <div className="password-form-field">
            <input
                type={this.state.viewPassword ? "text" : "password"}
                {...this.props.field}
                {...this.props}
            />
            <span className="passwordToggle" onClick={() => this.togglePassword()}>
                <FontAwesomeIcon icon={this.state.viewPassword ? faEyeSlash : faEye}/>
            </span>
            </div>
        </div>
        )
    }
}