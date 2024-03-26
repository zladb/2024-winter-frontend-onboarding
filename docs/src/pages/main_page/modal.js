
import React, { useEffect, useContext } from 'react';
import ModifyButton from "../../components/modal/ModifyButton.js";
import DeleteButton from "../../components/modal/DeleteButton.js";
import { OpenModal, OpenModalContent } from "../../styles/modal/opened_modal.js";
import { ModalContext } from '../../contexts/modal_context.js';

const Modal = () => {
  const {showModal, closeModal, modalTodo, modalRef, modalBGRef} = useContext(ModalContext);

  useEffect(()=>{
    if(!modalRef.current) return;
    setTimeout(()=>{
      modalRef.current.style.transform = "translate(-50%,0)";
      modalRef.current.style.opacity = "1";
    },100);
  },[modalRef]);


  // const handleClickOutside = ({target}) => {
  //   if(!modalRef.current) return;
  //   if(!modalBGRef.current) return;
  //   if (showModal && !modalBGRef || !modalBGRef.current.contains(target)){
  //     console.log('??')
  //     closeModal();
  //   };
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside);
  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <OpenModal ref={modalBGRef}>
        <OpenModalContent ref={modalRef}>
        <div id="close">
            <div className="close" onClick={closeModal}>&times;</div>
          </div>
          <div id="todo-title">{modalTodo.todoTitle}</div>
          <div className="btns">
              <ModifyButton/>
              <DeleteButton/>
          </div>
        </OpenModalContent>
      </OpenModal>
    </>
  );
};

export default Modal