import styled from "styled-components";
import Footer from "./component";
import { blackColor } from "components/helpers/constants";

export default styled(Footer)`
  background-color: ${blackColor};
  border-top: 1px solid #c5f6fa;
  text-align: center;
  padding: 4rem 0rem;

  .grid--5--cols {
    row-gap: 2rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    align-items: center;
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

  .copyrigth {
    font-size: 1.4rem;
    color: #767676;
    line-height: 1.6;
    grid-column: span 5;
  }
`;
