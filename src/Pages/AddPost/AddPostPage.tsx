import React, { FC } from 'react';

import Layout from 'Components/Layout';
import { post } from 'types/global';
import { useDispatch } from 'react-redux';
import PostService from 'Api/PostService';

const AddPostPage: FC = () => {
    const dispatch = useDispatch();

    const sendData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
        PostService.addPost(dispatch, data);
        // PostService.getPost(dispatch, id);
    };
    return (
        <Layout>
            <form
                onSubmit={(e) => {
                    sendData(e);
                }}
                className="post-edit">
                <div>Id:</div>
                <input name="id" className="input post-edit__id" placeholder="id" />
                <div>user id:</div>
                <input name="userId" className="input post-edit__id" placeholder="userId" />
                <div>title:</div>
                <textarea
                    name="title"
                    className="input post-edit__title"
                    placeholder="title"></textarea>
                <div>body:</div>
                <textarea
                    name="body"
                    className="input post-edit__body"
                    placeholder="body"></textarea>
                <button className="btn btn--success">Save</button>
            </form>
        </Layout>
    );
};

export default AddPostPage;
