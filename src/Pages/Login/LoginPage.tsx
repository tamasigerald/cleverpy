import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import Layout from 'Components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';
import LoginService from 'Api/LoginService';

type FormData = {
    username: string;
    password: string;
};

const LoginPage: FC = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const logged = useSelector((state: RootState) => state.login);

    const onSubmit = handleSubmit((data) => LoginService.login(dispatch, data));
    return (
        <Layout>
            <form className="form form--login" onSubmit={onSubmit}>
                <h1 className="form__title">Login:</h1>
                {logged.error && <div className="form__error">User not found!</div>}
                <input
                    className="input"
                    placeholder="username"
                    {...register('username', { required: true })}
                />
                {errors.username && <span className="form__error">Username required</span>}
                <input
                    className="input"
                    placeholder="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <span className="form__error">Password required</span>}
                <button className="btn btn--success">Submit</button>
            </form>

            {!logged.error && logged.loading && <div>Loading...</div>}
            {!logged.error && logged.loggedUser && <div>{logged.loggedUser.username}</div>}
        </Layout>
    );
};

export default LoginPage;
