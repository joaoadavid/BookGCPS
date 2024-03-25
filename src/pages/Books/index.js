import React from "react";
import { Link } from "react-router-dom"; // Importação do Link
import './styles.css';
import logoImage from '../../assets/logo.png';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi'; // Importação correta do ícone FiPower

export default function Books() {
  return (
    <div className="book-container"> {/* Corrigido o nome da classe */}
      <header>
        <img src={logoImage} alt="logo" />
        <span>Bem vindo, <strong>Leandro</strong>!</span>
        <Link className="button" to="/book/new">Adicionar novo Livro</Link> {/* Corrigido o uso do Link */}
        <button type="button">
          <FiPower size={18} />
        </button>
      </header>

      <h1>Registro de Livros</h1>
      <ul>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Title:</strong>
          <p>Nigel Poulton</p>
          <strong>Price</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>
          <button type="button">
            <FiEdit size={20} color="#dcdce6" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="#dcdce6" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Title:</strong>
          <p>Nigel Poulton</p>
          <strong>Price</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>
          <button type="button">
            <FiEdit size={20} color="#dcdce6" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="#dcdce6" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Title:</strong>
          <p>Nigel Poulton</p>
          <strong>Price</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>
          <button type="button">
            <FiEdit size={20} color="#dcdce6" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="#dcdce6" />
          </button>
        </li>
        <li>
          <strong>Title:</strong>
          <p>Docker Deep Dive</p>
          <strong>Title:</strong>
          <p>Nigel Poulton</p>
          <strong>Price</strong>
          <p>R$47,90</p>
          <strong>Release Date:</strong>
          <p>12/07/2017</p>
          <button type="button">
            <FiEdit size={20} color="#dcdce6" />
          </button>
          <button type="button">
            <FiTrash2 size={20} color="#dcdce6" />
          </button>
        </li>
      </ul>
    </div>
  )
}
