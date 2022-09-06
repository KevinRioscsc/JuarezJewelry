import React from "react";
import { Wrapper, Carasoul, Tags, Img, Flex } from "./Type";

export const Type = ({ types }) => {
  return (
    <>
      <Wrapper>
        <Carasoul>
          <Flex>
            {types.map((item, index) => {
              return (
                <Tags className="animate">
                  <Img>{item}</Img>
                </Tags>
              );
            })}
          </Flex>
        </Carasoul>
      </Wrapper>
    </>
  );
};
