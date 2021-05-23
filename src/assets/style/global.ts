import { createGlobalStyle, css } from "styled-components";
import FontMontserratBold from "src/assets/fonts/Montserrat-Bold.ttf";
import FontMontserrat from "src/assets/fonts/Montserrat-Regular.ttf";
import FontMuli from "src/assets/fonts/Muli-Regular.ttf";

const IconFontFace = css`
  @font-face {
    font-family: "MontserratBold";
    font-style: normal;
    src: url("${FontMontserratBold}") format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    src: url("${FontMontserrat}") format("truetype");
  }
  @font-face {
    font-family: "Muli";
    font-style: normal;
    src: url("${FontMuli}") format("truetype");
  }
`;

export const GlobalStyle = createGlobalStyle`
${IconFontFace}

  html {
    scroll-behavior: smooth;
  }

 body {
  margin: 0;
  font-family: "Montserrat", "Muli", -apple-system, BlinkMacSystemFont,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.light};
  box-sizing: border-box;
  h1,h2,h3,h4,h5 { 
      margin: 0;
  }

  input,
  textarea,
  button,
  select,li,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .fixed {
    background-color: ${({ theme }) => theme.green} !important;
    box-shadow: 0px 10px 20px -10px #2d356150 !important;
  }

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9d9d9d;
    border-radius: 5px;
    border: 1px solid $bg-base;

    &:hover {
      background-color: #858585;
    }
  }
}
`;
