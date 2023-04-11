import styled from "styled-components";
import Footer from "./component";
import { blackColor } from "components/helpers/constants";

export default styled(Footer)`
  background-color: ${blackColor};
  border-top: 1px solid #c5f6fa;
  text-align: center;
  padding: 4rem 0rem;

  @media only screen and (max-width: 28.125em) {
    /* 450px */
    padding: 2rem 0rem;
  }

  .grid--4--cols {
    row-gap: 2rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    align-items: center;

    @media only screen and (max-width: 35em) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .footer {
    &-icon {
      height: 4.8rem;
      width: 4.8rem;
    }

    &-link:link,
    &-link:visited {
      text-decoration: none;
      font-size: 1.6rem;
      color: #767676;
      transition: all 0.3s;
    }
    &-link:hover,
    &-link:active {
      color: #0b7285;
    }
  }

  .logo-footer {
    @media only screen and (max-width: 35em) {
      grid-column: span 5;
      grid-row: 1;
    }
  }
  .copyrigth {
    font-size: 1.4rem;
    color: #767676;
    line-height: 1.6;
    grid-column: span 5;

    @media only screen and (max-width: 28.125em) {
      /* 450px */
      font-size: 1.6rem;
    }
  }
`;
