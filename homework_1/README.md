## React 과제1

![](https://velog.velcdn.com/images/thdgusrbek/post/6b7a70cf-3c82-4e4d-9d01-371d0b8ab0e1/image.png)

### 과제

Vanilla 프로젝트에서 구현한 인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링<br><br>

#### 바닐라 프로젝트: 마켈칼리

#### 구현할 인터페이스: 로그인

#### 구현 내용

- 마크업
- 스타일링
- 아이디, 비밀번호 유효성 검사 기능

---

<br>

### 설치

```bash
npm create vite@latest
```

```bash
npm i
```

```bash
npm install react react-dom
```

---

<br>

### 실행

```bash
npm run dev
```

---

<br>

### 디렉토리 구성

![](https://velog.velcdn.com/images/thdgusrbek/post/0ea4fb56-1804-4121-8a4d-e9e07b77b765/image.png)

---

<br>

### HTML

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="./public/favicon.ico" />
    <link
      rel="stylesheet"
      as="style"
      crossorigin
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src="./main.jsx"></script>
    <title>로그인 - 칼리</title>
  </head>

  <body>
    <noscript>이 앱을 사용하려면 자바스크립트 활성화가 필요합니다.</noscript>
    <div id="root"></div>
  </body>
</html>
```

---

<br>

### CSS

```css
body {
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
    system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
}

h2 {
  margin: 0;
}

fieldset {
  border: none;
}

a {
  text-decoration: none;
}

.sr_only {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0px;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  white-space: nowrap;
}

.login_container {
  width: 340px;
  height: 408px;
  margin: auto;
  margin-top: 80px;
}

.login_title {
  margin-bottom: 44px;
  text-align: center;
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 21.328px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}

.error_message {
  display: none;
  color: red;
  font-family: Pretendard;
  font-size: 12.003px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding-left: 7px;
  padding-top: 3px;
}

.error_message.is_invalid {
  display: block;
}

.user_id_wrapper,
.user_pw_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#user_id,
#user_pw {
  height: 24px;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid var(--gray-300, #a6a6a6);
  color: #333333;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}

#user_pw {
  margin-top: 12px;
}

.user_find_wrapper {
  height: 20px;
  margin-top: 12px;
  text-align: end;
}

.user_find_wrapper a {
  color: #000;
  font-family: Pretendard;
  font-size: 12.003px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

.btn_wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 12px;
}

.login_btn {
  height: 54px;
  text-align: center;
  background: var(--primary, #5f0080);
  border: none;
  border-radius: 4px;
  color: var(--white, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}

.register_btn {
  height: 54px;
  border: 1px solid var(--primary, #5f0080);
  border-radius: 4px;
  text-align: center;
  color: var(--primary, #5f0080);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 54px;
}
```

---

<br>

### JSX

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const root = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(root);

const createApp = (
  <div className='login_container'>
    <h2 className='login_title'>로그인</h2>

    <form action='#'>
      <fieldset>
        <legend className='sr_only'>로그인</legend>
        // 아이디
        <div className='user_id_wrapper'>
          <label htmlFor='user_id' className='sr_only'>
            아이디
          </label>
          <input
            type='text'
            id='user_id'
            name='user_id'
            placeholder='아이디를 입력하시오'
            required
            aria-invalid
            aria-describedby='error_id'
            onInput={(e) => {
              // 아이디 유효성 검사 로직
              let value = e.target.value;
              const userId = document.querySelector('#error_id');
              const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/;
              const isValidPassword = (value) => pwRegex.test(value);

              if (!value || !isValidPassword(value))
                userId.classList.add('is_invalid');
              else userId.classList.remove('is_invalid');
            }}
          />
          // 아이디 에러 메시지
          <span className='error_message' id='error_id'>
            6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합
          </span>
        </div>
        // 비밀번호
        <div className='user_pw_wrapper'>
          <label htmlFor='user_pw' className='sr_only'>
            비밀번호
          </label>
          <input
            type='password'
            id='user_pw'
            name='user_pw'
            placeholder='비밀번호를 입력하시오'
            required
            aria-invalid
            aria-describedby='error_pw'
            onInput={(e) => {
              // 비밀번호 유효성 검사 로직
              let value = e.target.value;
              const userPw = document.querySelector('#error_pw');
              const pwRegex =
                /^(?=.*[A-Za-z\d!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;
              const isValidPassword = (value) => pwRegex.test(value);

              if (!value || !isValidPassword(value))
                userPw.classList.add('is_invalid');
              else userPw.classList.remove('is_invalid');
            }}
          />
          // 비밀번호 에러 메시지
          <span className='error_message' id='error_pw'>
            특수문자 포함 최소 6자 - 최대 16자
          </span>
        </div>
        // 아이디, 비밀번호 찾기
        <div className='user_find_wrapper'>
          <a href='#'>아이디 찾기</a>
          <span> | </span>
          <a href='#'>비밀번호 찾기</a>
        </div>
        // 로그인, 회원가입
        <div className='btn_wrapper'>
          <button type='submit' className='login_btn'>
            로그인
          </button>
          <a href='#' className='register_btn'>
            회원가입
          </a>
        </div>
      </fieldset>
    </form>
  </div>
);

reactDomRoot.render(createApp);
```

---

<br>

### 결과

![](https://velog.velcdn.com/images/thdgusrbek/post/09d3b5f8-6180-49e5-848f-a165b5464d37/image.gif)

---

<br>

### [💻Demo](https://song0331.github.io/Front_End_React1/)
