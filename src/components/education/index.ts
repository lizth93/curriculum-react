import { principalColor, textColor } from "components/helpers/constants";
import styled from "styled-components";
import Education from "./component";

export default styled(Education)`
  background-color: ${principalColor};

  .grid--experiences {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    column-gap: 4.8rem;
  }
  .grid--certifications {
    display: grid;
    border: 1px solid #e3fafc;
    grid-template-columns: 10px minmax(0, 1fr);
    column-gap: 4.8rem;
  }

  .title-name {
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${textColor};
  }

  .education-img {
    width: 15%;
    margin-bottom: 2rem;
  }
  .udemy-logo {
    width: 20px;
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
`;
