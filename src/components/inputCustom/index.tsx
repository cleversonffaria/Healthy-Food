import React from "react";

import { Container, Input } from "./styles";

import { Button } from "src/components";
import { TypeInput } from "./type";

const InputSearch: React.FC<TypeInput> = ({
  placeholder,
  childrenButton,
  borderColorInput,
  onChange,
  ...props
}) => {
  return (
    <Container>
      <Input
        placeholder={placeholder}
        borderColorInput={borderColorInput}
        onChange={onChange}
      />
      <Button {...props}>{childrenButton}</Button>
    </Container>
  );
};

export default InputSearch;
