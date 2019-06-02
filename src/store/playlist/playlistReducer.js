const INITIAL_STATE = {
  loading: false,
  response: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYLISTS':
      return { ...state, response: action.payload };
    case 'LOADING_PLAYLISTS':
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
}
