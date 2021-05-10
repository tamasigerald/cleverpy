import rootReducer from 'Reducers';
import { loggedUser } from './../Helpers/globalTypes';

export interface StateType {
    posts?: [] | null;
    users?: [] | null;
    logged?: boolean;
    loggedUser?: loggedUser | null | [];
    loading: boolean;
    error: boolean;
}

export interface ActionType {
    type: string;
    payload: [] | null | loggedUser;
}

export type RootState = ReturnType<typeof rootReducer>;
