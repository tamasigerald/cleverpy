import React, { FC, useState } from 'react';

const ThemeButton: FC = () => {
    const [checked, setChecked] = useState(false);

    const themeToggle = () => {
        const body$$ = document.querySelector('body');
        body$$?.toggleAttribute('data-dark-mode');
        setChecked(!checked);
    };

    return (
        <label className="btn-theme">
            <input
                className="btn-theme__input"
                onClick={themeToggle}
                defaultChecked={checked}
                type="checkbox"
            />
            <span className="btn-theme__slider"></span>
        </label>
    );
};

export default ThemeButton;
