import Accordion from "components/accordion/";
import { education } from "data/education";
import { Props } from "types";

export default function Education(props: Props) {
  const certifications = education.filter(
    (item) => item.type === "certification"
  );
  const educations = education.filter((item) => item.type === "career");

  return (
    <section
      className={`${props.className} section-experiences personal-container`}
      id="experiences"
    >
      <div className="center-text">
        <span className="subheading">Experiences</span>
        <h2 className="heading-secondary">Education</h2>
        <div className="logos"></div>
      </div>

      <div className="section-education grid--experiences">
        {educations.map((e, i) => (
          <div className="education-img-box" key={i}>
            <img
              src={`/logos/${e.logo}`}
              className="education-img"
              alt={e.altText}
            />

            <div className="elemt-1">
              <p className="education-text-box">
                <strong>{e.name}</strong>
              </p>
              <p className="title-name">{e.period}</p>
              <p className="title-name">{e.title}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="heading-secondary">Others Certifications</h3>
      <Accordion certifications={certifications} />
    </section>
  );
}
