import Header from 'Components/Header';
import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'Routes';

const App: FC = () => {
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
};

export default App;
