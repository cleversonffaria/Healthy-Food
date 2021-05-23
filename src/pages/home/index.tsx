import React, { useEffect, useState } from "react";

import { Wrapper } from "./styles";

import { Footer, Header } from "src/components";
import { Search, Recipes, InfoService, Newsletter, Blog } from "./sessions";
import { Button } from "src/components";

import Comida1 from "src/assets/images/comida_1.svg";
import Comida2 from "src/assets/images/comida_2.svg";
import Comida3 from "src/assets/images/comida_3.svg";
import Comida4 from "src/assets/images/comida_4.svg";

var data = [
  {
    image: Comida1,
    title: "Broccoli Salad with Bacon",
    button: <Button onClick={() => {}}>See Recipe</Button>,
  },
  {
    image: Comida2,
    title: "Classic Beef Burgers",
    button: <Button onClick={() => {}}>See Recipe</Button>,
  },
  {
    image: Comida3,
    title: "Classic Potato Salad",
    button: <Button onClick={() => {}}>See Recipe</Button>,
  },
  {
    image: Comida4,
    title: "Cherry Cobbler on the Grill",
    button: <Button onClick={() => {}}>See Recipe</Button>,
  },
];

const Pages: React.FC = () => {
  const [recipesData, setRecipesData] = useState(data);

  return (
    <Wrapper>
      <Header />
      <Search data={data} filtered={setRecipesData} />
      <Recipes data={recipesData} />
      <InfoService />
      <Blog />
      <Newsletter />
      <Footer />
    </Wrapper>
  );
};

export default Pages;
