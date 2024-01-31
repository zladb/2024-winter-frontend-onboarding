<br>
<br>

# ESLint와 Prettier란 무엇인가

## ESLint란?

자바스크립트 코드에서 발견된 문제 패턴을 식별하기 위한 정적 코드 분석 도구.

-> 일종의 코드 스타일 가이드

대부분의 프로그래밍 언어에는 컴파일 하는 과정에서 수행되는 Lint가 기본적으로 내장되어 있다.
그러나, 인터프리터 언어인 자바스크립트는 Linter가 내장되어 있지 않다.

> Lint란?
> 소스코드를 분석하여 문법적인 오류나 스타일적인 오류, 적절하지 않은 구조 등에 표시를 달아주는 행위이며, Linter란 Lint의 동작을 도와주는 도구를 말한다

## Prettier란?

코드 포맷터로, 주로 JavaScript, HTML, CSS 등의 코드를 일관된 스타일로 자동으로 정리해주는 도구이다.  
코드 포맷팅은 들여쓰기, 공백, 줄 바꿈 등을 일관된 규칙에 맞게 자동으로 조정하여 코드의 일관성을 유지하고 가독성을 향상시킨다.

<br>
<br>

# 패키지 설치하기

### eslint 패키지 설치

- 코드 문법 검사 및 코드 포맷팅을 수행

```bash
npm install --save-dev eslint
```

### prettier 패키지 설치

- 코드 포맷팅만 집중적으로 수행하는 툴

```bash
npm install --save-dev prettier
```

### **eslint-config-prettier 패키지 설치**

- prettier 설정과 충돌 나는 ESLint의 설정을 비활성화하는 역할을 수행한다.
- `eslint-config-prettier`은 `eslint`에 `prettier`의 규칙을 추가할 수 있게 한다.

```bash
npm install --save-dev eslint-config-prettier
```

### **eslint-plugin-prettier 패키지 설치**

- ESLint 안에서 Prettier 검사를 실행하도록 설정한다. 즉, Prettier 검사 결과를 ESLint 검사 결과처럼 보여주도록 한다.
- ESLint 안에서 Prettier 검사를 실행하도록 설정한다.
- `eslint-plugin-prettier`은 `prettier`와 겹치는 규칙을 비활성화한다.

```bash
npm install --save-dev eslint-plugin-prettier
```

### **ESLint에 Airbnb Style Guide를 적용하기 위한 패키지 일괄 설치**

```python
npx install-peerdeps --dev eslint-config-airbnb
```

### **ESLint 설정 파일(.eslintrc.json) 작성하기**

Node.js 프로젝트의 루트 디렉토리에 ESLint 설정 파일(`.eslintrc.json`)을 만들고 다음과 같이 작성한다.

```json
{
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off"
  }
}
```

- `extends` : 이미 구성되어 있는 설정 집합을 불러오는 부분으로, 뒤에 있을수록 우선 적용된다.
- `rules` : 추가적으로 원하는 설정을 지정하는 부분이다.
- `airbnb` : ESLint에 Airbnb Style Guide를 적용한다. → eslint-config-airbnb 관련 패키지의 기능
- `plugin:prettier/recommended`는 다음과 같이 작성하는 것과 동일하다. → eslint-plugin-prettier 패키지의 기능

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

- `"extends": ["prettier"]` : Prettier 설정과 충돌 나는 ESLint의 설정을 비활성화한다. → eslint-config-prettier 패키지의 기능
- `"plugins": ["prettier"]` : eslint-plugin-prettier 플러그인을 등록한다. → eslint-plugin-prettier 패키지의 기능
- `"prettier/prettier": "error"` : ESLint 안에서 Prettier 검사를 실행하도록 설정한다. → eslint-plugin-prettier 패키지의 기능

### **Prettier 설정 파일(.prettierrc) 작성하기**

Node.js 프로젝트의 루트 디렉토리에 Prettier 설정 파일(`.prettierrc`)을 만들고 다음과 같이 작성한다.

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "endOfLine": "auto"
}
```

- `"printWidth": 100` : 한 줄의 최대 길이를 100글자로 제한한다.
- `"singleQuote": true` : 문자열 표현 시 작은따옴표를 사용하도록 제한한다. Airbnb Style Guide에서 이미 작은따옴표를 채택하고 있지만, 명시적으로 이를 다시 설정해주지 않으면 `prettier/prettier` 규칙에 의해 Prettier 디폴트 설정으로 덮어쓰기 된다.
- `trailingComma : "none"` : 트레일링 콤마를 사용하지 않도록 제한한다. Airbnb Style Guide에서 이미 트레일링 콤마를 금지하고 있지만, 명시적으로 이를 다시 설정해주지 않으면 `prettier/prettier` 규칙에 의해 Prettier 디폴트 설정으로 덮어쓰기 된다.
- `"endOfLine": "auto"` : 기존의 CRLF, LF 문자를 유지한다. 이를 설정해주지 않으면 디폴트 값인 `"lf"`으로 설정되기 때문에 개행 문자로 CRLF를 사용하는 Windows에서는 에러가 발생한다.
