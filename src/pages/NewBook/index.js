import React from "react";
import './styles.css';
import logoImage from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

export default function NewBook() {
  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logoImage} alt="logo" />
          <h1>Adicionar Novo Livro</h1>
          <p>Insira as informações do livre e clique em adicionar</p>
          <Link className="back-Link" to="/books">
            <FiArrowLeft size={16}></FiArrowLeft>
            Home
          </Link>
        </section>
        <form>
          <input placeholder="Titulo" />
          <input placeholder="Autor" />
          <input type="date" />
          <input placeholder="Preço" />

          <button className="button" type="button">Adicionar</button>
        </form>
      </div>
    </div>
  )
}
