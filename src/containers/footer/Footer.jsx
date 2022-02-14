import React, {useEffect} from "react";
import "./footer.css";
import emailjs from 'emailjs-com';
import contactoImg from "../../assets/contacto.png";
import{ init } from '@emailjs/browser';
init("user_0tL6wwgQ45ZoBhj4wlgg4");

const Footer = () => {
    
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_1mqtj1u", 'template_6d0jgwg', e.target, 'user_0tL6wwgQ45ZoBhj4wlgg4')
      .then((result) => {
          console.log(result.text);
          if(result.text === 'OK'){
            alert('Mensaje enviado correctamente')
            window.location.reload();
            
          }
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="rpaAutomations__footer section__padding">
      <div className="rpaAutomations__footer-heading">
        <h1 className="gradient__text">
        Si querés potenciar tu transformación digital, dejanos un mensaje y un asesor se contactará de inmediato.
        </h1>
      </div>
      <div className="rpaAutomations__footer-img-form">
          <div>
            <img src={contactoImg}alt="rpa-automations-footer-img" className="rpaAutomations__footer-img" />  
          </div>
         
          <div className="rpaAutomations__footer-form"> 
            <form  onSubmit={sendEmail}>
                <div className="rpaAutomations__footer-form-div">
                <label>Nombre</label>
                <input type="text" name="user_name" />
                </div>
                <div className="rpaAutomations__footer-form-div">
                <label>Telefono</label>
                <input type="text" name="contact_number" />
                </div>
                <div className="rpaAutomations__footer-form-div"> 
                <label>Email</label>
                <input type="email" name="user_email" />
                </div >
                <div className="rpaAutomations__footer-form-div">
                <label>Mensaje</label>
                <textarea name="message" />
                </div>
                <input className="rpaAutomations__footer-form-button" type="submit" value="Enviar" />
            </form>
          </div>
      </div>   
      
      <div className="rpaAutomations__footer-copyright">
        <p>© 2022 RPA Automations. derechos reservados.</p>
      </div>
    </div>
  );
};


export default Footer;
