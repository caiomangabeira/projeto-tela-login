import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='divhome'>
      <p>Você está acessando a área exclusiva para usuários cadastrados.</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

export default Home
