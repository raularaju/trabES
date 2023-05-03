import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../requests/user';
import './LoginPage.css'
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // set loading to true when the user clicks the Login button

    try {
      const res = await login(email, password);
      console.log(res)
      navigate('/products');
    } catch (error) {
      console.log(error);
      setError('Senha e/ou email incorretos');
    } finally {
      setLoading(false); // set loading back to false when the login request is complete
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {loading ? ( // show the loading screen if loading is true
          <div>Loading...</div>
        ) : (
          <>
            <button type="submit">Login</button>
          </>
        )}
        {error && <div className="error">{error}</div>}
      </form>
      <h4>NÃO POSSUI UMA CONTA? <Link to='/signup'>CRIE AQUI</Link></h4>
    </div>
  );
}

export default LoginPage;
