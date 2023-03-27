import styled from "styled-components";
import AboutMe from "./component";

export default styled(AboutMe)`
  background-color: #131516;

  .subheading {
    display: block;
    font-size: 1.7rem;

    font-weight: 500;
    color: #0c8599;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    letter-spacing: 0.75px;
  }
  .heading-secondary {
    color: #d8d4cf;
  }
  .objective-description {
    font-size: 1.8rem;
    line-height: 1.8;
    color: #d8d4cf;
  }
`;
