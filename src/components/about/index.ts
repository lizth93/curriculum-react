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

  .personal-container {
    @media only screen and (max-width: 28.125em) {
      //450px
      padding: 3.8rem 4rem 1.6rem 4rem;
    }
  }
`;
