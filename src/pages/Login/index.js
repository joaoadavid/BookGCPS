import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logoImage from '../../assets/logo.png';
import api from '../../services/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    const data = {
      username,
      password
    };

    try {
      const response = await api.post('auth/signin', data);
      const token = response.data.token;
      localStorage.setItem('username', username);
      localStorage.setItem('accessToken', token);
      navigate('/books');
    } catch (err) {
      setError('Login failed, try again!');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="logo" />
        <form onSubmit={login}>
          <div className="form-container">
            <h1>Acesse sua conta</h1>
            <input
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="button" type="submit">login</button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </div>
  );
}
