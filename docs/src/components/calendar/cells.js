import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, format, addDays, parse } from 'date-fns';
import { getFormattedDate } from '../../utils/data_utils';
import RenderCalendarIcon from './renderCalendarIcon';
import React from 'react';


const RenderCells = ({ currentMonth, selectedDate, onDateClick}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';
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
