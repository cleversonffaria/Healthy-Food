import React from "react";
import { ContentTitle } from "src/components";

import {
  Container,
  Session,
  Content,
  Card,
  CardImage,
  CardTitle,
  CardContent,
  AlertMessage,
} from "./styles";
import { PropsRecipes } from "./types";

const Recipes: React.FC<PropsRecipes> = ({ data }) => {
  return (
    <Session id="healthy">
      <Container>
        <ContentTitle
          title="Our Best Recipes"
          subTitle="Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts."
        />
        {(data.length >= 1 && (
          <Content>
            {data.map((item, index) => (
              <Card key={index}>
                <CardImage src={item.image} />
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  {item.button}
                </CardContent>
              </Card>
            ))}
          </Content>
        )) || <AlertMessage>No recipes found</AlertMessage>}
      </Container>
    </Session>
  );
};

export default Recipes;
