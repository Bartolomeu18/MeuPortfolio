import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/components/App'
import Hability from './components/Hability'
import About from './components/About'
import Progects from './components/progects'
import Contact from './components/contact'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hability />
    <About></About>
    <Progects />
   <Contact></Contact>
   <Footer></Footer>
  </StrictMode>,
)
