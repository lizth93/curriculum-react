import { blackColor, textColor } from "components/helpers/constants";
import styled from "styled-components";
import Skills from "./component";

export default styled(Skills)`
  background-color: ${blackColor};
  padding-bottom: 4rem;

  .grid--cols {
    text-align-last: center;

    @media only screen and (max-width: 65.25em) {
      /* 1044 px */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }

  .center-text {
    text-align: center;
  }
  .skill-img {
    margin-bottom: 1.2rem;
    width: 20%;
    transition: all 0.3s;
    border-radius: 100%;

    @media only screen and (max-width: 61.9em) {
      /* 991 px */
      width: 30%;
    }

    @media only screen and (max-width: 28.125em) {
      /* 450px */
      width: 20%;
    }
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

  @media only screen and (max-width: 61.9em) {
    /* 991 px */
    .logo-title {
      font-size: 2rem;
      font-weight: 600;
      white-space: nowrap;
    }
  }
`;
