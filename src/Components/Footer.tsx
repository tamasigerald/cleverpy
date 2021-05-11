import React, { FC } from 'react';
import { BiMessageAdd, BiSearch, BiUser } from 'react-icons/bi';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <BiSearch className="icon footer__icon" />
            <BiMessageAdd className="icon footer__icon" />
            <BiUser className="icon footer__icon" />
        </footer>
    );
};

export default Footer;
