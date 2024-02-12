## React 과제4

### 과제

4주차 과제는 채팅 앱 화면을 구현하는 것입니다. (마크업 구현 ✅ / 기능 구현 ✅)
사용자가 입력한 내용을 데이터베이스에 저장하고, 사용자 화면에 업데이트 해봅니다.
![](https://velog.velcdn.com/images/thdgusrbek/post/9607ef72-1642-48bb-bea1-316078e938e2/image.png)

- [ ] 커스텀 훅 함수를 1개 이상 작성해 여러 곳에서 재사용 해봅니다.
- [x] 리액트 컨텍스트 API를 활용해 앱 상태를 관리해보세요.
- [x] PocketBase 인증, 리얼 타임 데이터베이스 등을 활용하세요.
- [x] React Router 라이브러리를 활용해 라우팅하세요. (옵션)
- [ ] 가능한 경우, Storybook을 활용해보세요. (옵션)

<br><br>

#### 구현 내용

- UI는 카카오톡을 카피
- context API를 사용해서 다크모드를 관리
- 리액트 라우터를 사용해서 각 컴포넌트를 라우팅
- pocketbase Auth with password 사용해서 로그인, 로그아웃 구현
- pocketbase를 사용해서 대화 목록 렌더링
- pocketbase Realtime을 사용해서 대화 내용을 실시간으로 주고 받을 수 있음
  <br>

---

<br>

### 디렉토리 구성

![](https://velog.velcdn.com/images/thdgusrbek/post/96b130dc-5aea-4d62-b411-420f825dcc26/image.png)

---

<br>

### 결과

<br>

- 로그인
  ![](https://velog.velcdn.com/images/thdgusrbek/post/484b57f9-13f2-499e-aa19-31ccb7959ba8/image.gif)
  <br><br>

- 채팅방 목록, 채팅, 다크모드
  ![](https://velog.velcdn.com/images/thdgusrbek/post/41a67901-d946-4eca-b569-8c53cb76ede8/image.gif)

---

<br>

### 회고

실시간으로 채팅을 입력하면 포켓베이스에 저장하는 기능을 만들었지만,
창을 하나 더 띄워 두 사람이 실시간 채팅을 하는 기능은 구현하지 못 했다.

포켓베이스 설계를 처음부터 하고 시작했어야 하는데 구현에 급해 설계마저 실시간으로 해버렸다.
후에 두 사람이 채팅을 하는 기능도 구현할 계획이다.

배운 것을 어디에 사용해야 할지 조금 보이는 것 같아 다행이라고 느꼈다.
(ex. 채팅 내용을 작성하고 보내기 버튼을 누르면 input에 포커스를 주는 useRef)

---

<br>

### [💻Demo](https://front-end-react4.vercel.app/)

`id` song@gmail.com
`pw` 123456789
