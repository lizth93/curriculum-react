import styled from "styled-components";
import Contact from "./component";
import {
  blackColor,
  blueLight,
  boxShadow,
  boxShadowBtn,
  colorContactAndButtons,
  darkPrincipalColor,
  inputBackground,
  textLightColor,
  textWhiteColor,
} from "components/helpers/constants";

export default styled(Contact)`
  background-color: ${blackColor};
  padding-bottom: 6rem;

  .container {
    @media only screen and (max-width: 61.9em) {
      /* 991 px */
      max-width: 100%;
    }
  }

  .contact-text-box {
    background-color: ${colorContactAndButtons};
    padding: 4.8rem 6.4rem 6.4rem 6.4rem;
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.2);
    border-radius: 11px;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.8;
    color: ${textLightColor};

    @media only screen and (max-width: 28.125em) {
      /* 450px */
      padding: 2.8rem 2.4rem 2.4rem;
    }
  }

  .grid--2--cols {
    grid-template-columns: 2fr 1fr;

    @media only screen and (max-width: 61.9em) {
      /* 991 px */
      display: flex;
      flex-direction: column;
    }
  }

  .contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
    row-gap: 2.4rem;

    @media only screen and (max-width: 50em) {
      /* 800 px */
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }

    & label {
      display: block;
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 1.2rem;
    }
  }

  address {
    margin-bottom: 0rem;
    align-self: flex-end;

    @media only screen and (max-width: 55.875em) {
      //894px
      align-self: auto;
    }
  }

  input {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    border: none;
    background-color: ${inputBackground};
    border-radius: 9px;
    box-shadow: ${boxShadow};
    color: ${blueLight};
  }

  .cta-form input::placeholder {
    color: ${blueLight};
  }

  .btn--form {
    background-color: ${darkPrincipalColor};
    color: ${textWhiteColor};
    align-self: end;
    padding: 1.2rem;

    @media only screen and (max-width: 50em) {
      /* 800 px */
      margin-top: 5rem;
    }
    &:hover {
      background-color: ${blackColor};
      color: ${blueLight};
      transform: translateY(-0.3rem);
      box-shadow: ${boxShadowBtn};
    }
  }

  .list-contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;

    @media only screen and (max-width: 65.25em) {
      /* 1044 px */
      padding-top: 2rem;
      flex-direction: row;
    }

    @media only screen and (max-width: 61.9em) {
      /* 991 px */
      flex-direction: row;
      flex-wrap: 1;
    }

    @media only screen and (max-width: 50em) {
      /* 800 px */
      display: block;
    }

    @media only screen and (max-width: 28.125em) {
      /* 450px */
      padding-top: 0rem;
    }
  }

  .link {
    text-decoration: none;

    &:link,
    &:visited {
      text-decoration: none;
      font-size: 1.6rem;
      color: ${textWhiteColor};
      transition: all 0.3s;
    }
    &:hover,
    &:active {
      color: ${blueLight};
    }
  }

  .contact-icon {
    fill: ${textLightColor};
    height: 4.8rem;
    width: 4.8rem;
  }

  .list-item {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    line-height: 1.2;

    @media only screen and (max-width: 55.875em) {
      /* 894 px */
      display: flex;
      flex-direction: column;
    }

    @media only screen and (max-width: 50em) {
      /* 800 px */
      display: flex;
      flex-direction: initial;
      column-gap: 4rem;
    }
  }
`;
