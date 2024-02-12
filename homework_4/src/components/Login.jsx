import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import styles from './../styles/Login.module.css'
import PocketBase from 'pocketbase';
import Logo from './Logo';
import Input from './Input';
import LoginRegister from './LoginRegister';
import { ThemeContext } from '../contexts/ThemeContext';


export default function Login() {

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
  const theme = useContext(ThemeContext);
  const style = `${styles.container} ${theme}`
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(userId);
    // console.log(userPw);
    const authData = pb.collection('users').authWithPassword(userId, userPw);

    authData.then(() => {
      if (pb.authStore.isValid) navigate('/chatList');
      // console.log(pb.authStore.isValid);
      // console.log(pb.authStore.token);
      // console.log(pb.authStore.model.id);
    }).catch((error) => {
      alert('올바른 회원정보가 아닙니다.')
      console.log('에러남!!!', error);
    })
  }

  const handleId = e => setUserId(e.target.value)
  const handlePw = e => setUserPw(e.target.value)


  return (
    <div className={style}>
      <Logo />
      <form action="#" onSubmit={handleSubmit}>
        <fieldset>
          <legend className='sr_only'>로그인</legend>
          <Input
            htmlFor={userId}
            label='아이디'
            handle={handleId}
            type='email'
            id='userId'
            placeholder='이메일'
          />
          <Input
            htmlFor={userPw}
            label='비밀번호'
            handle={handlePw}
            type='password'
            id='userPw'
            placeholder='비밀번호'
          />
          <LoginRegister
            btn='로그인'
            link='회원가입'
            url='/register'
          />
        </fieldset>
      </form>
    </div>
  )
}