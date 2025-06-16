import { useState } from 'react'
import './App.css'
import imagem from '../assets/portfolio.png'

function App() {

  return (
    <>
  <nav className='menu_conteiner' id='helloConteiner'>
    <p>{'</'}Bartolomeu Sebastião{'>'}</p>
    <ul>
      <li><a href="./App.jsx" id='hoLINK'>Home</a></li>
      <li><a href="#aboutConteiner" id='SoLink'>Sobre</a></li>
      <li><a href="#projectH1" id='PrLink'>Projecto</a></li>
      <li><a href="#contct" id='contacte'>Conctactos</a></li>
    </ul>
  </nav>
  <div className='helloConteiner' id='helloConteiner'>
    <div id='hello'>
    <h2>Olá,eu sou <span>Bartolomeu</span></h2>
    <h1>Desenvolvedor Fullstack</h1>
   <p id="p">Transformando Ideias em Tecnologia.⚙️</p> 
    <br/>
    <button id='btn_prog'><a href="#projectH1">Progectos</a></button>
    <button id='btn_conct'><a href="#contct">Contactar</a></button>
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
