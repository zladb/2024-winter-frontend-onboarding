
import React, { useCallback } from "react";
import { useState, useRef } from "react";
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

    const modalRef = useRef(null);
    const modalBGRef = useRef(null);

    console.log('render_main');

    const openModal = useCallback(({todo, modifyTodo})=>{
      console.log(todo)
      setmodalTodo({todoTitle:todo.text, todoId:todo.id, modifyTodo:modifyTodo})
      setShowModal(true);
    }, []);

    const closeModal = useCallback(() =>{
      if(!modalRef.current) return;
      modalRef.current.style.transform = "translate(-50%,100%)";
      modalRef.current.style.opacity = "0";
      setTimeout(()=>{
        setShowModal(false);
      },200);
    }, [modalRef]);
  

    return (
      <MonthContext.Provider value={[currentMonth, setCurrentMonth]}>
        <SelectedDayContext.Provider value={[selectedDate, setSelectedDate]}>
          <TodoListContext.Provider value={{ todoList, setTodoList }}>
            <ModalContext.Provider
              value={{
                showModal,
                openModal,
                closeModal,
                modalTodo,
                setmodalTodo,
                modalRef,
                modalBGRef,
              }}
            >
              <div className="main">
                <div className="main__contents">
                  <Calendar />
                  <Todo />
                  {showModal && <Modal />}
                </div>
              </div>
            </ModalContext.Provider>
          </TodoListContext.Provider>
        </SelectedDayContext.Provider>
      </MonthContext.Provider>
    );
};

export default Main;