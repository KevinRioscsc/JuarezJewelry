import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState([]);

  const cartQuantity = cartItem
    ? cartItem.reduce((quantity, item) => {
        return item.quantity + quantity;
      }, 0)
    : console.log(cartItem);

  console.log(cartItem);

  const getItemQuantity = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currentItem) => {
      if (currentItem.find((itemId) => itemId.id === id) === undefined) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            console.log(item);
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currentItem) => {
      if (currentItem.find((itemId) => itemId.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  };

  const value = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartQuantity,
    cartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
