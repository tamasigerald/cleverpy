import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import Layout from 'Components/Layout';
import PostService from 'Api/PostService';
import UserService from 'Api/UserService';
import CommentService from 'Api/CommentService';
import getUsername from 'Helpers/getUsername';

import { comment, post } from 'types/global';
import { RootState } from 'Reducers/types';

type ParamsType = {
    id: string;
};

const PostPage: FC = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const post = useSelector((state: RootState) => state.posts);
    const users = useSelector((state: RootState) => state.users.users);
    const comments = useSelector((state: RootState) => state.comments);
    const { id } = useParams<ParamsType>();

    const getPost = () => {
        PostService.getPost(dispatch, id);
        UserService.getUsers(dispatch);
        CommentService.getComments(dispatch, id);
    };

    useEffect(getPost, [dispatch, id]);

    return (
        <Layout>
            <section className="section">
                {post.posts &&
                    post.posts?.map((el: post, i) => (
                        <div key={i} className="post">
                            <div className="post__title">{el.title}</div>
                            <div className="post__user">{getUsername(users, el)}</div>
                            <div className="post__date">19/08/2018</div>
                            <div className="post__body">{el.body}</div>
                            <div className="card__action">
                                <div
                                    onClick={() => history.push(`/post/edit/${el.id}`)}
                                    className="btn-action">
                                    Edit
                                </div>
                            </div>
                        </div>
                    ))}

                {post.error && <div>Error retrieving post data!</div>}
            </section>
            <section className="section">
                <div className="section__title">Commnets:</div>
                {comments.comments &&
                    comments.comments?.map((el: comment, i) => (
                        <div className="card card--post" key={i}>
                            <div className="card__title">{el.name}</div>
                            <div className="card__body">{el.body}</div>
                            <div className="card__author">{el.email}</div>
                        </div>
                    ))}

                {comments.error && <div>Error retrieving comments data!</div>}
            </section>
        </Layout>
    );
};

export default PostPage;
