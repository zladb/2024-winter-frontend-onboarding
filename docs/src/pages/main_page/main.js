
import React, {Component} from "react";
import {Calendar} from "../../components/calendar"

export function renderMain(){
    return (
        <div className="main">
        <div className="main__contents">
            <div id="main__contents--calendar">
            <nav>
                <div className="year-month"></div>
                <div className="arrows">
                <div id="prev"><i className="bi bi-chevron-left"></i></div>
                <div id="next"><i className="bi bi-chevron-right"></i></div>
                </div>
            </nav>
            <Calendar/>
            </div>


        </div>
        </div> 
    );
}

// export default renderMain;