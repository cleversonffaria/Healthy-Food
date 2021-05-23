import React, { useEffect, useRef } from "react";
import Arrows from "./arrows";

import {
  Container,
  Card,
  CardTitle,
  Image,
  Content,
  ContentCard,
  ImageProfile,
  Name,
  Profile,
} from "./styles";
import { PropsCarrousel } from "./types";

const Carrousel: React.FC<PropsCarrousel> = ({ data }) => {
  const refDivScrollable = useRef<any>(null);
  const refCardScrollable = useRef<any>(null);

  const [divScrollable, setDivScrollable] = React.useState<any>();

  useEffect(() => {
    setDivScrollable(refDivScrollable);
  }, []);

  function checkDevice() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return <></>;
    } else {
      return <Arrows divScrollable={divScrollable} data={data} />;
    }
  }

  return (
    <Container>
      {checkDevice()}
      <Content ref={refDivScrollable} id="client">
        {data.map((item, index) => (
          <Card key={index} ref={refCardScrollable}>
            <Image src={item.image} />
            <ContentCard>
              <CardTitle>{item.title}</CardTitle>
              <Profile>
                <ImageProfile src={item.profile.image} />
                <Name>{item.profile.name}</Name>
              </Profile>
            </ContentCard>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Carrousel;
