import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import timezones from '../data/timezones';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        /*
        fetch('/api/users', {
            method: 'POST',
            body: { user: this.state }
        })
        .then(res => res.json())
        .then(data => alert(JSON.stringify(data)))
        */
    }

    render() {
        const options = _.map(timezones, (val, key) => {
            return (
                <option key={val} value={val}>{key}</option>
            );
        })
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="username" 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="email" 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="password" 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input 
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="passwordConfirmation" 
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select 
                        value={this.state.timezone}
                        onChange={this.onChange.bind(this)}
                        name="timezone" 
                        className="form-control"
                    >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;