import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import LoginService from 'Api/LoginService';
import Layout from 'Components/Layout';

import { RootState } from 'Reducers/types';

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
        <Layout center>
            <form className="form form--login" onSubmit={onSubmit}>
                <h1 className="form__title">Login:</h1>
                {logged.error && <div className="form__error">User not found!</div>}
                <input
                    className={`input ${errors.username ? 'input--error' : ''}`}
                    placeholder="username"
                    {...register('username', { required: true })}
                />
                {errors.username && <span className="form__error">Username required</span>}
                <input
                    className={`input ${errors.password ? 'input--error' : ''}`}
                    placeholder="password"
                    type="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <span className="form__error">Password required</span>}
                <button className="btn btn--success">Submit</button>
            </form>
        </Layout>
    );
};

export default LoginPage;
