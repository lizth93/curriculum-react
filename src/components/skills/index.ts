import styled from "styled-components";
import Skills from "./component";

export default styled(Skills)`
  .skills-2-col {
    grid-row: 2;
    grid-column: span 2;
  }
  .center-text {
    text-align: center;
  }
  .skill-img {
    margin-bottom: 3.2rem;
    display: block;
    width: 20%;
    transition: all 0.3s;
    border-radius: 100%;
  }

  .skill-img:hover {
    transform: scale(1.1);
  }

  .logo-title,
  .title {
    font-size: 2.4rem;
    color: #333;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  .logo-text {
    font-size: 1.8rem;
    line-height: 1.8;
  }
`;
