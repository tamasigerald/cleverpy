import { config } from 'config';
import methods from './methods';
import { Dispatch } from './types';

const UserService = {
    getUsers(dispatch: Dispatch) {
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
