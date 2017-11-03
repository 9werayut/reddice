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