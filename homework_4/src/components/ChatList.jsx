import { Link } from 'react-router-dom'
import styles from './../styles/ChatList.module.css'

export default function ChatList() {

  const name = ['민지', '하니', '다니엘', '해린', '혜인']

  return (
    <div className={styles.container}>
      <div className={styles.status_bar}>
        <img src="/icons/left.svg" alt="시간" />
        <img src="/icons/right.svg" alt="와이파이, 통신, 배터리 아이콘" />
      </div>

      <div className={styles.menu}>
        <h2>채팅</h2>
        <div className={styles.icons}>
          <img src="/icons/search.svg" alt="채팅방 검색" />
          <img src="/icons/create_chating_room.svg" alt="채팅방 추가" />
          <img src="/icons/setting.svg" alt="설정" />
        </div>
      </div>

      {
        name.map((item, index) => {
          return (
            <Link to='/chatRoom' key={index}>
              <div className={styles.chat_list}>
                <img src={`/images/${item}.svg`} alt="대화 상대 프로필 사진" />

                <div className={styles.profile_wrapper}>
                  <div role='none'>
                    <span className={styles.name}>{item}</span>
                    <p className={styles.message}>곧 컴백이야!</p>
                  </div>
                  <time className={styles.time}>20:05</time>
                </div>
              </div>
            </Link>
          )
        })
      }

    </div>
  )
}