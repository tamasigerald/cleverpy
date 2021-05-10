import UserService from 'Api/UserService';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';

function App(): JSX.Element {
    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.users.users);

    const getData = () => {
        UserService.getUsers(dispatch);
    };

    useEffect(getData, [dispatch]);

    return <div className="App">Hello {':)'}</div>;
}

export default App;
