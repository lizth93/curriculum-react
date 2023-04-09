import styled from "styled-components";
import Projects from "./component";
import { blackColor } from "components/helpers/constants";

export default styled(Projects)`
  background-color: ${blackColor};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .card {
    perspective: 150rem;
    background-color: ${blackColor};
    -moz-perspective: 150rem;
    position: relative;
    height: 53rem;
  }
  @media only screen and (max-width: 56.25em) {
    .card {
      max-width: 50rem;
    }
  }
  @media only screen and (max-width: 37.5em) {
    .card {
      max-width: 100%;
      margin: 0 3rem;
    }
  }
  .card__side {
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
  }
  .card__side--front {
    background-color: #fff;
  }
  .card__side--back {
    transform: rotateY(180deg);
  }
  .card__side--back-1 {
    background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
  }
  .card__side--back-2 {
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
  }
  .card__side--back-3 {
    background-image: linear-gradient(to right bottom, #2998ff, #5643fa);
  }
  .card:hover .card__side--front {
    transform: rotateY(-180deg);
  }
  .card:hover .card__side--back {
    transform: rotateY(0);
  }
  .card__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .card__picture--1 {
    background-image: linear-gradient(to right bottom, #ffb900, #ff7730),
      url(../img/nat-5.jpg);
  }
  .card__picture--2 {
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485),
      url(../img/nat-6.jpg);
  }
  .card__picture--3 {
    background-image: linear-gradient(to right bottom, #2998ff, #5643fa),
      url(../img/nat-7.jpg);
  }
  .card__heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  }
  .card__heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  .card__heading-span--1 {
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 185, 0, 0.9),
      rgba(255, 119, 48, 0.9)
    );
  }
  .card__heading-span--2 {
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.9),
      rgba(40, 180, 133, 0.9)
    );
  }
  .card__heading-span--3 {
    background-image: linear-gradient(
      to right bottom,
      rgba(41, 152, 255, 0.9),
      rgba(86, 67, 250, 0.9)
    );
  }
  .card__details {
    padding: 3rem;
  }
  .card__details ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;
  }
  .card__details ul li {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
  }
  .card__details ul li:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  .card__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
  }
  .card__price-box {
    text-align: center;
    margin-bottom: 8rem;
    color: #fff;
  }
  .card__price-only {
    font-size: font-size-text-card-back;
    text-transform: uppercase;
  }
  .card__price-value {
    font-size: 6rem;
    font-weight: 100;
  }
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    .card {
      height: auto;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    }
    .card__side {
      height: auto;
      position: relative;
      box-shadow: none;
    }
    .card__side--back {
      transform: rotateY(0);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
      margin-top: -2rem;
    }
    .card:hover .card__side--front {
      transform: rotateY(0);
    }
    .card__details {
      padding: 1rem 3rem;
    }
    .card__cta {
      position: relative;
      top: 0%;
      left: 0%;
      transform: translate(0);
      width: 100%;
      padding: 7rem 4rem 4rem 4rem;
    }
  }
  @media only screen and (max-width: 56.25em) and (max-width: 20.18em),
    only screen and (hover: none) and (max-width: 20.18em) {
    .card__cta {
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
`;
