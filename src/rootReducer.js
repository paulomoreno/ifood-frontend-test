import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from './modules/auth/authReducer';
import user from './modules/user/userReducer';
import filters from './modules/filter/filterReducer';
import playlists from './modules/playlist/playlistReducer';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    auth,
    user,
    filters,
    playlists,
});

export default rootReducer;
