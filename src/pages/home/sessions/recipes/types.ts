import { ReactNode } from "react";

interface data {
  image: string;
  title: string;
  button: ReactNode;
}

export type PropsRecipes = {
  data: data[];
};
