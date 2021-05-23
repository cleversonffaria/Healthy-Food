import React, { useEffect, useState } from "react";

import { ButtonArrows } from "./styles";
import { PropsArrows } from "./types";

import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Colors } from "src/utils";

const Arrows: React.FC<PropsArrows> = ({ divScrollable, data }) => {
  const [displayButton, setDisplayButton] = useState<number>(0);
  const [hiddenButtonLeft, setHiddenButtonLeft] = useState(true);
  const [hiddenButtonRight, setHiddenButtonRight] = useState(false);

  useEffect(() => {
    const widthDiv = document.querySelector("#client")?.clientWidth || 0;
    if (widthDiv < 400 && data.length === 1) {
      setHiddenButtonRight(true);
      setHiddenButtonLeft(true);
    } else if (widthDiv > 400 && data.length < 3) {
      setHiddenButtonRight(true);
      setHiddenButtonLeft(true);
    }
  }, [data.length]);

  const clickRight = () => {
    const scrollLeft = divScrollable.current?.scrollLeft || 0;

    if (displayButton === scrollLeft && !hiddenButtonLeft) {
      setHiddenButtonRight(true);
    } else if (scrollLeft < 300) {
      setHiddenButtonLeft(false);
    }
    divScrollable.current?.scrollBy(300, 0);
    setDisplayButton(scrollLeft);
  };

  const clickLeft = () => {
    const scrollLeft = divScrollable.current?.scrollLeft || 0;
    const widthDiv = divScrollable.current?.clientWidth || 0;

    if (scrollLeft > widthDiv) {
      divScrollable.current?.scrollBy(-300, 0);
      setHiddenButtonRight(false);
      return;
    } else if (scrollLeft < 300) {
      setHiddenButtonLeft(true);
    }
    setHiddenButtonRight(false);
    divScrollable.current?.scrollBy(-300, 0);
  };

  return (
    <>
      {!hiddenButtonLeft && (
        <ButtonArrows onClick={clickLeft} position="left">
          <HiOutlineArrowNarrowLeft color={Colors.green} size={30} />
        </ButtonArrows>
      )}
      {!hiddenButtonRight && (
        <ButtonArrows onClick={clickRight} position="right">
          <HiOutlineArrowNarrowRight color={Colors.green} size={30} />
        </ButtonArrows>
      )}
    </>
  );
};

export default Arrows;
