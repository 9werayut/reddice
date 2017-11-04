import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
    let errors = {};
    
    if(Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if(!Validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if(Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if(!Validator.equals(data.password, data.passwordConfirmation)){
        error.passwordConfirmation = 'Passwords must match';
    }
    if(Validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}