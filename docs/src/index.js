/* eslint-disable no-use-before-define */
//
// 1. 실제로 작동하는 달력 구현. ✅
// 2. 목표 설정 버튼을 누르면, 할일 입력 버튼이 나옴. ✅
// 3. 할일을 입력하면 local storage에 데이터를 저장하고 todoList를 렌더링 함. ✅
// 4. 할일을 체크하면, 컬러가 바뀜. + 달력 todo 갯수 업데이트 ✅
// 5. 할일 수정, 삭제 ✅

import './styles/style.css';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './pages/main_page/app.js';


// Clear the existing HTML content
document.body.innerHTML = `<div id="app"></div>`;

const root = createRoot(document.getElementById('app'));
root.render(<App/>);
