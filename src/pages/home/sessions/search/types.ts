import { Dispatch, ReactNode, SetStateAction } from "react";

interface data {
  image: string;
  title: string;
  button: ReactNode;
}

export type PropsSearch = {
  data: data[];
  filtered: Dispatch<SetStateAction<any>>;
};
