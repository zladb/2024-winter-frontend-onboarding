import React , {useContext}from "react"
import { TodoListContext } from "../../contexts/todoList_context";
import { ModalContext } from "../../contexts/modal_context";
import { SelectedDayContext } from "../../contexts/date_context";
import { getFormattedDate } from "../../utils/data_utils";

const DeleteButton = () => {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const { closeModal } = useContext(ModalContext);
  const { modalTodo } = useContext(ModalContext);
  const [selectedDate] = useContext(SelectedDayContext);
  let dateId = getFormattedDate(selectedDate);

  const deleteTodoItem = () => {
    const updatedTodoList = todoList.filter((todo) => {
      return todo.id !== modalTodo.todoId;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem(dateId, JSON.stringify(updatedTodoList));
    console.log(
      `업데이트 된 리스트를 localstorage에 저장 => ${updatedTodoList}`,
    );
    closeModal();
  };

  return (
    <div id="delete-btn" onClick={deleteTodoItem}>
      <i className="bi bi-trash3-fill"></i>
      <div>삭제</div>
    </div>
  );
}

export default DeleteButton;

