import React from "react";
import {
  Wrapper,
  SideBar,
  ExitOut,
  Description,
  Btn,
  Flex,
  Spacing,
} from "./Cart";
import { BiExitFullscreen } from "react-icons/bi";
import { useCart } from "../../../Context/CartProvider";
import CartItems from "../../CartItems";

const Cart = ({ toggle, setToggle }) => {
  const { cartItem, cartQuantity } = useCart();
  return (
    <>
      <Wrapper toggle={toggle} onClick={setToggle}></Wrapper>
      <SideBar toggle={toggle}>
        <ExitOut onClick={setToggle}>
          <BiExitFullscreen size={35} />
        </ExitOut>
        <Spacing>
          {cartQuantity !== 0 ? (
            cartItem.map((item) => {
              return <CartItems {...item} />;
            })
          ) : (
            <Description>No Items in Cart</Description>
          )}
        </Spacing>
        <Flex>
          <Btn disabled>View Bag & Check Out</Btn>
        </Flex>
      </SideBar>
    </>
  );
};

export default Cart;
