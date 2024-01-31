/* eslint-disable no-use-before-define */
//
// 1. 실제로 작동하는 달력 구현. ✅
// 2. 목표 설정 버튼을 누르면, 할일 입력 버튼이 나옴. ✅
// 3. 할일을 입력하면 local storage에 데이터를 저장하고 todoList를 렌더링 함. ✅
// 4. 할일을 체크하면, 컬러가 바뀜. + 달력 todo 갯수 업데이트 ✅
// 5. 할일 수정, 삭제 ✅
//
// -------------------------달력 부분---------------------------------

// Date() -> yyyy-MM-dd
function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const dateString = `${year}-${month}-${day}`;

  return dateString;
}

// yyyy-MM-dd -> Date()
function parseDate(formattedDate) {
  // 문자열을 '-'를 기준으로 나누어 배열로 만듦
  const dateArray = formattedDate.split('-');

  // 년, 월, 일을 추출
  const year = parseInt(dateArray[0], 10);
  const month = parseInt(dateArray[1] - 1, 10);
  const day = parseInt(dateArray[2], 10);

  return new Date(year, month, day);
}

let selectedDate = new Date();
let selectedDateId = getFormattedDate(selectedDate);
let prevDate = selectedDateId;

// 선택한 날짜를 포커싱하고 date를 새로 지정함.
async function focusedDay(dateId, prevDateId) {
  const seletedDay = document.getElementById(dateId);
  seletedDay.classList.add('selected');

  if (arguments.length > 1 && dateId !== prevDateId) {
    const prevDateElement = document.getElementById(prevDateId);
    prevDateElement.classList.remove('selected');
  }
  // 날짜 전역 변수 업데이트
  selectedDate = parseDate(dateId);
}

// Svg 렌더링 - 색상 설정 가능
function renderSvg(color = '#D9D9D9') {
  return `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 151 151"
  fill="none"
>
  <path
    fill='${color}'
    d="M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
  <path
    fill=${color}
    d="M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
  <path
    fill=${color}
    d="M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
  <path
    fill=${color}
    d="M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  /></svg>`;
}

// 달력 icon 렌더링
function renderCalendarIcon(date) {
  const formattedDate = getFormattedDate(date);
  const todoArray = JSON.parse(localStorage.getItem(formattedDate)) || [];

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

    if (todoCount === 0) {
      todoCount = `<i class="bi bi-check-lg"></i>`;
    }
  }

  return `
  <div class = "icon-container ${checkedClass}">
    ${renderSvg(color)}
  <div class="number-overlay">${todoCount}</div>
  
  <style>
  .icon-container {
    position: relative;
    display: flex;
    // padding: 1px 0px;
  }

  .number-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    font-size: 14px;
    color: white; 
    font-weight: bold;
  }
  </style>

  </div>`;
}

// 달력 렌더링
async function renderCalender(date) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  window.console.log(`${currentYear}년 ${currentMonth + 1}월`);

  document.querySelector('.year-month').textContent = `${currentYear}년 ${
    currentMonth + 1
  }월`;

  // 첫 요일
  const firstDay = new Date(date.setDate(1)).getDay();

  // 처음 날짜, 마지막 날짜
  const firstDate = new Date(currentYear, currentMonth, 1);
  const lastDate = new Date(currentYear, currentMonth + 1, 0);

  // 요일 구하기
  const limitDay = firstDay + lastDate.getDate();
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';

  // 달력의 공백 - 지난 달
  htmlDummy += `<tr>`;
  for (let i = 0; i < firstDay; i += 1) {
    htmlDummy += `<th class="day invisible">${renderCalendarIcon(date)}</div>`;
  }

  // 실제 달력 부분
  const currentDate = firstDate;
  while (currentDate <= lastDate) {
    htmlDummy += `<th class="day" id="${getFormattedDate(
      currentDate,
    )}">${renderCalendarIcon(currentDate)}${currentDate.getDate()}</div>`;

    if (currentDate.getDay() === 6) {
      htmlDummy += `</tr><tr>`;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // 달력의 공백 - 이번달
  for (let i = limitDay; i < nextDay; i += 1) {
    htmlDummy += `<th class="day invisible">${renderCalendarIcon(date)}</div>`;
  }

  document.querySelector('tbody').innerHTML = htmlDummy;
}

// 각 날 div마다 이벤트 핸들러 붙여주기 - 캘린더 렌더링 후 실행
// 1. 달력의 아이콘을 누르면 해당 날짜를 foucs하고, 전역 변수 date를 업데이트함.
// 2. todo 아이템들을 렌더링함.
const attachDayHandler = () => {
  document.querySelectorAll('.day').forEach((dayElement) => {
    dayElement.addEventListener('click', (event) => {
      const selectedDay = event.target.closest('.day');
      focusedDay(selectedDay.id, prevDate);
      prevDate = selectedDay.id;

      // 날짜 전역 변수 업데이트
      selectedDate = parseDate(selectedDay.id);
      window.console.log(`new date => ${selectedDate}`);

      // todo 추가 버튼 활성화
      document.getElementById('daily-routine-button').disabled = false;
      renderTodoItems(selectedDate);
    });
  });
};

// 첫 달력 렌더링
renderCalender(selectedDate).then(() => {
  attachDayHandler();
  focusedDay(selectedDateId);
  renderTodoItems(selectedDate);
});

// 이전달 이동
document.querySelector(`#prev`).onclick = () => {
  const lastDayOfLastMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0,
  );

  // 전역 변수 date 업데이트
  selectedDate = lastDayOfLastMonth;
  selectedDateId = getFormattedDate(lastDayOfLastMonth);
  prevDate = selectedDateId;

  renderCalender(
    new Date(selectedDate.setMonth(lastDayOfLastMonth.getMonth())),
  ).then(() => {
    attachDayHandler();
    focusedDay(selectedDateId);
    renderTodoItems(lastDayOfLastMonth);
  });
};

