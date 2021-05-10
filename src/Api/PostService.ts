import methods from './methods';
import { config } from 'config';
import { Dispatch } from './types';

const PostService = {
    getPosts(dispatch: Dispatch): void {
        dispatch({
            type: 'LOAD_POSTS',
            payload: null
        });
        methods
            .get(config.endpoints.posts)
            .then((users) => {
                dispatch({
                    type: 'GET_POSTS',
                    payload: users
                });
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_POSTS',
                    payload: null
                });
            });
    }
};

export default PostService;
