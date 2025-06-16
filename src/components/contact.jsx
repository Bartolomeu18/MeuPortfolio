import './contact.css'
import github from '../assets/icons8-github.svg'
import linkedin from '../assets/icons8-linkedin.svg'
import gmail from '../assets/icons8-gmail.svg'
import phone from '../assets/icons8-phone.svg'

function Contact() {
    return (
        <div id='contct'>
            <h1>Contactos</h1>
            <p>Você teve uma ideia legal? entre em contacto e juntos transformamos ela tecnologia.⚙️ </p>
            <div className='contactConteinar'>
                <form action="" method="post">
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder='Digite o seu Email'/>
                    <label htmlFor="assunto">Assunto:</label>
                    <input type="text" name="assunto" id="assunto" placeholder='Digite o Assunto'/>
                    <label htmlFor="tmensagem">Texto:</label>
               <textarea name="mensagem" rows="5" cols="50" placeholder="Digite sua mensagem..." id='textoContent'></textarea>
                <input type="submit" value="Enviar" name="enviar" id="enviar" />
               <br></br>
                </form>
                    <ul id='contactList'>
                    <li id="Itens"><a href="#"><img src={github} alt="github link icon" /></a></li>
                    <li id="Itens"><a href="#"><img src={linkedin} alt="linkedin link icon" /></a></li>
                    <li id="Itens"><a href="#"><img src={gmail} alt="Gmail link icon" /></a></li>
                    <li id="Itens"><a href="#"><img src={phone} alt="" /></a></li>
                    </ul>
                    
                
            </div>
        </div>
    )
}

export default Contact;