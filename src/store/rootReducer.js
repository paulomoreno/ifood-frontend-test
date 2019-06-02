import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import auth from './auth/authReducer';
import user from './user/userReducer';
import filters from './filter/filterReducer';
import playlists from './playlist/playlistReducer';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  auth,
  user,
  filters,
  playlists,
  form: formReducer,
});

export default rootReducer;
