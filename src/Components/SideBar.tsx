import React, { Dispatch, FC, SetStateAction } from 'react';
import { BiMessageAdd, BiSearch, BiUser } from 'react-icons/bi';
import { useHistory } from 'react-router';

type SideBarProps = {
    showSearch: boolean;
    setShowSearch: Dispatch<SetStateAction<boolean>>;
};

const SideBar: FC<SideBarProps> = ({ showSearch, setShowSearch }) => {
    const history = useHistory();
    const handleSearchButton = () => {
        setShowSearch(!showSearch);
        window.scrollTo(0, 0);
    };
    return (
        <div className="sidebar">
            <BiSearch onClick={handleSearchButton} className="icon sidebar__icon" />
            <BiMessageAdd onClick={() => history.push('/add')} className="icon sidebar__icon" />
            <BiUser onClick={() => history.push('/account')} className="icon sidebar__icon" />
        </div>
    );
};

export default SideBar;
