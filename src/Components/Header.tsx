import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';
import { BiLogOut } from 'react-icons/bi';

import ThemeButton from './ThemeButton';
import Menu from './Menu';
import LoginService from 'Api/LoginService';

const Header: FC = () => {
    const dispatch = useDispatch();
    const logged = useSelector((state: RootState) => state.login.logged);
    const logoutAction = () => {
        LoginService.logout(dispatch);
    };
    return (
        <header className="header">
            <div className="header__toggler">
                <ThemeButton />
            </div>

            {logged && <Menu logoutAction={logoutAction} />}
            {logged && <BiLogOut onClick={logoutAction} className="icon icon--logout" />}
        </header>
    );
};

export default Header;
