import React from 'react';

// 버튼 렌더링
const TodoAddButton = ({ addNewTodo }) => {
  // const [selectedDate, setSelectedDate] = useContext(SelectedDayContext);
  // console.log(`selectedDate = ${selectedDate}`);

  // use memo사용하기?
  // const dateId = getFormattedDate(selectedDate);

  return (
    <>
      <button
        className="todo__goal"
        id="daily-routine-button"
        onClick={addNewTodo}
      >
        <i className="bi bi-box2 icon"></i>
        TODO 추가하기
        <i className="bi bi-plus-circle-fill icon" id="plus"></i>
      </button>
    </>
  );
};

export default TodoAddButton;
