import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
    login: loginReducer
});

export default rootReducer;
