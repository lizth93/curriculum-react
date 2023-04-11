import { Project } from "types";

interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  project: Project;
  index: number;
}

function BackCard(props: Props) {
  return (
    <div className="card-side card-side--back card-side--back">
      <div className="card-description">
        <a href={props.project.gitHub} className="btn btn-demo" target="blank">
          View Code
        </a>
        <a href={props.project.url} className="btn btn-project" target="blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default BackCard;
