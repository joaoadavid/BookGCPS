import React, { useState } from "react";
import './styles.css';
import logoImage from '../../assets/logo.png'
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';


export default function NewBook() {


  const [id, setId] = useState('null');
  const [author, setAuthor] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const username = localStorage.getItem('username');
  const accessToken = localStorage.getItem('accessToken');

  const navigate = useNavigate();

  async function createNewBook(e) {
    e.preventDefault();

    const data = {
      title,
      author,
      launchDate,
      price,
    };

    const header = {
      Authorization: 'Bearer{ accessToken }'
    }
    try {
      const response = await api.post('api/book/v1', data, header);

      navigate('/books');
    } catch (err) {
      setError('Error while recording Book!, try again!');
    }
  }



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
        <form onSubmit={createNewBook}>
          <input
            placeholder="Titulo"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            placeholder="Autor"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <input
            type="date"
            value={launchDate}
            onChange={e => setLaunchDate(e.target.value)}
          />
          <input
            placeholder="Preço"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <button className="button" type="button">Adicionar</button>
        </form>
      </div>
    </div>
  )
}

