import methods from './methods';
import { config } from 'config';
import { Dispatch } from './types';

const CommentService = {
    getComments(dispatch: Dispatch, id: number | string): void {
        dispatch({
            type: 'LOAD_COMMENTS',
            payload: null
        });
        methods
            .get(config.endpoints.posts + `/${id}/comments`)
            .then((comments: []) => {
                dispatch({
                    type: 'GET_COMMENTS',
                    payload: comments
                });
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_COMMENTS',
                    payload: null
                });
            });
    }
};

export default CommentService;
