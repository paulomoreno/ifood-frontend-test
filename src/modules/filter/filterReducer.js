const INITIAL_STATE = {
    loading: false,
    defs: [],
    filters_query: {},
    local_filters_query: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_FILTERS_DEFS':
            return { ...state, defs: action.payload }
        case 'LOADING_FILTERS':
            return { ...state, loading: !state.loading }
        case 'UPDATE_FILTERS_QUERY':
            return { ...state, filters_query: action.payload.values, local_filters_query: action.payload.local_values}
        default:
            return state
    }
}
