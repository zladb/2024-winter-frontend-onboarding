
import React, {Component} from "react";

class Main extends Component{
    render() {
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
                <table className="calendar">
                    <thead>
                    <tr className="weeks">
                        <th className="week-day">일</th>
                        <th className="week-day">월</th>
                        <th className="week-day">화</th>
                        <th className="week-day">수</th>
                        <th className="week-day">목</th>
                        <th className="week-day">금</th>
                        <th className="week-day">토</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                </div>

                <div id="main__contents--todo">
                <div className="todo__box" id="daily-routine">
                    <button className="todo__goal" id="daily-routine-button">
                    <i className="bi bi-box2 icon"></i>Daily Todo
                    <i className="bi bi-plus-circle-fill icon" id="plus"></i>
                    </button>
                    <div className="todo__box--list" id="daily-routine-list"></div>
                </div>
                </div>
            </div>
            </div> 
        );
    }
}

export default Main;