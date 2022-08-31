import React, { useEffect, useState } from "react";

import {
  NavContainer,
  NavMargin,
  Logo,
  Links,
  AccountLinks,
  LinkLi,
  Tag,
  IMG,
  Cart,
  Quantity,
  Dropdown,
  Title,
  Flex,
  Wrapper,
  Arrow,
  Div,
  Wrap,
} from "./NavBar";
import img from "../../../Images/logo Main 2.png";
import img2 from "../../../Images/logoWhite.png";
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShopping } from "react-icons/ai";
import { useCart } from "../../../Context/CartProvider";
import { Link } from "react-router-dom";

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
            <LinkLi>
              <Tag>BEST SELLERS</Tag>
            </LinkLi>
            <LinkLi>
              <Wrapper>
                <Arrow>
                  <Tag>SHOP</Tag>
                  <IoIosArrowDown />
                </Arrow>
                <Dropdown className="drop">
                  <Flex>
                    <Title>Category</Title>
                    <Div>
                      <Wrap>
                        <Link to={`/Categories/Necklaces`}>Necklaces</Link>
                      </Wrap>
                    </Div>
                    <Div>
                      <Wrap>
                        <Link to={`/Categories/Rings`}>Rings</Link>
                      </Wrap>
                    </Div>
                    <Div>
                      <Wrap>
                        <Link to={`/Categories/Bracelets`}>Bracelets</Link>
                      </Wrap>
                    </Div>
                    <Div>
                      <Wrap>
                        <Link to={`/Categories/Charms`}>Charms</Link>
                      </Wrap>
                    </Div>
                    <Div>
                      <Wrap>
                        <Link to={`/Categories/Lifestyle`}>Lifestyle</Link>
                      </Wrap>
                    </Div>
                  </Flex>
                </Dropdown>
              </Wrapper>
            </LinkLi>
            <LinkLi>
              <Tag>SALE</Tag>
            </LinkLi>
            <LinkLi>
              <Tag>CUSTOM</Tag>
            </LinkLi>
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
