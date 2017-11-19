import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { login } from '../../actions/login';

class LoginPage extends React.Component {
    render() {
        const { login } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offet-4">
                    <LoginForm login={login} />
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);