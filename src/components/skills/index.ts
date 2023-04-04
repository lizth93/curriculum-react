import { blackColor, textColor } from "components/helpers/constants";
import styled from "styled-components";
import Skills from "./component";

export default styled(Skills)`
  background-color: ${blackColor};

  .grid--cols {
    text-align-last: center;
  }

  .center-text {
    text-align: center;
  }
  .skill-img {
    margin-bottom: 1.2rem;
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
    font-weight: 700;
    margin-bottom: 1.6rem;
    color: ${textColor};
  }
`;
