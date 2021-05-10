import { StateType, ActionType } from './types';

const initialState: StateType = {
    users: [],
    loading: true,
    error: false
};

export function userReducer(state = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, users: [], loading: true, error: false };
        case 'GET_USERS':
            return { ...state, users: action.payload, loading: false, error: false };
        case 'ERROR_USERS':
            return { ...state, users: [], loading: false, error: true };
        default:
            return state;
    }
}
