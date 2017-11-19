export function login(data) {
    return async dispatch => {
        return await fetch('/api/auth', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
        })
        .then(res => res.json())
    }
    
}