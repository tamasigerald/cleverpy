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
            .then((posts: []) => {
                /* The next two lines, makes added posts persisten through localStorage
                to fake a post method on redux state */
                // This is for later use to fake add post
                const localPosts: [] = JSON.parse(localStorage.getItem('posts') || '[]');
                const result = [...posts, ...localPosts] as [];
                dispatch({
                    type: 'GET_POSTS',
                    payload: result
                });
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_POSTS',
                    payload: null
                });
            });
    },
    getPost(dispatch: Dispatch, id: string): void {
        dispatch({
            type: 'LOAD_POSTS',
            payload: null
        });
        methods
            .get(config.endpoints.posts + `/${id}`)
            .then((post: post) => {
                const result = [];
                result.push(post);
                dispatch({
                    type: 'GET_POSTS',
                    payload: result as []
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
