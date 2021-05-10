import LoginService from '../Api/LoginService';

import { Dispatch } from './../Api/types';

function checkLocalUser(dispatch: Dispatch): void {
    const localUser = window.localStorage.getItem('token');
    if (localUser && localUser !== '') {
        console.log(localUser);
        LoginService.checkLogin(dispatch, localUser);
    }
}

export default checkLocalUser;
