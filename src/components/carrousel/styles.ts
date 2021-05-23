import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 992px) {
    width: 85vw;
    margin-left: 137px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  --webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const ContentCard = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.white};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  min-width: 280px;
  min-height: 450px;
  box-shadow: 0px 15px 20px -10px #1d164d30;
  overflow: hidden;
  margin: 0 12px;
  background-color: ${({ theme }) => theme.white};

  scroll-snap-align: start;
  pointer-events: none;

  @media (min-width: 517px) {
    min-width: 348px;
    max-width: 348px;
    min-height: 450px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 247px;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.darkBlue};
  margin-bottom: 24px;
  margin-top: 32px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageProfile = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 52px;
`;

export const Name = styled.span`
  margin-left: 8px;
  font-family: "Muli";
  font-size: 16px;
  color: ${({ theme }) => theme.variantGray[100]};
`;
