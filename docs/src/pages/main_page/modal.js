
import React, {Component} from "react";

class Modal extends Component{
    render(){
        return (
            <div className="modal">
            <div className="modal-content">
                <div id="close">
                <div className="close">&times;</div>
                </div>
                <div id="todo-title">밥 먹고 유튜브 보기</div>
                <div className="btns">
                <div id="modify-btn">
                    <i className="bi bi-pen"></i>
                    <div>수정</div>
                </div>
                <div id="delete-btn">
                    <i className="bi bi-trash3-fill"></i>
                    <div>삭제</div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Modal