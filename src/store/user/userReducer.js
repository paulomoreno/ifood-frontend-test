const INITIAL_STATE = {
  loading: false,
  user: {}
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER':
      return { ...state, user: action.payload }
    case 'LOADING_USER':
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}
