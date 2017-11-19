import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import jwt from 'jsonwebtoken';

import App from './components/App';
import { setCurrentUser } from './actions/authActions';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if(localStorage.jwtToken) {
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render((
    <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
    </Provider>
), document.getElementById('app'));