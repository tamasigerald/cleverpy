import { ActionType } from 'Reducers/types';
import { StateType } from './types';

const initialState: StateType = {
    loading: false,
    logged: false,
    loggedUser: null,
    error: false,
    checked: false
};

export function loginReducer(state = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LOAD_LOGIN':
            return { ...state, loggedUser: null, logged: false, loading: true, error: false };
        case 'POST_LOGIN':
            return {
                ...state,
                loggedUser: action.loggedUser,
                logged: true,
                loading: false,
                error: false
            };
        case 'CHECK_LOGIN':
            return {
                ...state,
                loggedUser: action.loggedUser,
                logged: true,
                loading: false,
                error: false
            };
        case 'SET_CHECKED_LOGIN':
            return {
                ...state,
                loading: false,
                error: false,
                checked: true
            };
        case 'LOGOUT_LOGIN':
            return {
                ...state,
                loggedUser: null,
                logged: false,
                loading: false,
                error: false
            };
        case 'ERROR_LOGIN':
            return { ...state, loggedUser: null, logged: false, loading: false, error: true };
        default:
            return state;
    }
}
