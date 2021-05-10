import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';

const Loader: FC = () => {
    const loading = useSelector((state: RootState) => state.login.loading || state.posts.loading);
    return (
        <>
            {loading && (
                <div className="loader">
                    <div className="lds-default">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Loader;
