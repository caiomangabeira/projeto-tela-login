import {FaUser, FaLock} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);
        setRememberMe(true);
    }
}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === "usuario@gmail.com" && password === "senha") {
      setIsLogged(true); 
      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
      setError(""); 
    } else {
      alert("Credenciais inválidas"); 
    }
  };

        const handleLogout = () => {
            setIsLogged(false);
            setUsername("");
            setPassword("");
            localStorage.removeItem("username");
            localStorage.removeItem("password"); 
          };

        if (isLogged) {
        return (
        <div className='divlogged'>
        <h1>Bem vindo, {username}!</h1>
        <p>Conteúdo exclusivo para usuários autenticados.</p>
        <button onClick={handleLogout}>Sair</button>
        </div>
        )
  }

  return (
    <div className='divlogin'>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
          <div className='input-field'>
            <input 
            type="email" 
            placeholder='E-mail' 
            required
            onChange={(e) => setUsername(e.target.value)} 
            />
            <FaUser className='icon' />
          </div>
          <div className='input-field'>
            <input 
            type="password" 
            placeholder='Senha' 
            required
            onChange={(e) => setPassword(e.target.value)} 
            />
            <FaLock className='icon' />
          </div>

          <div className='recall-forget'>
            <label>
                <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                 />
                Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button>Entrar</button>

          <div className='signup-link'>
            <p>Não tem uma conta? <a href="#">Registrar</a></p>
          </div>

      </form>
    </div>
  )
}

export default Login