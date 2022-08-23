import React from "react";
import {
  AdWrapper,
  AdRow,
  Column1,
  Photo,
  Column2,
  TextWrap,
  Title,
  SubTitle,
  Btn,
} from "./Ads";

const Ads = ({ imgStart, img1, img2, title, subtitle, btnTitle }) => {
  return (
    <>
      <AdWrapper>
        <AdRow imgStart={imgStart}>
          <Column1>
            <Photo img={img1}></Photo>
            <Photo img={img2}></Photo>
          </Column1>
          <Column2>
            <TextWrap>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              <Btn>{btnTitle}</Btn>
            </TextWrap>
          </Column2>
        </AdRow>
      </AdWrapper>
    </>
  );
};

export default Ads;
