import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import Layout from 'Components/Layout';

type FormData = {
    username: string;
    password: string;
};

const LoginPage: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => console.log(data));
    return (
        <Layout>
            <form className="form form--login" onSubmit={onSubmit}>
                <h1 className="form__title">Login:</h1>
                <input
                    className="input"
                    placeholder="username"
                    {...register('username', { required: true })}
                />
                {errors.username && <span>Username required</span>}
                <input
                    className="input"
                    placeholder="password"
                    {...register('password', { required: true })}
                />
                {errors.password && <span>Password required</span>}
                <button className="btn btn--success">Submit</button>
            </form>
        </Layout>
    );
};

export default LoginPage;
