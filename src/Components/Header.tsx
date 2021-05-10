import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Reducers/types';
import ThemeButton from './ThemeButton';

const Header: FC = () => {
    const logged = useSelector((state: RootState) => state.login.logged);
    return (
        <header className="header">
            {!logged && (
                <div className="header__toggler">
                    <ThemeButton />
                </div>
            )}

            {logged && <div>Menu</div>}
        </header>
    );
};

export default Header;
