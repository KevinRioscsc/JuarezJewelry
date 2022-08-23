import React, { useEffect, useState } from "react";

import {
  NavContainer,
  NavMargin,
  Logo,
  Links,
  AccountLinks,
  Link,
  Tag,
  IMG,
  Cart,
  Quantity,
} from "./NavBar";
import img from "../../../Images/logo Main 2.png";
import img2 from "../../../Images/logoWhite.png";
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShopping } from "react-icons/ai";
import { useCart } from "../../../Context/CartProvider";

const NavBar = ({ pressBtn }) => {
  const [wePassed, setPassed] = useState(false);
  const { cartQuantity } = useCart();

  const navScroll = (e) => {
    window.scrollY >= 100 ? setPassed(true) : setPassed(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", navScroll);
  }, []);
  return (
    <>
      <NavContainer passed={wePassed}>
        <NavMargin>
          <Logo>
            <IMG src={wePassed ? img2 : img} alt="" height={45} />
          </Logo>
          <Links>
            <Link>
              <Tag>Best Sellers</Tag>
              <IoIosArrowDown />
            </Link>
            <Link>
              <Tag>Jewelry</Tag>
              <IoIosArrowDown />
            </Link>
            <Link>
              <Tag>Sale</Tag>
              <IoIosArrowDown />
            </Link>
            <Link>
              <Tag>Custom</Tag>
              <IoIosArrowDown />
            </Link>
          </Links>
          <AccountLinks>
            <VscAccount size={30} />
            <Cart>
              <AiOutlineShopping size={35} onClick={pressBtn} />
              {cartQuantity === 0 ? null : <Quantity>{cartQuantity}</Quantity>}
            </Cart>
          </AccountLinks>
        </NavMargin>
      </NavContainer>
    </>
  );
};

export default NavBar;
