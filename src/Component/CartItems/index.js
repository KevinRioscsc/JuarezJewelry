import React from "react";
import {
  Wrapper,
  ImageDiv,
  IMG,
  Description,
  Name,
  Quantity,
  Price,
  Trash,
} from "./Items";
import { BsTrash } from "react-icons/bs";
import { useCart } from "../../Context/CartProvider";

import CaraItems from "../../Data/caraData.json";

const CartItems = ({ id, quantity }) => {
  const item = CaraItems.find((item) => item.id === id);
  const { removeFromCart } = useCart();
  return (
    <>
      <Wrapper>
        <ImageDiv>
          <IMG src={item.imgUrl} height={100} />
        </ImageDiv>
        <Description>
          <Name>{item.name}</Name>
          <Quantity>{`Quantity: ${quantity}`}</Quantity>
          <Price>{`Price: ${item.price}`}</Price>
          <Trash onClick={() => removeFromCart(id)}>
            <BsTrash />
          </Trash>
        </Description>
      </Wrapper>
    </>
  );
};

export default CartItems;
