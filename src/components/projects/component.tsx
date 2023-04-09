import { Props } from "types";
import FrontCard from "components/frontCard";
import BackCard from "components/backCard";
import { projects } from "data/projects";

export default function Projects(props: Props) {
  return (
    <section className={`${props.className} personal-container`} id="projects">
      <h2 className="heading-secondary projects-title">Projects</h2>

      <div className="row card-section">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <FrontCard project={p} index={i} />
            <BackCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
