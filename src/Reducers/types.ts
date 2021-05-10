import rootReducer from 'Reducers';

export interface StateType {
    posts?: [] | null;
    users?: [] | null;
    loading: boolean;
    error: boolean;
}

export interface ActionType {
    type: string;
    payload: [] | null;
}

export type RootState = ReturnType<typeof rootReducer>;
