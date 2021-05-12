import methods from './methods';
import { config } from 'config';
import { Dispatch } from './types';
import { post } from 'Helpers/globalTypes';

const PostService = {
    getPosts(dispatch: Dispatch): void {
        dispatch({
            type: 'LOAD_POSTS',
            payload: null
        });
        methods
            .get(config.endpoints.posts)
            .then((posts) => {
                dispatch({
                    type: 'GET_POSTS',
                    payload: posts
                });
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_POSTS',
                    payload: null
                });
            });
    },
    deletePost(dispatch: Dispatch, id: number, posts: []): void {
        dispatch({
            type: 'LOAD_POSTS',
            payload: null
        });
        // Here should be executed methods.delete
        // This is the fake solution
        const postIndex: number = posts.findIndex((post: post) => post.id === id);
        posts.splice(postIndex, 1);
        dispatch({
            type: 'GET_POSTS',
            payload: posts
        });
    }
};

export default PostService;
