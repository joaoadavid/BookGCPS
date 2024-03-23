import React from "react";
import './styles.css';
import logoImage from '../../assets/logo.png'

export default function Login() {
  return (
    <div className="login-container">

      <section className="form">
        <form action="">
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
