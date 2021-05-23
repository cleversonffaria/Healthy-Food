import { ReactNode } from "react";
import { TypeButton } from "../button/type";

export type TypeInput = TypeButton & {
  placeholder?: string;
  borderColorInput?: string;
  childrenButton: ReactNode;
  buttonWidth?: number;
  buttonHeight?: number;
  onChange?: (e: any) => any;
};
