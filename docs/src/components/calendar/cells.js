import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, format, addDays, parse } from 'date-fns';
import { getFormattedDate } from '../../utils/data_utils';
import RenderCalendarIcon from './renderCalendarIcon';
import React, { useCallback } from 'react';
import { useContext } from 'react';
import { MonthContext } from '../../contexts/date_context';
import { SelectedDayContext } from '../../contexts/date_context';

const RenderCells = () => {
  console.log('render cells');
  const [currentMonth,]= useContext(MonthContext);
  const [selectedDate, setSelectedDate] = useContext(SelectedDayContext);

  const onDateClick = useCallback((day) =>{
      setSelectedDate(day);
  },[]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let row_index = 0;


  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      let dateId = getFormattedDate(day);

      const cloneDay = new Date(day);
      days.push(
        <div
          className={`col day ${
            isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentMonth, 'M') !== format(day, 'M')
              ? 'invisible'
              : ''
          }`}
          id={dateId}
          key={dateId}
          onClick={() => onDateClick(cloneDay)}
        >
          <RenderCalendarIcon dateId={dateId}/>
          <span>{format(day, 'd')}</span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" id={`row-${row_index}`} key={`rows-${row_index}`} >
        {days}
      </div>,
    );
    row_index++;
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default RenderCells;
