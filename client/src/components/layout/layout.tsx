import React, { FC } from 'react';
import Navbar from '../navbar';
import useAuth from '../../hooks/use-auth';
import Alert from '../alert';

const Layout: FC = ({ children }) => {
    const { ready } = useAuth();

    if (!ready)
        return (
            <div className="spinner-block">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

    return (
        <div>
            <Navbar />
            <div className="container">
                <Alert />
                {children}
            </div>
        </div>
    );
}

export default Layout;