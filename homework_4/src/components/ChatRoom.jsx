import { Link, useParams } from 'react-router-dom'
import styles from './../styles/ChatRoom.module.css'
import { useEffect, useRef, useState } from 'react'
import PocketBase from 'pocketbase';
import StatusBar from './StatusBar';

export default function ChatRoom() {

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
  const [sendMessage, setSendMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [sender, setSender] = useState('');
  const { id } = useParams();
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const name = ['민지', '하니', '다니엘', '해린', '혜인', '리액트'];

  const handleMessage = (e) => {
    setSendMessage(e.target.value)
  }
  const handleSendMessage = () => {
    setSendMessage('')
    inputRef.current.focus()

    // scrollRef.current.scrollTop = scrollRef.current.scrollHeight + 40;
    // console.log(scrollRef.current.scrollHeight)
    // console.log(typeof scrollRef.current.scrollHeight)

    const data = {
      "message": JSON.stringify([...messageList, { '현규': sendMessage }]),
    };

    pb.collection('message').update(id, data)
      .then((data) => {
        // console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })

  }


  useEffect(() => {
    inputRef.current.focus()

    pb.collection('message').getOne(id)
      .then((data) => {
        // console.log(data.message)
        setMessageList([...messageList, ...data.message]);
        setSender(data.sender);
      })
      .catch((error) => {
        console.log('실패', error)
      })
  }, [])


  useEffect(() => {
    pb.collection('message').subscribe(id, function (e) {
      // console.log(e.action);
      // console.log(e.record);

      setMessageList([...messageList, ...e.record.message]);
    })
      // .then((data) => console.log('성공', data))
      .catch(() => console.log('실패'))

    return () => {
      pb.collection('message').unsubscribe(id)
    }

  }, [])


  return (
    <div className={styles.container}>
      <StatusBar />
      <div className={styles.menu}>
        <div role='none' className={styles.wrapper}>
          <Link to='/chatList'><img src="/icons/previous.svg" alt="뒤로 가기" /></Link>
          <h2>{sender}</h2>
        </div>
        <div className={styles.icons}>
          <img src="/icons/search.svg" alt="채팅 내용 검색" />
          <img src="/icons/menu.svg" alt="메뉴" />
        </div>
      </div>

      <div ref={scrollRef} className={styles.message_container}>
        {
          messageList.length === 0 ? null
            : messageList.map((item) => {
              return (
                <>
                  <div key={crypto.randomUUID()}>
                    {
                      Object.keys(item)[0] === sender ?
                        <div key={crypto.randomUUID()} className={styles.receive_message}>
                          {
                            name.includes(sender) ?
                              <img src={`/images/${sender}.svg`} alt="대화 상대 프로필 사진" />
                              : <img src={`/images/profile.svg`} alt="대화 상대 프로필 사진" />
                          }
                          <div role='none'>
                            <span>{sender}</span>
                            <p className={styles.speech_bubble}>
                              {item[Object.keys(item)[0]]}
                            </p>
                          </div>
                        </div>
                        :
                        <div key={crypto.randomUUID()} className={styles.send_message}>
                          <p className={styles.speech_bubble}>
                            {item[Object.keys(item)[0]]}
                          </p>
                        </div>
                    }
                  </div>
                </>
              )
            })
        }
      </div>

      <div className={styles.chatInput}>
        <label className='sr_only' htmlFor="message">메세지 입력창</label>
        <input ref={inputRef} type="text" id='message' value={sendMessage} onChange={handleMessage} />
        <button type='button' onClick={handleSendMessage}>
          <img src="/icons/send.png" alt="메세지 보내기 버튼" />
        </button>
      </div>

    </div >
  )
}