import styled from "styled-components";

interface PropsButton {
  padding?: string;
  height?: number;
  shadow?: boolean;
  width?: number;
}

export const ButtonCustom = styled.button<PropsButton>`
  ${({ shadow, theme }) =>
    shadow && `box-shadow: 0px 13px 20px -10px ${theme.green};`}
  ${({ width }) => width && `min-width:${width - 10}px`};
  height: ${({ height }) => (height ? height - 10 : 38)}px;
  padding: ${({ padding }) => (!!padding ? padding : "10px")};
  color: ${({ theme }) => theme.white};
  font-family: "Muli";
  font-size: 13px;
  background-color: ${({ theme }) => theme.green};
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;

  @media (min-width: 517px) {
    ${({ width }) => `min-width:${width}px`};
    height: ${({ height }) => (height ? height : 48)}px;
    font-size: 16px;
  }
`;
