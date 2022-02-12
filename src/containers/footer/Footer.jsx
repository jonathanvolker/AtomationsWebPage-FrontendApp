import React from "react";
import "./footer.css";
import logoRPA from "../../assets/logoRPA.jpg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
        Si querés potenciar tu transformación digital, dejanos un mensaje y un asesor se contactará de inmediato.
        </h1>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2022 RPA Automations. derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
