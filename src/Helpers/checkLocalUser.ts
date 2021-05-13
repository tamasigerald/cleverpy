import LoginService from '../Api/LoginService';

import { Dispatch } from './../Api/types';

function checkLocalUser(dispatch: Dispatch): void {
    const localUser: string | null = window.localStorage.getItem('token');
    LoginService.checkLogin(dispatch, localUser);
    dispatch({
        type: 'SET_CHECKED_LOGIN'
    });
}

export default checkLocalUser;
