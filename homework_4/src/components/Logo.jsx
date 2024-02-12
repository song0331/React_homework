import styles from './../styles/Login.module.css'

export default function Logo() {
  return (
    <figure className={styles.logo}>
      <img src="/icons/talk.png" alt="카카오톡 로고" />
      <figcaption className='sr_only'>카카오톡 로고</figcaption>
    </figure>
  )
}