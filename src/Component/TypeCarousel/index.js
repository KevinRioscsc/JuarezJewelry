import React from "react";
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
import { right } from "./algorithm";

export const Type = ({ types }) => {
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
        <Left onClick={right}>
          <MdKeyboardArrowLeft color="black" size={40} />
        </Left>
        <Right>
          <MdKeyboardArrowRight size={40} />
        </Right>
      </MainWrapper>
    </>
  );
};
