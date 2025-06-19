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
                <form action="https://formsubmit.co/bartolomeunhongo@gmail.com" method="post">
                    <br></br>
                    <label htmlFor="email">Nome:</label>
                    <input type="text" name="name" className="form-control" id="email" placeholder='Digite o seu o seu Nome' required/>
                    <label htmlFor="assunto">Email:</label>
                    <input type="email" name="email" class="form-control"  id="assunto" placeholder='Digite o Assunto'required/>
                    <label htmlFor="tmensagem">Mensagem:</label>
               <textarea class="form-control" name="message" rows="10" cols="50" placeholder="Digite sua mensagem..." id='textoContent'required ></textarea>
                    <button type="submit" id="enviar" >Enviar</button>
               <br></br>
                </form>
                 <div className='contactListConteiner'>
                    <ul id='contactList'>
                    <li id="Itens"><a href="#"><img src={github} alt="github link icon" /></a></li>
                    <li id="Itens"><a href="#"><img src={linkedin} alt="linkedin link icon" /></a></li>
                    <li id="Itens"><a href="#"><img src={gmail} alt="Gmail link icon" /></a></li>
                    <li id="Itens"><a href="#"><img src={phone} alt="calls link icon " /></a></li>
                    </ul>
                    </div>
                
            </div>
        </div>
    )
}

export default Contact;