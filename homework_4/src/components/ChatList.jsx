import { Link, useNavigate } from 'react-router-dom'
import styles from './../styles/ChatList.module.css'
import PocketBase from 'pocketbase';
import { useContext, useEffect, useState } from 'react';
import StatusBar from './StatusBar';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ChatList() {

  const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
  const theme = useContext(ThemeContext);
  const style = `${styles.container} ${theme}`
  const user = JSON.parse(localStorage.getItem('pocketbase_auth')).model.name;
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const name = ['민지', '하니', '다니엘', '해린', '혜인', '리액트'];

  // console.log(user)
  const handleLogout = () => {
    pb.authStore.clear();
    navigate('/');
  }

  useEffect(() => {
    pb.collection('message').getFullList()
      .then((data) => {
        // console.log(data);
        // console.log(data[0].receiver);

        // const test = data.map((item, index) => {
        //   if (item.receiver === user) return
        // })


        // console.log(data[0].sender);
        // console.log(data[0].message[data[0].message.length - 1]);
        setUserData([...userData, ...data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className={style}>
      {/* <div className={styles.container}> */}
      <StatusBar />
      <div className={styles.user_name}>
        {user} 님
        <button type='button' onClick={handleLogout}>Logout</button>
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
        userData.map((item) => {
          return (
            <Link to={`/chatRoom/${item.id}`} key={crypto.randomUUID()}>
              <div className={styles.chat_list}>

                {
                  name.includes(item.sender) ?
                    <img src={`/images/${item.sender}.svg`} alt="대화 상대 프로필 사진" />
                    : <img src={`/images/profile.svg`} alt="대화 상대 프로필 사진" />
                }

                <div className={styles.profile_wrapper}>
                  <div role='none'>
                    <span className={styles.name}>{item.sender}</span>
                    {
                      Object.keys(item.message[item.message.length - 1])[0] === item.sender ?
                        <p className={styles.message}>
                          {item.message[item.message.length - 1][item.sender]}
                        </p>
                        :
                        <p className={styles.message}>
                          {item.message[item.message.length - 1][item.receiver]}
                        </p>
                    }
                  </div>
                  <time className={styles.time}>{item.updated.slice(11, -8)}</time>
                </div>
              </div>
            </Link>
          )
        })
      }

    </div>
  )
}