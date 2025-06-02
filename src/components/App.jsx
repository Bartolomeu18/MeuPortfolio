import { useState } from 'react'
import './App.css'
import imagem from '../assets/portfolio.png'

function App() {

  return (
    <>
  <nav className='menu_conteiner'>
    <p>Bartolomeu Sebastião</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#aboutConteiner">Sobre</a></li>
      <li><a href="#">Projecto</a></li>
      <li><a href="#" id='contacte'>Conctactos</a></li>
    </ul>
  </nav>
  <div className='helloConteiner'>
    <div id='hello'>
    <h2>Olá,eu sou <span>Bartolomeu</span></h2>
    <h1>Desenvolvedor Fullstack</h1>
   <p id="p">Codando o futuro, um projeto por vez.🚀🌐</p> 
    <br/>
    <button id='btn_prog'>Progectos</button>
    <button id='btn_conct'>Contactar</button>
    </div>
   <div className="imgConteiner">
   <img 
      src={imagem} 
      alt="Descrição da imagem" 
      className="estilo-da-imagem"
    />
    </div> 
  </div>
    </>
  )
}

export default App;
