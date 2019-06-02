const INITIAL_STATE = {
  loading: false,
  list: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYLISTS':
      return { ...state, list: action.payload }
    case 'LOADING_PLAYLISTS':
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}
