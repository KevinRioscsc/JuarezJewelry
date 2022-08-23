import React from "react";
import { box } from "./data";
import { Container, Title, ContainMargin, Boxes, Box, Btn } from "./Top";

const Top = () => {
  return (
    <>
      <Container>
        <Title>Our Top Picks</Title>
        <ContainMargin>
          <Boxes>
            {box.map((item) => {
              return (
                <Box className="box" image={item.photo}>
                  <Btn>{item.btnTitle}</Btn>
                </Box>
              );
            })}
          </Boxes>
        </ContainMargin>
      </Container>
    </>
  );
};

export default Top;
