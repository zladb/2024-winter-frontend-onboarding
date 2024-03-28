import React, {useContext} from "react"
import { ModalContext } from "../../contexts/modal_context";

const ModifyButton = () => {
    const {modalTodo} = useContext(ModalContext);
    const {closeModal} = useContext(ModalContext);

    const ModifyTodoItem = () => {
      modalTodo.modifyTodo()
      closeModal();
    };

    return (
      <div id="modify-btn" onClick={ModifyTodoItem}>
        <i className="bi bi-pen"></i>
        <div>수정</div>
      </div>
    );
}

export default ModifyButton;

