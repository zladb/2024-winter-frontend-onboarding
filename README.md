# TODO MATE

## 📝 프로젝트 소개

이 프로젝트는 HTML/CSS/JavaScript로 TODO MATE라는 일정관리 서비스를 클론한 프로젝트입니다. 
라이브러리 없이 순수 JavaScript로 구현한 뒤, React 라이브러리를 추가하여 코드를 리팩토링하는 중입니다.
- 현재 TODO 추가하기 기능 REACT로 리팩토링 완료(24.03.18)

<br/>

## 🫡 try TODO MATE
- link: .. 

<br/>

## ⭐ 주요 기능

1. 달력 구현: 달력의 날짜마다 해결해야 하는 TODO의 갯수를 표시합니다.
2. TODO 추가: 'TODO 추가하기' 버튼을 눌러서 새로운 TODO를 추가합니다.
3. TODO 수정 및 삭제: TODO의 더보기 버튼을 누르면 모달 창이 뜨며, TODO를 수정 및 삭제할 수 있습니다.

<br/>

**✔️ 달력**  
- 달력의 각 날짜마다 하지 않은 TODO의 갯수가 표시됩니다.
- 모든 TODO를 모두 체크하면 달력에도 체크 표시가 뜹니다.
<img src="https://github.com/actions/deploy-pages/assets/68093782/9d4ec2fe-b789-4446-951f-43e5a5e2168d" width=30% />

<br/>
<br/>

**✔️ TODO 추가**
- 'TODO 추가하기' 버든을 누르면 새로운 TODO를 입력할 수 있는 칸이 생성됩니다.
- 원하는 TODO 목표를 적고 ENTER 키를 누릅니다.
<img src="https://github.com/actions/deploy-pages/assets/68093782/37078c2a-d40b-4d81-bdca-b7ac84013a6b" width=30% />
<img src="https://github.com/actions/deploy-pages/assets/68093782/7e4beeef-3e6f-4550-a112-40ef9dc6740a" width=30% />


<br/>
<br/>

**✔️ TODO 수정 및 삭제**
- TODO의 더보기 버튼을 누르면, TODO 수정 버튼과 삭제 버튼이 포함된 모달이 올라옵니다.
- 수정 버튼을 누르면 TODO를 수정할 수 있도록 INPUT이 생깁니다.
<img src="https://github.com/actions/deploy-pages/assets/68093782/9e271381-82c0-4cd5-8e2b-5d610db833ac" width=30% />
<img src="https://github.com/actions/deploy-pages/assets/68093782/faa5e5b9-f88c-4df0-80a9-9c6ce21f5b35" width=30% />
<img src="https://github.com/actions/deploy-pages/assets/68093782/3a9607b5-2105-4d2d-aa19-0d6bbc8bf11e" width=30% />

- 삭제 버튼을 누르면 TODO가 삭제됩니다.
<img src="https://github.com/actions/deploy-pages/assets/68093782/c8abbb30-b545-48a8-9c75-709e2ba02937" width=30% />
<img src="https://github.com/actions/deploy-pages/assets/68093782/613a3c08-e31b-4ed3-aa4b-5c4eb0bc8b20" width=30% />

<br/>
<br/>

**✔️ 반응형 가로모드**
- 페이지의 가로가 1024px을 넘어가면 가로 모드로 전환됩니다.
<img src="https://github.com/actions/deploy-pages/assets/68093782/0609be94-0fbf-47c4-b04f-de4ed6a099a2" width=70% />
<img src="https://github.com/actions/deploy-pages/assets/68093782/7f9ceaec-7d48-4e96-b6b6-2944c86abb78" width=70% />


<br/>
<br/>

## 🔧 Stack

**Frontend(Web)**
- **Language** : HTML, CSS, JavaScript
- **Library & Framework** : React, Webpack, Babel, Styled-components
- **IDE** : VSCode
<br />

**Backend**
- **Database** : localStorage
- **Deploy**: github Action

<br/>

## 🐚 프로젝트 directory 구성

```
├─docs
│  ├─docs
│  ├─node_modules
│  │  └─bootstrap-icons
│  │      ├─font
│  │      │  └─fonts
│  │      └─icons
│  ├─public
│  ├─specifications
│  └─src
│      ├─assets
│      │  ├─fonts
│      │  └─images
│      ├─components
│      │  ├─calendar
│      │  └─todo
│      ├─contexts
│      ├─hooks
│      ├─pages
│      │  └─main_page
│      ├─styles
│      └─utils
├─.eslintrc.json
├─.prettierrc.js
├─babel.config.json
├─package.json
├─README.md
└─webpack.config.js

```

<br/>

## 🙋‍♂️ Developer

* **Yujin KIM** - 프로젝트 기획, 개발, 배포, 관리 - [zladb](https://github.com/zladb)

<br/>

## 👾 Source
**TodoMate** - [app-store]https://apps.apple.com/us/app/todo-mate/id1505220130


<br/>

## ✅ License

MIT License

Copyright (c) 2024 Yujin KIM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

