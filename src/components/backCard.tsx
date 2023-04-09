import styled from "styled-components";

interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function BackCard(props: Props) {
  return (
    <div className="card__side card__side--back card__side--back-1">
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Only</p>
          <p className="card__price-value">$297</p>
        </div>
        <a href="#popup" className="btn btn--white">
          Book now!
        </a>
      </div>
    </div>
  );
}

export default styled(BackCard)``;
