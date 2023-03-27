import { Props } from "types";

export default function AboutMe(props: Props) {
  return (
    <section className={props.className} id="about">
      <div className="container">
        <span className="subheading">About me</span>
        <h2 className="heading-secondary">My personal objetive</h2>
        <p className="objective-description">
          Develop and implement high-demand resilient architectures from the
          Front-End side, using JavaScript, CSS, Sass-SCSS, HTML5 and REACT,
          where I can satisfy millions of users through my interfaces.
        </p>
      </div>
    </section>
  );
}
