import { Props } from "types";
import FrontCard from "components/frontCard";
import BackCard from "components/backCard";

export default function Projects(props: Props) {
  return (
    <div className={`${props.className} personal-container row col-1-of-3`}>
      <div className="card">
        <FrontCard />
        <BackCard />
      </div>

      <div className="card">
        <FrontCard />
        <BackCard />
      </div>

      <div className="card">
        <FrontCard />
        <BackCard />
      </div>
    </div>
  );
}
