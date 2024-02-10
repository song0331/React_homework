import { Link } from 'react-router-dom'
import styles from './../styles/ChatRoom.module.css'

export default function ChatRoom() {

  return (
    <div className={styles.container}>

      <div className={styles.status_bar}>
        <img src="/icons/left.svg" alt="시간" />
        <img src="/icons/right.svg" alt="와이파이, 통신, 배터리 아이콘" />
      </div>

      <div className={styles.menu}>
        <div role='none' className={styles.wrapper}>
          <Link to='/chatList'><img src="/icons/previous.svg" alt="뒤로 가기" /></Link>
          <h2>민지</h2>
        </div>
        <div className={styles.icons}>
          <img src="/icons/search.svg" alt="채팅 내용 검색" />
          <img src="/icons/menu.svg" alt="메뉴" />
        </div>
      </div>

      <div className={styles.receive_message}>
        <img src='/images/민지.svg' alt="대화 상대 프로필 사진" />
        <div role='none'>
          <span>민지</span>
          <p className={styles.speech_bubble}>
            나 곧 컴백이야!
          </p>
        </div>
      </div>

      <div className={styles.send_message}>
        <p className={styles.speech_bubble}>
          축하해! 벌써 기대된다
        </p>
      </div>

      <div className={styles.chatInput}>
        <label className='sr_only' htmlFor="message">메세지 입력창</label>
        <input type="text" id='message' />
        <button type='button' onClick={() => console.log('메세지 보냄')}>
          <img src="/icons/send.png" alt="메세지 보내기 버튼" />
        </button>
      </div>



    </div>
  )
}