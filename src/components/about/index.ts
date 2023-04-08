import styled from "styled-components";
import AboutMe from "./component";
import { blackColor } from "components/helpers/constants";

export default styled(AboutMe)`
  background-color: ${blackColor};

  .objective-description {
    font-size: 1.8rem;
    line-height: 1.8;
    color: #d8d4cf;
  }
`;
