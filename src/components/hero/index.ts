import {
  blueLight,
  principalColor,
  textColor,
} from "components/helpers/constants";
import styled from "styled-components";
import HeroSection from "./hero-section";

export default styled(HeroSection)`
  background-color: ${principalColor};
  padding: 6.8rem 0 9.6rem 0;
  display: flex;

  @media only screen and (max-width: 61.9em) {
    //991 px
    padding: 6.8rem 0 5.6rem 0;
  }

  @media only screen and (max-width: 61.9em) {
    //560 px
    padding: 4.8rem 0px 2.6rem;
  }

  .hero {
    max-width: 130rem;
    margin: 5rem auto;
    padding: 0 4.2rem;
    display: grid;

    gap: 4.6rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media only screen and (max-width: 62.5em) {
      //1000 px
      gap: 0rem;
    }
    @media only screen and (max-width: 61.9em) {
      //991 px
      display: flex;
      flex-direction: column;
    }

    &-text-box {
      text-align: start;
    }
    &-img-box {
      width: 70%;
      filter: brightness(105%);
      opacity: 85%;
      clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
      );

      justify-self: center;

      @media only screen and (max-width: 61.9em) {
        //991 px
        width: 45%;
      }
    }

    &-description {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 4.4rem;
      color: ${textColor};
    }
  }

  .say-Hello {
    font-size: 2rem;
    line-height: 1.6;
    color: ${textColor};
    font-weight: 500;
  }

  .btn-learn {
    color: ${blueLight};

    &:hover {
      transform: translateY(-0.3rem);
    }
  }
`;
