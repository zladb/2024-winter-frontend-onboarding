"use strict";

var _client = require("react-dom/client.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } /* eslint-disable no-use-before-define */ //
// 1. 실제로 작동하는 달력 구현. ✅
// 2. 목표 설정 버튼을 누르면, 할일 입력 버튼이 나옴. ✅
// 3. 할일을 입력하면 local storage에 데이터를 저장하고 todoList를 렌더링 함. ✅
// 4. 할일을 체크하면, 컬러가 바뀜. + 달력 todo 갯수 업데이트 ✅
// 5. 할일 수정, 삭제 ✅
// import { createRoot } from '../../node_modules/react-dom/client.js';
// Clear the existing HTML content
document.body.innerHTML = /*#__PURE__*/React.createElement("div", {
  id: "app"
});

// Render your React component instead
var root = (0, _client.createRoot)(document.getElementById('app'));
root.render("<h1>Hello, world</h1>");

//
// -------------------------달력 부분---------------------------------

// Date() -> yyyy-MM-dd
function getFormattedDate(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  var dateString = "".concat(year, "-").concat(month, "-").concat(day);
  return dateString;
}

// yyyy-MM-dd -> Date()
function parseDate(formattedDate) {
  // 문자열을 '-'를 기준으로 나누어 배열로 만듦
  var dateArray = formattedDate.split('-');

  // 년, 월, 일을 추출
  var year = parseInt(dateArray[0], 10);
  var month = parseInt(dateArray[1] - 1, 10);
  var day = parseInt(dateArray[2], 10);
  return new Date(year, month, day);
}
var selectedDate = new Date();
var selectedDateId = getFormattedDate(selectedDate);
var prevDate = selectedDateId;

// 선택한 날짜를 포커싱하고 date를 새로 지정함.
function focusedDay(_x, _x2) {
  return _focusedDay.apply(this, arguments);
} // Svg 렌더링 - 색상 설정 가능
function _focusedDay() {
  _focusedDay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dateId, prevDateId) {
    var seletedDay,
      prevDateElement,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          seletedDay = document.getElementById(dateId);
          seletedDay.classList.add('selected');
          if (_args.length > 1 && dateId !== prevDateId) {
            prevDateElement = document.getElementById(prevDateId);
            prevDateElement.classList.remove('selected');
          }
          // 날짜 전역 변수 업데이트
          selectedDate = parseDate(dateId);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _focusedDay.apply(this, arguments);
}
function renderSvg() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#D9D9D9';
  return "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"34\"\n  height=\"34\"\n  viewBox=\"0 0 151 151\"\n  fill=\"none\"\n>\n  <path\n    fill='".concat(color, "'\n    d=\"M100.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z\"\n  />\n  <path\n    fill=").concat(color, "\n    d=\"M150.5 50.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z\"\n  />\n  <path\n    fill=").concat(color, "\n    d=\"M150.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z\"\n  />\n  <path\n    fill=").concat(color, "\n    d=\"M100.5 100.099c0 27.614-22.386 50-50 50s-50-22.386-50-50c0-27.615 22.386-50 50-50s50 22.385 50 50Z\"\n  /></svg>");
}

// 달력 icon 렌더링
function renderCalendarIcon(date) {
  var formattedDate = getFormattedDate(date);
  var todoArray = JSON.parse(localStorage.getItem(formattedDate)) || [];
  var todoCount;
  var checkedClass = '';
  var color;
  if (todoArray.length === 0) {
    todoCount = ' ';
  } else {
    todoCount = todoArray.filter(function (todo) {
      return !todo.checked;
    }).length;

    // 체크된 항목이 하나라도 있다면 checkedClass를 설정
    if (todoArray.some(function (todo) {
      return todo.checked;
    })) {
      checkedClass = 'checked';
      color = '#ff6347';
    }
    if (todoCount === 0) {
      todoCount = "<i class=\"bi bi-check-lg\"></i>";
    }
  }
  return "\n  <div class = \"icon-container ".concat(checkedClass, "\">\n    ").concat(renderSvg(color), "\n  <div class=\"number-overlay\">").concat(todoCount, "</div>\n  \n  <style>\n  .icon-container {\n    position: relative;\n    display: flex;\n    // padding: 1px 0px;\n  }\n\n  .number-overlay {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -55%);\n    font-size: 14px;\n    color: white; \n    font-weight: bold;\n  }\n  </style>\n\n  </div>");
}

