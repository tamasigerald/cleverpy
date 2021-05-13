import React, { Dispatch, FC, SetStateAction } from 'react';
import { BiMessageAdd, BiSearch, BiUser } from 'react-icons/bi';
import { useHistory } from 'react-router';

type FooterProps = {
    showSearch: boolean;
    setShowSearch: Dispatch<SetStateAction<boolean>>;
};

const Footer: FC<FooterProps> = ({ showSearch, setShowSearch }) => {
    const history = useHistory();
    const handleSearchButton = () => {
        setShowSearch(!showSearch);
        window.scrollTo(0, 0);
    };
    return (
        <footer className="footer">
            <BiSearch onClick={handleSearchButton} className="icon footer__icon" />
            <BiMessageAdd onClick={() => history.push('/add')} className="icon footer__icon" />
            <BiUser onClick={() => history.push('/account')} className="icon footer__icon" />
        </footer>
    );
};

export default Footer;
