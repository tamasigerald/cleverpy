import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Layout from 'Components/Layout';
import PostService from 'Api/PostService';

import { RootState } from 'Reducers/types';
import { post } from 'Helpers/globalTypes';

type ParamsType = {
    id: string;
};

const EditPostPage: FC = () => {
    const dispatch = useDispatch();

    const post = useSelector((state: RootState) => state.posts);
    const { id } = useParams<ParamsType>();

    const getPost = () => {
        PostService.getPost(dispatch, id);
    };

    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const data: post = {
        //     id: e.target[0].value;
        // }
        const _id = (e.currentTarget.id as unknown) as HTMLInputElement;
        const userId = (e.currentTarget.userId as unknown) as HTMLInputElement;
        const title = (e.currentTarget.title as unknown) as HTMLInputElement;
        const body = (e.currentTarget.body as unknown) as HTMLInputElement;
        const data: post = {
            id: parseInt(_id.value),
            userId: parseInt(userId.value),
            title: title.value,
            body: body.value
        };
        PostService.editPost(dispatch, data);
        // PostService.getPost(dispatch, id);
    };

    useEffect(getPost, [dispatch, id]);
    return (
        <Layout>
            {post.posts &&
                post.posts?.map((el: post, i) => (
                    <form
                        onSubmit={(e) => {
                            sendData(e);
                        }}
                        className="post-edit"
                        key={i}>
                        <div>Id:</div>
                        <input name="id" className="input post-edit__id" defaultValue={el.id} />
                        <div>user id:</div>
                        <input
                            name="userId"
                            className="input post-edit__id"
                            defaultValue={el.userId}
                        />
                        <div>title:</div>
                        <textarea
                            name="title"
                            className="input post-edit__title"
                            defaultValue={el.title}></textarea>
                        <div>body:</div>
                        <textarea
                            name="body"
                            className="input post-edit__body"
                            defaultValue={el.body}></textarea>
                        <button className="btn btn--success">Save</button>
                    </form>
                ))}

            {post.error && <div>Error retrieving post data!</div>}
        </Layout>
    );
};

export default EditPostPage;
