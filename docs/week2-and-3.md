# 2024년 겨울 Frontend 온보딩 2 & 3주차: Vanila JS로 DOM 조작하기

## ✏️ 2 & 3주차 과제 요구 사항

- jQuery 등의 **외부 라이브러리 없이** Vanila JS만을 이용해 [요구 사항 명세서](./specifications/requirements-specification.md)의 모든 기능을 구현해보자.
    - Vanila JS는 라이브러리나 프레임워크를 사용하지 않는 순수 JavaScript를 칭하는 말이다.
- [Airbnb의 JavaScript 스타일 가이드](https://github.com/airbnb/javascript)를 따르면서 코딩을 진행한다.
- 서버와의 연동은 진행하지 않으므로, 브라우저 스토리지(로컬 스토리지, 세션 스토리지, 쿠키)를 이용해 새로 고침을 해도 데이터가 삭제되지 않도록 구현한다.
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
└── README.md
```