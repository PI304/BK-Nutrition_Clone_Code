## BK-Nutrition 클론 코딩 사이트 
--- 

### 🖥️ 프로젝트 소개
연세대학교 Brain Korea 21 FOUR 웰니스 융합인재 양성팀 홈페이지를 클론코딩한 웹사이트입니다.

### 🕰️ 개발 기간

23.06.14일 - 23.07.00일

### 1. 시작하기
----
#### 1. Clone
```
$ git clone https://github.com/PI304/BK-Nutrition_Clone_Code.git
$ cd BK-Nutrition_Clone_Code
$ npm install
```
#### 2. Run
```
$ npm start
```
### ⚙️ 2. 기술 스택 
----
IDE : VSCODE
Formatter : Prettier, ESLint
Library : React 18.2.0, styled-components 5.3.11
Langauge : JavaScript

###  3. 디렉토리 구조 
---
```
📦  BK-NUTRITION_CLONE_CODE
├─ node_modules
├─ public
└─ src
   ├─ assets
   ├─ components
   │  ├─ layout
   │  │  └─ DefaultLayout.jsx
   │  ├─ page
   │  │  ├─ achievement
   │  │  │  └─ Achievemnet.jsx
   │  │  ├─ industrial
   │  │  │  └─ Industrial.jsx
   │  │  ├─ international
   │  │  │  └─ International.jsx
   │  │  ├─ intro
   │  │  │  └─ Intro.jsx
   │  │  ├─ main
   │  │  │  └─ Main.jsx
   │  │  ├─ member
   │  │  │  └─ Member.jsx
   │  │  ├─ notice
   │  │  │  └─ Notice.jsx
   │  │  └─ resourse
   │  │     └─ Resource.jsx
   │  └─ shared
   │     ├─ Footer.jsx
   │     └─ Header.jsx
	 ├─ pages
   ├─ styles
   ├─ App.js
   ├─ index.js
   ├─ .eslintrc.json
   ├─ .gitignore
   ├─ .prettierrc.json
   ├─ package-lock.json
   ├─ package.json
   └─ README.md
```



### 4. 협업 방법
---
#### Master에 머지 
#### 1. Branching Strategy
PR을 통해 Feature 브랜치들을 Develop에 머지하고,
최종 배포할 시기가 되면 Admin 관리자가 Develop 브랜치를 Production 브랜치에 머지하여 배포하는 단순한 구조를 따릅니다.

#### 2. 협업 과정
1. 로컬에 Clone한 레포에서 Feature 브랜치를 생성하여 작업합니다.
2. 개발이 끝났다면 다시 한번 원격 레포의 최신 커밋을 받아와줍니다.
```
// 체크아웃 하기 전, Feature 브랜치에서의 작업 내용을 커밋해야 합니다.
$ git checkout develop
$ git pull origin develop
``` 
3. 추가된 최신 커밋이 있다면 내가 작업한 Feature 브랜치를, 새로운 커밋이 추가된 Develop 브랜치의 마지막 커밋으로 Rebase 합니다. (말그대로 base를 바꾼다는 뜻입니다)
```
$ git checkout Feature/[브랜치명]
$ git rebase develop
```
4. 충돌이 발생했다면, 에디터에서 충돌을 해결한 뒤 아래 명령어를 입력합니다.
```
$ git add .
$ git rebase --continue
```

5. 이상이 없다면 Feature 브랜치를 push 합니다.
```
$ git push origin Feature/[브랜치명]
```

6. Github에서 PR을 생성합니다. PR 시 나타나는 템플릿을 채워주세요.

```
## Feature Description

- 이런 이런 기능입니다

## To Reviewers

- 이런 이런 점을 유의해주세요
```
7. Review 과정을 거칩니다.

8. Self Merge 해주세요.

9. Squash Merge되며, Merge된 Feature Branch는 자동 삭제됩니다.

10. 로컬에서 Develop 브랜치로 체크아웃한 뒤 Pull하고, 새로운 Feature 브랜치로 분기하여 다음 작업을 진행해주세요.

#### 4. 브랜치 이름 컨벤션
```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성해주세요
- 기능요약은 영어로 작성해주세요

ex) Feature/modal-publishing
```

#### 5. 커밋  컨벤션

```

<태그>: <제목>

- : 뒤에만 띄어쓰기가 있습니다
- 제목은 한영 혼용이 가능합니다 (가급적 영어로)
- 태그의 첫글자는 소문자로 작성해주세요
- 태그는 아래에 적힌 것들만 사용해주세요
- 검사 예외 조건 (자동 생성, 최초 커밋)
 - Merge branch*, Merge pull request*, initial*

feat: 새로운 기능 추가, 기능 로직 변경
fix: 버그 수정
refactor: 코드 리팩토링 (기능 변화 X)
style: 코드 포맷팅, 코드 변경이 없는 경우
chore: 빌드 업무 수정, 패키지 매니저 수정
docs: 문서 수정, 주석
test : Test 관련한 코드의 추가, 수정
! : 급한 변경 사항인 경우에 추가 (접두사, () 뒤 / 콜론 이전)
() : 추가 요약 정보가 필요할 경우 (접두사 뒤 / !, 콜론 이전)
BREAKING CHANGE : 급한 변경 footer에 추가
```

### 5. 코드 컨벤션 
- Router : 케밥케이스(kebab-case)  
- Component : 파스칼케이스(PascalCase)
- util 함수 : 카멜 케이스(camelCase)
- custom Hook : 카멜 케이스(camelCase), 단 무조건 use로 시작

 

### 📌 주요 기능
---
- 교육팀 소개
- 연구팀 구성
- 사업성과
- 커뮤니티
