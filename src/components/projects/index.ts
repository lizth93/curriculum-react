import styled from "styled-components";
import Projects from "./component";
import {
  blackColor,
  blueLight,
  colorContactAndButtons,
  lessBlackColor,
  textLightColor,
  textWhiteColor,
} from "components/helpers/constants";
import { principalColor } from "components/helpers/constants";

export default styled(Projects)`
  background-color: ${blackColor};

  .card {
    perspective: 150rem;
    background-color: ${blackColor};
    -moz-perspective: 150rem;
    position: relative;
    height: 53rem;
    justify-content: space-between;
    padding: 0;

    @media only screen and (max-width: 56.25em) {
      //900px
      max-width: 50rem;
    }

    @media only screen and (max-width: 50em) {
      /* 800 px */
      max-width: none;
    }

    @media only screen and (max-width: 37.5em) {
      //600px
      max-width: 100%;
      margin: 0 3rem;
    }
    &-section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8rem;

      @media only screen and (max-width: 61.9em) {
        /* 991 px */
        gap: 2rem;
      }

      @media only screen and (max-width: 50em) {
        /* 800 px */
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
      }
    }

    &-side {
      height: 53rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 3px;
      overflow: hidden;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

      &--front {
        background-color: #fff;
      }

      &--back {
        transform: rotateY(180deg);
        background-image: linear-gradient(to right bottom, #0b7285, #087f5b);
      }
    }

    &-img {
      background-size: cover;
      height: 23rem;
      background-blend-mode: screen;
      clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &-header {
      font-size: 2.8rem;
      font-weight: 300;
      text-transform: uppercase;
      text-align: right;
      color: #fff;
      position: absolute;
      top: 12rem;
      right: 2rem;
      width: 75%;

      &-span {
        padding: 1rem 1.5rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        background-image: linear-gradient(
          to right bottom,
          rgba(41, 152, 255, 0.9),
          ${principalColor}
        );
      }
    }

    .card-details {
      padding: 3rem;

      & ul {
        list-style: none;
        width: 80%;
        margin: 0 auto;
      }
      & ul li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;
      }
      & ul li:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }

    &-description {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      text-align: center;
    }
  }

  .card:hover .card-side--front {
    transform: rotateY(-180deg);
  }
  .card:hover .card-side--back {
    transform: rotateY(0);
  }

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    .card {
      height: auto;
      border-radius: 3px;
      background-color: ${textWhiteColor};
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

      &-side {
        height: auto;
        position: relative;
        box-shadow: none;
      }
      &-side--back {
        transform: rotateY(0);
        clip-path: polygon(100% 26%, 100% 100%, 0 100%, 0 26%, 50% 0);
        margin-top: -2rem;
      }
      &:hover &-side--front {
        transform: rotateY(0);
      }

      &-details {
        padding: 1rem 3rem;
      }
      &-description {
        position: relative;
        top: 0%;
        left: 0%;
        transform: translate(0);
        width: 100%;
        padding: 7rem 4rem 4rem 4rem;
      }
    }

    .card:hover .card-side--front {
      transform: none;
    }
    .card:hover .card-side--back {
      transform: none;
    }
  }
  @media only screen and (max-width: 56.25em) and (max-width: 20.18em),
    only screen and (hover: none) and (max-width: 20.18em) {
    .card-description {
      padding: 5rem 2rem 2rem 2rem;
    }
  }
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    .card__price-box {
      margin-bottom: 3rem;
    }
    .card__price-value {
      font-size: 4rem;
    }
  }

  .btn-demo {
    color: ${blueLight};

    &:hover {
      transform: translateY(-0.3rem);
    }
  }
  .btn-project {
    background-color: ${blueLight};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    color: ${lessBlackColor};
    &:hover {
      transform: translateY(-0.3rem);
      background-color: ${colorContactAndButtons};
      color: ${textLightColor};
    }
  }

  .more {
    text-align: center;
    margin-top: 4rem;
  }
`;
