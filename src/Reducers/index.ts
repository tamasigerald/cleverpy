import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { postReducer } from './postReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    login: loginReducer
});

export default rootReducer;
