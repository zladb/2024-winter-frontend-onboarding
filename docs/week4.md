# 2024년 겨울 Frontend 온보딩 4주차: webpack과 babel을 이용해 ES6+ 환경 구축하기

## ✏️ 4주차 과제 요구 사항

- JavaScript 패키지 매니저인 npm과 yarn, yarn berry의 차이점에 대해 알아보고 이들 중 마음에 드는 패키지 매니저를 골라 사용해보자.
    - 각 패키지 매니저의 차이점과 해당 패키지 매니저를 선택한 이유에 대해 `docs/JavaScript-패키지-매니저에-대하여.md`에 마크 다운 문서를 작성해보자. 
- [webpack](https://github.com/webpack/webpack)을 이용해 쉽고 빠르게 번들링을 해보고, [babel](https://github.com/babel/babel)을 이용해 ES6+ 문법을 사용해보자.
    - 기존의 JavaScript 소스 코드를 ES6+ 환경에 맞게 리팩토링하자.
    - webpack과 babel이 무엇인지, 왜 필요하며 어떤 역할을 하는지 알아보고 `docs/webpack과-babel이란-무엇인가.md`에 마크 다운 문서를 작성해보자. 
- Visaul Studio Code에서 ESLint와 Prettier를 이용해 [Airbnb의 JavaScript 스타일 가이드](https://github.com/airbnb/javascript)를 엄격히 적용함으로써 협업 시 코드의 일관성을 유지해보자.
    - ESLint와 Prettier가 무엇인지, 왜 필요하며 어떤 역할을 하는지 알아보고 `docs/ESLint와-Prettier란-무엇인가.md`에 마크 다운 문서를 작성해보자. 
- 코드는 읽기 쉽고 유지 보수가 용이하도록, 또한 확정 가능성을 고려하여 작성되어야 한다.
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
|   └── index.js
├── package.json
├── webpack.config.js
├── .babelrc
└── README.md
```