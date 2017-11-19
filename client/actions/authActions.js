import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data) {
    return async dispatch => {
        return await fetch('/api/auth', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token;
            localStorage.setItem('jwtToken', token);
            
            return dispatch(setCurrentUser(jwt.decode(token)));
        })
    }
    
}