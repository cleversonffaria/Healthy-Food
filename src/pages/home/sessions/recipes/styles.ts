import styled from "styled-components";

export const Session = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.light};
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1252px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 120px;
  width: 288px;
  box-shadow: 0px 15px 20px -10px #1d164d40;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 18px;
  overflow: hidden;

  @media (min-width: 517px) {
    height: 225px;
    width: 468px;
  }

  @media (min-width: 992px) {
    width: 528px;
  }
`;

export const CardContent = styled.div`
  width: 200px;
  margin-left: 32px;
`;

export const CardImage = styled.img`
  height: 120px;

  @media (min-width: 517px) {
    width: 253px;
    height: 225px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-family: "MontserratBold";
  color: ${({ theme }) => theme.darkBlue};
  margin-bottom: 16px;

  @media (min-width: 517px) {
    font-size: 24px;
  }
`;

export const AlertMessage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "MontserratBold";
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.variantGray[100]};
  color: ${({ theme }) => theme.white};

  @media (min-width: 992px) {
    width: 50%;
  }
`;
