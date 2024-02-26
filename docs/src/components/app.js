import React, {Component} from 'react';
import Header from './header'
import Main from './main'
import Modal from './modal'

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Modal/>
            </>
        );
    }
}

export default App;