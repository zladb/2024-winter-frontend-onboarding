import React from 'react';
import Modal from './modal'
import Todo from './todo';
import Calendar from './new_calendar';
import Header from './header';

function app () {
    return (
        <>
            <Header/>
            <Calendar/>
            <Todo/>
            <Modal/>
        </>
    );
}

export default app;