import styled from "styled-components";
import HeroSection from "./hero-section";

export default styled(HeroSection)`
  background-color: rgb(8, 60, 60);
  padding: 4.8rem 0 9.6rem 0;
  display: flex;

  .hero {
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    display: grid;

    gap: 9.6rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .heading-primary,
  .heading-secondary {
    color: #dee2e6;
    letter-spacing: -0.5px;
  }
  .heading-primary {
    font-weight: 500;
    font-size: 4.2rem;
    line-height: 1;
    margin-bottom: 3.2rem;
  }

  .heading-secondary {
    font-size: 4.4rem;
    line-height: 1.2;
    margin-bottom: 3.2rem;
    font-weight: 700;
  }

  .say-Hello {
    font-size: 2rem;
    line-height: 1.6;
    color: #adb5bd;
    font-weight: 500;
  }
  .hero-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.4rem;
    color: #adb5bd;
  }
`;
