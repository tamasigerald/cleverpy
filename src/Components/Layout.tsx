import React, { FC } from 'react';

type LayoutProps = {
    center?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, center }) => {
    return <main className={`layout ${center ? 'layout--center' : ''}`}>{children}</main>;
};

export default Layout;
