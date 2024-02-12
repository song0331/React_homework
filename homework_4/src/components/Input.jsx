import styles from './../styles/Login.module.css'

export default function Input({ handle, type, id, placeholder, htmlFor, label }) {
  return (
    <div className={styles.user}>
      <label htmlFor={htmlFor} className='sr_only'>{label}</label>
      <input onChange={handle} type={type} id={id} placeholder={placeholder} />
    </div>
  )
}