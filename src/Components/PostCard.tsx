import React, { FC } from 'react';

import { post } from 'Helpers/globalTypes';
import getUsername from 'Helpers/getUsername';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostService from 'Api/PostService';

type PostCardType = {
    children?: React.ReactNode;
    post: post;
    users: [] | null | undefined;
    posts: [];
};

const PostCard: FC<PostCardType> = ({ post, users, posts }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const deletePost = (id: number, posts: []) => {
        PostService.deletePost(dispatch, id, posts);
    };
    return (
        <div className="card card-post">
            <Link to={`/post/${post.id}`} className="card__title card__title--link">
                {post.title}
            </Link>
            <div className="card__author">{getUsername(users, post)}</div>
            <div className="card__action">
                <div onClick={() => history.push(`/post/edit/${post.id}`)} className="btn-action">
                    Edit
                </div>
                <div onClick={() => deletePost(post.id, posts)} className="btn-action">
                    Delete
                </div>
            </div>
        </div>
    );
};

export default PostCard;
