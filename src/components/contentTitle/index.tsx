import React from "react";

import { Container, SubTitle, Title } from "./styles";
import { PropsTitle } from "./types";

const ContentTitle: React.FC<PropsTitle> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default ContentTitle;
