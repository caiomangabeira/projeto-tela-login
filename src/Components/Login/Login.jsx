import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import '../Home/Home'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (username === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login bem-sucedido! Você será redirecionado para a página.');
        navigate('/home');
      } else {
        alert('Usuário ou senha inválidos. Verifique e tente novamente.');
      }
    }
  };


  return (
    <div className='divlogin'>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className='input-field'>
          <input
            type="email"
            placeholder='E-mail'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon' />
        </div>
        <div className='input-field'>
          <input
            type="password"
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon' />
        </div>

        <button>Entrar</button>

        <div className='signup-link'>
          <p>Não tem uma conta? <Link className='link' to="/registro"> Registrar </Link></p>
        </div>

      </form>
    </div>
  )
}

export default Login;