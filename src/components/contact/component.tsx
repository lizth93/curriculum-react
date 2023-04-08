import { Props } from "types";
import { IonIcon } from "@ionic/react";
import { locationOutline, callOutline, mailOutline } from "ionicons/icons";
import Form from "./form";
import { contactInfo } from "data/contactInfo";

export default function Contact(props: Props) {
  return (
    <section className={`${props.className} personal-container`} id="contact">
      <div className="container">
        <div className="contact-text-box">
          <h2 className="heading-secondary style-white">Contact me</h2>

          <div className="contact grid grid--2--cols">
            <Form />

            <address>
              <ul className="list-contact">
                <li className="list-item">
                  <IonIcon className="contact-icon" icon={locationOutline} />
                  <span>{contactInfo.country}</span>
                </li>

                <li className="list-item">
                  <IonIcon className="contact-icon" icon={callOutline} />
                  <a className="phone-link link" href="tel:3137036415">
                    {contactInfo.Tel}
                  </a>
                </li>

                <li className="list-item">
                  <IonIcon className="contact-icon" icon={mailOutline} />
                  <a
                    className="contact-email link"
                    href="mailto:luz.tobarc@outlook.com"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
