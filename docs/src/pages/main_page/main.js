
import React from "react";
import { useState } from "react";
import Todo from './todo';
import Calendar from './calendar';
import { MonthContext } from "../../contexts/date_context";
import { SelectedDayContext } from "../../contexts/date_context";
import { TodoListContext } from "../../contexts/todoList_context";
import { getFormattedDate } from "../../utils/data_utils";

export const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(getFormattedDate(selectedDate))) || []);

    // const value = useMemo(() => [counter, actions], [counter, actions]);

    return (
      <MonthContext.Provider value={[currentMonth, setCurrentMonth]}>
        <SelectedDayContext.Provider value={[selectedDate, setSelectedDate]}>
          <TodoListContext.Provider value={{todoList, setTodoList}}>
            <div className="main">
              <div className="main__contents">
                <Calendar />
                <Todo />
              </div>
            </div>
          </TodoListContext.Provider>
        </SelectedDayContext.Provider>
      </MonthContext.Provider>
    );
};

export default Main;