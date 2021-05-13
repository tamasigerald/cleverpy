import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import LoginPage from 'Pages/Login/LoginPage';
import DashboardPage from 'Pages/Dashboard/DashboardPage';
import AccountPage from 'Pages/Account/AccountPage';
import PostPage from 'Pages/Post/PostPage';
import AddPostPage from 'Pages/AddPost/AddPostPage';

const Routes: FC = () => {
    return (
        <Switch>
            <PublicRoute exact path="/login">
                <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/dashboard">
                <DashboardPage />
            </PrivateRoute>
            <PrivateRoute exact path="/post/:id">
                <PostPage />
            </PrivateRoute>
            <PrivateRoute exact path="/account">
                <AccountPage />
            </PrivateRoute>
            <PrivateRoute exact path="/add">
                <AddPostPage />
            </PrivateRoute>
            <Route path="*">
                <Redirect to="/login" />
            </Route>
        </Switch>
    );
};

export default Routes;
