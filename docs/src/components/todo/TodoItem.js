import React, {useState, useRef} from 'react';
import StyleInput from '../../styles/inputStyle';
import { renderSvg } from '../render_svg';

const TodoItem = ({ todo, handleSubmit, onClickIcon, isNew }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  // 새롭게 추가 되는 todo이면 편집모드
  React.useEffect(()=>{
    if (isNew){
      setIsEditing(true);
    }
  }, []);

  // 컴포넌트가 마운트될 때 input 요소에 포커스를 줌
  React.useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit({ id: todo.id, value: e.target.value });
      setIsEditing(false);
    }
  };

  return (
    <div className="todo__item" key={todo.id}>
      <div className="icon-container" onClick={() => onClickIcon(todo.id)}>
        {renderSvg(todo.checked ? 'tomato' : '#D9D9D9')}
        <div className="number-overlay">
          {todo.checked ? <i className="bi bi-check-lg" /> : <></>}
        </div>
      </div>
      {isEditing ? (
        <StyleInput
          ref={inputRef}
          type="text"
          id="todo-item--input"
          placeholder="할 일 입력"
          onKeyDown={handleEnter}
        />
      ) : (
        <div className='todo__item--text'>{todo.text}</div>
      )}
      <i className="bi bi-three-dots icon" />
    </div>
  );
};

export default TodoItem;
