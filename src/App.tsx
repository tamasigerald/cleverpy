import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'Components/Header';
import Loader from 'Components/Loader';
import Routes from 'Routes';

import checkLocalUser from 'Helpers/checkLocalUser';
import BackButton from 'Components/BackButton';

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => checkLocalUser(dispatch), [dispatch]);
    return (
        <Router>
            <Header />
            <Routes />
            <Loader />
            <BackButton />
        </Router>
    );
};

export default App;
