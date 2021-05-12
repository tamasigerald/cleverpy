import React, { FC, useState } from 'react';

type MenuProps = {
    logoutAction?: () => void;
};

const Menu: FC<MenuProps> = ({ logoutAction }) => {
    const [menu, setMenu] = useState(false);

    const toggelMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="menu">
            <div
                onClick={toggelMenu}
                className={`menu__burger ${menu ? 'menu__burger__active' : ''}`}>
                <div className="menu__burger__bar1"></div>
                <div className="menu__burger__bar2"></div>
                <div className="menu__burger__bar3"></div>
            </div>
            <div className={`menu__list ${menu ? 'menu__list__active' : ''}`}>
                <div
                    onClick={logoutAction}
                    className="btn-action btn-action--menu btn-action--logout">
                    Log out
                </div>
            </div>
        </div>
    );
};

export default Menu;
