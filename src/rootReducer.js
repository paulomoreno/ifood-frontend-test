import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import auth from './modules/auth/authReducer';
import user from './modules/user/userReducer';
import filters from './modules/filter/filterReducer';
import playlists from './modules/playlist/playlistReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    toastr: toastrReducer,
    auth,
    user,
    filters,
    playlists,
    form: formReducer,
});

export default rootReducer;
