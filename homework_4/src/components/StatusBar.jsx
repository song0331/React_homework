import styles from './../styles/ChatList.module.css'

export default function StatusBar() {
  return (
    <div className={styles.status_bar}>
      <img src="/icons/left.svg" alt="시간" />
      <img src="/icons/right.svg" alt="와이파이, 통신, 배터리 아이콘" />
    </div>
  )
}