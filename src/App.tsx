import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserService from 'Api/UserService';

import { RootState } from 'Reducers/types';
import { user } from 'Helpers/globalTypes';
import PostService from 'Api/PostService';

function App(): JSX.Element {
    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.users);
    const posts = useSelector((state: RootState) => state.posts);

    const getData = () => {
        UserService.getUsers(dispatch);
        PostService.getPosts(dispatch);
    };

    useEffect(getData, [dispatch]);

    return (
        <div className="App">
            {posts.loading && <div>Cargando...</div>}

            {users.error && <div>Error loading users!</div>}

            {posts.error && <div>Error loading posts!</div>}

            {!users.loading && !users.error && <div>users: {users.users?.length}</div>}

            {!posts.loading && !posts.error && <div>posts: {posts.posts?.length}</div>}
        </div>
    );
}

export default App;
