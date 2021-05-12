import React, { FC, useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router';

const BackButton: FC = () => {
    const [back, setBack] = useState<boolean>(true);
    const location = useLocation();
    const history = useHistory();

    const handleBack = () => {
        const route = location.pathname.replace(/^\//, '');
        if (route === 'dashboard' || route === 'login') {
            setBack(false);
        } else {
            setBack(true);
        }
    };

    useEffect(handleBack, [location]);

    return (
        <>
            {back && (
                <button onClick={() => history.push('/dashboard')} className="btn btn-back">
                    <BiArrowBack />
                </button>
            )}
        </>
    );
};

export default BackButton;