// 달력 렌더링
function renderCalender(_x3) {
  return _renderCalender.apply(this, arguments);
} // 각 날 div마다 이벤트 핸들러 붙여주기 - 캘린더 렌더링 후 실행
// 1. 달력의 아이콘을 누르면 해당 날짜를 foucs하고, 전역 변수 date를 업데이트함.
// 2. todo 아이템들을 렌더링함.
function _renderCalender() {
  _renderCalender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(date) {
    var currentYear, currentMonth, firstDay, firstDate, lastDate, limitDay, nextDay, htmlDummy, i, currentDate, _i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          currentYear = date.getFullYear();
          currentMonth = date.getMonth();
          window.console.log("".concat(currentYear, "\uB144 ").concat(currentMonth + 1, "\uC6D4"));
          document.querySelector('.year-month').textContent = "".concat(currentYear, "\uB144 ").concat(currentMonth + 1, "\uC6D4");

          // 첫 요일
          firstDay = new Date(date.setDate(1)).getDay(); // 처음 날짜, 마지막 날짜
          firstDate = new Date(currentYear, currentMonth, 1);
          lastDate = new Date(currentYear, currentMonth + 1, 0); // 요일 구하기
          limitDay = firstDay + lastDate.getDate();
          nextDay = Math.ceil(limitDay / 7) * 7;
          htmlDummy = ''; // 달력의 공백 - 지난 달
          htmlDummy += "<tr>";
          for (i = 0; i < firstDay; i += 1) {
            htmlDummy += "<th class=\"day invisible\">".concat(renderCalendarIcon(date), "</div>");
          }

          // 실제 달력 부분
          currentDate = firstDate;
          while (currentDate <= lastDate) {
            htmlDummy += "<th class=\"day\" id=\"".concat(getFormattedDate(currentDate), "\">").concat(renderCalendarIcon(currentDate)).concat(currentDate.getDate(), "</div>");
            if (currentDate.getDay() === 6) {
              htmlDummy += "</tr><tr>";
            }
            currentDate.setDate(currentDate.getDate() + 1);
          }

          // 달력의 공백 - 이번달
          for (_i = limitDay; _i < nextDay; _i += 1) {
            htmlDummy += "<th class=\"day invisible\">".concat(renderCalendarIcon(date), "</div>");
          }
          document.querySelector('tbody').innerHTML = htmlDummy;
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _renderCalender.apply(this, arguments);
}
var attachDayHandler = function attachDayHandler() {
  document.querySelectorAll('.day').forEach(function (dayElement) {
    dayElement.addEventListener('click', function (event) {
      var selectedDay = event.target.closest('.day');
      focusedDay(selectedDay.id, prevDate);
      prevDate = selectedDay.id;

      // 날짜 전역 변수 업데이트
      selectedDate = parseDate(selectedDay.id);
      window.console.log("new date => ".concat(selectedDate));

      // todo 추가 버튼 활성화
      document.getElementById('daily-routine-button').disabled = false;
      renderTodoItems(selectedDate);
    });
  });
};

// 첫 달력 렌더링
renderCalender(selectedDate).then(function () {
  attachDayHandler();
  focusedDay(selectedDateId);
  renderTodoItems(selectedDate);
});

// 이전달 이동
document.querySelector("#prev").onclick = function () {
  var lastDayOfLastMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);

  // 전역 변수 date 업데이트
  selectedDate = lastDayOfLastMonth;
  selectedDateId = getFormattedDate(lastDayOfLastMonth);
  prevDate = selectedDateId;
  renderCalender(new Date(selectedDate.setMonth(lastDayOfLastMonth.getMonth()))).then(function () {
    attachDayHandler();
    focusedDay(selectedDateId);
    renderTodoItems(lastDayOfLastMonth);
  });
};

