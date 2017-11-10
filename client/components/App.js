import React from 'react';
import NavigationBar from './NavigationBar';
import Routes from '../Routes';
import FlashMessageList from './flash/FlashMessageList';

export default () => {
    return (
        <div className="container">
            <NavigationBar />
            <FlashMessageList />
            <Routes />
        </div>
    );
}