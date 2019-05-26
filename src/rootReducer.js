import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import user from './modules/user/userReducer';
import filters from './modules/filter/filterReducer';

const rootReducer = combineReducers({
    toastr: toastrReducer,
    user,
    filters,
});

export default rootReducer;
