import React from "react";
import {
  HeroContainer,
  HeroMargin,
  LeftSide,
  Title,
  SubTitle,
  Btn,
  RightSide,
  TopRect,
  BottomRect,
  Photo,
  TextWrap,
} from "./Hero.js";
import HeroImg from "../../../Images/Hero.png";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroMargin>
          <LeftSide>
            <TextWrap>
              <Title>New Looks and Beautiful Jewelry</Title>
              <SubTitle>
                Upgrade your look this season with styles so hot, they're
                straight fire.
              </SubTitle>
              <Btn>Shop Now</Btn>
            </TextWrap>
          </LeftSide>
          <RightSide>
            <TopRect></TopRect>
            <BottomRect></BottomRect>
            <Photo img={HeroImg}></Photo>
          </RightSide>
        </HeroMargin>
      </HeroContainer>
    </>
  );
};

export default Hero;
