import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { RootState } from 'Reducers/types';
import { RouteProps } from 'types/global';

const PublicRoute: FC<RouteProps> = ({ children, ...rest }): JSX.Element => {
    const logged = useSelector((state: RootState) => state.login);

    return <Route {...rest}>{!logged.logged ? children : <Redirect to="/dashboard" />}</Route>;
};

export default PublicRoute;
