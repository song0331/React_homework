import { Link } from 'react-router-dom'
import styles from './../styles/Login.module.css'

export default function LoginRegister({ btn, link, url }) {
  return (
    <div className={styles.login_register}>
      <button type='submit'>{btn}</button>
      <Link to={url}>{link}</Link>
    </div>
  )
}