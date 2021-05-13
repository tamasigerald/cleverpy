import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'Components/Header';
import Loader from 'Components/Loader';
import Routes from 'Routes';

import checkLocalUser from 'Helpers/checkLocalUser';
import BackButton from 'Components/BackButton';
import { RootState } from 'Reducers/types';

const App: FC = () => {
    const dispatch = useDispatch();
    const logged = useSelector((state: RootState) => state.login.checked);
    useEffect(() => checkLocalUser(dispatch), [dispatch]);
    return (
        <Router>
            <Header />
            {logged && <Routes />}
            <Loader />
            <BackButton />
        </Router>
    );
};

export default App;
