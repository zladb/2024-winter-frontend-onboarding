import React, { useContext, useState, useRef, useEffect } from "react";
import { SelectedDayContext } from "../../contexts/date_context";
import { getFormattedDate } from "../../utils/data_utils";
import { renderSvg } from "../../components/render_svg";
import styled from 'styled-components';


const Todo = ()=> {
  const [selectedDate, setSelectedDate] = useContext(SelectedDayContext);
  const dateId = getFormattedDate(selectedDate);
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(dateId)) || []);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem(dateId)) || []);
  }, [selectedDate]);

  useEffect(()=>{

  },[todoList]);

  const toggleInput = ()=>{
    // toggle
    setIsVisible(!isVisible)
  };

  const handleSubmit = (value) =>{
    const newTodo = {
      id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
      text: value,
      checked: false,
    };

    const newTodoArray = [...todoList, newTodo];
    setTodoList(newTodoArray)

    localStorage.setItem(dateId, JSON.stringify(newTodoArray));
    console.log(newTodoArray)
  };

  const onClickIcon = (id) => {
    console.log(id);
    const updatedTodoList = todoList.map(todo => {
      if(todo.id === id){
        return {...todo, checked: !todo.checked};
      }
      return todo;
    })
    setTodoList(updatedTodoList)

    localStorage.setItem(dateId, JSON.stringify(updatedTodoList));
  };

  return (
    <div id="main__contents--todo">
      <div className="todo__box" id="daily-routine">
        <TodoAddButton toggleInput={toggleInput} />
        <div className="todo__box--list" id="daily-routine-list">
          {todoList.map((todo) => {
            return (
              <div className="todo__item" key={todo.id}>
                <div
                  className="icon-container"
                  onClick={() => onClickIcon(todo.id)}
                >
                  {renderSvg(todo.checked ? 'tomato' : '#D9D9D9')}
                  <div className="number-overlay">
                    {todo.checked ? <i className="bi bi-check-lg" /> : <></>}
                  </div>
                </div>
                <div className="todo__item--text">{todo.text}</div>
                <i className="bi bi-three-dots icon" />
              </div>
            );
          })}
        </div>
        <div id="input-place">
          {isVisible ? (
            <InputItem
              toggleInput={toggleInput}
              handleSubmit={handleSubmit}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};


// 버튼 렌더링
const TodoAddButton = ({toggleInput}) => {
  const [selectedDate, setSelectedDate] = useContext(SelectedDayContext);
  console.log(`selectedDate = ${selectedDate}`)

  // use memo사용하기?
  const dateId = getFormattedDate(selectedDate);

  return (
    <>
      <button className="todo__goal" id="daily-routine-button" onClick={toggleInput}>
        <i className="bi bi-box2 icon"></i>
        TODO 추가하기
        <i className="bi bi-plus-circle-fill icon" id="plus"></i>
      </button>
    </>
  );
};


const StyleInput = styled.input`
flex: 2;
border: none;
margin: 0 var(--base-space);
padding-bottom: 8px;
padding: 8px 0px;
outline: none;
border: none;
border-bottom: 1px solid tomato;
`;


const InputItem = ({toggleInput, handleSubmit}) => {
  const inputRef = useRef(null);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      handleSubmit(e.target.value);
      toggleInput()
    }
  };

  // 컴포넌트가 마운트될 때 input 요소에 포커스를 줌
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="todo__item">
      <div className="icon-container">
        {renderSvg()}
        <div className="number-overlay">  </div>
      </div>
      <StyleInput
        ref={inputRef}
        type="text"
        id="todo-item--input"
        placeholder="할 일 입력"
        onKeyDown={handleEnter}
      />
      <i className="bi bi-three-dots icon" />
    </div>
  );
}

export default Todo;