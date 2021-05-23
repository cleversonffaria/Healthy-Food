import styled from "styled-components";

import ImageSVG from "src/assets/images/Illustration.svg";
interface PropsInput {
  borderColorInput?: string;
  textColor?: string;
  errorMessage?: boolean;
}

export const Wrapper = styled.div`
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Session = styled.div`
  min-height: 768px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 80vh;
  width: 100%;
  z-index: 1;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);

  background: url(${ImageSVG});
  background-position: 100% 0%;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 670px) {
    height: 568px;
    background-size: contain;
  }

  @media (min-width: 992px) {
    width: 70%;
    height: 768px;

    -webkit-filter: blur(0);
    -moz-filter: blur(0);
    -o-filter: blur(0);
    -ms-filter: blur(0);
    filter: blur(0);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 992px) {
    flex: none;
    width: 90vw;
    height: auto;
    background-color: transparent;
  }
`;

export const Content = styled.div`
  width: 250px;
  padding: 30px;
  padding-right: 46px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -10px 15px 20px -10px #2d356150;
  margin-top: 100px;
  margin-bottom: 182px;

  @media (min-width: 517px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 35%;
  }

  @media (min-width: 1280px) {
    width: 350px;
  }
`;

export const TitleSearch = styled.h3`
  color: ${({ theme }) => theme.darkBlue};
  margin: 0;
  font-size: 28px;
  font-family: "MontserratBold";

  @media (min-width: 517px) {
    font-size: 36px;
  }
`;

export const Input = styled.input<PropsInput>`
  border: 1px solid
    ${({ theme, borderColorInput, errorMessage }) =>
      borderColorInput ||
      (errorMessage && "#f0542d") ||
      theme.variantGray[200]};
  outline: none;
  border-radius: 5px;
  width: 100%;
  height: 42px;
  margin-top: 10px;
  padding: 0;
  padding-left: 16px;

  font-size: 13px;
  font-family: "Muli";
  color: ${({ theme, textColor, errorMessage }) =>
    textColor || (errorMessage && "#f0542d") || theme.variantGray[300]};

  ::-webkit-input-placeholder {
    /* Edge */
    color: ${({ theme, textColor, errorMessage }) =>
      textColor || (errorMessage && "#f0542d") || theme.variantGray[100]};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme, textColor, errorMessage }) =>
      textColor || (errorMessage && "#f0542d") || theme.variantGray[100]};
  }

  ::placeholder {
    color: ${({ theme, textColor, errorMessage }) =>
      textColor || (errorMessage && "#f0542d") || theme.variantGray[100]};
  }

  @media (min-width: 517px) {
    font-size: 16px;
  }
`;

export const AlertError = styled.span`
  color: #f0542d;
  font-family: "MontserratBold";
  font-size: 10px;
  margin-left: 10px;
`;
