import React from 'react';
import NavigationBar from './NavigationBar';
import Routes from '../Routes';

export default () => {
    return (
        <div className="container">
            <NavigationBar />
            <Routes />
        </div>
    );
}