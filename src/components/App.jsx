import { useState } from 'react'
import './App.css'
import imagem from '../assets/portfolio.png'
import BtnMenu from '../assets/menu_30dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'

function App() {
  const [mostrar, setMostrar] = useState(false);
  
  const toggle = () => {
    setMostrar(!mostrar);
  }

  return (
    <>
      <nav className='menu_conteiner'>
        <p id='deskLogo'>{'</'}Bartolomeu Sebastião{'>'}</p>
        <p id='mobLogo'>{'</'}B{'>'}</p>
        
        <ul className={`menu-list ${mostrar ? 'show' : ''}`}>
          <li><a href="#helloConteiner" id='hoLINK'>Home</a></li>
          <li><a href="#aboutConteiner" id='SoLink'>Sobre</a></li>
          <li><a href="#projectH1" id='PrLink'>Projecto</a></li>
          <li><a href="#contct" id='contacte'>Conctactos</a></li>
        </ul>
        
        <div className="btnmenu" onClick={toggle}>
          <img src={BtnMenu} alt="menu" /> 
        </div>
      </nav>
      
      <div className='helloConteiner' id='helloConteiner'>
        <div id='hello'>
          <h2>Olá, eu sou <span>Bartolomeu</span></h2>
          <h1>Desenvolvedor Fullstack</h1>
          <p id="p">Transformando Ideias em Tecnologia.⚙️</p> 
          <br/>
          <button id='btn_prog'><a href="#projectH1">Progectos</a></button>
          <button id='btn_conct'><a href="#contct">Contactar</a></button>
        </div>
        <div className="imgConteiner">
          <img 
            src={imagem} 
            alt="Bartolomeu Sebastião" 
            className="estilo-da-imagem"
          />
        </div> 
      </div>
    </>
  )
}

export default App;