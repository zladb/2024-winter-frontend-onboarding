# 2024년 겨울 Frontend 온보딩 5 & 6주차: React를 이용해 SPA 만들기

## ✏️ 5 & 6주차 과제 요구 사항

- React를 이전에 사용했던 적이 있다면, 아마도 `creact-react-app`을 통해 프로젝트를 생성했을 것이다. 이번에는 [공식 문서](https://react.dev/learn/add-react-to-an-existing-project)를 참고해 패키지 매니저를 이용하여 기존 프로젝트에 `react`와 `react-dom`을 설치하고, 설정까지 직접 해보자.
- React를 이용해 기존의 과제를 SPA(Single Page Application)으로 만들어보자.
- React에서 컴포넌트 간에 값을 쉽게 공유할 수 있는 [Context API](https://react.dev/learn/passing-data-deeply-with-context)를 이용해 props drilling를 피해보자.
- React에서 쉽게 스타일링을 할 수 있는 [styled-components](https://github.com/styled-components/styled-components)를 이용해 컴포넌트를 스타일링 해보자.
- 최종 디렉토리 구조는 다음과 같다. 아래의 구조는 중요한 디렉토리/파일 만을 나타낸 것이므로 아래와 완전히 동일할 필요는 없으나, 전체적인 구조는 따르도록 한다.

```
├── docs
├── node_modules
├── public # 정적 파일을 저장하는 디렉토리
│   └── index.html
├── src # 소스코드를 저장하는 디렉토리
│   ├── assets # 이미지, 폰트 등의 자원을 저장하는 디렉토리
│   │   ├── fonts
│   │   └── images
│   ├── styles # 스타일시트를 저장하는 디렉토리
│   ├── components # 재사용 가능한 React 컴포넌트들을 저장하는 디렉토리
│   ├── pages # 각 페이지에 대한 컴포넌트 및 스타일을 저장하는 디렉토리
|   └── index.js
├── package.json
├── webpack.config.js
├── .babelrc
└── README.md
```

## 앞으로 공부하면 더 좋은 것들

![](https://github.com/Han-Kyeol/developer-roadmap-kr-/raw/master/img/frontend(kr).png)