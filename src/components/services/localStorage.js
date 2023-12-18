export const storeUserData = (data) => {
    localStorage.setItem('idToken', data)
}

export const getUserData = () => {
    let userToken = localStorage.getItem('idToken') || null
    return userToken
}

export const removeUserData = () => {
    localStorage.removeItem('idToken')
    console.log('removed')
}