// 다음달 이동
document.querySelector(`#next`).onclick = () => {
  const firstDayOfNextMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    1,
  );

  selectedDate = firstDayOfNextMonth;
  selectedDateId = getFormattedDate(firstDayOfNextMonth);
  prevDate = selectedDateId;

  renderCalender(
    new Date(firstDayOfNextMonth.setMonth(firstDayOfNextMonth.getMonth())),
  ).then(() => {
    attachDayHandler();
    focusedDay(selectedDateId);
    renderTodoItems(firstDayOfNextMonth);
  });
};

// -----------------------------모달-------------------------------------

const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');

document.addEventListener('DOMContentLoaded', () => {
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // 애니메이션이 종료된 후에 실행할 함수 등록
  function handleAnimationEnd() {
    modal.style.display = 'none';
    modalContent.style.display = 'none';
    modalContent.style.animation = ''; // 애니메이션 속성 초기화
    modalContent.removeEventListener('animationend', handleAnimationEnd); // 이벤트 리스너 제거
  }

  span.onclick = () => {
    modalContent.style.animation = 'slideOut 0.3s ease'; // slideOut 애니메이션 적용
    modalContent.addEventListener('animationend', handleAnimationEnd, {
      once: true,
    });
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modalContent.style.animation = 'slideOut 0.3s ease'; // slideOut 애니메이션 적용
      modalContent.addEventListener('animationend', handleAnimationEnd, {
        once: true,
      });
    }
  };
});

// 모달 열기 함수
function openModal() {
  modalContent.style.display = 'flex';
  modalContent.style.animation = 'slideIn 0.5s ease';
  modal.style.display = 'block';
}

// -------------------------todo 부분---------------------------------

const styleInput = `
flex: 2;
border: none;
margin: 0 var(--base-space);
padding-bottom: 8px;
padding: 8px 0px;
outline: none;
border: none;
border-bottom: 1px solid tomato;
`;

// localStorage의 checked 값을 토글 + 해당 todo item을 체크하고 색칠함.
function toggleChecked(date, todoId) {
  const dateId = getFormattedDate(date);
  const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];

  // 해당 id의 todo checked 여부를 토글함.
  todoArray.forEach((todo) => {
    // eslint-disable-next-line eqeqeq
    if (todo.id == todoId) {
      todo.checked = !todo.checked;
    }
  });

  localStorage.setItem(dateId, JSON.stringify(todoArray));

  // 해당 todoItem의 checked 클래스 토글
  const todoItem = document.getElementById(todoId);
  todoItem.classList.toggle('checked');

  const svgPaths = todoItem.querySelectorAll('svg path');
  const overlayContainer = todoItem.querySelector('.number-overlay');
  let checkIcon = overlayContainer.querySelector('.bi-check-lg');

  // checked인 경우
  if (todoItem.classList.contains('checked')) {
    // 색상 칠해줌
    svgPaths.forEach((path) => {
      path.style.fill = 'tomato';
    });
    // checkIcon을 생성하여 추가
    if (!checkIcon) {
      checkIcon = document.createElement('i');
      checkIcon.classList.add('bi', 'bi-check-lg');
      overlayContainer.appendChild(checkIcon);
    }
  } else {
    // checked가 아닌 경우
    svgPaths.forEach((path) => {
      path.style.fill = '#D9D9D9';
    });
    if (checkIcon) {
      overlayContainer.removeChild(checkIcon);
    }
  }
}

