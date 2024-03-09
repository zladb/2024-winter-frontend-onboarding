import React, { useState, useEffect } from 'react';
import RenderNavigation from '../../components/calendar/navigation';
import {format, addMonths, subMonths} from 'date-fns';
import RenderDays from '../../components/calendar/days';
import RenderCells from '../../components/calendar/cells';
// import { getFormattedDate, parseDate } from '../utils/data_utils';
// import { renderSvg } from './render_svg';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () =>{
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () =>{
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onDateClick = (day) =>{
        setSelectedDate(day);
    };

    return (
      <div className="calender">
        <RenderNavigation
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <RenderDays />
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </div>
    );
};

export default Calendar;