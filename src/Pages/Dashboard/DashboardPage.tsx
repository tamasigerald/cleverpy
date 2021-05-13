import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostService from 'Api/PostService';
import UserService from 'Api/UserService';
import Layout from 'Components/Layout';
import PostCard from 'Components/PostCard';

import { RootState } from 'Reducers/types';
import { post } from 'Helpers/globalTypes';
import Footer from 'Components/Footer';
import SideBar from 'Components/SideBar';

const DashboardPage: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [showSearch, setShowSearch] = useState<boolean>(false);

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
                <input
                    className={`input input--search ${showSearch ? 'input--search--show' : ''}`}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="search"
                />
                {!postsError && posts && (
                    <div className="card__wrapper">
                        {posts
                            .filter((post: post) =>
                                post.title.toLowerCase().includes(searchValue.toLowerCase())
                            )
                            .map((post: post, i) => (
                                <PostCard key={i} users={users} posts={posts} post={post} />
                            ))}
                    </div>
                )}
                {postsError && <div>Error! Cannot retrieve data from server.</div>}
            </Layout>
            <Footer showSearch={showSearch} setShowSearch={setShowSearch} />
            <SideBar showSearch={showSearch} setShowSearch={setShowSearch} />
        </>
    );
};

export default DashboardPage;