// 달력에 해당 날짜 투두 갯수/색 업데이트
function updateCalendarTodo(date) {
  const dateId = getFormattedDate(date);
  const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
  // console.log("todoArray -> ", todoArray.length);

  const targetDate = document.getElementById(dateId);
  const container = targetDate.querySelector('.icon-container');
  const svgPaths = container.querySelectorAll('svg path');
  const overlayElement = container.querySelector('.number-overlay');

  // 남은 투두의 갯수
  let todoCount = todoArray.filter((todo) => !todo.checked).length;
  // console.log("남은 투두의 갯수 -> ", todoCount);

  // 할 일 없음
  if (todoArray.length === 0) {
    todoCount = ' ';
    svgPaths.forEach((path) => {
      path.style.fill = '#D9D9D9';
    });
  } else if (todoCount === 0) {
    // 모든 투두 완료 -> check 아이콘
    todoCount = document.createElement('i');
    todoCount.className = 'bi bi-check-lg';
    svgPaths.forEach((path) => {
      path.style.fill = 'tomato';
    });
  } else if (todoCount < todoArray.length) {
    // 투두 몇개 완료
    svgPaths.forEach((path) => {
      path.style.fill = 'tomato';
    });
  } else {
    // 투두 하나도 안함
    svgPaths.forEach((path) => {
      path.style.fill = '#D9D9D9';
    });
  }

  // todoCount의 타입에 따라 처리 -> 공백 or 숫자 or 체크
  if (typeof todoCount === 'number' || typeof todoCount === 'string') {
    overlayElement.textContent = todoCount;
  } else if (todoCount instanceof Node) {
    overlayElement.textContent = '';
    overlayElement.appendChild(todoCount);
  }
}

// 투두 아이템들을 로컬 스토리지에서 가져와서 렌더링
function renderTodoItems(date) {
  const dateId = getFormattedDate(date);
  const todoList = document.querySelector('#daily-routine-list');

  const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
  // console.log("data from local storage ->", todoArray);

  // 기존의 todoList의 HTML을 다 지운다.
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  todoArray.forEach((todoInfo) => {
    // 새로운 todo__item 생성하기 with text input
    const todoItem = document.createElement('div');
    todoItem.className = 'todo__item';
    todoItem.id = todoInfo.id;

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number-overlay');

    if (todoInfo.checked) {
      todoItem.classList.add('checked');
      iconContainer.innerHTML = renderSvg('#ff6347');

      const checkIcon = document.createElement('i');
      checkIcon.classList.add('bi', 'bi-check-lg');
      numberDiv.appendChild(checkIcon);
    } else {
      iconContainer.innerHTML = renderSvg();
    }

    iconContainer.appendChild(numberDiv);

    const todoText = document.createElement('div');
    todoText.classList.add('todo__item--text');
    todoText.textContent = todoInfo.text;

    // const modal = document.querySelector('.modal');

    const threeDotsIcon = document.createElement('i');
    threeDotsIcon.classList.add('bi', 'bi-three-dots', 'icon');
    threeDotsIcon.onclick = () => {
      // modal.style.display = "block";
      openModal();
      modal.setAttribute('todoId', todoItem.id);
      modal.setAttribute('dateId', dateId);
      modal.querySelector('#todo-title').textContent = todoText.textContent;
    };

    todoItem.appendChild(iconContainer);
    todoItem.appendChild(todoText);
    todoItem.appendChild(threeDotsIcon);

    todoList.appendChild(todoItem);

    // 아이콘 클릭 시 체크 토글
    const toggleButton = todoItem.querySelector('.icon-container');
    toggleButton.addEventListener('click', () => {
      toggleChecked(date, todoItem.id);
      updateCalendarTodo(date);
    });
  });
}

// input과 함께 새로운 todo 아이템을 생성함.
function createTodoItem(idCount, dateId) {
  const todoBoxContainer = document.querySelector('#daily-routine-list');

  // 새로운 todo__item 생성하기 (+input)
  const todoItem = document.createElement('div');
  todoItem.className = 'todo__item';
  todoItem.id = idCount;

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  iconContainer.innerHTML = renderSvg();

  const numberDiv = document.createElement('div');
  numberDiv.classList.add('number-overlay');

  iconContainer.appendChild(numberDiv);

  // <input type="text" id="todo-item--input" placeholder="할 일 입력"></input>
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.id = 'todo-item--input';
  inputElement.placeholder = '할 일 입력';
  inputElement.style = styleInput;

  const todoText = document.createElement('div');
  todoText.id = 'new_todo';

  // const modal = document.querySelector('.modal');

  const threeDotsIcon = document.createElement('i');
  threeDotsIcon.classList.add('bi', 'bi-three-dots', 'icon');
  threeDotsIcon.onclick = () => {
    openModal();
    modal.setAttribute('todoId', todoItem.id);
    modal.setAttribute('dateId', dateId);
    modal.querySelector('#todo-title').textContent = todoText.textContent;
  };

  todoItem.appendChild(iconContainer);
  todoItem.appendChild(inputElement);
  todoItem.appendChild(todoText);
  todoItem.appendChild(threeDotsIcon);

  todoBoxContainer.appendChild(todoItem);

  // 아이콘 클릭 시 체크 토글
  const toggleButton = todoItem.querySelector('.icon-container');
  toggleButton.addEventListener('click', () => {
    toggleChecked(selectedDate, todoItem.id);
    updateCalendarTodo(selectedDate);
  });

  inputElement.focus();
}

