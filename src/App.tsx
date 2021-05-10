import Header from 'Components/Header';
import Loader from 'Components/Loader';
import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'Routes';

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Routes />
            <Loader />
        </Router>
    );
};

export default App;
