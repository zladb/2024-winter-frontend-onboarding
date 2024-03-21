import React , {useContext}from "react"
import { TodoListContext } from "../../contexts/todoList_context";
import { ModalContext } from "../../contexts/modal_context";

const DeleteButton = ({todoId, modalRef}) => {

  const {todoList, setTodoList} = useContext(TodoListContext);
  const {closeModal} = useContext(ModalContext);
  const deleteTodoItem = () => {
    const updatedTodoList = todoList.filter(
      (todo)=>{
        return todo.id !== todoId 
      }
    );
    setTodoList(updatedTodoList)
    closeModal(modalRef)();
  };

    return (
      <div id="delete-btn" onClick={deleteTodoItem}>
        <i className="bi bi-trash3-fill"></i>
        <div>삭제</div>
      </div>
    );
}

export default DeleteButton;

