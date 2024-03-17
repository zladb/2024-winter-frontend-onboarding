
import React from "react";
import { useState } from "react";
import Todo from './todo';
import Calendar from './calendar';
import { MonthContext } from "../../contexts/date_context";
import { SelectedDayContext } from "../../contexts/date_context";

export const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    // const value = useMemo(() => [counter, actions], [counter, actions]);

    return (
      <MonthContext.Provider value={[currentMonth, setCurrentMonth]}>
        <SelectedDayContext.Provider value={[selectedDate, setSelectedDate]}>
          <div className="main">
            <div className="main__contents">
              <Calendar />
              <Todo />
            </div>
          </div>
        </SelectedDayContext.Provider>
      </MonthContext.Provider>
    );
};

export default Main;