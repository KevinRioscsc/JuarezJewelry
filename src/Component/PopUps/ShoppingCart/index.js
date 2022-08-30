import React from "react";
import {
  Wrapper,
  SideBar,
  ExitOut,
  Description,
  Btn,
  Flex,
  Spacing,
  Total,
  Sub,
  TotalPrice,
} from "./Cart";
import { BiExitFullscreen } from "react-icons/bi";
import { useCart } from "../../../Context/CartProvider";
import CartItems from "../../CartItems";
import data from "../../../Data/caraData.json";

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
          {cartQuantity !== 0 ? (
            <Total>
              <Sub>Your SubTotal: </Sub>
              <TotalPrice>
                {cartItem.reduce((total, itemCart) => {
                  const item = data.find((i) => i.id === itemCart.id);
                  return total + (item?.price || 0) * itemCart.quantity;
                }, 0)}
              </TotalPrice>
            </Total>
          ) : null}
        </Spacing>
        <Flex>
          <Btn disabled={cartQuantity !== 0 ? false : true}>
            View Bag & Check Out
          </Btn>
        </Flex>
      </SideBar>
    </>
  );
};

export default Cart;
