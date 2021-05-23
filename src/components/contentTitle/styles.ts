import styled from "styled-components";

export const Container = styled.div`
  width: 310px;
  margin-top: 48px;
  margin-bottom: 32px;

  @media (min-width: 517px) {
    width: 510px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-family: "MontserratBold";
  color: ${({ theme }) => theme.darkBlue};
  text-align: center;

  @media (min-width: 517px) {
    font-size: 32px;
  }
`;
export const SubTitle = styled.h2`
  margin-top: 16px;
  font-size: 13px;
  font-family: "Muli";
  color: ${({ theme }) => theme.variantGray[100]};
  text-align: center;
  font-weight: 500;

  @media (min-width: 517px) {
    font-size: 16px;
  }
`;
