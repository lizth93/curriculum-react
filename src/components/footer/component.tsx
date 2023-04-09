import { IonIcon } from "@ionic/react";
import {
  logoLinkedin,
  logoGithub,
  logoWhatsapp,
  mailOutline,
} from "ionicons/icons";
import logo from "img/logo.png";
import { Props } from "types";

export default function Footer(props: Props) {
  return (
    <footer className={props.className}>
      <div className="container grid--5--cols">
        <a className="logo-footer ancla-element" href="#home">
          <img src={logo} className="logo" alt="logo" />
        </a>

        <a
          target="en_blank"
          className="footer-link"
          href="https://www.linkedin.com/in/luz-edith-tobar-87818077/"
        >
          <IonIcon className="footer-icon" icon={logoLinkedin}></IonIcon>
        </a>

        <a
          className="footer-link"
          target="en_blank"
          href="https://github.com/lizth93"
        >
          <IonIcon className="footer-icon" icon={logoGithub}></IonIcon>
        </a>

        <a
          target="en_blank"
          className="footer-link"
          href="https://api.whatsapp.com/send?phone=573137036415"
        >
          <IonIcon className="footer-icon" icon={logoWhatsapp}></IonIcon>
        </a>

        <a
          className="footer-link"
          target="en_blank"
          href="mailto:luz.tobarc@outlook.com"
        >
          <IonIcon className="footer-icon" name={mailOutline}></IonIcon>
        </a>

        <p className="copyrigth">
          This website is handmade by Luz Edith Tobar ❤ with React, TypeScript,
          HTML and Sass, Check the code of this website on GitHub.
        </p>
      </div>
    </footer>
  );
}
