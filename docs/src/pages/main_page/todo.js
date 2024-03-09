import React from "react";

const Todo = ()=> {
    return (
      <div id="main__contents--todo">
        <div className="todo__box" id="daily-routine">
          <button className="todo__goal" id="daily-routine-button">
            <i className="bi bi-box2 icon"></i>Daily Todos
            <i className="bi bi-plus-circle-fill icon" id="plus"></i>
          </button>
          <div className="todo__box--list" id="daily-routine-list"></div>
        </div>
      </div>
    );
};

export default Todo;