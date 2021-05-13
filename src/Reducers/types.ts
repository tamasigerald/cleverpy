import rootReducer from 'Reducers';
import { loggedUser } from './../Helpers/globalTypes';

export interface StateType {
    posts?: [] | null;
    users?: [] | null;
    comments?: [] | null;
    logged?: boolean;
    loggedUser?: loggedUser | null;
    checked?: boolean;
    loading: boolean;
    error: boolean;
}

export interface ActionType {
    type: string;
    payload?: [] | null;
    loggedUser?: loggedUser | null;
}

export type RootState = ReturnType<typeof rootReducer>;
