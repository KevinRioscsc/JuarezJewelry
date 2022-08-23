import React from "react";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import {
  Wrapper,
  Container,
  FirstSec,
  Logo,
  Socials,
  Lists,
  Circle,
  SecondSec,
  Title,
  UnderCards,
  CopyRight,
  Links,
  Sec,
} from "./Footer";
import logo from "../../../Images/logoWhite.png";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <FirstSec>
            <Logo src={logo} alt="logo" />
            <Socials>
              <Lists>
                <Circle>
                  <Links>
                    <ImFacebook size={20} />
                  </Links>
                </Circle>
              </Lists>
              <Lists>
                <Circle>
                  <Links
                    href="https://www.instagram.com/juarezjewelry/?hl=en"
                    target={"_blank"}
                  >
                    <ImInstagram size={20} />
                  </Links>
                </Circle>
              </Lists>
              <Lists>
                <Circle>
                  <Links>
                    <FaTiktok size={20} />
                  </Links>
                </Circle>
              </Lists>
            </Socials>
          </FirstSec>
          <SecondSec>
            <Sec>
              <Title>Meet Us</Title>
              <UnderCards>About Us</UnderCards>
              <UnderCards>Find us in stores</UnderCards>
              <UnderCards>Careers</UnderCards>
            </Sec>
            <Sec>
              <Title>Customer Care</Title>
              <UnderCards>Shipping & Returns</UnderCards>
              <UnderCards>FAQ</UnderCards>
            </Sec>
            <Sec>
              <Title>Contact Us</Title>
              <UnderCards>Get Help</UnderCards>
            </Sec>
          </SecondSec>

          <CopyRight>
            <AiOutlineCopyrightCircle />
            Juarez Jewelry, 2022
          </CopyRight>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
