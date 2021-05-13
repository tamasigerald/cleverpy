import methods from './methods';
import { config } from 'config';
import { Dispatch } from './types';
import { post } from 'types/global';

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
    addPost(dispatch: Dispatch, data: post): void {
        // Should be called methods.post
        dispatch({
            type: 'LOAD_POSTS',
            payload: null
        });
        // Faking add post and make it persisten on localstorage
        const localPosts: [] = JSON.parse(localStorage.getItem('posts') || '[]');
        const newLocalPosts = [...localPosts, data];
        localStorage.setItem('posts', JSON.stringify(newLocalPosts));
        const result = ([data] as unknown) as [];
        dispatch({
            type: 'ADD_POSTS',
            payload: result
        });
    },
    editPost(dispatch: Dispatch, data: post): void {
        // Should be called methods.put
        dispatch({
            type: 'LOAD_POSTS',
            payload: null
        });
        // fake edit
        const result = ([data] as unknown) as [];
        dispatch({
            type: 'EDIT_POSTS',
            payload: result
        });
        // we can also call getPost to update data rendered
        // Or we can call the same function on the rendered component on submit
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
