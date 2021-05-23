import React from "react";

import { Container, Copy, Text, Content } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Copy>© Copyrights 2019 Stack. All Rights Reserved.</Copy>
      <Content>
        <Text>Privacy Policy</Text>
        <Text>Terms and Conditions</Text>
      </Content>
    </Container>
  );
};

export default Footer;
