import React from 'react';
import Modal from './modal'
import Header from './header';
import Main from './main';

function app () {
    return (
        <>
            <Header/>
            <Main/>
            <Modal/>
        </>
    );
}

export default app;