import React from "react";
import { Button } from "src/components";

import {
  Session,
  Container,
  Content,
  Title,
  Information,
  BackgroundImage,
} from "./styles";

const InfoService: React.FC = () => {
  return (
    <Session>
      <BackgroundImage />
      <Container>
        <Content>
          <Title>The best services ready To serve you</Title>
          <Information>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Information>
          <Information>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </Information>
          <Information>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Information>
          <Button padding="0 35px" shadow onClick={() => {}}>
            Know More
          </Button>
        </Content>
      </Container>
    </Session>
  );
};

export default InfoService;
