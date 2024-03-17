
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import {addMonths, subMonths} from 'date-fns';
import { MonthContext } from "../../contexts/date_context";

//{prevMonth, nextMonth}

//currentMonth, 
const RenderNavigation = () => {
  const [currentMonth, setCurrentMonth] = useContext(MonthContext);

  // console.log(currentMonth)
  // useCallback 사용하기? + selectedDate도 다시 지정해주기.
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // console.log(currentMonth);
  return (
    <nav>
      <div className="year-month">
        {format(currentMonth,'yyyy년 M월')}
      </div>
      <div className="arrows">
        <div id="prev">
          <i className="bi bi-chevron-left" onClick={prevMonth}></i>
        </div>
        <div id="next">
          <i className="bi bi-chevron-right" onClick={nextMonth}></i>
        </div>
      </div>
    </nav>
  );

};

export default RenderNavigation;