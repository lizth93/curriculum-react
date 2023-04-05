import { principalColor, textColor } from "components/helpers/constants";
import styled from "styled-components";
import Education from "./component";

export default styled(Education)`
  background-color: ${principalColor};
  padding-bottom: 6rem;

  .grid--experiences {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    column-gap: 4.8rem;
  }
  .grid--certifications {
    display: grid;
    border: 0.5px solid #e3fafc;
    grid-template-columns: minmax(0, 10px) 1fr 200px;
    column-gap: 4.8rem;

    align-items: center;
  }

  .title-name {
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${textColor};
  }

  .education-img {
    width: 15%;
  }
  .udemy-logo {
    width: 5rem;
    border-radius: 50%;
  }

  .education-text-box {
    font-size: 2rem;
    color: ${textColor};
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  .education-img-box {
    text-align: left;
    margin-bottom: 3.2rem;
  }

  .accordion-button {
    font-size: 1.8rem;
    text-decoration: none;
    color: ${textColor};
  }
`;
