
import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header>
            <div className="logo">
                <i className="bi bi-stop-circle"></i>
            </div>
            <div className="icons">
                <i className="bi bi-bell icon"></i>
                <i className="bi bi-three-dots icon"></i>
            </div>
            </header>
        );
    }
}

export default Header;