import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import styles from './../styles/Login.module.css'
import PocketBase from 'pocketbase';
import Logo from './Logo';
import Input from './Input';
import LoginRegister from './LoginRegister';
import { ThemeContext } from '../contexts/ThemeContext';


export default function Register() {

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
  const theme = useContext(ThemeContext);
  const style = `${styles.container} ${theme}`
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
    <div className={style}>
      <Logo />
      <form action="#" onSubmit={handleSubmit}>
        <fieldset>
          <legend className='sr_only'>회원가입</legend>
          <Input
            htmlFor={userName}
            label='이름'
            handle={handleName}
            type='text'
            id='userName'
            placeholder='이름을 입력해주세요'
          />
          <Input
            htmlFor={userId}
            label='아이디'
            handle={handleId}
            type='email'
            id='userId'
            placeholder='ex) hello@gmail.com'
          />
          <Input
            htmlFor={userPw}
            label='비밀번호'
            handle={handlePw}
            type='password'
            id='userPw'
            placeholder='비밀번호 8자리 이상'
          />
          <Input
            htmlFor={userPwConfirm}
            label='비밀번호 재확인'
            handle={handlePwConfirm}
            type='password'
            id='userPwConfirm'
            placeholder='비밀번호 재확인'
          />
          <LoginRegister
            btn='가입하기'
            link='로그인하러 가기'
            url='/'
          />
        </fieldset>
      </form>

    </div>
  )
}