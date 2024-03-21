import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoAddButton from '../../components/todo/TodoAddButton';

const TodoList = ({ todoItemList, handleSubmit,addNewTodo, onClickIcon }) => {

  return (
    <>
      <TodoAddButton addNewTodo={addNewTodo} />
      <div className="todo__box--list" id="daily-routine-list">
        {todoItemList.map((todo) => {
          // console.log(todo);
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleSubmit={handleSubmit}
              onClickIcon={onClickIcon}
              isNew={todo.text == '' ? true : false}
            />
          );
        })}
        {/* <Modal/> */}
      </div>
    </>
  );
};

export default TodoList;