import React from "react";
import { Input } from "src/components";
import colors from "src/utils/colors";

import {
  Container,
  Session,
  TitleSearch,
  Content,
  BackgroundImage,
} from "./styles";

const Newsletter: React.FC = () => {
  return (
    <Session id="join">
      <BackgroundImage />
      <Container>
        <Content>
          <TitleSearch>Join our membership to get special offer</TitleSearch>
          <Input
            placeholder="Enter your email address"
            borderColorInput={colors.variantGray[300]}
            onClick={() => {}}
            childrenButton="Join"
            padding="0 30px"
            shadow
          />
        </Content>
      </Container>
    </Session>
  );
};

export default Newsletter;
