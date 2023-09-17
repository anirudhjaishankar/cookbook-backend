export function getLoginToken(username, password) {
    if(username == 'admin' && password == 'admin') {
        return 'abc123'
    }
    return null
}