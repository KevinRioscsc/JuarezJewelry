import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Carasoul,
  Tags,
  Img,
  Flex,
  Left,
  Right,
  MainWrapper,
} from "./Type";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { right, left } from "./algorithm";
import "./index.css";

export const Type = ({ types }) => {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(0);
  const [currTransl, setCurrent] = useState([]);
  const [translationComplete, setTrans] = useState(true);

  const transitionCompleted = () => {
    setTrans(true);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      setAmount(document.getElementsByTagName("img").length);
      let arr = [];
      for (let i = 0; i < amount; i++) {
        arr.push(-200);
        document
          .getElementsByClassName("img")
          [i].addEventListener("transitionend", transitionCompleted, true);
        document
          .getElementsByClassName("img")
          [i].addEventListener(
            "webkitTransitionEnd",
            transitionCompleted,
            true
          );
        document
          .getElementsByClassName("img")
          [i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document
          .getElementsByClassName("img")
          [i].addEventListener("MSTransitionEnd", transitionCompleted, true);
      }
      setCurrent(arr);
      console.log("Dom fully loaded and parsed");
    });
  }, []);
  return (
    <>
      <MainWrapper>
        <Wrapper>
          <Carasoul>
            <Flex>
              {types.map((item, index) => {
                return (
                  <Tags className="animate img">
                    <Img>{item}</Img>
                  </Tags>
                );
              })}
            </Flex>
          </Carasoul>
        </Wrapper>
        <Left
          onClick={() =>
            left(
              translationComplete,
              setTrans,
              index,
              setIndex,
              currTransl,
              setCurrent,
              amount
            )
          }
        >
          <MdKeyboardArrowLeft color="black" size={40} />
        </Left>
        <Right
          onClick={() =>
            right(
              translationComplete,
              setTrans,
              index,
              setIndex,
              currTransl,
              setCurrent,
              amount
            )
          }
        >
          <MdKeyboardArrowRight size={40} />
        </Right>
      </MainWrapper>
    </>
  );
};
