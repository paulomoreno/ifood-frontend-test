const INITIAL_STATE = {
    access_token: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLEAR_TOKEN':
            return { ...state, access_token: null }
        case 'GET_TOKEN':
            return { ...state, access_token: action.payload }
        default:
            return state
    }
}
