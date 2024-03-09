import React from "react";
import { renderSvg } from '../render_svg';


// 달력 icon 렌더링 -> todo 갯수, 색깔 적용
const RenderCalendarIcon = ({dateId}) => {
    const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
    // console.log(todoArray)
  
    let todoCount;
    let checkedClass = '';
    let color;
    if (todoArray.length === 0) {
      todoCount = ' ';
    } else {
      todoCount = todoArray.filter((todo) => !todo.checked).length;
      // 체크된 항목이 하나라도 있다면 checkedClass를 설정
      if (todoArray.some((todo) => todo.checked)) {
        checkedClass = 'checked';
        color = '#ff6347';
      }
    }
  
    return (
      <div
        className={`icon-container ${checkedClass}`}
        sytle={{ position: 'relative', display: 'flex' }}
      >
        {renderSvg(color)}
        <div
          className="number-overlay"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            fontSize: '14px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {todoCount === 0 ? <i className="bi bi-check-lg"></i> : todoCount}
        </div>
      </div>
    );
  };

  export default RenderCalendarIcon;