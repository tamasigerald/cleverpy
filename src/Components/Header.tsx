import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';
import { BiLogOut } from 'react-icons/bi';

import ThemeButton from './ThemeButton';
import Menu from './Menu';

const Header: FC = () => {
    const logged = useSelector((state: RootState) => state.login.logged);
    return (
        <header className="header">
            <div className="header__toggler">
                <ThemeButton />
            </div>

            {logged && <Menu />}
            {logged && <BiLogOut className="icon icon--logout" />}
        </header>
    );
};

export default Header;
