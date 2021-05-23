import styled from "styled-components";
import ImageSVG from "src/assets/images/Illustration.svg";

export const Session = styled.div`
  height: 100vh;
  min-height: 678px;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 700px;
  }

  @media (min-width: 1200px) {
    height: 768px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 80vh;
  min-height: 500px;
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
    justify-content: flex-start;
    background-color: transparent;
  }
`;

export const Content = styled.div`
  width: 300px;

  @media (min-width: 517px) {
    width: 400px;
  }

  @media (min-width: 992px) {
    width: 35%;
  }

  @media (min-width: 1280px) {
    width: 400px;
  }
`;

export const TitleSearch = styled.h3`
  color: ${({ theme }) => theme.light};
  margin: 0;
  font-size: 28px;
  font-family: "MontserratBold";

  @media (min-width: 517px) {
    font-size: 48px;
  }

  @media (min-width: 992px) {
    color: ${({ theme }) => theme.darkBlue};
  }
`;
