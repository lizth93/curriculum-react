import { Project } from "types";

interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  project: Project;
  index: number;
}

export default function FrontCard(props: Props) {
  return (
    <div className="card-side card-side--front">
      <div
        className={`card-img card-img--${props.index}`}
        style={{
          backgroundImage: `linear-gradient(to right bottom, #0b7285, #087f5b), url(${props.project.img})`,
        }}
      >
        &nbsp;
      </div>
      <h4 className="card-header">
        <span className="card-header-span card-header-span">
          {props.project.name}
        </span>
      </h4>
      <div className="card-details">
        <ul>
          {props.project.tools.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
