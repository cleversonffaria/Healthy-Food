import React, { useState } from "react";
import { Input } from "src/components";

import {
  Container,
  Session,
  TitleSearch,
  Content,
  BackgroundImage,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { PropsSearch } from "./types";

const Search: React.FC<PropsSearch> = ({ data, filtered }) => {
  const [text, setText] = useState("");

  const submit = () => {
    const dataFiltered = data.filter((item) =>
      item.title.toLocaleUpperCase().includes(text.toLocaleUpperCase())
    );
    filtered(dataFiltered);
  };

  return (
    <Session id="home">
      <BackgroundImage />
      <Container>
        <Content>
          <TitleSearch>Ready for Trying a new recipe?</TitleSearch>
          <Input
            placeholder="Search healthy recipes"
            onChange={(e) => {
              setText(e.target.value);
            }}
            onClick={submit}
            childrenButton={<BiSearch fontSize={20} />}
            height={52}
            width={52}
          />
        </Content>
      </Container>
    </Session>
  );
};

export default Search;
