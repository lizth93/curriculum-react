import photo from "img/my-photo.png";
import { Props } from "types";

export default function HeroSection(props: Props) {
  return (
    <section className={props.className} id="home">
      <div className="hero">
        <img src={photo} className="hero-img-box" alt="Luz Edith" />

        <div className="hero-text-box">
          <p className="say-Hello">
            <span>👋</span> Hi, I'm Luz Edith Tobar
          </p>
          <h1 className="heading-primary">
            <strong>Front-End Developer</strong> with a passion for designing
            web pages with Javascript and React.
          </h1>
          <p className="hero-description">
            Are you Looking for a passionate, team-oriented front-end developer
            with JavaScript, React, CSS, Sass-SCSS, Bootstrap and HTML skills?
            let me know!
          </p>
          <a href="#contact" className="btn-contact">
            Contact me
          </a>
          <a href="#about" className="btn btn-learn">
            Learn more &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
