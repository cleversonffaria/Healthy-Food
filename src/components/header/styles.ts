import styled from "styled-components";

import ButtonCustom from "../button";

interface PropsButton {
  display?: string;
}

interface PropsDesktop {
  fixed?: boolean;
}

export const Desktop = styled.div<PropsDesktop>`
  display: none;

  .logo {
    a {
      color: ${({ theme }) => theme.white};
    }
  }

  @media (min-width: 992px) {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    z-index: 10;
  }
`;

export const Container = styled.div`
  width: 90vw;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  display: none;

  @media (min-width: 992px) {
    display: block;
    font-size: 32px;
    font-family: "MontserratBold";

    a {
      color: ${({ theme }) => theme.green};
      text-decoration: none;
    }
  }
`;

export const Button = styled(ButtonCustom)<PropsButton>`
  background-color: ${({ display }) => display === "true" && "transparent"};
  ${({ display }) => display === "true" && "position: fixed;"}
  z-index: 10;
`;

export const NavMenu = styled.ul`
  position: fixed;
  top: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9;

  @media (min-width: 992px) {
    width: initial;
    position: initial;
    background-color: transparent;
    flex-direction: row;

    .button {
      a {
        color: ${({ theme }) => theme.green};
        padding: 16px 25px;
        background-color: ${({ theme }) => theme.white};
        border-radius: 5px;
      }
    }
  }
`;

export const ListMenu = styled.li`
  font-family: "MontserratBold";
  list-style: none;
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.white};

  border-radius: 5px;
  cursor: pointer;

  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;

  a {
    padding: 20px 50px;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
  }

  @media (max-width: 992px) {
    a {
      :hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (min-width: 992px) {
    background-color: initial;
    font-size: 16px;
    border-radius: 0px;
    padding: 0;
    margin-right: 5px;

    a {
      padding: 10px;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const Mobile = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    display: none;
  }
`;
