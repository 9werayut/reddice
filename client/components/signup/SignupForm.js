import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import timezones from '../data/timezones';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        await this.props.userSignupRequest(this.state).then(
            data => this.setState({errors: data, isLoading: false})
        );
    }

    render() {
        const { errors } = this.state;
        const options = _.map(timezones, (val, key) => {
            return (
                <option key={val} value={val}>{key}</option>
            );
        })
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>

                <div className={classnames("form-group", { 'has-error': errors.username })}>
                    <label className="control-label">Username</label>
                    <input 
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="username" 
                        className="form-control"
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.email })}>
                    <label className="control-label">Email</label>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="email" 
                        className="form-control"
                    />
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.password })}>
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="password" 
                        className="form-control"
                    />
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
                    <label className="control-label">Password Confirmation</label>
                    <input 
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        name="passwordConfirmation" 
                        className="form-control"
                    />
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.timezone })}>
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
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
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