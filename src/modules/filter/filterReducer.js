const INITIAL_STATE = {
    loading: false,
    defs: [],
    filters_query: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_FILTERS_DEFS':
            return { ...state, defs: action.payload }
        case 'LOADING_FILTERS':
            return { ...state, loading: !state.loading }
        default:
            return state
    }
}
