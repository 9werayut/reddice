export function userSignupRequest(userData) {
    return dispatch => {
        return fetch('/api/users', { method: 'POST', body: userData });
    }
}