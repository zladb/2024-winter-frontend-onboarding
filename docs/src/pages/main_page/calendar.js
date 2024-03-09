import React from 'react';
import RenderNavigation from '../../components/calendar/navigation';
import RenderDays from '../../components/calendar/days';
import RenderCells from '../../components/calendar/cells';

const Calendar = () => {

    return (
      <div className="calender" id="main__contents--calendar">
        <RenderNavigation />
        <RenderDays />
        <RenderCells />
      </div>
    );
};

export default Calendar;