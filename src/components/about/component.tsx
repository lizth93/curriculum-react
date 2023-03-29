import { Props } from "types";

export default function AboutMe(props: Props) {
  return (
    <section className={props.className} id="about">
      <div className="personal-container">
        <span className="subheading">About me</span>
        <h2 className="heading-secondary">My personal objetive</h2>
        <p className="objective-description">
          My goal is to develop and deploy high-quality web applications with
          multiple functionalities, using tools such as JavaScript, TypeScript,
          CSS, SCSS, HTML5, and REACT. I focus on designing interfaces that meet
          the needs of millions of users.
        </p>
      </div>
    </section>
  );
}
