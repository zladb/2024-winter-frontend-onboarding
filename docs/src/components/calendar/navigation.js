
import { format } from "date-fns";
import React from "react";

const RenderNavigation = ({currentMonth, prevMonth, nextMonth}) => {
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