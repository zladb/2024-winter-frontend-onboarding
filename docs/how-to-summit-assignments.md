# 과제 제출 가이드

## 1. 저장소를 자신의 계정으로 fork하기

- 원본 저장소에 쓰기 권한이 없기 때문에 구현 사항을 추가할 수 없다.
- fork는 원본 저장소를 자신의 계정으로 복사하는 기능이다.
- 모든 미션은 같은 방식으로 자신의 계정 아래에 있는 저장소를 활용해 진행한다.

## 2. fork한 저장소를 자신의 로컬에 clone하기

- fork한 저장소는 Github에 존재하기 때문에 구현 사항을 추가할 수 없다.
- clone은 Github에 존재하는 저장소를 자신의 로컬에 복사하는 기능이다.

1. 터미널에서 다음 명령을 입력해 clone을 한다.

```bash
git clone https://github.com/{본인_아이디}/{저장소_아이디}.git
# ex) git clone https://github.com/scv1702/2024-winter-frontend-onboarding.git
```

2. clone한 디렉토리로 이동한다.

```bash
cd {저장소_아이디}
# ex) cd 2024-winter-frontend-onboarding
```

## 3. 기능 구현을 위한 브랜치 생성

- Git은 서로 다른 작업을 하기 위한 별도의 공간을 만들기 위해 브랜치를 생성할 수 있다.

1. 터미널에서 다음 명령을 입력해 브랜치를 생성한다.

```bash
git checkout -b {본인_아이디}
# ex) git checkout -b scv1702
```

## 4. 통합 개발 환경(IDE)으로 가져오기

- 과제 진행을 위해 clone한 저장소를 자신이 사용하고 있는 통합 개발 환경(IDE)으로 가져온다.

## 5. 과제 진행

- 과제의 설명을 읽고 이에 따라 과제를 진행한다.

## 6. 과제 완료 후 add, commit

- 과제를 완료한 후 로컬 저장소에 변경된 부분을 반영하기 위해 `add`, `commit` 명령을 사용한다.

```bash
git status // 변경된 파일 확인
git add -A(또는 .) // 변경된 전체 파일을 한번에 반영
git commit -m "메시지" // 작업한 내용을 메시지에 기록
```

## 7. 본인 원격 저장소에 올리기

-로컬에서 `commit` 명령을 실행하면 로컬 저장소에만 반영되고, 원격 Github의 저장소에는 반영되지 않는다.

- Github의 저장소에도 동일하게 반영하기 위해 push 명령어를 사용한다.

```bash
git push origin {브랜치_이름}
ex) git push origin scv1702
```

## 8. Github에서 Pull Request 보내기

- Pull Request는 Github에서 제공하는 기능으로 코드 리뷰 요청을 보낼 때 사용된다.
- Pull Request는 원본 저장소의 기존에 본인의 아이디로 생성 되어있는 브랜치와 앞 단계에서 생성한 브랜치 이름(앞 단계의 예에서는 `scv1702`)을 기준으로 한다.
- 예를 들어, 과제를 진행한 `scv1702/2024-winter-frontend-onboarding scv1702` 브랜치에서 `Principes-Artis-Mechanicae/2024-winter-frontend-onboarding scv1702` 브랜치로 Pull Request를 보낸다.
- Pull Request 제목은 `신찬규 1주차 제출합니다.`와 같은 형식으로 작성한다.
- 현재 과제에서 작업한 내용을 입력하고 **"Create pull request"** 버튼을 클릭해 Pull Request를 보낸다.
  > 🚨 주의: Pull Request 후 자신이 merge를 하지 않도록 주의한다.
