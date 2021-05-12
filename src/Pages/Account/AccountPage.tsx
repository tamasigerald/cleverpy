import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Layout from 'Components/Layout';

import { RootState } from 'Reducers/types';

const AccountPage: FC = () => {
    const loggedUser = useSelector((state: RootState) => state.login.loggedUser);
    return (
        <Layout>
            <div className="account">
                <img
                    className="account__avatar"
                    src={'/assets/images/user.jpeg'}
                    alt={`User ${loggedUser?.username} avatar`}
                />
                <div className="account__title">user id:</div>
                <div className="account__value">{loggedUser?.id}</div>
                <div className="account__title">username:</div>
                <div className="account__value">{loggedUser?.username}</div>
            </div>
        </Layout>
    );
};

export default AccountPage;
