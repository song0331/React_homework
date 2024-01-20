import "./style.css"
import React from "react";
import ReactDOM from "react-dom/client";


const root = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(root);

const createApp = (
  <div className="login_container">
    <h2 className="login_title">로그인</h2>

    <form action="#">
      <fieldset>
        <legend className="sr_only">로그인</legend>

        <div className="user_id_wrapper">
          <label htmlFor="user_id" className="sr_only">아이디</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            placeholder="아이디를 입력하시오"
            required
            aria-invalid
            aria-describedby="error_id"
          />
          <span className="error_message" id="error_id">
            6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합
          </span>
        </div>

        <div className="user_pw_wrapper">
          <label htmlFor="user_pw" className="sr_only">비밀번호</label>
          <input
            type="password"
            id="user_pw"
            name="user_pw"
            placeholder="비밀번호를 입력하시오"
            required
            aria-invalid
            aria-describedby="error_pw"
          />
          <span className="error_message" id="error_pw">
            특수문자 포함 최소 6자 - 최대 16자
          </span>
        </div>

        <div className="user_find_wrapper">
          <a href="#">아이디 찾기</a>
          <span> | </span>
          <a href="#">비밀번호 찾기</a>
        </div>

        <div className="btn_wrapper">
          <button type="submit" className="login_btn">로그인</button>
          <a href="#" className="register_btn">회원가입</a>
        </div>

      </fieldset>
    </form>

  </div>
)

reactDomRoot.render(createApp);