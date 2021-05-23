import React from "react";

import { ButtonCustom } from "./styles";
import { TypeButton } from "./type";

const Button: React.FC<TypeButton> = ({
  height,
  width,
  padding,
  shadow,
  children,
  onClick,
  ...props
}) => {
  return (
    <ButtonCustom
      height={height}
      width={width}
      padding={padding}
      shadow={shadow}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonCustom>
  );
};

export default Button;
