import { FaUser, FaLock } from 'react-icons/fa';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Usuário registrado com sucesso! Você será redirecionado para página de login.');
      navigate('/');
    }
  };

  return (
    <div className='divregistro'>
      <form onSubmit={handleRegister}>
        <h1>Faça seu cadastro</h1>
        <div className='input-field-registro'>
          <input
            type="email"
            placeholder='Crie seu e-mail'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon' />
        </div>
        <div className='input-field-registro'>
          <input
            type="password"
            placeholder='Crie sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon' />
        </div>

        <button type='submit'>Registrar</button>
      </form>
    </div>
  )
}

export default Registro
