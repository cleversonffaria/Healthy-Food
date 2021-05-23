import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
  height: 73px;
  width: 90vw;
  padding: 0 70px;

  @media (min-width: 517px) {
    height: 103px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copy = styled.h1`
  font-family: "Muli";
  font-size: 13px;
  color: ${({ theme }) => theme.darkBlue};
  font-weight: 500;

  @media (min-width: 517px) {
    font-size: 16px;
  }
`;

export const Text = styled.h3`
  font-family: "Muli";
  font-size: 13px;
  color: ${({ theme }) => theme.variantGray[100]};
  margin: 0 16px;
  font-weight: 500;

  @media (min-width: 517px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
