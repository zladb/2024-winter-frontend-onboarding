
import React from "react";
import { useState } from "react";
import Todo from './todo';
import Calendar from './calendar';
import { MonthContext } from "../../contexts/date_context";
import { SelectedDayContext } from "../../contexts/date_context";
import { TodoListContext } from "../../contexts/todoList_context";
import { getFormattedDate } from "../../utils/data_utils";
import { ModalContext } from "../../contexts/modal_context";
import Modal from "./modal";

export const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(getFormattedDate(selectedDate))) || []);
    const [showModal, setShowModal] = useState(false);
    const [modalTodo, setmodalTodo] = useState({todoTitle: '밥먹기', todoId: 0});

    const openModal = (todo)=>{
      console.log(todo)
      setmodalTodo({todoTitle:todo.text, todoId:todo.id})
      setShowModal(true);
    };

    const closeModal = (ref)=>()=>{
      if(!ref.current) return;
      ref.current.style.transform = "translate(-50%,100%)";
      ref.current.style.opacity = "0";
      setTimeout(()=>{
        setShowModal(false);
      },500);
    }
    
    // const value = useMemo(() => [counter, actions], [counter, actions]);

    return (
      <MonthContext.Provider value={[currentMonth, setCurrentMonth]}>
        <SelectedDayContext.Provider value={[selectedDate, setSelectedDate]}>
          <TodoListContext.Provider value={{ todoList, setTodoList }}>
            <ModalContext.Provider value={{ openModal, closeModal }}>
              <div className="main">
                <div className="main__contents">
                  <Calendar />
                  <Todo />
                  {showModal && (
                    <Modal
                      todoTitle={modalTodo.todoTitle}
                      todoId={modalTodo.todoId}
                    />
                  )}
                </div>
              </div>
            </ModalContext.Provider>
          </TodoListContext.Provider>
        </SelectedDayContext.Provider>
      </MonthContext.Provider>
    );
};

export default Main;