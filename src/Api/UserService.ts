import methods from './methods';
import { config } from 'config';
import { Dispatch } from './types';

const UserService = {
    getUsers(dispatch: Dispatch): void {
        dispatch({
            type: 'LOAD_USERS',
            payload: null
        });
        methods
            .get(config.endpoints.users)
            .then((users) => {
                dispatch({
                    type: 'GET_USERS',
                    payload: users
                });
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_USERS',
                    payload: null
                });
            });
    }
};

export default UserService;
