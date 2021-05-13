import { ReactNode } from 'react';
import { post, user } from '../types/global';

function getUsername(users: [] | null | undefined, post: post): ReactNode {
    const user = (users?.find((el: user) => el.id === post.userId) as unknown) as user;
    if (typeof user !== 'undefined') {
        return user.username;
    }
    return '-';
}

export default getUsername;
