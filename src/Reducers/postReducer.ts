import { StateType, ActionType } from './types';

const initialState: StateType = {
    posts: [],
    loading: false,
    error: false
};

export function postReducer(state = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LOAD_POSTS':
            return { ...state, posts: [], loading: true, error: false };
        case 'GET_POSTS':
            return { ...state, posts: action.payload, loading: false, error: false };
        case 'EDIT_POSTS':
            return { ...state, posts: action.payload, loading: false, error: false };
        case 'ERROR_POSTS':
            return { ...state, posts: [], loading: false, error: true };
        default:
            return state;
    }
}