// input에서 값을 입력하고 enter를 치면 값이 local storage에 저장됨.
function inputToText(idCount, dateId) {
  const input = document.getElementById('todo-item--input');

  // enter -> input은 삭제하고 input의 value값을 todo_item--text에 넣어줌.
  input.addEventListener('keypress', (key) => {
    if (key.key === 'Enter') {
      const todoText = document.getElementById('new_todo');
      todoText.removeAttribute('id'); // new_todo 태그 삭제
      todoText.classList.add('todo__item--text');
      todoText.textContent = input.value;

      input.remove();

      const todo = {
        id: idCount,
        text: input.value,
        checked: false,
      };

      // 새로운 todo local storage에 저장
      const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];

      todoArray.push(todo);
      localStorage.setItem(dateId, JSON.stringify(todoArray));
      // console.log(localStorage);

      // 달력 todo 갯수 업데이트
      updateCalendarTodo(selectedDate);

      // 투두 추가 버튼을 다시 활성화함
      document.getElementById('daily-routine-button').disabled = false;
    }
  });
}

// 새로운 todo 추가하기
async function addTodoItem(date) {
  const dateId = getFormattedDate(date);
  const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];

  let idCount;
  if (todoArray.length === 0) {
    idCount = -1;
  } else {
    idCount = todoArray[todoArray.length - 1].id;
  }

  createTodoItem(idCount + 1, dateId);
  inputToText(idCount + 1, dateId);
}

// 모달 창에서 삭제를 누르면 해당 todo 삭제하기
function deleteTodoItem(todoId, dateId) {
  const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
  // console.log(todoArray);

  // id가 같은 요소를 배열에서 제거
  // eslint-disable-next-line eqeqeq
  const updatedTodoArray = todoArray.filter((todo) => todo.id != todoId);
  // console.log(updatedTodoArray);

  localStorage.setItem(dateId, JSON.stringify(updatedTodoArray));

  window.console.log('Deleting todo item with ID:', todoId);

  const elementToRemove = document.getElementById(todoId);
  // console.log(elementToRemove);
  elementToRemove.remove();

  updateCalendarTodo(selectedDate);
}

// 모달 창에서 수정을 누르면 todo 텍스트 수정
function modifyTodoItem(todoId, dateId) {
  // 1. 기존의 해당 id의 todo__item--text를 삭제하고 <input>을 넣음.
  // 2. 새로운 input value를 기반으로다시 todo_item--text를 생성해줌
  // 3. local storage 값을 업데이트함.
  const todoItem = document.getElementById(todoId);
  const oldTextElement = todoItem.querySelector('.todo__item--text');

  // <input type="text" id="todo-item--input" placeholder="할 일 입력"></input>
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.id = 'todo-item--input';
  inputElement.value = oldTextElement.textContent;
  inputElement.style = styleInput;

  if (oldTextElement) {
    todoItem.replaceChild(inputElement, oldTextElement);
  }

  inputElement.focus();

  inputElement.addEventListener('keypress', (key) => {
    if (key.key === 'Enter') {
      const newTodoText = document.createElement('div');
      newTodoText.classList.add('todo__item--text');
      newTodoText.textContent = inputElement.value;

      todoItem.replaceChild(newTodoText, inputElement);

      const todoArray = JSON.parse(localStorage.getItem(dateId)) || [];

      todoArray.forEach((todo) => {
        if (todo.id === todoItem.id) {
          todo.text = newTodoText.textContent;
        }
      });

      window.console.log(todoArray);
      localStorage.setItem(dateId, JSON.stringify(todoArray));
    }
  });
}

// const modal = document.querySelector('.modal');
modal.querySelector('#delete-btn').onclick = () => {
  const todoId = modal.getAttribute('todoId');
  const dateId = modal.getAttribute('dateId');
  deleteTodoItem(todoId, dateId);
  modal.style.display = 'none';
};

modal.querySelector('#modify-btn').onclick = () => {
  const todoId = modal.getAttribute('todoId');
  const dateId = modal.getAttribute('dateId');
  modal.style.display = 'none';
  modifyTodoItem(todoId, dateId);
};

// todo 아이템 추가 버튼
document.querySelector('#daily-routine-button').onclick = () => {
  document.getElementById('daily-routine-button').disabled = true;
  addTodoItem(selectedDate);
};

// -------------------------로컬 스토리지---------------------------------

// 로컬 스토리지 초기화
// localStorage.clear();
