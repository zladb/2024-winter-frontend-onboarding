import React, { useContext, useState, useRef, useEffect } from "react";
import { SelectedDayContext } from "../../contexts/date_context";
import { getFormattedDate } from "../../utils/data_utils";
import TodoList from "../../components/todo/TodoList.js";
import { TodoListContext } from "../../contexts/todoList_context.js";

const Todo = () => {
  const [selectedDate] = useContext(SelectedDayContext);
  const {todoList, setTodoList} = useContext(TodoListContext);

  let dateId = getFormattedDate(selectedDate);

  useEffect(() => {
    dateId = getFormattedDate(selectedDate);
    setTodoList(JSON.parse(localStorage.getItem(dateId)) || []);
  }, [selectedDate]);

  // useEffect(()=>{

  // }, [todoList]);

  // todo의 text값을 업데이트
  const handleSubmit = ({ id, value }) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: value };
      }
      return todo;
    });

    setTodoList(updatedTodoList);

    localStorage.setItem(dateId, JSON.stringify(updatedTodoList));
    console.log(
      `업데이트 된 리스트를 localstorage에 저장 => ${updatedTodoList}`,
    );
  };

  // 새 todo를 생성해서 todo리스트 마지막에 추가함.
  const addNewTodo = ({}) => {
    const newTodo = {
      id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
      text: '',
      checked: false,
    };

    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);

    localStorage.setItem(dateId, JSON.stringify(updatedTodoList));
    console.log(`새로운 아이템추가 후 localstorage 저장 => ${updatedTodoList}`);
  };

  // 아이콘을 클릭하면 체크 여부가 바뀜.
  const onClickIcon = (id) => {
    // console.log(id);
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodoList(updatedTodoList);

    localStorage.setItem(dateId, JSON.stringify(updatedTodoList));
  };



  return (
    <div id="main__contents--todo">
      <div className="todo__box" id="daily-routine">
        <TodoList
          todoItemList={todoList}
          handleSubmit={handleSubmit}
          addNewTodo={addNewTodo}
          onClickIcon={onClickIcon}
        />
      </div>
      {/* {showModal?<Modal/>:<></>} */}
    </div>
  );
};


export default Todo;