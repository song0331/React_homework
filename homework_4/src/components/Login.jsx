import { Link, useNavigate } from 'react-router-dom'
import styles from './../styles/Login.module.css'
import { useState } from 'react'
import PocketBase from 'pocketbase';


export default function Login() {

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userId);
    console.log(userPw);
    const authData = pb.collection('users').authWithPassword(userId, userPw);

    authData.then(() => {
      if (pb.authStore.isValid) navigate('/chatList');
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model.id);
    }).catch((error) => {
      alert('올바른 회원정보가 아닙니다.')
      console.log('에러남!!!', error);
    })
  }

  const handleId = e => setUserId(e.target.value)
  const handlePw = e => setUserPw(e.target.value)


  return (
    <div className={styles.container}>

      <figure className={styles.logo}>
        <img src="/icons/talk.png" alt="카카오톡 로고" />
        <figcaption className='sr_only'>카카오톡 로고</figcaption>
      </figure>

      <form action="#" onSubmit={handleSubmit}>
        <fieldset>
          <legend className='sr_only'>로그인</legend>

          <div className={styles.user_id}>
            <label htmlFor="userId" className='sr_only'>아이디</label>
            <input onChange={handleId} type="email" id='userId' placeholder='이메일' />
          </div>

          <div className={styles.user_pw}>
            <label htmlFor="userPw" className='sr_only'>비밀번호</label>
            <input onChange={handlePw} type="password" id='userPw' placeholder='비밀번호' />
          </div>

          <div className={styles.login_register}>
            <button type='submit'>로그인</button>
            <Link to='/register'>회원가입</Link>
          </div>
        </fieldset>
      </form>

    </div>
  )
}