// 다음달 이동
document.querySelector("#next").onclick = function () {
  var firstDayOfNextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
  selectedDate = firstDayOfNextMonth;
  selectedDateId = getFormattedDate(firstDayOfNextMonth);
  prevDate = selectedDateId;
  renderCalender(new Date(firstDayOfNextMonth.setMonth(firstDayOfNextMonth.getMonth()))).then(function () {
    attachDayHandler();
    focusedDay(selectedDateId);
    renderTodoItems(firstDayOfNextMonth);
  });
};

// -----------------------------모달-------------------------------------

var modal = document.querySelector('.modal');
var modalContent = modal.querySelector('.modal-content');
document.addEventListener('DOMContentLoaded', function () {
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // 애니메이션이 종료된 후에 실행할 함수 등록
  function handleAnimationEnd() {
    modal.style.display = 'none';
    modalContent.style.display = 'none';
    modalContent.style.animation = ''; // 애니메이션 속성 초기화
    modalContent.removeEventListener('animationend', handleAnimationEnd); // 이벤트 리스너 제거
  }
  span.onclick = function () {
    modalContent.style.animation = 'slideOut 0.3s ease'; // slideOut 애니메이션 적용
    modalContent.addEventListener('animationend', handleAnimationEnd, {
      once: true
    });
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modalContent.style.animation = 'slideOut 0.3s ease'; // slideOut 애니메이션 적용
      modalContent.addEventListener('animationend', handleAnimationEnd, {
        once: true
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

var styleInput = "\nflex: 2;\nborder: none;\nmargin: 0 var(--base-space);\npadding-bottom: 8px;\npadding: 8px 0px;\noutline: none;\nborder: none;\nborder-bottom: 1px solid tomato;\n";

// localStorage의 checked 값을 토글 + 해당 todo item을 체크하고 색칠함.
function toggleChecked(date, todoId) {
  var dateId = getFormattedDate(date);
  var todoArray = JSON.parse(localStorage.getItem(dateId)) || [];

  // 해당 id의 todo checked 여부를 토글함.
  todoArray.forEach(function (todo) {
    // eslint-disable-next-line eqeqeq
    if (todo.id == todoId) {
      todo.checked = !todo.checked;
    }
  });
  localStorage.setItem(dateId, JSON.stringify(todoArray));

  // 해당 todoItem의 checked 클래스 토글
  var todoItem = document.getElementById(todoId);
  todoItem.classList.toggle('checked');
  var svgPaths = todoItem.querySelectorAll('svg path');
  var overlayContainer = todoItem.querySelector('.number-overlay');
  var checkIcon = overlayContainer.querySelector('.bi-check-lg');

  // checked인 경우
  if (todoItem.classList.contains('checked')) {
    // 색상 칠해줌
    svgPaths.forEach(function (path) {
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
    svgPaths.forEach(function (path) {
      path.style.fill = '#D9D9D9';
    });
    if (checkIcon) {
      overlayContainer.removeChild(checkIcon);
    }
  }
}

// 달력에 해당 날짜 투두 갯수/색 업데이트
function updateCalendarTodo(date) {
  var dateId = getFormattedDate(date);
  var todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
  // console.log("todoArray -> ", todoArray.length);

  var targetDate = document.getElementById(dateId);
  var container = targetDate.querySelector('.icon-container');
  var svgPaths = container.querySelectorAll('svg path');
  var overlayElement = container.querySelector('.number-overlay');

  // 남은 투두의 갯수
  var todoCount = todoArray.filter(function (todo) {
    return !todo.checked;
  }).length;
  // console.log("남은 투두의 갯수 -> ", todoCount);

  // 할 일 없음
  if (todoArray.length === 0) {
    todoCount = ' ';
    svgPaths.forEach(function (path) {
      path.style.fill = '#D9D9D9';
    });
  } else if (todoCount === 0) {
    // 모든 투두 완료 -> check 아이콘
    todoCount = document.createElement('i');
    todoCount.className = 'bi bi-check-lg';
    svgPaths.forEach(function (path) {
      path.style.fill = 'tomato';
    });
  } else if (todoCount < todoArray.length) {
    // 투두 몇개 완료
    svgPaths.forEach(function (path) {
      path.style.fill = 'tomato';
    });
  } else {
    // 투두 하나도 안함
    svgPaths.forEach(function (path) {
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
  var dateId = getFormattedDate(date);
  var todoList = document.querySelector('#daily-routine-list');
  var todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
  // console.log("data from local storage ->", todoArray);

  // 기존의 todoList의 HTML을 다 지운다.
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  todoArray.forEach(function (todoInfo) {
    // 새로운 todo__item 생성하기 with text input
    var todoItem = document.createElement('div');
    todoItem.className = 'todo__item';
    todoItem.id = todoInfo.id;
    var iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    var numberDiv = document.createElement('div');
    numberDiv.classList.add('number-overlay');
    if (todoInfo.checked) {
      todoItem.classList.add('checked');
      iconContainer.innerHTML = renderSvg('#ff6347');
      var checkIcon = document.createElement('i');
      checkIcon.classList.add('bi', 'bi-check-lg');
      numberDiv.appendChild(checkIcon);
    } else {
      iconContainer.innerHTML = renderSvg();
    }
    iconContainer.appendChild(numberDiv);
    var todoText = document.createElement('div');
    todoText.classList.add('todo__item--text');
    todoText.textContent = todoInfo.text;

    // const modal = document.querySelector('.modal');

    var threeDotsIcon = document.createElement('i');
    threeDotsIcon.classList.add('bi', 'bi-three-dots', 'icon');
    threeDotsIcon.onclick = function () {
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
    var toggleButton = todoItem.querySelector('.icon-container');
    toggleButton.addEventListener('click', function () {
      toggleChecked(date, todoItem.id);
      updateCalendarTodo(date);
    });
  });
}

// input과 함께 새로운 todo 아이템을 생성함.
function createTodoItem(idCount, dateId) {
  var todoBoxContainer = document.querySelector('#daily-routine-list');

  // 새로운 todo__item 생성하기 (+input)
  var todoItem = document.createElement('div');
  todoItem.className = 'todo__item';
  todoItem.id = idCount;
  var iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  iconContainer.innerHTML = renderSvg();
  var numberDiv = document.createElement('div');
  numberDiv.classList.add('number-overlay');
  iconContainer.appendChild(numberDiv);

  // <input type="text" id="todo-item--input" placeholder="할 일 입력"></input>
  var inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.id = 'todo-item--input';
  inputElement.placeholder = '할 일 입력';
  inputElement.style = styleInput;
  var todoText = document.createElement('div');
  todoText.id = 'new_todo';

  // const modal = document.querySelector('.modal');

  var threeDotsIcon = document.createElement('i');
  threeDotsIcon.classList.add('bi', 'bi-three-dots', 'icon');
  threeDotsIcon.onclick = function () {
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
  var toggleButton = todoItem.querySelector('.icon-container');
  toggleButton.addEventListener('click', function () {
    toggleChecked(selectedDate, todoItem.id);
    updateCalendarTodo(selectedDate);
  });
  inputElement.focus();
}

// input에서 값을 입력하고 enter를 치면 값이 local storage에 저장됨.
function inputToText(idCount, dateId) {
  var input = document.getElementById('todo-item--input');

  // enter -> input은 삭제하고 input의 value값을 todo_item--text에 넣어줌.
  input.addEventListener('keypress', function (key) {
    if (key.key === 'Enter') {
      var todoText = document.getElementById('new_todo');
      todoText.removeAttribute('id'); // new_todo 태그 삭제
      todoText.classList.add('todo__item--text');
      todoText.textContent = input.value;
      input.remove();
      var todo = {
        id: idCount,
        text: input.value,
        checked: false
      };

      // 새로운 todo local storage에 저장
      var todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
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
function addTodoItem(_x4) {
  return _addTodoItem.apply(this, arguments);
} // 모달 창에서 삭제를 누르면 해당 todo 삭제하기
function _addTodoItem() {
  _addTodoItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(date) {
    var dateId, todoArray, idCount;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          dateId = getFormattedDate(date);
          todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
          if (todoArray.length === 0) {
            idCount = -1;
          } else {
            idCount = todoArray[todoArray.length - 1].id;
          }
          createTodoItem(idCount + 1, dateId);
          inputToText(idCount + 1, dateId);
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _addTodoItem.apply(this, arguments);
}
function deleteTodoItem(todoId, dateId) {
  var todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
  // console.log(todoArray);

  // id가 같은 요소를 배열에서 제거
  // eslint-disable-next-line eqeqeq
  var updatedTodoArray = todoArray.filter(function (todo) {
    return todo.id != todoId;
  });
  // console.log(updatedTodoArray);

  localStorage.setItem(dateId, JSON.stringify(updatedTodoArray));
  window.console.log('Deleting todo item with ID:', todoId);
  var elementToRemove = document.getElementById(todoId);
  // console.log(elementToRemove);
  elementToRemove.remove();
  updateCalendarTodo(selectedDate);
}

// 모달 창에서 수정을 누르면 todo 텍스트 수정
function modifyTodoItem(todoId, dateId) {
  // 1. 기존의 해당 id의 todo__item--text를 삭제하고 <input>을 넣음.
  // 2. 새로운 input value를 기반으로다시 todo_item--text를 생성해줌
  // 3. local storage 값을 업데이트함.
  var todoItem = document.getElementById(todoId);
  var oldTextElement = todoItem.querySelector('.todo__item--text');

  // <input type="text" id="todo-item--input" placeholder="할 일 입력"></input>
  var inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.id = 'todo-item--input';
  inputElement.value = oldTextElement.textContent;
  inputElement.style = styleInput;
  if (oldTextElement) {
    todoItem.replaceChild(inputElement, oldTextElement);
  }
  inputElement.focus();
  inputElement.addEventListener('keypress', function (key) {
    if (key.key === 'Enter') {
      var newTodoText = document.createElement('div');
      newTodoText.classList.add('todo__item--text');
      newTodoText.textContent = inputElement.value;
      todoItem.replaceChild(newTodoText, inputElement);
      var todoArray = JSON.parse(localStorage.getItem(dateId)) || [];
      todoArray.forEach(function (todo) {
        if (todo.id == todoItem.id) {
          window.console.log(newTodoText.textContent);
          todo.text = newTodoText.textContent;
        }
      });
      window.console.log(todoArray);
      localStorage.setItem(dateId, JSON.stringify(todoArray));
    }
  });
}

// const modal = document.querySelector('.modal');
modal.querySelector('#delete-btn').onclick = function () {
  var todoId = modal.getAttribute('todoId');
  var dateId = modal.getAttribute('dateId');
  deleteTodoItem(todoId, dateId);
  modal.style.display = 'none';
};
modal.querySelector('#modify-btn').onclick = function () {
  var todoId = modal.getAttribute('todoId');
  var dateId = modal.getAttribute('dateId');
  modal.style.display = 'none';
  modifyTodoItem(todoId, dateId);
};

// todo 아이템 추가 버튼
document.querySelector('#daily-routine-button').onclick = function () {
  document.getElementById('daily-routine-button').disabled = true;
  addTodoItem(selectedDate);
};

// -------------------------로컬 스토리지---------------------------------

// 로컬 스토리지 초기화
// localStorage.clear();