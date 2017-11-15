export function userSignupRequest(userData) {
    return async dispatch => {
        return await fetch('/api/users', 
            { 
                method: 'POST', 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(userData) 
            })
            .then(res => res.json());
    }
}

export function isUserExists(identifier) {
    return async dispatch => {
        return await fetch('/api/users/' + identifier)
        .then(res => res.json());
    }
}