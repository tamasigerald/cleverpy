import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostService from 'Api/PostService';
import UserService from 'Api/UserService';
import Layout from 'Components/Layout';
import PostCard from 'Components/PostCard';

import { RootState } from 'Reducers/types';
import { post } from 'Helpers/globalTypes';
import Footer from 'Components/Footer';

const DashboardPage: FC = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state: RootState) => state.posts.posts);
    const postsError = useSelector((state: RootState) => state.posts.error);
    const users = useSelector((state: RootState) => state.users.users);

    const getData = () => {
        PostService.getPosts(dispatch);
        UserService.getUsers(dispatch);
    };

    useEffect(getData, [dispatch]);

    return (
        <>
            <Layout>
                {!postsError && posts && (
                    <div className="card__wrapper">
                        {posts.map((post: post, i) => (
                            <PostCard key={i} users={users} posts={posts} post={post} />
                        ))}
                    </div>
                )}
                {postsError && <div>Error! Cannot retrieve data from server.</div>}
            </Layout>
            <Footer />
        </>
    );
};

export default DashboardPage;
