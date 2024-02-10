import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ChatList from './components/ChatList'
import Intor from './components/Intro'
import ChatRoom from './components/ChatRoom'

function App() {
  return (
    <>
      {/* <Intor /> */}
      <Routes>
        <Route path="/chatList" element={<ChatList />} />
        <Route path="/chatRoom" element={<ChatRoom />} />
      </Routes>
    </>
  )
}

export default App