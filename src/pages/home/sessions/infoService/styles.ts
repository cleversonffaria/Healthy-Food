import styled from "styled-components";

import ImageSVG from "src/assets/images/bloco_services.svg";

export const Session = styled.div`
  height: 100vh;
  min-height: 678px;
  width: 100%;

  background-color: ${({ theme }) => theme.white};
  overflow: hidden;

  @media (min-width: 992px) {
    height: 727px;
  }
`;

export const BackgroundImage = styled.div`
  height: 99vh;
  min-height: 672px;
  width: 100%;

  position: absolute;
  background: url(${ImageSVG});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);

  @media (min-width: 992px) {
    height: 727px;
    background-size: contain;

    -webkit-filter: blur(0);
    -moz-filter: blur(0);
    -o-filter: blur(0);
    -ms-filter: blur(0);
    filter: blur(0);
  }
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 2;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    background-color: transparent;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  width: 300px;

  @media (min-width: 517px) {
    width: 420px;
  }

  @media (min-width: 992px) {
    margin-right: 7%;
  }

  @media (min-width: 1200px) {
    margin-right: 248px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.light};
  font-size: 28px;
  font-family: "MontserratBold";

  @media (min-width: 517px) {
    font-size: 32px;
  }

  @media (min-width: 992px) {
    color: ${({ theme }) => theme.blue};
  }
`;

export const Information = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 13px;
  font-family: "Muli";
  margin: 20px 0;

  @media (min-width: 517px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    color: #bcbcbc;
  }
`;
