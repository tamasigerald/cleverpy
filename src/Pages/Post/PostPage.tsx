import React, { FC, useEffect } from 'react';

import Layout from 'Components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';
import PostService from 'Api/PostService';
import { useParams } from 'react-router';
import { post } from 'Helpers/globalTypes';

type ParamsType = {
    id: string;
};

const PostPage: FC = () => {
    const dispatch = useDispatch();

    const post = useSelector((state: RootState) => state.posts.posts);
    const { id } = useParams<ParamsType>();

    const getPost = () => {
        PostService.getPost(dispatch, id);
    };

    useEffect(getPost, [dispatch, id]);

    return (
        <Layout>
            {post?.map((el: post, i) => (
                <div key={i}>{el.title}</div>
            ))}
        </Layout>
    );
};

export default PostPage;
