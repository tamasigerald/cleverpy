import { config } from 'config';
import { loggedUser } from 'types/global';
import { Dispatch } from './types';

const LoginService = {
    login(dispatch: Dispatch, user: loggedUser): void {
        dispatch({
            type: 'LOAD_LOGIN',
            loggedUser: null
        });
        if (user.username === config.admin.username && user.password === config.admin.password) {
            setTimeout(() => {
                window.localStorage.setItem('token', config.admin.token);
                dispatch({
                    type: 'POST_LOGIN',
                    loggedUser: user
                });
            }, 3000);
        } else {
            dispatch({
                type: 'ERROR_LOGIN',
                loggedUser: null
            });
        }
    },
    checkLogin(dispatch: Dispatch, token?: string | null): void {
        if (token) {
            dispatch({
                type: 'CHECK_LOGIN',
                loggedUser: { username: config.admin.username, id: config.admin.id }
            });
        }
    },
    logout(dispatch: Dispatch): void {
        window.localStorage.removeItem('token');
        dispatch({
            type: 'LOGOUT_LOGIN'
        });
    }
};

export default LoginService;
