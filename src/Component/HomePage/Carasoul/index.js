import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Radio,
  Cards,
  Label,
  Img,
  Title,
  Right,
  Left,
  Prices,
  LabelPrice,
  TitlePrice,
  Price,
  Add,
  PriceContainer,
  ContainEvery,
  Background,
  Background2,
  Start,
  FirstCol,
  Wrapper,
} from "./Cara";
import { useCart } from "../../../Context/CartProvider";
import storeItem from "../../../Data/caraData.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./cara2.css";
import { VscAdd } from "react-icons/vsc";

const Carousel = () => {
  const radioBtn = useRef(0);
  const { increaseCartQuantity } = useCart();
  const [current, setCurrent] = useState(0);

  const nextRight = () => {
    if (current === radioBtn.current.length - 1) {
      radioBtn.current[0].checked = true;
      setCurrent(0);
    } else {
      radioBtn.current[current + 1].checked = true;
      setCurrent((prev) => prev + 1);
    }
  };
  const nextLeft = () => {
    if (current === 0) {
      radioBtn.current[radioBtn.current.length - 1].checked = true;
      setCurrent(radioBtn.current.length - 1);
    } else {
      radioBtn.current[current - 1].checked = true;
      setCurrent((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const radioButtons = document.querySelectorAll('input[name="slider"]');
    radioButtons[0].checked = true;
    radioBtn.current = radioButtons;
  }, []);
  return (
    <>
      <ContainEvery>
        <Start current={current}></Start>
        <Background current={current}></Background>
        <Background2 current={current}></Background2>
        <Title>Explore Our Best Sellers</Title>
        <Container>
          <Left id="left">
            <MdKeyboardArrowLeft size={100} onClick={nextLeft} />
          </Left>
          <Right id="right" onClick={nextRight}>
            <MdKeyboardArrowRight size={100} />
          </Right>

          <Radio type="radio" name="slider" id="item-1" />
          <Radio type="radio" name="slider" id="item-2" />
          <Radio type="radio" name="slider" id="item-3" />

          <Cards className="cards">
            {storeItem.map((item, index) => {
              return (
                <Label for={`item-${index + 1}`} id={`song-${index + 1}`}>
                  <Wrapper img={item.imgUrl}></Wrapper>
                </Label>
              );
            })}
          </Cards>
        </Container>
        <Prices>
          <PriceContainer current={current} id="prices">
            {storeItem.map((item, index) => {
              return (
                <LabelPrice key={item.id}>
                  <FirstCol>
                    <TitlePrice>{item.name}</TitlePrice>
                    <Add onClick={() => increaseCartQuantity(item.id)}>
                      <VscAdd size={30} />
                    </Add>
                  </FirstCol>
                  <Price>{`$${item.price}`}</Price>
                </LabelPrice>
              );
            })}
          </PriceContainer>
        </Prices>
      </ContainEvery>
    </>
  );
};

export default Carousel;
