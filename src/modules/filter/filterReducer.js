const INITIAL_STATE = {
    loading: false,
    list: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FILTERS':
            return { ...state, list: action.payload }
        case 'LOADING_FILTERS':
            return { ...state, loading: !state.loading }
        default:
            return state
    }
}
