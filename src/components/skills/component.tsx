import { skillsData } from "data";
import { Props } from "types";
import Logo from "./logo";

function Skills(props: Props) {
  return (
    <section className={`${props.className} section-skills`} id="skills">
      <div className="personal-container">
        <span className="subheading">Skills</span>
        <h2 className="heading-secondary">I have used</h2>
      </div>
      <div className="personal-container grid grid--cols">
        {skillsData.map((skill) => (
          <div className="skills" key={skill.id}>
            <Logo
              title={skill.name}
              src={`/logos/${skill.logo}`}
              alt={skill.name}
              text={skill.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
