import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';

import timezones from '../data/timezones';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

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

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    async onSubmit(e) {
        e.preventDefault();

        if(this.isValid()){
            this.setState({ errors: {}, isLoading: true });
            await this.props.userSignupRequest(this.state)
            .then( data => {
                if(data.success){
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome!'
                    })
                    this.context.router.history.push('/');
                }else{
                    this.setState({errors: data, isLoading: false})
                }
            })
            .catch( err => this.setState({errors: data, isLoading: false}) );
        }
    }

    render() {
        const { errors } = this.state;
        console.log(errors);
        const options = _.map(timezones, (val, key) => {
            return (
                <option key={val} value={val}>{key}</option>
            );
        })
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>

                <TextFieldGroup 
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                    type="text"
                />
                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    type="email"
                />
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />
                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Password Confirmation"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                />

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
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;