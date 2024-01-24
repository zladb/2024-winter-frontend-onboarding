// 1. 달력을 실제로 계산해서 뛰워줍니다.
// 2. 목표 설정 버튼을 누르면, 할일 입력 버튼이 나옴.
// 3. 할일을 입력하면 todo에 들어감.
// 4. 할일을 체크하면, 컬러가 바뀜.
// 5. 할일 수정, 삭제

//-------------------------달력 부분---------------------------------

async function renderCalender(date) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  console.log(`${currentYear}년 ${currentMonth + 1}일`);

  document.querySelector(".year-month").textContent = `${currentYear}년 ${
    currentMonth + 1
  }월`;

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  // 요일 구하기
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = "";

  // 달력의 공백 - 지난 달
  htmlDummy += `<tr>`;
  for (let i = 0; i < firstDay; i++) {
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
    htmlDummy += `<th class="day" id="${currentYear}-${String(
      currentMonth + 1
    ).padStart(2, "0")}-${String(i).padStart(2, "0")}"><svg
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
}

// 선택한 날짜를 포커싱하고 date를 새로 지정함.
function focus_day(date, prev_date) {
  let seleted_day = document.getElementById(String(date));
  seleted_day.classList.add("selected");

  if (arguments.length > 1 && date !== prev_date) {
    let previous_day = document.getElementById(String(prev_date));
    previous_day.classList.remove("selected");
  }
}

// Date() -> yyyy-MM-dd
function getFormattedDate(date) {
  const today = date;

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const dateString = year + "-" + month + "-" + day;

  return dateString;
}

// yyyy-MM-dd -> Date()
function parseDate(date) {
  // 문자열을 '-'를 기준으로 나누어 배열로 만듦
  const dateArray = date.split("-");

  // 년, 월, 일을 추출
  const year = parseInt(dateArray[0], 10);
  const month = parseInt(dateArray[1] - 1, 10);
  const day = parseInt(dateArray[2], 10);

  return new Date(year, month, day);
}

// 각 날마다 이벤트 핸들러 붙여주기 - 캘린더 렌더 후 실행
const attachDayHandler = () => {
  document.querySelectorAll(".day").forEach((dayElement) => {
    dayElement.addEventListener("click", (event) => {
      const selectedDay = event.target.closest(".day");
      focus_day(selectedDay.id, prev_date);
      prev_date = selectedDay.id;
      date = parseDate(selectedDay.id);
      console.log(`new date => ${date}`);
    });
  });
};

// 이전달 이동
document.querySelector(`#prev`).onclick = () => {
  const lastDayOfLastMonth = new Date(date.getFullYear(), date.getMonth(), 0);

  date = lastDayOfLastMonth;
  prev_date = getFormattedDate(date);
  renderCalender(new Date(date.setMonth(date.getMonth()))).then(
    attachDayHandler
  );
  focus_day(prev_date);
};

// 다음달 이동
document.querySelector(`#next`).onclick = () => {
  const firstDayOfNextMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  );
  date = firstDayOfNextMonth;
  prev_date = getFormattedDate(date);
  renderCalender(new Date(date.setMonth(date.getMonth()))).then(
    attachDayHandler
  );
  focus_day(prev_date);
};

let date = new Date();
let formatted_date = getFormattedDate(date);
let prev_date = formatted_date;

renderCalender(date).then(attachDayHandler);
focus_day(formatted_date);

//-------------------------todo 부분---------------------------------

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
