import styled from "styled-components";
import Accordion from "./component";
import {
  blackColor,
  lessBlackColor,
  principalColor,
} from "components/helpers/constants";

export default styled(Accordion)`
  .accordion-item {
    border: none;
  }

  .accordion-button {
    background-color: ${blackColor};
  }
  .accordion-button::after {
    background-image: var(--bs-accordion-btn-active-icon);
  }

  .accordion-button:not(.collapsed) {
    color: #ffffff;
    background-color: ${lessBlackColor};
    box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
  }

  .accordion-body {
    background-color: ${blackColor};
  }

  .grid--certifications {
    border: 1px solid ${principalColor};
  }

  .btn-primary {
    justify-self: center;
  }
`;
