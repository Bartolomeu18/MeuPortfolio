import { useState } from 'react'
import './projects.css'
import MyMovieapp from '../assets/movie_card.jpg'
import pitagoraApp from '../assets/proj.png'

function Progects() {

  return (
    <>
      <h1 id='projectH1'>Projectos</h1>
      <div className='myPorject'>
        <div id='discriptionConteiner'>
          <h2 id='projectTitle'>Sistema de Gestão Escolar para o Colégio Pedro Pitagoras</h2>
          <button id='workby'>HTML</button><button id='workby'>CSS</button><button id='workby'>Javascript</button><button id='workby'>Bootstrap</button><button id='workby'>PHP</button>
          <p id='projectDicription'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti odit explicabo quo, pariatur eaque sed. Veniam aliquam tempora amet! Esse con</p>
          <button id='viewGit'><a href="https://github.com/Bartolomeu18/progecto-final" target="_blank">ver no Github</a></button><button id='viewProj'><a href="https://bartolomeu18.github.io/SitePedroPitagoras-/html/" target="_blank">Ver projecto</a></button>
        </div>
        <div id='imgConteiner'>
          <img
            src={pitagoraApp} alt="" />
        </div>
      </div>

      <div className='myPorject'>
        <div id='discriptionConteiner'>
          <h2 id='projectTitle'>My Movies</h2>
          <button id='workby'>React</button><button id='workby'>Bootstrap</button><button id='workby'>PHP</button>
          <p id='projectDicription'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti odit explicabo quo, pariatur eaque sed. Veniam aliquam tempora amet! Esse con</p>
          <button id='viewGit'><a href="https://github.com/Bartolomeu18/progecto-final" target="_blank">ver no Github</a></button><button id='viewProj'><a href="" target="_blank">Ver projecto</a></button>
        </div>
        <div id='imgConteiner'>
          <img
            src={MyMovieapp} alt="" />
        </div>
      </div>

    </>
  )
}

export default Progects;
