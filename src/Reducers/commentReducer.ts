import { StateType, ActionType } from './types';

const initialState: StateType = {
    comments: [],
    loading: false,
    error: false
};

export function commentReducer(state = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'LOAD_COMMENTS':
            return { ...state, comments: [], loading: true, error: false };
        case 'GET_COMMENTS':
            return { ...state, comments: action.payload, loading: false, error: false };
        case 'ERROR_COMMENTS':
            return { ...state, comments: [], loading: false, error: true };
        default:
            return state;
    }
}
