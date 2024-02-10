import styles from './../styles/Intro.module.css'

function Intor() {
  return (
    <div className={styles.intro}>
      <figure>
        <img src="intro.jpg" alt="" />
        <figcaption className='sr_only'>카카오톡 인트로</figcaption>
      </figure>
    </div>
  )
}

export default Intor
