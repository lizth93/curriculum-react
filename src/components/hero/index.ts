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
