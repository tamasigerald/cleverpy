import React, { FC } from 'react';
import { BiMessageAdd, BiSearch, BiUser } from 'react-icons/bi';
import { useHistory } from 'react-router';

const Footer: FC = () => {
    const history = useHistory();
    return (
        <footer className="footer">
            <BiSearch className="icon footer__icon" />
            <BiMessageAdd onClick={() => history.push('/add')} className="icon footer__icon" />
            <BiUser onClick={() => history.push('/account')} className="icon footer__icon" />
        </footer>
    );
};

export default Footer;
