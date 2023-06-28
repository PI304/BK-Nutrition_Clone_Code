## BK-Nutrition 클론 코딩 사이트 


### 🖥️ 프로젝트 소개
연세대학교 Brain Korea 21 FOUR 웰니스 융합인재 양성팀 홈페이지를 클론코딩한 웹사이트입니다.

### 🕰️ 개발 기간

23.06.14일 - 23.07.00일

### 1. 시작하기
---
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
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

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
   ├─ constant
   │     └─ path.js
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

#### 1. 디렉토리 설명 
#### assets
- 모든 이미지가 들어가는 폴더
- 이미지 이름의 경우 직관적으로 작명

#### components
- components : 모든 페이지가 들어가는 폴더
- layout : DefaultLayout.jsx에는 완성된 화면이 들어감
- pages : 실제 작업하는 영역이며 각 폴더 안에 jsx 파일이 들어감
- shared : Header, Footer와 같이 공유하는 영역에 대한 폴더

![pages](https://github.com/PI304/BK-Nutrition_Clone_Code/assets/120708446/c3fb7d5d-2ccc-43a4-a511-f59dd2cce560)

#### pages
- 최종적으로 렌더링되는 페이지, src 안의 pages와 다름

#### styles
- reset.css : 스타일 초기화, rem 기준으로 설정 (1rem = 10px)
- fonts.js : font size, weight 별로 정리한 폰트 스타일
  -    사용 방법 : ${Fonts.bold20} 

#### App.js
- 실제로 화면에 표시되는 내용 등은 여기에서 정의

#### index.js
- HTML 템플릿 및 JavaScript의 컴포넌트를 조합하여 렌더링하고 실제 표시
- “App.js 파일 안에 있는 html을 public에 있는 index.html에 넣어주세요~ " 라고 명령하는 역할

#### public
- index.html
    - 'root' 라는 아이디를 가진 div을 가지고 있으며 렌더링된 결과가 표시
    → App.js 의 내용이 index.js 를 거쳐 index.html 의 'root' div 에 그려지게 됨
  
### 4. 협업 방법
---
#### 1. Branching Strategy
PR을 통해 Feature 브랜치들을 master에 머지하고,
최종 배포할 시기가 되면 Admin 관리자가 master 브랜치를 Production 브랜치에 머지하여 배포하는 단순한 구조를 따릅니다.

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

#### 5. 커밋 컨벤션

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
- Component : 파스칼케이스(PascalCase)  ex) MainPage.jsx 
- Non-Component 및 하위 폴더명 : 소문자(lower case)로 작성 ex. pages/main.js
- assets 폴더 내 이미지 파일 : 케밥 케이스(Kebab case) ex. main-logo.png
 

### 📌 주요 기능
---
- 교육팀 소개
- 연구팀 구성
- 사업성과
- 커뮤니티
