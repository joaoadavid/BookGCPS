import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import './styles.css';
import logoImage from '../../assets/logo.png'
import api from '../../services/api'

export default function Login() {
  const [username, setUsername] = userState('');
  const [password, setpassword] = userState('');

  const history = useHistory();

  async function login() {

  };

  return (
    <div className="login-container">

      <section className="form">
        <form onSubmit={login}>
          <div className="form-container">
            <h1>Acesse sua conta</h1>
            <input placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="button" type="submit">login</button>
        </form>
      </section>

      <img src={logoImage} alt="" />

    </div>
  )
}
