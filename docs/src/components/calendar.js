import React, { useState, useEffect } from 'react';
import { getFormattedDate, parseDate } from '../utils/data_utils';
import { renderSvg } from './render_svg';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [prevDate, setPrevDate] = useState(getFormattedDate(selectedDate));
  const [calendarContent, setCalendarContent] = useState(null);

  useEffect(() => {
    console.log(selectedDate, new Date());
    const formattedDate = getFormattedDate(selectedDate);
    const seletedDay = document.getElementById(formattedDate);
    seletedDay.classList.add('selected');
    console.log(selectedDate);
    // renderCalendar(selectedDate);
    // attachDayHandler();
    // focusedDay(getFormattedDate(selectedDate), prevDate);
    // renderTodoItems(selectedDate);
  }, [selectedDate]); //, prevDate

  // return renderSvg();
  //   let selectedDate = new Date();
  //   let selectedDateId = getFormattedDate(selectedDate);
  //   let prevDate = selectedDateId;

  // 선택한 날짜를 포커싱하고 date를 새로 지정함.
  function focusedDay(dateId) {
    // let prevDateId= prevDate

    // if (dateId != prevDateId) {
    //   console.log('하이 ㅋㅋ')
    //   const prevDateElement = document.getElementById(prevDateId);
    //   prevDateElement.classList.remove('selected');
    //   setPrevDate(prevDateId);
    // }

    let prevDateId = getFormattedDate(selectedDate);

    console.log(`date ids=> ${dateId}, ${prevDateId}`);
    if (prevDateId != dateId) {
      console.log('다른 날짜 설정');
      const prevDateElement = document.getElementById(prevDateId);
      prevDateElement.classList.remove('selected');
      // 날짜 전역 변수 업데이트
      // const seletedDay = document.getElementById(dateId);
      // seletedDay.classList.add('selected');

      console.log(selectedDate);
      const asdf = parseDate(dateId);
      console.log(asdf);
      setSelectedDate(asdf);

    }
    // setSelectedDate(parseDate(dateId));
  }

  const handleDayClick = (dateId) => {
    console.log(`date id = ${parseDate(dateId)}`);
    // setSelectedDate(parseDate(dateId));
    // setPrevDate(dateId);
    focusedDay(dateId);
  };

  // 달력 icon 렌더링 -> todo 갯수, 색깔 적용
  function renderCalendarIcon(date) {
    const formattedDate = getFormattedDate(date);
    // console.log(`format = ${formattedDate}`)
    const todoArray = JSON.parse(localStorage.getItem(formattedDate)) || [];

    let todoCount;
    let checkedClass = '';
    let color;
    if (todoArray.length === 0) {
      todoCount = ' ';
    } else {
      todoCount = todoArray.filter((todo) => !todo.checked).length;
      // 체크된 항목이 하나라도 있다면 checkedClass를 설정
      if (todoArray.some((todo) => todo.checked)) {
        checkedClass = 'checked';
        color = '#ff6347';
      }
    }

    return (
      <div
        className={`icon-container ${checkedClass}`}
        onClick={() => handleDayClick(formattedDate)}
        sytle={{ position: 'relative', display: 'flex' }}
      >
        {renderSvg(color)}
        <div
          className="number-overlay"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            fontSize: '14px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {todoCount === 0 ? <i className="bi bi-check-lg"></i> : todoCount}
        </div>
      </div>
    );
  }

  const attachDayHandler = () => {
    // document.querySelectorAll('.day').forEach((dayElement) => {
    //   dayElement.addEventListener('click', (event) => {
    //     const selectedDay = event.target.closest('.day');
    //     focusedDay(selectedDay.id, prevDate);
    //     prevDate = selectedDay.id;
    //     // 날짜 전역 변수 업데이트
    //     selectedDate = parseDate(selectedDay.id);
    //     window.console.log(`new date => ${selectedDate}`);
    //     // todo 추가 버튼 활성화
    //     document.getElementById('daily-routine-button').disabled = false;
    //     renderTodoItems(selectedDate);
    //   });
    // });
  };

  function renderCalendar(date) {
    // let date = new Date()
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    console.log(`${currentYear}년 ${currentMonth + 1}월`);

    // 컴포넌트 외부의 상태나 프로퍼티에 영향을 주는 부분은 useEffect 내부로 이동
    // useEffect(() => {
    //   document.querySelector('.year-month').textContent = `${currentYear}년 ${currentMonth + 1}월`;
    // }, [currentYear, currentMonth]);

    // 첫 요일
    const oneDay = new Date(date)
    oneDay.setDate(1);
    const firstDay = oneDay.getDay();

    // 처음 날짜, 마지막 날짜
    const firstDate = new Date(currentYear, currentMonth, 1);
    const lastDate = new Date(currentYear, currentMonth + 1, 0);

    // 요일 구하기
    const limitDay = firstDay + lastDate.getDate();
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let jsxRows = [];
    let jsxCells = [];

    // 달력의 공백 - 지난 달
    for (let i = 0; i < firstDay; i += 1) {
      jsxCells.push(
        <td className="day invisible">{renderCalendarIcon(date)}</td>,
      );
    }

    // 실제 달력 부분
    let currentDate = new Date(firstDate);
    let index = 0;
    while (currentDate <= lastDate) {
      jsxCells.push(
        <td className="day" id={getFormattedDate(currentDate)}>
          {renderCalendarIcon(currentDate)}
          {currentDate.getDate()}
        </td>,
      );

      if (jsxCells.length === 7) {
        jsxRows.push(<tr key={`row-${index++}`}>{jsxCells}</tr>);
        jsxCells = [];
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    // 달력의 공백 - 이번달
    for (let i = limitDay; i < nextDay; i += 1) {
      jsxCells.push(
        <td className="day invisible">{renderCalendarIcon(date)}</td>,
      );
    }

    jsxRows.push(<tr key={`row-${index++}`}>{jsxCells}</tr>);

    console.log(jsxRows);
    return <tbody>{jsxRows}</tbody>;
  }

  return (
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
      {renderCalendar(selectedDate)}
    </table>
  );
}
