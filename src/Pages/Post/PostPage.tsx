import React, { FC, useEffect } from 'react';

import Layout from 'Components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';
import PostService from 'Api/PostService';
import { useParams } from 'react-router';
import { post } from 'Helpers/globalTypes';
import getUsername from 'Helpers/getUsername';
import UserService from 'Api/UserService';

type ParamsType = {
    id: string;
};

const PostPage: FC = () => {
    const dispatch = useDispatch();

    const post = useSelector((state: RootState) => state.posts.posts);
    const users = useSelector((state: RootState) => state.users.users);
    const { id } = useParams<ParamsType>();

    const getPost = () => {
        PostService.getPost(dispatch, id);
        UserService.getUsers(dispatch);
    };

    useEffect(getPost, [dispatch, id]);

    return (
        <Layout>
            {post?.map((el: post, i) => (
                <div key={i} className="post">
                    <div className="post__title">{el.title}</div>
                    <div className="post__user">{getUsername(users, el)}</div>
                    <div className="post__date">19/08/2018</div>
                    <div className="post__body">{el.body}</div>
                    <div className="card__action">
                        <div className="btn-action">Edit</div>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default PostPage;
