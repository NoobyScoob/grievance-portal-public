
// initial state of the app when user opens the portal
const initialProfileState = {
    username: '',
    fullName: '',
    gender: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
    district: '',
    phoneNumber: '',
    email: '',
    auth: {
        loggedIn: !!localStorage.getItem('jwt'),
        jwt: localStorage.getItem('jwt')
    },
    connection: true,
}

export default ( state = initialProfileState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                username: action.username,
                fullName: action.fullName,
                gender: action.gender,
                address: action.address,
                country: action.country,
                state: action.state,
                pincode: action.pincode,
                district: action.district,
                phoneNumber: action.phoneNumber,
                email: action.email,
                auth: {
                    loggedIn: true,
                    jwt: action.auth.jwt,
                },
                connection: true
            }
        case 'LOG_OUT':
            return {
                ...initialProfileState,
                auth: {
                    loggedIn: false,
                    jwt: '',
                }
            }

        case 'CONNECTION_BROKEN':
            return {
                ...state,
                connection: false,
            }

        default:
            return {
                ...state
            }
    }
}