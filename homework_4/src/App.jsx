import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ChatList from './components/ChatList'
import ChatRoom from './components/ChatRoom'
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';

function App() {

  const [isDark, setIsDark] = useState(false);
  const handleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <>
      <button className='themeBtn' onClick={handleTheme}>Theme</button>
      <ThemeContext.Provider value={isDark ? 'is_dark' : ''}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chatRoom/:id" element={<ChatRoom />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App