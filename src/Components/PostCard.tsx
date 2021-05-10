import React, { FC } from 'react';

import { post } from 'Helpers/globalTypes';
import getUsername from 'Helpers/getUsername';

type PostCardType = {
    children?: React.ReactNode;
    post: post;
    users: [] | null | undefined;
};

const PostCard: FC<PostCardType> = ({ post, users }) => {
    return (
        <div className="card card-post">
            <div>{post.title}</div>
            <div>{getUsername(users, post)}</div>
        </div>
    );
};

export default PostCard;
