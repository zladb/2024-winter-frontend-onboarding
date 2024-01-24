// 1. 달력을 실제로 계산해서 뛰워줍니다.
// 2. 목표 설정 버튼을 누르면, 할일 입력 버튼이 나옴.
// 3. 할일을 입력하면 todo에 들어감.
// 4. 할일을 체크하면, 컬러가 바뀜.
// 5. 할일 수정, 삭제

const renderCalender = (date) => {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  console.log(currentMonth, currentYear);

  document.querySelector(".year-month").textContent = `${currentYear}년 ${
    currentMonth + 1
  }월`;

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate(); // 0-> 가장 마지막 날

  // 요일 구하기
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = "";

  // 달력의 공백 - 지난 달
  htmlDummy += `<tr>`;
  for (let i = 0; i < firstDay; i++) {
    console.log("hi");
    htmlDummy += `<th class="day invisible"><svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 151 151"
    fill="none"
  >
    <path
      fill="#D9D9D9"
      d="M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    /></svg
  >${i}</div>`;
  }

  // 실제 달력 부분
  for (let i = 1; i <= lastDay; i++) {
    htmlDummy += `<th class="day"><svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 151 151"
    fill="none"
  >
    <path
      fill="#D9D9D9"
      d="M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    /></svg
  >${i}</div>`;

    if ((firstDay + i - 1) % 7 == 6) {
      htmlDummy += `</tr><tr>`;
    }
  }

  // 달력의 공백 - 이번달
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<th class="day invisible"><svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 151 151"
    fill="none"
  >
    <path
      fill="#D9D9D9"
      d="M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    />
    <path
      fill="#D9D9D9"
      d="M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
    /></svg
  >${i}</div>`;
  }

  document.querySelector("tbody").innerHTML = htmlDummy;
};

let date = new Date();
renderCalender(date);

// 이전달 이동
document.querySelector(`#prev`).onclick = () => {
  renderCalender(new Date(date.setMonth(date.getMonth() - 1)));
};

// 다음달 이동
document.querySelector(`#next`).onclick = () => {
  renderCalender(new Date(date.setMonth(date.getMonth() + 1)));
};

let id_cnt = 0;

// 투두 등록하기
async function addTodoItem() {
  const dailyRoutineContainer = document.querySelector("#daily-routine");

  // 새로운 todo__item 생성하기 with text input
  const todoItem = document.createElement("div");
  todoItem.className = "todo__item";

  todoItem.innerHTML = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="34"
  height="34"
  viewBox="0 0 151 151"
  fill="none"
>
  <path
    fill="#D9D9D9"
    d="M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
  <path
    fill="#D9D9D9"
    d="M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
  <path
    fill="#D9D9D9"
    d="M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
  <path
    fill="#D9D9D9"
    d="M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z"
  />
</svg>
<input type="text" id="todo-item--input" placeholder="할 일 입력"></input>
<div id="new_todo"></div>
    <i class="bi bi-three-dots icon"></i>
  `;

  dailyRoutineContainer.appendChild(todoItem);

  // input- 설정
  let input = document.getElementById("todo-item--input");
  input.focus();
  input.style = styleInput;

  // input 입력 후, 엔터를 치면 input은 삭제하고 input값을 todo_iteem--text에 넣어줌.
  input.addEventListener("keypress", function (key) {
    if (key.key == "Enter") {
      let inputValue = input.value;
      input.remove();
      todo_text = document.getElementById("new_todo");
      todo_text.textContent = inputValue;
      todo_text.id = id_cnt++;
      todo_text.classList.add("todo__item--text");

      // 버튼은 다시 활성화 해줌.
      document.getElementById("daily-routine-button").disabled = false;
    }
  });

  return;
}

document.querySelector("#daily-routine-button").onclick = async () => {
  document.getElementById("daily-routine-button").disabled = true;
  addTodoItem();
};

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
