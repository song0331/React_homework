import { Link, useNavigate } from 'react-router-dom'
import styles from './../styles/Login.module.css'
import { useState } from 'react'
import PocketBase from 'pocketbase';


export default function Register() {

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const [userPwConfirm, setUserPwConfirm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    pb.collection('users').create({
      "email": userId,
      "emailVisibility": true,
      "password": userPw,
      "passwordConfirm": userPwConfirm,
      "name": userName,
    })
      .then(() => {
        console.log('회원가입 성공')
        navigate('/');
      })
      .catch((error) => {
        console.log('회원가입 실패', error);
        alert('이미 등록된 회원이 있거나 잘못된 정보 입니다.');
      })
  }

  const handleName = e => setUserName(e.target.value)
  const handleId = e => setUserId(e.target.value)
  const handlePw = e => setUserPw(e.target.value)
  const handlePwConfirm = e => setUserPwConfirm(e.target.value)


  return (
    <div className={styles.container}>

      <figure className={styles.logo}>
        <img src="/icons/talk.png" alt="카카오톡 로고" />
        <figcaption className='sr_only'>카카오톡 로고</figcaption>
      </figure>

      <form action="#" onSubmit={handleSubmit}>
        <fieldset>
          <legend className='sr_only'>회원가입</legend>

          <div className={styles.user_name}>
            <label htmlFor="userName" className='sr_only'>이름</label>
            <input onChange={handleName} type="text" id='userName' placeholder='이름을 입력해주세요' />
          </div>

          <div className={styles.user_id}>
            <label htmlFor="userId" className='sr_only'>아이디</label>
            <input onChange={handleId} type="email" id='userId' placeholder='ex) hello@gmail.com' />
          </div>

          <div className={styles.user_pw}>
            <label htmlFor="userPw" className='sr_only'>비밀번호</label>
            <input onChange={handlePw} type="password" id='userPw' placeholder='비밀번호 8자리 이상' />
          </div>

          <div className={styles.user_pw_confirm}>
            <label htmlFor="userPwreConfirm" className='sr_only'>비밀번호 재확인</label>
            <input onChange={handlePwConfirm} type="password" id='userPwreConfirm' placeholder='비밀번호 재확인' />
          </div>

          <div className={styles.login_register}>
            <button type='submit'>가입하기</button>
            <Link to='/'>로그인하러 가기</Link>
          </div>
        </fieldset>
      </form>

    </div>
  )
}