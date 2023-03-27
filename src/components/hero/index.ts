import styled from "styled-components";
import HeroSection from "./hero-section";

export default styled(HeroSection)`
  background-color: rgb(8, 60, 60);
  padding: 6.8rem 0 9.6rem 0;
  display: flex;

  .hero {
    max-width: 130rem;
    margin: 5rem auto;
    padding: 0 4.2rem;
    display: grid;

    gap: 4.6rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    &-text-box {
      text-align: start;
    }
    &-img-box {
      width: 70%;
      filter: brightness(105%);
      opacity: 85%;
      border-top-left-radius: 80px;
      border-bottom-right-radius: 80px;
      justify-self: center;
    }

    &-description {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 4.4rem;
      color: #adb5bd;
    }
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

  .btn,
  .btn:link,
  .btn:visited {
    display: inline-block;
    font-size: 2rem;
    text-decoration: none;
    padding: 1.6rem 3.2rem;
    border-radius: 9px;
    transition: all 0.5s;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .btn-learn {
    color: rgb(101, 223, 243);

    &:hover {
      transform: translateY(-0.3rem);
    }
  }
`;
