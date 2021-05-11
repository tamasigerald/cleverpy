import React, { FC } from 'react';

import { post } from 'Helpers/globalTypes';
import getUsername from 'Helpers/getUsername';
import { Link } from 'react-router-dom';

type PostCardType = {
    children?: React.ReactNode;
    post: post;
    users: [] | null | undefined;
};

const PostCard: FC<PostCardType> = ({ post, users }) => {
    return (
        <div className="card card-post">
            <Link to={`/post/${post.id}`} className="card__title">
                {post.title}
            </Link>
            <div className="card__author">{getUsername(users, post)}</div>
            <div className="card__action">
                <div className="btn-action">Edit</div>
                <div className="btn-action btn-action--delete">Delete</div>
            </div>
        </div>
    );
};

export default PostCard;
