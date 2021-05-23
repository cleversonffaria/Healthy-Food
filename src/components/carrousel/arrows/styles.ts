import styled from "styled-components";

interface PropButtonArrow {
  position: "left" | "right";
}

export const ButtonArrows = styled.button<PropButtonArrow>`
  position: absolute;
  ${({ position }) => (position === "left" ? " left: -5px;" : " right: -5px;")}

  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.light};
  border: none;
  cursor: pointer;
  box-shadow: 3px 5px 25px -8px ${({ theme }) => theme.variantGray[300]};
  outline: none;

  @media (min-width: 576px) {
    ${({ position }) => (position === "left" ? " left: 30px;" : " right: 30px;")}
  }
`;
